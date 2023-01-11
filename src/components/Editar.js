import React from "react";

export const Editar = ({
  peli,
  conseguirPeliculas,
  setEditar,
  setListadoState,
}) => {
  const tituloComponente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    //Conseguir el target del evento
    let target = e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const peliculasAlmacenadas = conseguirPeliculas();
    const indice = peliculasAlmacenadas.findIndex((peli) => peli.id === id);

    //Crear objeto con ese indice
    let peliActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    //Actualizar el elemento con ese indice
    peliculasAlmacenadas[indice] = peliActualizada;

    //Guardar nuevo array en localStorage
    localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas));

    //Actualizar estados
    setListadoState(peliculasAlmacenadas);
    setEditar(0);
  };

  return (
    <div className="editForm">
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_Editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="description_Editada"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
