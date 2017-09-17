const Peticiones = require("./peticiones.js");

const Cerebro = require("./cerebro.js");

module.exports = {

  "cerebro": (estado = Cerebro.iniciar(), accion) => {

    switch(accion.type){

      //estados de la aplicación
      case "CEREBRO_BOOTSTRAP":
        return estado.setEstado(estado, "BOOTSTRAP");
      case "CEREBRO_LISTO":
        return estado.setEstado(estado, "READY");
      case "CEREBRO_PANIC":
        return estado.setEstado(estado, "PANIC");

      //estados de usuario
      case "CEREBRO_LOGUEADO":
        return estado.setAcreditado(estado, accion.user)

    }

  },

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
