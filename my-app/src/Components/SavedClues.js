import {useState, useEffect} from "react";

function SavedClues() {

    const [savedClues, setSavedClues] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/saved")
        .then(response => response.json())
        .then(clueData => setSavedClues(clueData))
    }, [])

    const savedClueItems = savedClues.map(clue => {
        return <li><strong>Question:</strong> {clue.question} | <strong>Answer:</strong> <em>{clue.answer}</em></li>
    })


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