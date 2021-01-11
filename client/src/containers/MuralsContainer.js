import {getMurals} from './MuralsService';
import {useEffect, useState} from 'react';
import MuralsList from '../components/MuralsList';
import MuralMap from '../components/MuralMap';

function MuralsContainer () {
    
    const [murals, setMurals] = useState([]);
    useEffect(()=> {
        getMurals() 
        .then((data) => {
            console.log(data)
            setMurals(data)
        })
    }, [])

    return (

        <>
            <h2>I am the murals container </h2>
            <MuralsList murals={murals}/>
        </>
    )
}

export default MuralsContainer;