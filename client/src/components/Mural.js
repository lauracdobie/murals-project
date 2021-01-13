import {useState} from 'react';
import './Mural.css';
import Liked from '../assets/liked.png';
import Unliked from '../assets/unliked.png';

function Mural ({murals, mural, updateMural, instagramLink, instagram2Link, instagram3Link}){
    const [visitedButtonText, setVisitedButtonText] = useState("Not Visited");

    const [likeButtonText, setLikeButtonText] = useState(Unliked);
    if (!mural) return null;
    

    const handleLike = () => {
        let updatedValue = null;
        if (likeButtonText === Unliked) {
            updatedValue = mural.likes += 1;
            setLikeButtonText(Liked);
        }
        else {
            updatedValue = mural.likes -= 1;
            setLikeButtonText(Unliked);
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
    const handleVisited = () => {
        if (visitedButtonText === "Not Visited") {
            setVisitedButtonText("✔️Visited");
        }
        else {
            setVisitedButtonText("Not Visited");
    }}

    const instagram2Node = instagram2Link ? (<a href={instagram2Link}>@{mural.instagram2}</a>): null;
    const instagram3Node = instagram3Link ? (<a href={instagram3Link}>@{mural.instagram3}</a>): null;

    return (
        <div className='mural-listing'>

            <div className="mural-image-section">
                <img className='mural-pic' src={mural.imageUrl} alt={mural.name}/>
            </div>

            <div className="mural-text">
                <div className="mural-title">
                    <h3>{mural.name}</h3>
                </div>
                <div>
                    <p>{mural.artist}, {mural.year}</p>
                    <p><a href={instagramLink}>@{mural.instagram}</a> {instagram2Node} {instagram3Node} </p>
                    <p>{mural.location}</p>
                    <p className="mural-description">{mural.description}</p>
                </div>
            </div>

            <div className="mural-buttons">
                <div className="likes-section">
                        <button className="like-button" onClick={handleLike}><img className="likes-heart"src={likeButtonText}/></button>
                        <p className="likes-number">{mural.likes}</p>
                </div>
                <button className="visited-button" onClick={handleVisited}>{visitedButtonText}</button>
            </div>
            
        </div>
    )
}

export default Mural;