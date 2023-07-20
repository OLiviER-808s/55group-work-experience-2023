console.log("loaded");
mapboxgl.accessToken = 'pk.eyJ1IjoienliZXJ3b2xmaSIsImEiOiJjbGs5cXpkZG0wem5nM3NydHhvdTFrMmJsIn0.FqnLAPPbIlRIaXNZakf-GQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-1.486052, 52.830348],
zoom: 7
})
let hoveredPolygonId = null;
map.on('load', () => {
    map.addSource('states', {
    'type': 'geojson',
    'data': 'mapData.json'
    });
    map.addLayer({
        'id': 'state-fills',
        'type': 'fill',
        'source': 'states',
        'layout': {},
        'paint': {
        'fill-color': '#627BC1',
        'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.5
        ]
        }
    });

    map.addLayer({
        'id': 'state-borders',
        'type': 'line',
        'source': 'states',
        'layout': {},
        'paint': {
        'line-color': '#627BC1',
        'line-width': 2
        }
    });

    new Popup()
});