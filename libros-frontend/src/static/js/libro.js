const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const descripcion = document.getElementById("descripcion");
const fecha = document.getElementById("fecha");
const sp = window.location.pathname.split("/");
const id = sp[sp.length - 1];

fetch(`http://localhost:3002/libros/${id}`).then((res) => {
  res.json().then((libro) => {
    if (titulo) {
      titulo.textContent = libro.titulo;
    }
    if (autor) {
      const autorLink = document.createElement("a");
      autorLink.textContent = libro.autor.nombre;
      autorLink.href = `/autores/${libro.autor.id}`;
      autor.appendChild(autorLink);
    }
    if (descripcion) {
      descripcion.textContent = libro.descripcion;
    }
    if (fecha) {
      const f = new Date(libro.publicacion);
      fecha.textContent = f.toLocaleDateString("es-DO");
    }
  });
});
