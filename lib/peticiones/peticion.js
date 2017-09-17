const UUID = require("uuid/v4");

const Acciones = require("../estado/acciones.js");

function generarIdPeticion(){
  return UUID()
}

class Peticion{

  static setStore(store){
    this.STORE = store;
  }
  
  static getStore(){
    return this.STORE;
  }

  constructor({id, args}){

    this.id = id || generarIdPeticion();
    this.args = args || {};
    this.estado = "-";
    this.resultados = {};
  }

  raw(){
    return {
      id: this.id,    
      args: this.args,
      estado: this.estado,  
      resultados: this.resultados
    }
  }

  tramitar(hecho = function(){}){

    Peticion.getStore()

      .dispatch((dispatch) => {

        dispatch(Acciones.PETICION_NUEVA(

          this.raw()

        ))

        this.__tramitar()

          .then((resultados) => {

            this.resultados = resultados;
            this.estado = "OK";

            dispatch(Acciones.PETICION_ACTUALIZAR(

              this.raw()

            ))

            hecho(this.raw());            

          })

          .catch((err) => {

            this.estado = "KO";
            this.resultados = {error: err};

            dispatch(Acciones.PETICION_ACTUALIZAR(

              this.raw()

            ))

            hecho(this.raw());

          })

      })

  }

  __tramitar(){

    throw "Peticion::__tramitar: ¡¡ABSTRACTO!!"

  }

}

module.exports = Peticion;
