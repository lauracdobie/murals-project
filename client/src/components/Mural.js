import {useState} from 'react';
import './Mural.css';
import Liked from '../assets/liked.png';
import Unliked from '../assets/unliked.png';
import InstagramIcon from '../assets/instagram.png';

function Mural ({murals, mural, updateMural, instagramLink, instagram2Link, instagram3Link, addToTour, removeFromTour, tourButtonText, setTourButtonText}){
    // const [tourButtonText, setTourButtonText] = useState("Add mural to my tour list")
    // const [visitedButtonText, setVisitedButtonText] = useState("Not Visited");

    // const [visitedClass, setVisitedClass] = useState('mural-listing');

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
            imageUrl: mural.imageUrl, 
            likes: updatedValue
        })
    }

    const instagram2Node = instagram2Link ? (<a href={instagram2Link}>@{mural.instagram2}</a>): null;
    const instagram3Node = instagram3Link ? (<a href={instagram3Link}>@{mural.instagram3}</a>): null;

    // const handleTourAddRemove = () => {
    //     if (tourButtonText === "Add mural to my tour list") {
    //         addToTour(mural);
    //         setTourButtonText("Remove mural from my tour");
    //     }
    //     else {
    //         removeFromTour(mural);
    //         setTourButtonText("Add mural to my tour list");
    //     }
    // }

    const handleTourAddRemove = () => {
        if (mural.addedToTour) {
            removeFromTour(mural);
            setTourButtonText("Add mural to my tour list");
        }
        else {
            addToTour(mural);
            setTourButtonText("Remove mural from my tour");
        }
    }

    return (
        <div className="mural-listing">

            <div className="mural-image-section">
                <img className='mural-pic' src={mural.imageUrl} alt={mural.name}/>
            </div>

            <div className="mural-text">

                <div className="mural-title">
                    <h3>{mural.name}</h3>
                </div>

                <div>
                    <p>{mural.artist}, {mural.year}</p>
                        <div className="insta-section">
                            <img className="insta-icon" src={InstagramIcon} />
                            <div className="insta-text">
                                <p><a href={instagramLink}>@{mural.instagram}</a> {instagram2Node} {instagram3Node} </p>
                            </div>
                        </div>
                    <p>{mural.location}</p>
                    <p className="mural-description">{mural.description}</p>
                    <button onClick={handleTourAddRemove}>{tourButtonText}</button>
                </div>

            </div>

            <div className="mural-buttons">
                <div className="likes-section">
                        <button className="like-button" onClick={handleLike}><img className="likes-heart"src={likeButtonText}/></button>
                        <p className="likes-number">{mural.likes}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Mural;