import express from "express";
import path from "node:path";

const app = express();
const port = Number(process.env.PORT) || 3000;
const publicDir = path.resolve(process.cwd(), "public");

app.use(express.static(publicDir));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    app: "fuse-bead-pattern-studio",
  });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Fuse bead pattern studio running at http://localhost:${port}`);
});
