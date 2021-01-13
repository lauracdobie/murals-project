import {useState} from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import Mural from './Mural';
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

    const displayPopups =  murals.map(mural => {
        console.log("mural");
        console.log(mural)
        let instagram2Link = null;
        let instagram3Link = null;
        // let instagram2Node = null;
        // let instagram3Node = null;

        if (mural.instagram2) {
            instagram2Link = ("https://www.instagram.com/" + mural.instagram2)
        }

        if (mural.instagram3) {
            instagram3Link = ("https://www.instagram.com/" + mural.instagram3)
        }

        const instagram2Node = instagram2Link ? (<p>Instagram: <a href={instagram2Link}>@{mural.instagram2}</a></p>): null;
        const instagram3Node = instagram3Link ? (<p>Instagram: <a href={instagram3Link}>@{mural.instagram3}</a></p>): null;

        return (
            <Popup className='popup'>
                <img className='mural-pic' src={mural.imageUrl} alt={mural.name}/>
                <h3>{mural.name}</h3>
                <p>{mural.location}</p>
                <p>{mural.artist}, {mural.year}</p>
                <p>{mural.instagram}</p>
                {instagram2Node}
                {instagram3Node}
            </Popup>
        )
    })

    const muralMarkers = murals.map((mural, index) => {
        return (
            <>
                <Marker key={index} position={[mural.lat, mural.lng]} title={mural.name} icon={markerIcon} mural={mural}>
                    {displayPopups}
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