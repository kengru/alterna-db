const nombre = document.getElementById("nombre");
const lista2 = document.getElementById("book-list");
const split = window.location.pathname.split("/");
const autorId = split[split.length - 1];

fetch(`http://localhost:3002/autores/${autorId}`).then((res) => {
  res.json().then((autor) => {
    if (nombre) {
      nombre.textContent = autor.nombre;
    }
    autor.libros.forEach((libro) => {
      const li = document.createElement("li");
      const titulo = document.createElement("a");
      titulo.textContent = libro.titulo;
      titulo.href = `/libros/${libro.id}`;
      li.appendChild(titulo);
      lista2?.appendChild(li);
    });
  });
});
