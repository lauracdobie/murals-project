import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {getMurals, updateDbMural} from './MuralsService';
import {useEffect, useState} from 'react';
import MuralsList from '../components/MuralsList';
import MuralMap from '../components/MuralMap';
import MuralFilterForm from '../components/MuralFilterForm';
import Mural from '../components/Mural';
import Header from '../components/Header';
import TestInfo from '../components/TestInfo';

function MuralsContainer () {
    
    const [murals, setMurals] = useState([]);
    const [filteredMurals, setFilteredMurals] = useState([]);
    const [muralSelector, setMuralSelector] = useState("");
    const [tourMurals, setTourMurals] = useState([]);
    // const [tourButtonText, setTourButtonText] = useState("Add mural to my tour list");

    useEffect(()=> {
        getMurals() 
        .then((data) => {
            console.log(data)
            setMurals(data)
            setFilteredMurals(data)
        })
    }, [])

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
                        updateMural={updateMural}
                        addToTour={addToTour}
                        removeFromTour={removeFromTour}
                        tourMurals={tourMurals}
                        setTourMurals={setTourMurals}/>}
                />
                <Route path='/view-my-tour' 
                    render={() => <MuralsList
                        murals={tourMurals}
                        handleUserFilter={handleUserFilter} 
                        handleMuralSelector={handleMuralSelector} 
                        updateMural={updateMural}
                        addToTour={addToTour}
                        removeFromTour={removeFromTour}
                        setTourMurals={setTourMurals}/>}/>
            </>
        </Router>
    )
}

export default MuralsContainer;