const {createStore, combineReducers, applyMiddleware} = require("redux");

const thunkMiddleware = require("redux-thunk").default;

const {

  peticiones

} = require("./reducers.js");

const Peticion = require("../peticiones/peticion.js");

let LOGUEAR = {

  activo: false,

};

module.exports = function(opciones = {}){

  //seteo de logueos
  if(opciones.loguear){

    LOGUEAR.activo = true;

    if(opciones.loguear.secciones){
      LOGUEAR.secciones = opciones.loguear.secciones;
    }
    else{
      LOGUEAR.secciones = "*";
    }
    
  }

  const reducers = combineReducers({peticiones});

  let store = createStore(

    reducers, 

    applyMiddleware(
    
      thunkMiddleware,
      logger,
      crashReporter

    )

  );

  //aplicamos la store
  Peticion.setStore(store);

  return store;

}


const logger = store => next => action => {

  let result = next(action)

  if(!LOGUEAR.activo){
     return result;
  }
  else{

    console.log('Enviando', action)

    if(LOGUEAR.secciones === "*"){
      console.log('siguiente estado', store.getState())
    }
    else{

      console.log(

        "Siguiente estado",

        Object.keys(store.getState())

        .filter(function(seccion){

          return LOGUEAR.secciones.indexOf(seccion) != -1

        }).map((seccion) =>{
  
          return store.getState()[seccion]
    
        })
      )
    }
  
    return result
  }
}

const crashReporter = store => next => action => {

  try {

    return next(action)

  } catch (err) {

    console.error('Excepcion!', err)

    throw err
  }
}
