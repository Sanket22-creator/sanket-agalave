const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 5500);
const distDir = path.join(__dirname, "dist");
const workerUrl = "https://sanket-portfolio-bot.sanketagalave23.workers.dev";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
};

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/chat") {
    try {
      let body = "";
      for await (const chunk of req) {
        body += chunk;
      }

      const response = await fetch(workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const responseBody = await response.text();

      if (response.status === 429 || response.status >= 500) {
        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        });
        res.end(JSON.stringify({
          reply: "Sanket's AI assistant is temporarily busy or its AI quota is updating. Please try again shortly.",
        }));
        return;
      }

      res.writeHead(response.status, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      });
      res.end(responseBody);
    } catch (error) {
      res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ reply: "Network error. Please try again in a moment." }));
    }
    return;
  }

  const requestPath = req.url === "/" ? "/index.html" : req.url.split("?")[0];
  let filePath = path.join(distDir, decodeURIComponent(requestPath));

  if (!filePath.startsWith(distDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, "index.html");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local portfolio preview: http://127.0.0.1:${port}`);
});
