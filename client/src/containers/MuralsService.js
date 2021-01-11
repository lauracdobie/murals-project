const baseURL = 'http://localhost:3000/api/murals';

export const getMurals = () => {
    return fetch(baseURL)
    .then(res=>res.json())
}
