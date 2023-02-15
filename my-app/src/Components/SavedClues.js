function SavedClues({savedClues, setSavedClues}) {

    const savedClueItems = savedClues.map(clue => {
        return (
        <li key={clue.id}><strong>Question:</strong> {clue.question} | <strong>Answer:</strong> <em>{clue.answer}</em>
        <br/>
        <button onClick={() => handleDelete(clue.id)}>Delete</button>
        </li>
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
            <h2>Saved Clues</h2>
            <ul>
                {savedClueItems}
            </ul>
        </div>
    )
}

export default SavedClues;