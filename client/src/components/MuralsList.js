import Mural from './Mural';
import MuralMap from './MuralMap';

function MuralsList({murals, updateMural}){
    if (!murals) return null;
    
    const displayMurals = murals.map(mural => {
        let instagram2Link = null;

        if (mural.instagram2) {
            instagram2Link = ("https://www.instagram.com/" + mural.instagram2)
        }
        return(
        <Mural
        murals={murals}
        mural={mural}
        updateMural={updateMural}
        instagramLink = {"https://www.instagram.com/" + mural.instagram}
        instagram2Link = {instagram2Link}
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
            <h3>I am the murals list</h3>
            {toggleDisplay()}
            {displayMurals}
            <MuralMap murals={murals} updateMural={updateMural}/>
        </>
    )
}

export default MuralsList;