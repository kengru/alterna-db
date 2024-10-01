import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get("/libros", async (req, res) => {
  const libros = await prisma.libro.findMany();
  res.json(libros);
});

app.get("/libros/:id", async (req, res) => {
  const id = req.params.id;

  const libro = await prisma.libro.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      autor: true,
    },
  });
  res.json(libro);
});

app.get("/autores", async (req, res) => {
  const autor = await prisma.autor.findMany();
  res.json(autor);
});

app.get("/autores/libros/:id", async (req, res) => {
  const { id }: { id?: string } = req.params;

  const libros = await prisma.libro.findMany({
    where: {
      autorId: Number(id),
    },
  });
  res.json(libros);
});

app.get("/categorias", async (req, res) => {
  const categoria = await prisma.categoria.findMany();
  res.json(categoria);
});

app.get("/categorias/libros/:id", async (req, res) => {
  const { id }: { id?: string } = req.params;

  const libros = await prisma.libro.findMany({
    where: {
      categoriaId: Number(id),
    },
  });
  res.json(libros);
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});
