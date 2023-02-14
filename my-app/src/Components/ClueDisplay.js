import {useState} from "react";


function ClueDisplay({clue, points, setPoints, showAnswer, setShowAnswer, savedClues}) {
    

    const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
    const showPointsButton = showAnswer ? (
        <div>
            <button onClick={handleAddPoints}>Yes</button>
            <button onClick={handleSubtractPoints}>No</button>
        </div>
        ) : (
            null
        )
    const savedClueIds = savedClues.map(clue => {
        return clue.id})
    console.log(savedClueIds);


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
            .then(savedClue => console.log(savedClue))
        }


    return (
        <div>
            <p>{clue.question}</p>
            {showAnswer ? <p>{clue.answer}</p> : null}
            <button onClick={handleClick}>{buttonText}</button>
            {showPointsButton}
            <button onClick={handleSave}>Save Clue</button>
        </div>
    )
}

export default ClueDisplay;