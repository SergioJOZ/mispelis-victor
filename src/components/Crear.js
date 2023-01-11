import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const titulo = "Añadir pelicula";
  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de pelicula a guardar

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //Guardar estado
    setPeliState(peli);

    //Actualizar estado del listado
    setListadoState((elementos) => {
      if (Array.isArray(elementos)) return [...elementos, peli];
      else return [peli];
    });

    //Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>

      <strong>
        {peliState.titulo &&
          peliState.descripcion &&
          `Has creado la pelicula: ${peliState.titulo}`}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />

        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripcion"
        ></textarea>

        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
