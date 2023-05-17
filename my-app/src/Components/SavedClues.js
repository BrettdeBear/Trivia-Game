function SavedClues({savedClues, setSavedClues}) {

    const savedClueItems = savedClues.map(clue => {
        return (
        <div className="savedClue" key={clue.id}>
            <ul>
                <li><strong>Question: </strong> {clue.question}</li>
                <li><strong>Answer: </strong> <em>{clue.answer}</em></li>
                <li><strong>Value: </strong>${clue.value}</li>
                <li><strong>Category: </strong>{clue.category.toUpperCase()}</li>
            </ul>
            <br />  
            <button onClick={() => handleDelete(clue.id)}>Delete</button>
        </div>
    )})
    
    function handleDelete(deletedClueId) {
        const updatedSavedClues = savedClues.filter(clue => clue.id !== deletedClueId)
        fetch(`${process.env.REACT_APP_API_URL}/saved/${deletedClueId}`, {
            method: "DELETE"
        })
        .then(setSavedClues(updatedSavedClues))
    }

    return(
        <div>
            <h2 className="clueH2">Saved Clues</h2>
            <ul id="savedClueContainer">
                {savedClueItems}
            </ul>
        </div>
    )
}

export default SavedClues;