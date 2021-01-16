import Mural from './Mural';
import MuralMap from './MuralMap';
import './MuralsList.css';
import MuralFilterForm from './MuralFilterForm';
import {useState} from 'react';
import Liked from '../assets/liked.png';
import Unliked from '../assets/unliked.png';

function MuralsList({murals, setFilteredMurals, updateMural, handleMuralSelector, handleUserFilter, onLike, addToTour, removeFromTour, tourButtonText, setTourButtonText}){
    const [visitedButtonText, setVisitedButtonText] = useState("Not Visited");
    // const [likeButtonText, setLikeButtonText] = useState(Unliked);


    if (!murals) return null;

    console.log("here are the murals")
    console.log(murals)
    
    const displayMurals = murals.map(mural => {
        let instagram2Link = null;
        let instagram3Link = null;

        if (mural.instagram2) {
            instagram2Link = ("https://www.instagram.com/" + mural.instagram2)
        }

        if (mural.instagram3) {
            instagram3Link = ("https://www.instagram.com/" + mural.instagram3)
        }

        mural.likeButton = Unliked;
        // console.log(mural);

        return(
        <Mural
            murals={murals}
            mural={mural}
            updateMural={updateMural}
            instagramLink = {"https://www.instagram.com/" + mural.instagram}
            instagram2Link = {instagram2Link}
            instagram3Link = {instagram3Link}
            visitedButtonText={visitedButtonText}
            setVisitedButtonText={setVisitedButtonText}
            addToTour={addToTour}
            removeFromTour={removeFromTour}
            onLike={onLike}
            tourButtonText={tourButtonText}
            setTourButtonText={setTourButtonText}
        />)
    })

    const toggleDisplay = () => {
        if (murals.length === 0) {
            console.log("murals", murals)
            return <p>No murals that match your search!</p>
        }
    };

    return (
        <>
            {toggleDisplay()}
            <section className="all-murals">
                <div>
                    <div>
                        <MuralFilterForm onUserInput={handleUserFilter} onUserSelect={handleMuralSelector}/>
                    </div>
                    <div className="display-murals">
                        {displayMurals}
                    </div>
                </div>
                <div className="mural-map">
                    <MuralMap 
                        murals={murals} 
                        updateMural={updateMural}
                    />
                </div>
            </section>
        </>
    );
};

export default MuralsList;