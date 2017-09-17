const {Map, List, fromJS} = require("immutable");

let MAX_HISTORICO = 50;

module.exports = {

  SET_MAX_HISTORICO(n){
    MAX_HISTORICO = n;
  },

  iniciar(){

    return fromJS({

      panelActivo: "INICIO",

      paneles: {
        "INICIO": crearPanel({
          nombre: "INICIO", base: "INICIAL", alijo: {}
        })
      },

      historico: []

    })
  },

  setPanelActivo(estado, nombre){

    guardaExistePanel(estado, nombre);

    return estado.updateIn(

      ["historico"],

      (h) => {
        
        h = h.push(estado.get("panelActivo"))

        if(h.size >= MAX_HISTORICO){
          h = h.shift();
        }

        return h;
      }
      
    ).set("panelActivo", nombre)

  },

  agregarPanel(estado, nombre, base, alijo = {}){

    return estado.setIn(
  
      ["paneles", nombre],

      crearPanel({nombre, base, alijo})
    )

  }
  
}


/*Helpers*/

function guardaExistePanel(estado, nombre, en){

  if(!estado.getIn(["paneles", nombre]))
    throw new Error(`paneles ${en} : PANEL NO EXISTE ${nombre}`);

}

function crearPanel({nombre, base, alijo}){

  return fromJS({
 
    nombre,

    base,

    alijo

  })
}
