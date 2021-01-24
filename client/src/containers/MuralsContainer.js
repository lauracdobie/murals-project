import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {getMurals, updateDbMural} from './MuralsService';
import {useEffect, useState} from 'react';
import MuralsList from '../components/MuralsList';
import MuralMap from '../components/MuralMap';
import MuralFilterForm from '../components/MuralFilterForm';
import Mural from '../components/Mural';
import Header from '../components/Header';
import TestInfo from '../components/TestInfo';
import Liked from '../assets/liked.png';
import Unliked from '../assets/unliked.png';

function MuralsContainer () {
    
    const [murals, setMurals] = useState([]);
    const [filteredMurals, setFilteredMurals] = useState([]);
    const [muralSelector, setMuralSelector] = useState("");
    const [tourMurals, setTourMurals] = useState([]);
    const [likeButtonText, setLikeButtonText] = useState(Unliked);
    const [tourButtonText, setTourButtonText] = useState("Add mural to my tour list");

    useEffect(()=> {
        getMurals() 
        .then((data) => {
            console.log(data)
            setMurals(data)
            setFilteredMurals(data)
        })
    }, [])

    // useEffect(() => {
    //     setFilteredMurals()
    // }, [])

    const displayLikeButton = (mural) => {
        if (mural.isLiked === true) {
            setLikeButtonText(Liked)
        }

        else {
            setLikeButtonText(Unliked)
        }
    }

    const handleUserFilter = (userInput) => {
        const someMurals = murals.filter((currentMural) => {
            if (muralSelector === "year") {
                if (currentMural.hasOwnProperty("year")) {
                    return currentMural[muralSelector].toString().toUpperCase().includes(userInput.toUpperCase());
                }
            } else if (muralSelector === "") {
                return currentMural;
            } else {
                return currentMural[muralSelector].toUpperCase().includes(userInput.toUpperCase());
            };

        });
        setFilteredMurals(someMurals);
    };

    const handleMuralSelector = (userInput) => {
        setMuralSelector(userInput);
    };

    const updateMural = (updatedMural) => {
        //Updates mural document in database collection
        updateDbMural(updatedMural);
        console.log(updatedMural);

        //Update murals list in front end
        //Gets the index of the mural to update
        const updatedMuralIndex = murals.findIndex(mural => mural._id === updatedMural._id);

        //Creates a new array with all the murals in the murals array using spread
        const updatedMurals = [...murals];

        //Finds the mural to update by its index and sets its data to the updatedMural data
        updatedMurals[updatedMuralIndex] = updatedMural;

        //Sets the value of the orginal murals list to the updated array
        setFilteredMurals(updatedMurals);
    }

    const handleLike = (mural) => {
        let updatedValue = null;
        if (mural.isLiked === false) {
            updatedValue = mural.likes += 1;
            mural.isLiked = true;
            // setLikeButtonText(Liked);
        }
        else {
            updatedValue = mural.likes -= 1;
            mural.isLiked = false;
            // setLikeButtonText(Unliked);
        }

        displayLikeButton(mural);

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

    const addToTour = (newTourMural) => {
        newTourMural.addedToTour = true;
        let updatedTour = [...tourMurals];
        updatedTour.push(newTourMural);
        setTourMurals(updatedTour);
        console.log("mural added");
        console.log(tourMurals);
    }

    const removeFromTour = (muralToRemove) => {
        let muralsList = [...tourMurals];
        const muralToRemoveIndex = tourMurals.indexOf(muralToRemove);
        muralToRemove.addedToTour = false;
        muralsList.splice(muralToRemoveIndex, 1);
        setTourMurals(muralsList);
        console.log("mural removed");
        console.log(tourMurals);
    }

    return (
        <Router>
            <>
            <Header/>
                <Route exact path='/'
                    render={() => <MuralsList 
                        handleUserFilter={handleUserFilter} 
                        handleMuralSelector={handleMuralSelector} 
                        murals={filteredMurals}
                        handleLike={handleLike}
                        likeButtonText={likeButtonText} 
                        updateMural={updateMural}
                        addToTour={addToTour}
                        removeFromTour={removeFromTour}
                        tourMurals={tourMurals}
                        setTourMurals={setTourMurals}
                        displayLikeButton={displayLikeButton}/>}
                />
                <Route path='/view-my-tour' 
                    render={() => <MuralsList
                        murals={tourMurals}
                        handleUserFilter={handleUserFilter} 
                        handleMuralSelector={handleMuralSelector} 
                        updateMural={updateMural}
                        likeButtonText={likeButtonText}
                        handleLike={handleLike} 
                        addToTour={addToTour}
                        removeFromTour={removeFromTour}
                        setTourMurals={setTourMurals}
                        handleLike={handleLike}
                        displayLikeButton={displayLikeButton}/>}/>
            </>
        </Router>
    )
}

export default MuralsContainer;