import {useState} from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import Mural from './Mural';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MuralMap = ({murals}) => {
    const [currentLocation, setCurrentLocation] = useState({lat: 55.86515, lng: -4.25763});
    const [zoom, setZoom] = useState(4);
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", 
        iconSize: [35, 35] 
    });

    const muralMarkers = murals.map((mural, index) => {
        return (
            <section className="mural-map">
            <Marker key={index} position={[mural.lat, mural.lng]} icon={markerIcon}/>
                <Popup>
                    <Mural 
                        name={mural.name}
                        artist={mural.artist}
                        year={mural.year}
                        instagram={mural.instagram}
                        location={mural.location}
                        description={mural.description}
                    />
                </Popup>
            </section>
        )
    }) 
    return (
        <h3>I'm a map</h3>
    );
}

export default MuralMap;