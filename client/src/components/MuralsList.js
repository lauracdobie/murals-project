import Mural from './Mural';

function MuralsList({murals}){

    const displayMurals = murals.map(mural => 
        <Mural
        name={mural.name}
        artist={mural.artist}
        year={mural.year}
        instagram={mural.instagram}
        location={mural.location}
        description={mural.description}/>
        )

    return (
        <>
            <h3>I am the murals list</h3>
            {displayMurals}
        </>
    )
}

export default MuralsList;