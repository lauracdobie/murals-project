import {getMurals, updateDbMural} from './MuralsService';
import {useEffect, useState} from 'react';
import MuralsList from '../components/MuralsList';
import MuralMap from '../components/MuralMap';
import MuralFilterForm from '../components/MuralFilterForm';
import Mural from '../components/Mural';
import Header from '../components/Header';
import Liked from '../assets/liked.png';
import Unliked from '../assets/unliked.png';

function MuralsContainer () {
    
    const [murals, setMurals] = useState([]);
    const [filteredMurals, setFilteredMurals] = useState([]);
    const [muralSelector, setMuralSelector] = useState("");
    const [likeButtonText, setLikeButtonText] = useState(Unliked);

    useEffect(()=> {
        getMurals() 
        .then((data) => {
            console.log(data)
            setMurals(data)
            setFilteredMurals(data)
        })
    }, [])

    filteredMurals.forEach(mural => mural.isLiked = false);

    const onLike = (mural) => {
        let updatedValue = null;
        if (mural.isLiked === false) {
            updatedValue = mural.likes += 1;
            // setLikeButtonText(Liked);
            mural.isLiked = true;
            console.log("liked mural")
            console.log(mural);
            let updatedList = [...filteredMurals, mural]
            setFilteredMurals(updatedList);
        }

        else if (mural.liked === true) {
            updatedValue = mural.likes -= 1;
            // setLikeButtonText(Unliked);
            mural.isLiked = false;
            let updatedList = [...filteredMurals, mural]
            setFilteredMurals(updatedList);
        }

        filteredMurals.forEach((mural) => {
            if (mural.isLiked === true) {
                setLikeButtonText(Unliked);
            } 
            else {
                setLikeButtonText(Liked);
            }
        })
                         
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
        setMurals(updatedMurals);

    }

    return (

        <>
            <Header/>
            <MuralsList 
                handleUserFilter={handleUserFilter} 
                handleMuralSelector={handleMuralSelector} 
                murals={filteredMurals} 
                updateMural={updateMural}
                onLike={onLike}
                likeButtonText={likeButtonText}
                setLikeButtonText={setLikeButtonText}/>
        </>
    )
}

export default MuralsContainer;