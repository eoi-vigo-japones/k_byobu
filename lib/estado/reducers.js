const Peticiones = require("./peticiones.js");


module.exports = {



  "peticiones": (estado = Peticiones.inicial(), accion) => {

    switch(accion.type){

      case "PETICION_NUEVA":
        return Peticiones.nuevaPeticion(estado, accion.peticion);
      case "PETICION_ACTUALIZAR":
        return Peticiones.updatePeticion(estado, accion.peticion)
  
    }

    return estado;
  }


}
