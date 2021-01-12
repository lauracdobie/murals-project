import { useState } from "react";

function TourFilter({tourMuralFilter, murals, setFilteredMurals}) {
    const [tourFilterButton, setTourFilterButton] = useState("View my mural tour");
    const handleFilterTour = () => {
        if (tourFilterButton === "View my mural tour") {
            tourMuralFilter();
            setTourFilterButton("View all murals")
        }
        else {
            setFilteredMurals(murals);
            setTourFilterButton("View my mural tour");
        }

    }

    return (
        <button onClick={handleFilterTour}>{tourFilterButton}</button>
    )
}
export default TourFilter;