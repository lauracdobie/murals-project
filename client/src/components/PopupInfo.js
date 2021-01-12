// import CatLady from "../assets/crazy_cat_lady.jpg";
import LostGiant from "../assets/lost_giant.jpg"
import DrConnolly from "../assets/dr_connolly.jpg"
import ShadowHandPuppet from "../assets/shadow_hand_puppets.jpg"
import {useState} from 'react';

function PopupInfo ({popupInfo, updatePopupInfo}){
    const [likeButtonText, setLikeButtonText] = useState( "♥️");
    if (!popupInfo) return null;
    
    let muralImage = {};

    const getImage = () => {
        if (popupInfo.name === "Crazy Cat Lady") {
            return muralImage = "./static/crazy_cat_lady.jpg"
        }
        else if (popupInfo.name === "The Lost Giant") {
            return muralImage = LostGiant;
        }
        else if (popupInfo.name === "Dr Connolly, I presume") {
            return muralImage = DrConnolly;
        }
        else if (popupInfo.name === "Shadow Hand Puppets") {
            return muralImage = ShadowHandPuppet;
        }
    }

    getImage();

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

    return (
        <div className='popup-listing'>
            <img className='mural-pic' src={muralImage} alt={popupInfo.name}/>
            <h3>{popupInfo.name}</h3>
            <p>{popupInfo.location}</p>
            <p>{popupInfo.artist}, {popupInfo.year}</p>
            <p>{popupInfo.instagram}</p>
            <button onClick={handleLike}>{likeButtonText}</button>
        </div>
    )
}

export default PopupInfo;