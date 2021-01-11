import {useState} from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import Mural from './Mural';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MuralMap = ({murals}) => {

    const [currentLocation, setCurrentLocation] = useState({lat: 55.86515, lng: -4.25763});
    const [zoom, setZoom] = useState(14);
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", 
        iconSize: [35, 35] 
    });

    const getLatLng = murals.map(mural => {
        return [mural.lat, mural.lng]
    })

    console.log("here is the lat lng");
    console.log(getLatLng);

    const muralMarkers = murals.map((mural, index) => {
        return (
            <>
                <Marker key={index} position={[mural.lat, mural.lng]} icon={markerIcon} >
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
                </Marker>
            </>
        )
    }) 
    return (
        <Map center={currentLocation} zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {muralMarkers}
        </Map>
    );
}

export default MuralMap;