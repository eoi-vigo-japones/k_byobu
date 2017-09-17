const PeticionTest = require("../fixtures/peticion_test");

const InitEstado = require("../../lib/estado/init.js");

const {expect} = require("chai");

describe("Estado - Peticion", function(){

  let Estado;

  before(function(){

    Estado = InitEstado({
      loguear: {
        secciones: ["peticiones"]
      }
    });

  })

  it("Deberia permitir controlar el flujo de una peticion", 

    function(hecho){

      new PeticionTest({

        args: {

          resultados: {a: 1}

        }

      }).tramitar(function(p){

          let r = Estado.getState()["peticiones"].get(p.id).toJS()

          expect(r.id).to.equal(p.id);

          expect(r.estado).to.equal("OK") 

          expect(r.resultados.a).to.equal(1);

          hecho();
      })

    }

  )

  it("Deberia controlar el error en una peticion", function(hecho){

    new PeticionTest({

      args: {
      
        fallo: "NO_ENCONTRADA"
      
      }

    }).tramitar(function(p){

        let r = Estado.getState()["peticiones"].get(p.id).toJS()

        expect(r).to.be.an("object");

        expect(r.estado).to.equal("KO");

        expect(r.resultados.error).to.equal("NO_ENCONTRADA");

        hecho();

    })


  })


})
