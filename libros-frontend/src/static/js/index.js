const lista = document.getElementById("book-list");

fetch("http://localhost:3002/libros").then((res) => {
  res.json().then((libros) => {
    libros.forEach((libro) => {
      const li = document.createElement("li");
      const titulo = document.createElement("a");
      const autor = document.createElement("span");
      titulo.textContent = libro.titulo;
      titulo.href = `/libros/${libro.id}`;
      li.appendChild(titulo);
      lista?.appendChild(li);
    });
  });
});
