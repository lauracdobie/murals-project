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
        name: "Study of a Woman in Black(3)",
        artist: "James Klinge",
        instagram: "jamesklinge_art",
        location: "146 Saltmarket",
        description: "This is the first of three installations titled Study of a Woman in Black. They’re all created by James Klinge. These ones are some really detailed murals.",
        year: 2016, 
        lat: 55.86452994056858, 
        lng: -4.257834800604407,
        imageUrl: "./static/woman_in_black_3.jpg",
        likes: 0
    },
    {
        name: "The Musician",
        artist: "Rogue-One",
        instagram: "rogueoner",
        location: "Sauchiehall Lane",
        description: "Glasgow has a fantastic live music scene, and down the lanes, round the back of the bars in the heart of Glasgow is the perfect place for this Musician mural.",
        year: 2017, 
        lat: 55.854975323566705, 
        lng: -4.24585778660124,
        imageUrl: "./static/the_musician.jpg",
        likes: 0
    },
    {
        name: "The Swimmer",
        artist: "Smug",
        instagram: "smugone",
        location: "Anderston Quay",
        description: "One of the first murals to have been painted by Smug, this installation celebrates Glasgows 2014 Commonwealth Games. At the Kingston Bridge, a concrete wall is emblazoned with huge Commonwealth swimmers greeting drivers waiting at the traffic lights.",
        year: 2014, 
        lat: 55.85683129410766, 
        lng: -4.27024220747374,
        imageUrl: "./static/the_swimmer.jpg",
        likes: 0
    },
    {
        name: "Today we're in love aren't we?",
        artist: "Cobolt Collective",
        instagram: "coboltcollective",
        location: "Brown Street Car Park",
        description: "Celebrating 30 years of the Glasgow's Doors Open Days Festival and the 500 or so buildings which have been included within its programme, this mural showcases the diverse range of architecture within the city.",
        year: 2019, 
        lat: 55.85815102993528, 
        lng: -4.265043872630641,
        imageUrl: "./static/today_we're_in_love.jpg",
        likes: 0
    },
    {
        name: "Bubbles",
        artist: "Art Pistol and Rogue One",
        instagram: "artpistol",
        instagram2: "rogueoner",
        location: "Renfield Lane",
        description: "Renfield Lane features some amazing architecture and this lane is all about making this lane a more welcoming and bonny place. Here we see Rogue put his considerable talents on two facing walls to create a uniqure spectacle.",
        year: 2019, 
        lat: 55.863546657324015, 
        lng: -4.255969363017519,
        imageUrl: ".static/bubbles.jgp",
        likes: 0
    },
    {
        name: "As Good as Gold",
        artist: "Ciarán Glöbel and Conzo Throb",
        instagram: "ciaranglobel",
        instagram2: "conzothrob",
        location: "Buchanan Street",
        description: "As Good as Gold by street artist duo Ciarán Glöbel and Conzo Throb is a comment on inflation via the popular chocolate bar Freddo, which used to only cost 10p to buy. The city's latest mural can be found just off Buchanan Street, down the lane beside Princes Square.",
        year: 2019, 
        lat: 55.86209272356093, 
        lng: -4.253904515211911,
        imageUrl: "./static/good_as_gold.jpg",
        likes: 0
    }

]);