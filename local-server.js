const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3000);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Cache-Control': 'no-store', ...headers });
  res.end(body);
}

function safeFilePath(urlPath) {
  const decoded = decodeURIComponent(urlPath === '/' ? '/index.html' : urlPath);

  // Never serve dotfiles (including .env, .gitignore, and .git contents).
  // These files are configuration/source-control metadata, not public assets.
  const pathSegments = decoded.split(/[\\/]+/).filter(Boolean);
  if (pathSegments.some(segment => segment.startsWith('.'))) return null;

  const absolute = path.resolve(ROOT, `.${decoded}`);
  if (absolute !== ROOT && !absolute.startsWith(`${ROOT}${path.sep}`)) return null;
  return absolute;
}

function serveStatic(req, res) {
  const filePath = safeFilePath(new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname);
  if (!filePath) return send(res, 403, 'Forbidden');

  fs.stat(filePath, (statErr, stat) => {
    if (statErr || !stat.isFile()) return send(res, 404, 'Not found');
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (requestUrl.pathname.startsWith('/api/')) {
      return send(res, 404, JSON.stringify({ message: 'No backend email API is used. This portfolio sends through EmailJS.' }), {
        'Content-Type': 'application/json; charset=utf-8',
      });
    }

    if (req.method === 'GET' || req.method === 'HEAD') {
      if (req.method === 'HEAD') {
        const filePath = safeFilePath(requestUrl.pathname);
        if (!filePath) return send(res, 403, 'Forbidden');
        return fs.stat(filePath, (err, stat) => {
          if (err || !stat.isFile()) return send(res, 404, 'Not found');
          const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': type });
          res.end();
        });
      }
      return serveStatic(req, res);
    }

    return send(res, 405, 'Method not allowed');
  } catch (error) {
    console.error('Local server error:', error);
    return send(res, 500, 'Internal server error');
  }
});

server.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
  console.log('Contact email: EmailJS client-side integration');
});
