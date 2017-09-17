module.exports = {

  //acciones simples
  PETICION_NUEVA(peticion){

    return {
      type: "PETICION_NUEVA",
      peticion: peticion
    }    

  },

  PETICION_ACTUALIZAR(peticion){

    return {
      type: "PETICION_ACTUALIZAR",
      peticion: peticion
    } 
  }


}
