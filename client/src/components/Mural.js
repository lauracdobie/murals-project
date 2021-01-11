import CatLady from "../assets/crazy_cat_lady.jpg";
import LostGiant from "../assets/lost_giant.jpg"
import DrConnolly from "../assets/dr_connolly.jpg"
import ShadowHandPuppet from "../assets/shadow_hand_puppets.jpg"

function Mural (props){

    let muralImage = null;
    const getImage = () => {
        if (props.name === "Crazy Cat Lady") {
            return muralImage = CatLady;
        }
        else if (props.name === "The Lost Giant") {
            return muralImage = LostGiant;
        }
        else if (props.name === "Dr Connolly, I presume") {
            return muralImage = DrConnolly;
        }
        else if (props.name === "Shadow Hand Puppets") {
            return muralImage = ShadowHandPuppet;
        }
    }

    getImage();

    return (
        <div className='mural-listing'>
            <img className='mural-pic' src={muralImage} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.artist}</p>
            <p>{props.year}</p>
            <p>{props.instagram}</p>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Mural;