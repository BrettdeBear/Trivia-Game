import {useState, useEffect} from "react";


function ClueDisplay({clue, points, setPoints, showAnswer, setShowAnswer, savedClues, setSavedClues}) {

    const [isSaved, setIsSaved] = useState(false)
    const savedClueIds = savedClues.map(clue => {
        return clue.id})

    useEffect(() => {


        function checkIfSaved(){
            if (savedClueIds.includes(clue.id)) {
                setIsSaved(true)
                console.log("This is a saved question!")
            } else {
                setIsSaved(false)
                console.log("This question is unsaved.")
            } 
        }
        checkIfSaved();
    })
    
    const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
    const showPointsButton = showAnswer ? (
        <div>
            <button onClick={handleAddPoints}>Yes</button>
            <button onClick={handleSubtractPoints}>No</button>
        </div>
        ) : (
            null
        )
    

    //const isSaved = savedClueIds.includes(clue.id)

    const showSaveUnsave = isSaved ? (
        <button>Unsave Clue</button>
    ) : (
        <button onClick={handleSave}>Save Clue</button>
    )

    function handleClick(){
        setShowAnswer(showAnswer => !showAnswer)
    }

    function handleAddPoints() {
        setPoints(points => points + clue.value)
    }

    function handleSubtractPoints() {
        setPoints(points => points - clue.value)
    }

    function handleSave() {
        fetch("http://localhost:4000/saved", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(clue) 
            })
            .then(response => response.json())
            .then(savedClue => setSavedClues([...savedClues, savedClue]))
        }


    return (
        <div>
            <p>{clue.question}</p>
            {showAnswer ? <p>{clue.answer}</p> : null}
            <button onClick={handleClick}>{buttonText}</button>
            {showPointsButton}
            {showSaveUnsave}
        </div>
    )
}

export default ClueDisplay;