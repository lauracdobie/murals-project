import {getMurals, updateDbMural} from './MuralsService';
import {useEffect, useState} from 'react';
import MuralsList from '../components/MuralsList';
import MuralFilterForm from '../components/MuralFilterForm';
import TourFilter from '../components/TourFilter';

function MuralsContainer () {
    
    const [murals, setMurals] = useState([]);
    const [filteredMurals, setFilteredMurals] = useState([]);
    const [muralSelector, setMuralSelector] = useState("");
    const [tourMurals, setTourMurals] = useState([]);
    // const [tourButtonText, setTourButtonText] = useState("Add mural to my tour list")
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
            console.log(currentMural)
            console.log(muralSelector)
            
            if (muralSelector === "year") {
                if (currentMural.hasOwnProperty("year")) {
                    return currentMural[muralSelector].toString().toUpperCase().includes(userInput.toUpperCase());
                    // return currentMural[muralSelector] == (userInput);
                }
            } else {
                return currentMural[muralSelector].toUpperCase().includes(userInput.toUpperCase());
            }

        });
        setFilteredMurals(someMurals);
    };

    const handleMuralSelector = (userInput) => {
        // const selectedFilter = (filter) => {
        //     return 
        // }
        setMuralSelector(userInput);
    };

    const addToTour = (newTourMural) => {
        newTourMural.addedToTour = true;
        setTourMurals([...tourMurals, newTourMural])
        console.log(tourMurals);
    }

    const removeFromTour = (muralToRemove) => {
        let muralsList = [...tourMurals];
        const muralToRemoveIndex = tourMurals.indexOf(muralToRemove);
        muralToRemove.addedToTour = false;
        muralsList.splice(muralToRemoveIndex, 1);
        setTourMurals(muralsList);
        console.log(tourMurals);
        setFilteredMurals(muralsList)
    }

    const tourMuralFilter = () => {
        setFilteredMurals(tourMurals);
        // tourMurals.forEach((mural) => {
        //     setTourButtonText("Remove mural from my tour list")
        // });
    }

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
            <h2>Discover Glasgow's vibrant street art!</h2>
            <div>
                <MuralFilterForm onUserInput={handleUserFilter} onUserSelect={handleMuralSelector}/>
            </div>
            <div>
                <TourFilter 
                tourMuralFilter={tourMuralFilter} 
                murals={murals} 
                setFilteredMurals={setFilteredMurals}
                />
            </div>
            <MuralsList 
                murals={filteredMurals} 
                updateMural={updateMural} 
                addToTour={addToTour} 
                removeFromTour={removeFromTour} 
                />
        </>
    )
}

export default MuralsContainer;