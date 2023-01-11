export const GuardarEnStorage = (key, item) => {
  //Conseguir los elementos que ya tenemos en el localStorage
  let elementos = JSON.parse(localStorage.getItem(key));
  //Comprobar si es un array
  if (Array.isArray(elementos)) {
    //Añadir dentro del array un elemento nuevo
    elementos.push(item);
  } else {
    //Crear array con la nueva peli
    elementos = [item];
  }

  //Guardar en el localStorage
  localStorage.setItem(key, JSON.stringify(elementos));

  //Devolver objeto guardado
  return item;
};
