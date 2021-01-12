use glasgow_street_art;

db.dropDatabase();

db.murals.insertMany([
    {
        name: "Crazy Cat Lady",
        artist: "Art Pistol and Rogue One",
        instagram: "artpistol",
        instagram2: "rogueoner",
        location: "96 Sauchiehall Street",
        description: "A collaboration on hoardings that were erected following the fire in, and demolition of, Victoria's nightclub.",
        year: 2019,
        lat: 55.8648678764273,
        lng: -4.2564708648664045,
        imageUrl: "./static/crazy_cat_lady.jpg",
        likes: 0
    },
    {
        name: "The Lost Giant",
        artist: "Stormie Mills",
        instagram: "stormiemills",
        location: "156 Elmbank Street",
        description: "Australian artist Stormie Mills has installed his famous Lost Giant series in numerous towns and cities worldwide. ",
        year: 2017,
        lat: 55.865558,
        lng: -4.267994,
        imageUrl: "./static/lost_giant.jpg",
        likes: 0
    },
    {
        name: "Dr Connolly, I presume",
        artist: "Rogue One",
        instagram: "rogueoner",
        location: "19 Dixon Street",
        description: "A reproduction of the Jack Vettriano painting from the World Tour of Scotland series in 1994 titled Dr Connolly I Presume",
        year: 2017,
        lat: 55.856538477588614,
        lng: -4.25557000806331,
        imageUrl: "./static/dr_connolly.jpg",
        likes: 0
    },
    {
        name: "Shadow Hand Puppets",
        artist: "Rogue One",
        instagram: "rogueoner",
        location: "Cowcaddens Subway station underpass",
        description: "Commissioned by Glasgow City Council to brighten up a dingy, but well used, underpass.",
        year: 2014,
        lat: 55.868329167922745, 
        lng: -4.2600252186499565,
        imageUrl: "./static/shadow_hand_puppets.jpg",
        likes: 0
    },
    {
        name: "Strathclyde University",
        artist: "Art Pistol, Rogue One and Ejek",
        instagram: "artpistol",
        instagram2: "rogueoner",
        instagram3: "ejek98",
        location: "George Street",
        description: "This piece of street art celebrates the people of the University of Strathclyde and their many achievements.",
        year: 2014,
        lat: 55.861397639899046, 
        lng: -4.2424881878469325, 
        imageUrl: "./static/strathclyde_university.jpg",
        likes: 0
    },
    {
        name: "Saint Mungo",
        artist: "Smug",
        instagram: "smugone",
        location: "287 High Street",
        description: "Another piece of work by Smug, adding to his impressive portfolio of work.",
        year: 2016,
        lat: 55.860984159574954,
        lng: -4.238506372111869, 
        imageUrl: "./static/saint_mungo.jpg",
        likes: 0
    },
    {
        name: "Saint Enoch",
        artist: "Smug",
        instagram: "smugone",
        location: "George Street",
        description: "Following his extremely success St. Mungo, he created what would be considered a companion piece.",
        year: 2016,
        lat: 55.86042851109628,
        lng: -4.24063450520772,
        imageUrl: "./static/saint_enoch.jpg",
        likes: 0
    },
    {
        name: "Fellow Glasgow Residents",
        artist: "Smug",
        instagram: "smugone",
        location: "Ingram Street (@NCP)",
        description: "This piece of art by Smug replaced what was previously a gable end wall with nothing more than peeling paint and graffiti.",
        year: 2013,
        lat: 55.85919362187882,
        lng: -4.244316500947801,
        imageUrl: "./static/fellow_glasgow.jpg",
        likes: 0
    },
    {
        name: "Badminton",
        artist: "Guido Van Helten and Art Pistol",
        instagram: "guidovanhelten",
        instagram2: "artpistol",
        location: "Wilson Street",
        description: "Installed as a part of a promotional campaign for the 2014 Commonwealth games. This mural is part of a collection of murals representing various sports within the games.",
        year: 2014,
        lat: 55.85851689610548,
        lng: -4.246794800081792,
        imageUrl: "./static/badminton.jpg",
        likes: 0
    },
    {
        name: "Space Man",
        artist: "Ali Wylie and Recoat",
        instagram: "recoat",
        location: "New Wynd",
        description: "Bringing some vibrant colours to the city centre lane.",
        year: 2014,
        lat: 55.8570190573762, 
        lng: -4.247197529783755,
        imageUrl: "./static/space_man.jpg",
        likes: 0
    },
    {
        name: "Billy Connolly",
        artist: "Rogue and Art Pistol",
        instagram: "rogueone",
        instagram2: "artpistol",
        location: "Osborne Street",
        description: "Commemoration of Billy Connolly's 75th Birthday.",
        year: 2017,
        lat: 55.85647641568549,
        lng: -4.2486076432759665,
        imageUrl: "./static/billy_connolly.jpg",
        likes: 0
    },
    {
        name: "Study of a Woman in Black 1",
        artist: "Klingatron",
        instagram: "jamesklinge_art",
        location: "Bridgegate Path",
        description: "James Klinge created this mural with a specific focus on detail through distinctive use of intricate stencil techniques.",
        year: 2017,
        lat: 55.85497534234021,
        lng: -4.245830972111935,
        imageUrl: "./static/woman_in_black.jpg",
        likes: 0
    },
    {
        name: "Study of a Woman in Black 2",
        artist: "Klingatron",
        instagram: "jamesklinge_art",
        location: "St Andrews Street",
        description: "Another mural by Klinge with a specific focus on detail through distinctive use of intricate stencil techniques.",
        year: 2018,
        lat: 55.85566330579437,
        lng: -4.2444880739633355,
        imageUrl: "./static/woman_in_black2.jpg",
        likes: 0
    },
    {
        name: "Mackintosh",
        artist: "Smug",
        instagram: "smugone",
        location: "Clutha",
        description: "Directly above the Clutha, this mural pays homage to one of Glasgow's most famous sons, Charles Rennie.",
        year: 2016,
        lat: 55.85446426608605, 
        lng: -4.249790885604259,
        imageUrl: "./static/mackintosh.jpg",
        likes: 0
    },
    {
        name: "",
        artist: "",
        instagram: "",
        instagram2: "",
        location: "",
        description: "",
        year: 201,
        lat:
        lng:
        imageUrl: "./static/.jpg",
        likes: 0
    },
    {
        name: "",
        artist: "",
        instagram: "",
        instagram2: "",
        location: "",
        description: "",
        year: 201,
        lat:
        lng:
        imageUrl: "./static/.jpg",
        likes: 0
    },
]);