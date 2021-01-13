import './MuralFilterForm.css';

const MuralFilterForm = ( { onUserInput, onUserSelect} ) => {
  const handleFilterInput = (event) => {
    const userInput = event.target.value;
    onUserInput(userInput);
  };
  const handleFilterSelect = (event) => {
    const userInput = event.target.value;
    onUserSelect(userInput);
  };

  return (
    <div id="mural-filter">
      <span className="mural-filter-title">Filter </span>
      <select onChange={handleFilterSelect} name="mural-search-type" id="mural-filter-select">
        <option value="">Choose a filter</option>
        <option value="name">Name</option>
        <option value="artist">Artist</option>
        <option value="year">Year</option>
      </select>
      <input  placeholder="Enter keyword" onChange={handleFilterInput} type="text" id="mural-input"/>
    </div>
  )

};

export default MuralFilterForm;