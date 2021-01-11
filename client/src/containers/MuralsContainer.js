import {getMurals} from './MuralsService';
import {useEffect, useState} from 'react';

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
        </>
    )
}

export default MuralsContainer;