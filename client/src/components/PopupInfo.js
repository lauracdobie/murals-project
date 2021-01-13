import {useState} from 'react';

function PopupInfo ({murals, popupInfo, mural, name, artist, location, instagram, year, image}){
    const [likeButtonText, setLikeButtonText] = useState( "♥️");
    if (!popupInfo) return null;
    
    murals.map(mural => {
        let instagram2Link = null;
        let instagram3Link = null;
        // let instagram2Node = null;
        // let instagram3Node = null;

        if (mural.instagram2) {
            instagram2Link = ("https://www.instagram.com/" + mural.instagram2)
        }

        if (mural.instagram3) {
            instagram3Link = ("https://www.instagram.com/" + mural.instagram3)
        }

        const instagram2Node = instagram2Link ? (<p>Instagram: <a href={instagram2Link}>@{mural.instagram2}</a></p>): null;
        const instagram3Node = instagram3Link ? (<p>Instagram: <a href={instagram3Link}>@{mural.instagram3}</a></p>): null;

        return (
            <div className='popup-listing'>
                <img className='mural-pic' src={mural.imageUrl} alt={mural.name}/>
                <h3>{mural.name}</h3>
                <p>{mural.location}</p>
                <p>{mural.artist}, {mural.year}</p>
                <p>{mural.instagram}</p>
                {instagram2Node}
                {instagram3Node}
            </div>
        )
    })

    
}

export default PopupInfo;