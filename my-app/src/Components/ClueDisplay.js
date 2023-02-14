import {useState} from "react";


function ClueDisplay({clue}) {
    const [showAnswer, setShowAnswer] = useState(false)

    const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
  

    function handleClick(){
        setShowAnswer(showAnswer => !showAnswer)
    }

    return (
        <div>
            <p>{clue.question}</p>
            {showAnswer ? <p>{clue.answer}</p> : null}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default ClueDisplay;