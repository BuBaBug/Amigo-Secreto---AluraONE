// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos un array para guardar todos los amigos ingresados por el usuario.
let amigosSecretos = [];

function agregarTextos(elemento, texto) {
  let textoGenerico = document.createElement(elemento);
  textoGenerico.textContent = texto;

  //utilizamos el dom para mostrar los amigos que se van agregando.
  let parrafo = document.getElementById("listaAmigos");
  parrafo.appendChild(textoGenerico);
}

function agregarAmigo() {
  //Creamos una variable que me permita obtener el registro del usuario, y luego ese registro ingresarlo al array.
  let registro = document.getElementById("amigo");
  //luego cree una variable para validar la entrada y poder restringir espacios en blanco.
  let nombre = registro.value.trim();

  if (nombre === "") {
    //Condicionamos la entrada del usuario para evitar ingresos no deseados.
    alert("Por favor, inserte un nombre.");
  } else {
    //Luego ingresamos la entrada del usuario al array.
    amigosSecretos.push(registro.value);

    // Limpia el input después de agregar el nombre al array
    registro.value = "";

    //Luego llamamos la función para poder mostrar las entradas del usuario.
    agregarTextos("p", nombre);
  }
}

function amigoSecretoAleatorio() {
  //Creamos una función para poder obtener una entrada aleatoria.
  let amigos = Math.floor(Math.random() * amigosSecretos.length);

  //Verificamos que el array tenga entradas.
  if (amigosSecretos.length === 0) {
    alert("No hay amigos para el sorteo.");
  } else {
    //Llamamos al array y ejecutamos la entrada aleatoria.
    return amigosSecretos[amigos];
  }
}

function sortearAmigo() {
  //Guardamos el valor aleatorio dentro de una variable.
  let amigo = amigoSecretoAleatorio();

  //Y por ultimo ocupamos el DOM para mostrar el resultado del valor aleatorio.
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = amigo;
}
