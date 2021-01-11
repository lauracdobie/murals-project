import CatLady from "../assets/crazy_cat_lady.jpg";
import LostGiant from "../assets/lost_giant.jpg"
import DrConnolly from "../assets/dr_connolly.jpg"
import ShadowHandPuppet from "../assets/shadow_hand_puppets.jpg"

function Mural ({mural, updateMural}){

    let muralImage = null;
    const getImage = () => {
        if (mural.name === "Crazy Cat Lady") {
            return muralImage = CatLady;
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
            likes: mural.likes += 1
        })

    }

    return (
        <div className='mural-listing'>
            <img className='mural-pic' src={muralImage} alt={mural.name}/>
            <h3>{mural.name}</h3>
            <p>{mural.artist}</p>
            <p>{mural.year}</p>
            <p>{mural.instagram}</p>
            <p>{mural.location}</p>
            <p>{mural.description}</p>
            <p>{mural.likes}</p>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default Mural;