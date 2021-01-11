import Mural from './Mural';
import MuralMap from './MuralMap';

function MuralsList({murals, updateMural}){
    if (!murals) return null;

    const displayMurals = murals.map(mural => 
        <Mural
        image={mural.imageUrl}
        name={mural.name}
        artist={mural.artist}
        year={mural.year}
        instagram={mural.instagram}
        location={mural.location}
        description={mural.description}
        updateMural={updateMural}/>
        )

    return (
        <>
            <h3>I am the murals list</h3>
            {displayMurals}
            <MuralMap murals={murals}/>
        </>
    )
}

export default MuralsList;