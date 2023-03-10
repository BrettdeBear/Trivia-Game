function SavedClues({savedClues, setSavedClues}) {

    const savedClueItems = savedClues.map(clue => {
        return (
        <ul className="savedClue" key={clue.id}>
            <li><strong>Question: </strong> {clue.question}</li>
            <li><strong>Answer: </strong> <em>{clue.answer}</em></li>
            <li><strong>Value: </strong>${clue.value}</li>
            <li><strong>Category: </strong>{clue.category.toUpperCase()}</li>
            <br/>     
            <button onClick={() => handleDelete(clue.id)}>Delete</button>
        </ul>
    )})

    function handleDelete(deletedClueId) {
        const updatedSavedClues = savedClues.filter(clue => clue.id !== deletedClueId)
        fetch(`http://localhost:4000/saved/${deletedClueId}`, {
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