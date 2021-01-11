const baseURL = 'http://localhost:3000/api/murals/';

export const getMurals = () => {
    return fetch(baseURL)
    .then(res=>res.json())
}

export const updateDbMural = (mural) => {
    return fetch(baseURL + mural._id, {
        method: 'PUT',
        body: JSON.stringify(mural),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
}
