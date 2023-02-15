function SavedClues({savedClues}) {

    const savedClueItems = savedClues.map(clue => {
        return (
        <li key={clue.id}><strong>Question:</strong> {clue.question} | <strong>Answer:</strong> <em>{clue.answer}</em>
        <br/>
        <button>Delete</button>
        </li>
    )})

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