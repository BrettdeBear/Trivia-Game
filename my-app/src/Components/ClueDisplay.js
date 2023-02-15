import {useState} from "react";


function ClueDisplay({clue, points, setPoints, showAnswer, setShowAnswer}) {
    
    
    const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
    const showPointsButton = showAnswer ? (
        <div>
            <p>Did you get the correct answer?</p>
            <button onClick={handleAddPoints}>Yes</button>
            <button onClick={handleSubtractPoints}>No</button>
        </div>
        ) : (
            null
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

    return (
        <div>
            <p>{clue.question}</p>
            {showAnswer ? <p>{clue.answer}</p> : null}
            <button onClick={handleClick}>{buttonText}</button>
            {showPointsButton}
        </div>
    )
}

export default ClueDisplay;