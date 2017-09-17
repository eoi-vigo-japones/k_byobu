const {Map, List, fromJS} = require("immutable");

module.exports = {

  iniciar(){

    return fromJS({

      estado: "INICIAL",

      acreditado: false,

      usuario: "ANONIMO"


    })

  },

  setEstado(estado, nuevoEstado){

    return estado.set("estado", nuevoEstado)

  },

  setAcreditado(estado, usuario){

    return estado

            .set("acreditado", true)
      
            .set("usuario", usuario)

  }

}
