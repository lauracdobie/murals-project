function TourFilter({tourMuralFilter}) {
    const handleFilterTour = () => {
        tourMuralFilter();
    }

    return (
        <button onClick={handleFilterTour}>View my mural tour</button>
    )
}
export default TourFilter;