import React,{createRef,useEffect,useState} from 'react';
import mapboxgl from 'mapbox-gl';
import '../estilos/Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidXJpZWxjaDk5NyIsImEiOiJja2c0ZmRybmswazc4MnJscGJieGR1cmpkIn0.dOm9wTLrzqWI6qlfYJ6JSA';

const Map = () =>{
    const mapContainerRef = createRef();
    
    const [location,setLocation] = useState({
        lng:13.5079,
        ltd: -88.8683,
        zoom:14,
      });

  useEffect(() => {
      const {lng,ltd,zoom} = location;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ltd,  lng],
      zoom: zoom
    })

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true,
      },
      showUserLocation:true,
      trackUserLocation: true
      }),'top-left'
      );

    map.on('move', () => {
        setLocation({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        });
        });

          
            map.on('load', function () {
              map.addSource('maine', {
              'type': 'geojson',
              'data': {
              'type': 'Feature',
              'geometry': {
              'type': 'Polygon',
              'coordinates': [
                        [
                            [-88.8749105,13.5246644],
                            [-88.8673997,13.5170492],
                            [-88.8670117,13.5071962],
                            [-88.8678337,13.4985142],
                            [-88.8846457,13.4974552],
                            
                        ]
                ]
              }
              }
              });
              map.addLayer({
              'id': 'maine',
              'type': 'fill',
              'source': 'maine',
              'layout': {},
              'paint': {
              'fill-color': '#fec405',
              'fill-opacity': 0.3
              }
              });
              });

              var scale = new mapboxgl.ScaleControl({
                maxWidth: 80,
                unit: 'imperial'
                });
                map.addControl(scale);
                 
                scale.setUnit('metric');

        
  },[]);


    return(
        <>
            <div ref={mapContainerRef} className='map-container'/>
        </>
    );
}

export default Map;