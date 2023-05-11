//lista de contactos js
let contactos = [
{
nombre: "Juan Sebastian",
apellido: "Sepulveda Ramirez",
telefono: "3213456789", 
ciudad : "bogota",
direccion : "carrera 1",
},
{
nombre: "Sandra Patricia",
apellido: "Ramirez Cruz",
telefono: "3213688558",
ciudad : "cali",
direccion : "carrera 2",

}
]
function agregarContacto(nombre, apellido, telefono, ciudad, direccion) {
  contactos.push({nombre, apellido, telefono, ciudad, direccion});
  console.log("Contacto agregado:",nombre, apellido, telefono, ciudad, direccion);
}
function eliminarContacto(nombre) {
  const indice = contactos.findIndex(contacto => contacto.nombre === nombre);
    if (indice !== -1) {
    const contactoEliminado = contactos.splice(indice, 1);
    console.log("Contacto eliminado:", contactoEliminado[0].nombre, contactoEliminado[0].telefono);
  } else {
    console.log("Contacto no encontrado:", nombre);
  }
}
function actualizarContacto(nombre, nuevoTelefono) {
  const indice = contactos.findIndex(contacto => contacto.nombre === nombre);
  if (indice !== -1) {
    contactos[indice].telefono = nuevoTelefono;
    console.log("Contacto actualizado:", nombre, nuevoTelefono);
  } else {
    console.log("Contacto no encontrado:", nombre);
  }
}

agregarContacto("Esteban","Godoy Sanchez","321343456", "bogota","carrera 78");
agregarContacto("Pedro","Gaviria","1234567890","Santa Marta","carrera 25");
agregarContacto("Thomas","Mendez Cruz","13456734","Cartagena","carrera 18");
agregarContacto("Pepito","Romero","146890573","Leticia","carrera 32");

actualizarContacto("Esteban", "34657564765245");
actualizarContacto("Sandra Patricia", "6565656565656565");

eliminarContacto("Pepito");
eliminarContacto("Carlos");

console.log("Lista de contactos:", contactos);