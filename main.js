const Map = L.map("mapdiv").setView([-2.269557, 40.650642], 11);

L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsNight", {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
  attribution: "<a href='https://twitter.com/Edu5815'>Made by GIS Dev ED</a>",
}).addTo(Map);

//L.marker([-2.30267, 40.70421]).addTo(Map)
L.heatLayer(
  [
    [-2.30267, 40.70421], //"Mukunumbi",
    [-2.38658, 40.44804], //"Majembeni",
    [-2.31735, 40.73134], //"Majembeni",
    [-2.21564, 40.48363], //"Majembeni",
    [-2.38816, 40.4381], //"Witu",
    [-2.37994, 40.61053], //"Bomani",
    [-2.38916, 40.69688], //"Mpeketoni",
    [-2.43274, 40.68552], //"Bahari",
    [-2.3528, 40.71117], //"Mapenya",
    [-2.17679, 40.81468], //"Hindi",
  ],
  {
    radius: 20,
    blur: 25,
    gradient: { 0.3: "red", 0.65: "red", 1: "yellow" },
    maxZoom: 10,
  }
).addTo(Map);

L.control.betterscale({ position: "bottomleft" }).addTo(Map);

L.Control.MyControl = L.Control.extend({
  onAdd: function (Map) {
    var el = L.DomUtil.create("div", "info bg-dark");

    el.innerHTML = `<h5>Areas Affected</h5>
        <p>Mukunumbi</p>
        <p>Majembeni</p>
        <p>Ndamwe</p>
        <p>Pandaguo</p>
        <p>Witu</p>
        <p>Bomani</p>
        <p>Binde Warinde</p>
        <p>Pongwe</p>
        <p>Hamasi</p>
        <p>Mpeketoni</p>
        <p>Bahari</p>
        <p>Mapenya</p>
        <p>Hindi</p>              
        `;

    return el;
  },

  onRemove: function (Map) {
    // Nothing to do here
  },
});

L.control.myControl = function (opts) {
  return new L.Control.MyControl(opts);
};

L.control
  .myControl({
    position: "topright",
  })
  .addTo(Map);
