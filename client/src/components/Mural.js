import {useState} from 'react';

function Mural ({murals, mural, updateMural, instagramLink, instagram2Link, addToTour}){
    const [likeButtonText, setLikeButtonText] = useState("♥️");
    if (!mural) return null;

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
    const handleAddToTour = () => {
        console.log("Mural to add");
        console.log(mural);
        addToTour(mural);
    }
    const instagram2Node = instagram2Link ? (<p>Instagram: <a href={instagram2Link} target="_blank">@{mural.instagram2}</a></p>): null
    return (
        <div className='mural-listing'>
            <img className='mural-pic' src={mural.imageUrl} alt={mural.name}/>
            <h3>{mural.name}</h3>
            <p>{mural.artist}</p>
            <p>{mural.year}</p>
            <p>Instagram: <a href={instagramLink} target="_blank">@{mural.instagram}</a></p>
            {instagram2Node}
            <p>{mural.location}</p>
            <p>{mural.description}</p>
            <p>Likes: {mural.likes}</p>
            <button onClick={handleLike}>{likeButtonText}</button>
            <button onClick={handleAddToTour}>Add mural to my tour list</button>
        </div>
    )
}

export default Mural;