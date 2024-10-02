import express from "express";
import path from "path";

const app = express();
const PORT = 3001;

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/libros/:id", (_, res) => {
  res.sendFile(path.join(__dirname, "views", "libro.html"));
});

app.get("/autores/:id", (_, res) => {
  res.sendFile(path.join(__dirname, "views", "autor.html"));
});

app.use(express.static(path.join(__dirname, "static")));

app.listen(PORT, () => {
  console.log(`webpage working at localhost:${PORT}`);
});
