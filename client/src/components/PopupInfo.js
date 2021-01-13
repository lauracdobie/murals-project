// import CatLady from "../assets/crazy_cat_lady.jpg";
// import LostGiant from "../assets/lost_giant.jpg"
// import DrConnolly from "../assets/dr_connolly.jpg"
// import ShadowHandPuppet from "../assets/shadow_hand_puppets.jpg"
import {useState} from 'react';

import Mural from "./Mural";

function PopupInfo ({popupInfo, updatePopupInfo}){
    if (!popupInfo) return null;

    return (
        <div className='popup-listing'>
            <img className='mural-pic' src={popupInfo.imageUrl} alt={popupInfo.name}/>
            <h3>{popupInfo.name}</h3>
            <p>{popupInfo.location}</p>
            <p>{popupInfo.artist}, {popupInfo.year}</p>
        </div>
    )
}

export default PopupInfo;