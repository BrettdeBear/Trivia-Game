import {useState} from "react";


function ClueDisplay({clue, points, setPoints, showAnswer, setShowAnswer}) {
    
    // const [displayQ, setDisplayQ] = useState(true)
    const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
    const showPointsButton = showAnswer ? (
        <div>
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
    
    // function handleRemove(id) {
    //     const newDisplay = displayQ.filter((clueObj) => {
    //         return clueObj.id !== id
    //     })
    //     setDisplayQ(newDisplay)
    // }

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