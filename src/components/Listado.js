import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelisAlmacenadas = conseguirPeliculas();
    //Filtrar peliculas para eliminar del array el target
    let nuevoListadoPelis = pelisAlmacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    //Actualizar estado del listado
    setListadoState(nuevoListadoPelis);

    //Actualizar datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevoListadoPelis));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button
                className="delete"
                onClick={() => {
                  borrarPeli(peli.id);
                }}
              >
                Borrar
              </button>

              {/*Aparece formulario de editar*/}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
