const {Map, List, fromJS} = require("immutable");

module.exports = {

  inicial(){

    return fromJS({

    })

  },

  nuevaPeticion(estado, peticion){

    return estado.set(peticion.id, fromJS(peticion))

  },

  updatePeticion(estado, peticion){

    return estado.set(peticion.id, fromJS(peticion))

  },
}
