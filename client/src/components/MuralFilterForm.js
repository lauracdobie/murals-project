const MuralFilterForm = ( { onUserInput } ) => {
  const handleFilterInput = (event) => {
    const userInput = event.target.value;
    onUserInput(userInput);
  };

  return (
    <div id="mural-filter">
      <span>Mural Filter: </span>
      <input  placeholder="Search for artist..." onChange={handleFilterInput} type="text" id="mural-input"/>
    </div>
  )

};

export default MuralFilterForm;