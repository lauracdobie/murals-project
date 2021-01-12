import {useState} from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import PopupInfo from './PopupInfo';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MuralMap = ({murals, updateMural}) => {

    const [currentLocation, setCurrentLocation] = useState({lat: 55.86515, lng: -4.25763});
    const [zoom, setZoom] = useState(14);
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", 
        iconSize: [35, 35]
    });

    const muralMarkers = murals.map((popupInfo, index) => {
        let instagram2Link = null;

        if (popupInfo.instagram2) {
            instagram2Link = ("https://www.instagram.com/" + popupInfo.instagram2)
        }

        return (
            <>
                <Marker key={index} position={[popupInfo.lat, popupInfo.lng]} title={popupInfo.name} icon={markerIcon} >
                    <Popup className='popup'>
                        <PopupInfo
                            murals={murals}
                            popupInfo={popupInfo}
                            updateMural={updateMural}
                            instagramLink = {"https://www.instagram.com/" + popupInfo.instagram}
                            instagram2Link = {instagram2Link} 
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