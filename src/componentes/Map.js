import React,{createRef,useEffect,useState} from 'react';
import mapboxgl from 'mapbox-gl';
import '../estilos/Map.css';
import { cleanup } from '@testing-library/react';
import db from '../fireConfig';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import firebase from 'firebase';
import useDatos from '../hooks/useLog';


mapboxgl.accessToken = 'pk.eyJ1IjoidXJpZWxjaDk5NyIsImEiOiJja2c0ZmRybmswazc4MnJscGJieGR1cmpkIn0.dOm9wTLrzqWI6qlfYJ6JSA';


const Map = (props) =>{
  const[loged,datos,setDATA,setDatos] = useDatos()
    const mapContainerRef = createRef();
    const [Selectlocation,setSelectlocation] = useState({direccion:""});
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
      zoom: zoom,
      
    })

    var userlocate = new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true,
      },
      showUserLocation:true,
      trackUserLocation: true
      })

    map.addControl(userlocate,'top-left');

    userlocate.on('geolocate', function(e) {
        var lon = e.coords.longitude;
        var lat = e.coords.latitude
        var position = [lon, lat];
        console.log(position)
        getRoute(position)
      });

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

              map.on('click', function(e) {
                var coordsObj = e.lngLat;
                var coords = Object.keys(coordsObj).map(function(key) {
                  return coordsObj[key];
                });
                var end = {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: coords
                    }
                  }
                  ]
                };
                if (map.getLayer('end')) {
                  map.getSource('end').setData(end);
                } else {
                  map.addLayer({
                    id: 'end',
                    type: 'circle',
                    source: {
                      type: 'geojson',
                      data: {
                        type: 'FeatureCollection',
                        features: [{
                          type: 'Feature',
                          properties: {},
                          geometry: {
                            type: 'Point',
                            coordinates: coords
                          }
                        }]
                      }
                    },
                    paint: {
                      'circle-radius': 10,
                      'circle-color': '#fec405'
                    }
                  });
                }
                getRoute(coords);
              });


  // Add starting point to the map


              });

    function getRoute(end) {
                  // make a directions request using cycling profile
                  // an arbitrary start will always be the same
                  // only the end or destination will change
                  var start = end;
                  var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
                
                  // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
                  var req = new XMLHttpRequest();
                  req.open('GET', url, true);
                  req.onload = function() {
                    var json = JSON.parse(req.response);
                    var data = json.routes[0];
                    var route = data.geometry.coordinates;
                    var geojson = {
                      type: 'Feature',
                      properties: {},
                      geometry: {
                        type: 'LineString',
                        coordinates: route
                      }
                    };           
                    // if the route already exists on the map, reset it using setData
                    if (map.getSource('route')) {
                      map.getSource('route').setData(geojson);
                    } else { // otherwise, make a new request
                      map.addLayer({
                        id: 'route',
                        type: 'line',
                        source: {
                          type: 'geojson',
                          data: {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                              type: 'LineString',
                              coordinates: geojson
                            }
                          }
                        },
                        layout: {
                          'line-join': 'round',
                          'line-cap': 'round'
                        },
                        paint: {
                          'line-color': '#3887be',
                          'line-width': 5,
                          'line-opacity': 0.75
                        }
                      });
                    }
                    // add turn instructions here at the end
                    setSelectlocation({direccion:json.routes[0].legs[0].summary})
                  };
                  
                  req.send();
    }
   
             
  return ()=>{cleanup()}
      
  },[]);

  function handler(){
    if(Selectlocation){
      if(Selectlocation.direccion !==""){
      db.collection('users').doc(firebase.auth().currentUser.uid).update(Selectlocation).then(res =>{
      }).catch(err =>{
        console.log(err)
      })
    }
    }
  }
  

  

    return(
        <>
            <div ref={mapContainerRef} className='map-container'>
                
            </div>
            <button className="btn-confirm" onClick={handler}><LocationOnOutlinedIcon />Confirmar direccion</button>
        </>
    );
}

export default Map;