// import CatLady from "../assets/crazy_cat_lady.jpg";
import LostGiant from "../assets/lost_giant.jpg"
import DrConnolly from "../assets/dr_connolly.jpg"
import ShadowHandPuppet from "../assets/shadow_hand_puppets.jpg"
import {useState} from 'react';

function Mural ({mural, updateMural, instagramLink, instagram2Link}){
    const [likeButtonText, setLikeButtonText] = useState("♥️");
    if (!mural) return null;
    
    let muralImage = {};

    const getImage = () => {
        if (mural.name === "Crazy Cat Lady") {
            return muralImage = "./static/crazy_cat_lady.jpg"
        }
        else if (mural.name === "The Lost Giant") {
            return muralImage = LostGiant;
        }
        else if (mural.name === "Dr Connolly, I presume") {
            return muralImage = DrConnolly;
        }
        else if (mural.name === "Shadow Hand Puppets") {
            return muralImage = ShadowHandPuppet;
        }
    }

    getImage();

    const handleLike = () => {
        let updatedValue = null;
        if (likeButtonText === "♥️") {
            updatedValue = mural.likes += 1;
            setLikeButtonText("♡");
        }
        else {
            updatedValue = mural.likes -= 1;
            setLikeButtonText("♥️");
        }
        
        updateMural({
            _id: mural._id,
            name: mural.name,
            artist: mural.artist,
            instagram: mural.instagram,
            location: mural.location,
            description: mural.description,
            year: mural.year,
            lat: mural.lat,
            lng: mural.lng,
            imageURL: mural.imageUrL,
            likes: updatedValue
        })

    }
    const instagram2Node = instagram2Link ? (<p>Instagram: <a href={instagram2Link}>@{mural.instagram2}</a></p>): null
    return (
        <div className='mural-listing'>
            <img className='mural-pic' src={muralImage} alt={mural.name}/>
            <h3>{mural.name}</h3>
            <p>{mural.artist}</p>
            <p>{mural.year}</p>
            <p>Instagram: <a href={instagramLink}>@{mural.instagram}</a></p>
            {instagram2Node}
            <p>{mural.location}</p>
            <p>{mural.description}</p>
            <p>Likes: {mural.likes}</p>
            <button onClick={handleLike}>{likeButtonText}</button>
        </div>
    )
}

export default Mural;