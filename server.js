const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MIME = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon' };
const DEMOS_DIR = path.join(__dirname, 'demos');

// List available demos by reading the demos/ folder
function getDemos() {
  try {
    return fs.readdirSync(DEMOS_DIR)
      .filter(f => f.endsWith('.js'))
      .map(f => {
        const slug = f.replace('.js', '');
        // Quick-read businessName from the config file
        try {
          const content = fs.readFileSync(path.join(DEMOS_DIR, f), 'utf8');
          const nameMatch = content.match(/businessName:\s*["'](.+?)["']/);
          const taglineMatch = content.match(/tagline:\s*["'](.+?)["']/);
          const accentMatch = content.match(/accent:\s*["'](.+?)["']/);
          return {
            slug,
            name: nameMatch ? nameMatch[1] : slug,
            tagline: taglineMatch ? taglineMatch[1] : '',
            accent: accentMatch ? accentMatch[1] : '#38bdf8'
          };
        } catch(e) { return { slug, name: slug, tagline: '', accent: '#38bdf8' }; }
      });
  } catch(e) { return []; }
}

// Generate the landing page HTML
function landingPage() {
  const demos = getDemos();
  const cards = demos.map(d => `
      <a href="/demo/${d.slug}/" class="block bg-[#111c32] border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 hover:border-[${d.accent}] hover:shadow-lg hover:shadow-[${d.accent}20] transition-all duration-300 group">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold" style="background:${d.accent}20;color:${d.accent}">${d.name.charAt(0)}</div>
          <div>
            <h2 class="text-white font-semibold text-lg group-hover:text-[${d.accent}] transition-colors">${d.name}</h2>
            <p class="text-[#8892a4] text-sm">${d.tagline}</p>
          </div>
        </div>
        <div class="flex gap-2 mt-4">
          <span class="text-xs px-3 py-1 rounded-full bg-[#182540] text-[#8892a4]">Web</span>
          <span class="text-xs px-3 py-1 rounded-full bg-[#182540] text-[#8892a4]">Admin</span>
        </div>
      </a>`).join('\n');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demos – Template Handyman</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
  <style>body { font-family: 'DM Sans', sans-serif; }</style>
</head>
<body class="bg-[#0b1222] min-h-screen">
  <div class="max-w-3xl mx-auto px-6 py-16">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-white mb-2">Demos Disponibles</h1>
      <p class="text-[#8892a4]">Seleccioná un negocio para ver su web de muestra</p>
    </div>
    <div class="grid gap-4">
      ${cards}
    </div>
    <p class="text-center text-[#8892a4] text-sm mt-12">Para agregar un demo nuevo, creá un archivo <code class="bg-[#182540] px-2 py-0.5 rounded text-[#38bdf8]">.js</code> en la carpeta <code class="bg-[#182540] px-2 py-0.5 rounded text-[#38bdf8]">demos/</code></p>
  </div>
</body>
</html>`;
}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Landing page: list all demos
  if (pathname === '/' || pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(landingPage());
  }

  // Demo routes: /demo/{slug}/ or /demo/{slug}/anything
  const demoMatch = pathname.match(/^\/demo\/([a-z0-9-]+)(\/.*)?$/);
  if (demoMatch) {
    const slug = demoMatch[1];
    let subPath = demoMatch[2] || '/';

    // Check demo config exists
    const configPath = path.join(DEMOS_DIR, slug + '.js');
    if (!fs.existsSync(configPath)) {
      res.writeHead(404);
      return res.end('Demo not found: ' + slug);
    }

    // Redirect /demo/slug to /demo/slug/
    if (!demoMatch[2]) {
      res.writeHead(301, { 'Location': `/demo/${slug}/` });
      return res.end();
    }

    // Serve the demo's config.js
    if (subPath === '/config.js') {
      const data = fs.readFileSync(configPath);
      res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
      return res.end(data);
    }

    // Serve index.html or admin.html (or other static files)
    if (subPath === '/') subPath = '/index.html';
    const ext = path.extname(subPath);
    const filePath = path.join(__dirname, subPath);

    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
      res.end(data);
    });
    return;
  }

  // API: list demos as JSON
  if (pathname === '/api/demos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(getDemos()));
  }

  // Static files fallback (CSS, fonts, images, etc.)
  const ext = path.extname(pathname);
  const filePath = path.join(__dirname, pathname);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });

}).listen(PORT, () => console.log(`Server running on port ${PORT}\nOpen http://localhost:${PORT}`));
