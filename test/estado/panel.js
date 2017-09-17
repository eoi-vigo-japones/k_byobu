const PanelEstado = require("../../lib/estado/panel.js");

const {expect} = require("chai");


describe("Estado - Panel", function(){

  it("Debería permitir controlar paneles", function(){

    let e = PanelEstado.iniciar();
    
    e = PanelEstado.agregarPanel(e, "P1", "KV");

    expect(e.getIn(["paneles", "P1", "base"])).to.equal("KV");

    e = PanelEstado.agregarPanel(e, "P2", "KK");

    expect(e.getIn(["paneles", "P1", "base"])).to.equal("KV");
    expect(e.getIn(["paneles", "P2", "base"])).to.equal("KK");

    e = PanelEstado.setPanelActivo(e, "P1");

    expect(e.get("panelActivo")).to.equal("P1");
    expect(e.getIn(["historico", 0])).to.equal("INICIO");

    e = PanelEstado.setPanelActivo(e, "P2");

    expect(e.get("panelActivo")).to.equal("P2");
    expect(e.getIn(["historico", 0])).to.equal("INICIO");
    expect(e.getIn(["historico", 1])).to.equal("P1");

  })

})
