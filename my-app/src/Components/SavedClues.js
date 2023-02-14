import {useState, useEffect} from "react";

function SavedClues() {

    const [savedClues, setSavedClues] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/saved")
        .then(response => response.json())
        .then(clueData => setSavedClues(clueData))
    }, [])

    const savedClueItems = savedClues.map(clue => {
        return <li>Question: {clue.question} Answer: {clue.answer}</li>
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