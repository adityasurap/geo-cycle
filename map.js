mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhczE0MjYiLCJhIjoiY203OWd2YTV0MDVhdTJycTNmb21tbTduZyJ9.yveBqTIz-SyHXJjXAF6quA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027],
  zoom: 12,
  minZoom: 5,
  maxZoom: 18
});