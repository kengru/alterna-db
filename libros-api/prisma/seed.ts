import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const librosData: Prisma.LibroCreateInput[] = [
  {
    titulo: "1984",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1949, 5, 8),
    autor: {
      connectOrCreate: {
        create: { nombre: "George Orwell" },
        where: { id: 1, nombre: "George Orwell" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Dystopia" },
        where: { id: 1, nombre: "Dystopia" },
      },
    },
  },
  {
    titulo: "Animal Farm",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1945, 7, 17),
    autor: {
      connectOrCreate: {
        create: { nombre: "George Orwell" },
        where: { id: 1, nombre: "George Orwell" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Dystopia" },
        where: { id: 1, nombre: "Dystopia" },
      },
    },
  },
  {
    titulo: "Harry Potter and the Sorcerer's Stone",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1997, 5, 26),
    autor: {
      connectOrCreate: {
        create: { nombre: "J.K. Rowling" },
        where: { id: 2, nombre: "J.K. Rowling" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Fantasy" },
        where: { id: 2, nombre: "Fantasy" },
      },
    },
  },
  {
    titulo: "Harry Potter and the Prisoner of Azkaban",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(2007, 6, 21),
    autor: {
      connectOrCreate: {
        create: { nombre: "J.K. Rowling" },
        where: { id: 2, nombre: "J.K. Rowling" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Fantasy" },
        where: { id: 2, nombre: "Fantasy" },
      },
    },
  },
  {
    titulo: "The Hobbit",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1967, 8, 21),
    autor: {
      connectOrCreate: {
        create: { nombre: "J.R.R. Tolkien" },
        where: { id: 3, nombre: "J.R.R. Tolkien" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Fantasy" },
        where: { id: 2, nombre: "Fantasy" },
      },
    },
  },
  {
    titulo: "The Lord of the Rings",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1954, 0, 1),
    autor: {
      connectOrCreate: {
        create: { nombre: "J.R.R. Tolkien" },
        where: { id: 3, nombre: "J.R.R. Tolkien" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Fantasy" },
        where: { id: 2, nombre: "Fantasy" },
      },
    },
  },
  {
    titulo: "Jane Eyre",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1847, 9, 16),
    autor: {
      connectOrCreate: {
        create: { nombre: "Charlotte Bronte" },
        where: { id: 4, nombre: "Charlotte Bronte" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Classics" },
        where: { id: 3, nombre: "Classics" },
      },
    },
  },
  {
    titulo: "Pride and Prejudice",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1813, 1, 28),
    autor: {
      connectOrCreate: {
        create: { nombre: "Jane Austen" },
        where: { id: 5, nombre: "Jane Austen" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Classics" },
        where: { id: 3, nombre: "Classics" },
      },
    },
  },
  {
    titulo: "Lord of the Flies",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1954, 8, 17),
    autor: {
      connectOrCreate: {
        create: { nombre: "William Golding" },
        where: { id: 6, nombre: "William Golding" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Classics" },
        where: { id: 3, nombre: "Classics" },
      },
    },
  },
  {
    titulo: "Fahrenheit 451",
    descripcion: "Un libro acerca de algo.",
    publicacion: new Date(1953, 9, 19),
    autor: {
      connectOrCreate: {
        create: { nombre: "Ray Bradbury" },
        where: { id: 7, nombre: "Ray Bradbury" },
      },
    },
    categoria: {
      connectOrCreate: {
        create: { nombre: "Dystopia" },
        where: { id: 1, nombre: "Dystopia" },
      },
    },
  },
];

async function main() {
  console.log("Starting seeding...");
  for (const l of librosData) {
    console.log(l);
    await prisma.libro.create({
      data: l,
    });
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
