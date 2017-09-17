const Peticion = require("../../lib/peticiones/peticion.js");

module.exports = class extends Peticion{

  __tramitar(){

    return (async () => {

      let t = await(setTimeout(() =>{}), this.args.dormir || 1000)

      if(this.args.fallo){
        throw this.args.fallo;
      }
      else{
        return this.args.resultados;
      }

    })();

  }


}
