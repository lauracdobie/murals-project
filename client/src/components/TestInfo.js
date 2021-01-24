function TestInfo({tourMurals}) {
    console.log("tour murals list");
    console.log(tourMurals)
    const displayTourMurals = () => {
        if (tourMurals.length = 0) {
            return <p>There are no murals in your list!</p>;
        }

        else {
            tourMurals.map(mural => <p>{mural.name}</p>);
            // console.log(mural.name)
        }

    }

    return (
        <>
            <h1>TourInfo</h1>
            {displayTourMurals()}
        </>
    );
}

export default TestInfo;