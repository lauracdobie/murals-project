const baseURL = 'http://localhost:3000/api/murals';

const MuralsService = {
    getMurals() {
        return fetch(baseURL)
        .then(res=>res.json())
    },

    updateDbMural(mural) {
        return fetch(baseURL + mural._id, {
          method: 'PUT',
          body: JSON.stringify(mural),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
      },
}

export default MuralsService;
