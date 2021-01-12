// import CatLady from "../assets/crazy_cat_lady.jpg";
// import LostGiant from "../assets/lost_giant.jpg"
// import DrConnolly from "../assets/dr_connolly.jpg"
// import ShadowHandPuppet from "../assets/shadow_hand_puppets.jpg"
import {useState} from 'react';

import Mural from "./Mural";

function PopupInfo ({murals, popupInfo, instagramLink, instagram2Link}){
    const [likeButtonText, setLikeButtonText] = useState( "♥️");
    if (!popupInfo) return null;

    const handleLike = () => {
        let updatedValue = null;
        if (likeButtonText === "♥️") {
            updatedValue = popupInfo.likes += 1;
            setLikeButtonText("♡");
        }
        else {
            updatedValue = popupInfo.likes -= 1;
            setLikeButtonText("♥️");
        }
    }
    
    const instagram2Node = instagram2Link ? (<p>Instagram: <a href={instagram2Link}>@{popupInfo.instagram2}</a></p>): null
    return (
        <div className='popup-listing'>
            <img className='mural-pic' src={popupInfo.imageUrl} alt={popupInfo.name}/>
            <h3>{popupInfo.name}</h3>
            <p>{popupInfo.location}</p>
            <p>{popupInfo.artist}, {popupInfo.year}</p>
            <p>Instagram: <a href={instagramLink}>@{popupInfo.instagram}</a></p>
            {instagram2Node}
            <button onClick={handleLike}>{likeButtonText}</button>
        </div>
    )
}

export default PopupInfo;