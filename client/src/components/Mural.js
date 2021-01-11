function Mural (props){

    return (
        <div className='mural-listing'>
            <h3>{props.name}</h3>
            <p>{props.artist}</p>
            <p>{props.year}</p>
            <p>{props.instagram}</p>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Mural;