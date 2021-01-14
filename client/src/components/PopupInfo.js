import './PopupInfo.css';

function PopupInfo ({popupInfo, updatePopupInfo}){
    if (!popupInfo) return null;

    return (
        <div className='popup-listing'>
            <img className='mural-pic' src={popupInfo.imageUrl} alt={popupInfo.name}/>
            <h3>{popupInfo.name}</h3>
            <p>{popupInfo.location}</p>
            <p>{popupInfo.artist}, {popupInfo.year}</p>
        </div>
    )
}

export default PopupInfo;