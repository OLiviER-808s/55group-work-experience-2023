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
    'data': 'uk_regions.geojson'
    });
    
    map.addLayer({
        'id': 'state-fills',
        'type': 'fill',
        'source': {
        'type': 'geojson',
        'data': 'uk_regions.geojson'
        },
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
    const popup = new mapboxgl.Popup();
    map.on('mousemove', 'state-fills', (e) => {

        popup.setLngLat(e.lngLat)
        popup.setMaxWidth(600)
        popup.setHTML("<div style='font-size: 24px; padding:14px'>" + "Region: " + e.features[0].properties.rgn19nm + "<br>" + "Social Value: " + "£" + Math.floor(Math.random()*100000) + "<br>" + "Projects: " + Math.floor(Math.random()*30) + "</div>")
        popup.addTo(map);

        });

    });