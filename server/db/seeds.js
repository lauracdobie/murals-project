use glasgow_street_art;

db.dropDatabase();

db.murals.insertMany([
    {
        name: "Crazy Cat Lady",
        artist: "Art Pistol and Rogue One",
        instagram: "@artpistol, @rogueoner",
        location: "96 Sauchiehall Street",
        description: "A collaboration on hoardings that were erected following the fire in, and demolition of, Victoria's nightclub.",
        year: 2019,
        lat: 55.864690,
        lng: -4.256417,
        imageUrl: "../assets/crazy_cat_lady.jpg"
    },
    {
        name: "The Lost Giant",
        artist: "Stormie Mills",
        instagram: "@stormiemills",
        location: "156 Elmbank Street",
        description: "Australian artist Stormie Mills has installed his famous Lost Giant series in numerous towns and cities worldwide. ",
        year: 2017,
        lat: 55.865558,
        lng: -4.267994,
        imageUrl: "../assets/lost_giant.jpg"
    },
    {
        name: "Dr Connolly, I presume",
        artist: "Rogue One",
        instagram: "@rogueoner",
        location: "19 Dixon Street",
        description: "A reproduction of the Jack Vettriano painting from the World Tour of Scotland series in 1994 titled Dr Connolly I Presume",
        lat: 55.856538,
        lng: -4.255570,
        imageUrl: "../assets/dr_connolly.jpg"
    },
    {
        name: "Shadow Hand Puppets",
        artist: "Rogue One",
        instagram: "@rogueoner",
        location: "Cowcaddens Subway station underpass",
        description: "Commissioned by Glasgow City Council to brighten up a dingy, but well used, underpass.",
        lat: 55.856538,
        lng: -4.255570,
        imageUrl: "../assets/shadow_hand_puppets.jpg"
    }
]);