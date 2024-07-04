var formulario = document.querySelector(".formulario") //se corrige el selector de clase

formulario.onsubmit = function(e) {
// se da estructura al cidigo
// Se añaden putos y comas faltantes en el codigo
  e.preventDefault(); //Se corrige de prevent a preventDefault
  // Obtener los elementos del formulario
  var n = formulario.elements["name"];
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];
  
   // Obtener los valores de los elementos
  var nombre = n.value;
  var edad = e.value;
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);
  // Validar el nombre y la edad
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

// Función para agregar un invitado a la lista
//Se refactoriza la función agregar invitado
function agregarInvitado(nombre, edad, nacionalidad) {
  var nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  };
  nacionalidad = nacionalidades[nacionalidad];

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}