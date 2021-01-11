import MuralsService from './MuralsService';
import {useEffect, useState} from 'react';
import MuralsList from '../components/MuralsList';
import MuralMap from '../components/MuralMap';

function MuralsContainer () {
    
    const [murals, setMurals] = useState([]);
    useEffect(()=> {
        MuralsService.getMurals() 
        .then((data) => {
            console.log(data)
            setMurals(data)
        })

    }, [])

    const updateMural = (updatedMural) => {
        //Updates mural document in database collection
        MuralsService.updateDbMural(updatedMural);
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
            <h2>I am the murals container </h2>
            <MuralsList murals={murals} updateMural={updateMural}/>
        </>
    )
}

export default MuralsContainer;