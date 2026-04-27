/* ===== Kit Viewer · loads KIT.md or README.md, renders with marked, applies rainbow ===== */

(function () {
  const $body = document.getElementById('kit-body');
  const $meta = document.getElementById('kit-meta');
  if (!$body) return;

  // Detect which file to load:
  // - kits/index.html (overview)         → ./README.md
  // - kits/{slug}/index.html (per-kit)   → ./KIT.md
  const isOverview = document.documentElement.dataset.kit === 'overview';
  const sourceFile = isOverview ? './README.md' : './KIT.md';

  function parseFrontmatter(text) {
    const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) return { meta: {}, body: text };
    const meta = {};
    m[1].split('\n').forEach((line) => {
      const idx = line.indexOf(':');
      if (idx > 0) {
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        if (key) meta[key] = val;
      }
    });
    return { meta, body: m[2] };
  }

  fetch(sourceFile, { cache: 'no-store' })
    .then((r) => {
      if (!r.ok) throw new Error('Failed to load ' + sourceFile);
      return r.text();
    })
    .then((text) => {
      const { meta, body } = parseFrontmatter(text);

      // Set page title
      const titleSource = meta.name || (isOverview ? 'Climax Forest Kits' : 'Kit');
      document.title = titleSource + ' — Climax Forest';

      // Set meta strip (kit slug · version · status)
      if ($meta) {
        const parts = [];
        if (meta.kit) parts.push(meta.kit);
        if (meta.version) parts.push('v' + meta.version);
        if (meta.status) parts.push(meta.status);
        $meta.textContent = parts.join(' · ');
      }

      // Render markdown
      if (typeof marked === 'undefined') {
        $body.innerHTML = '<p>Markdown renderer failed to load. <a href="' + sourceFile + '">View source</a>.</p>';
        return;
      }
      marked.setOptions({ gfm: true, breaks: false });
      $body.innerHTML = marked.parse(body);

      // Apply rainbow class to the first blockquote (the Mood / summary line)
      const firstBq = $body.querySelector('blockquote');
      if (firstBq) firstBq.classList.add('rainbow-summary');

      // Open external links in new tab
      $body.querySelectorAll('a[href^="http"]').forEach((a) => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      });
    })
    .catch((err) => {
      $body.innerHTML =
        '<p style="color:var(--fg-mute)">Could not load <code>' +
        sourceFile +
        '</code>. ' +
        '<a href="' +
        sourceFile +
        '">View source</a>.</p>' +
        '<pre style="font-size:0.75rem;color:var(--fg-mute);margin-top:1rem">' +
        (err && err.message ? err.message : '') +
        '</pre>';
    });
})();
