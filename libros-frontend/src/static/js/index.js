const lista = document.getElementById("book-list");

fetch("http://localhost:3002/libros").then((res) => {
  res.json().then((libros) => {
    libros.forEach((libro) => {
      const li = document.createElement("li");
      const titulo = document.createElement("a");
      const autor = document.createElement("a");
      const middle = document.createElement("span");
      middle.textContent = " - ";
      autor.textContent = libro.autor.nombre;
      autor.href = `/autores/${libro.autor.id}`;
      titulo.textContent = libro.titulo;
      titulo.href = `/libros/${libro.id}`;
      li.appendChild(titulo);
      li.appendChild(middle);
      li.appendChild(autor);
      lista?.appendChild(li);
    });
  });
});
