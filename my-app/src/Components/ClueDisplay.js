import {useState, useEffect} from "react";
import Fuse from 'fuse.js'

// Now we're going to add answer inputs! 
// Hello Brett!

function ClueDisplay({clue, points, setPoints, savedClues, setSavedClues, responseText, setResponseText}) {

    const [isSaved, setIsSaved] = useState(false)
    

    const savedClueIds = savedClues.map(clue => {
        return clue.id})
    const [answer, setAnswer] = useState("")
    
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

    //////////// Original Point Tracking Logic /////////////////
    
    // const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
    // const showPointsButton = showAnswer ? (
    //     <div>
    //         <p>Did you get the correct answer?</p>
    //         <button onClick={handleAddPoints}>Yes</button>
    //         <button onClick={handleSubtractPoints}>No</button>
    //     </div>
    //     ) : (
    //         null
    //     )
    
    const showSaveUnsave = isSaved ? (
        <button onClick={handleDelete}>Unsave Clue</button>
    ) : (
        <button onClick={handleSave}>Save Clue</button>
    )

    function handleAddPoints(clueValue) {
        setPoints(points => points + clueValue)
    }

    function handleSubtractPoints(clueValue) {
        setPoints(points => points - clueValue)
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
    
        function handleDelete() {
            const deletedClueId = clue.id
            const updatedSavedClues = savedClues.filter(clue => clue.id !== deletedClueId)
            fetch(`http://localhost:4000/saved/${clue.id}`, {
                method: "DELETE"
            })
            .then(setSavedClues(updatedSavedClues))
        }
    
    //let responseText;

    function handleSubmitAnswer(event) {
        event.preventDefault();
        const userAnswer = answer.toLowerCase()
        const actualAnswer = clue.answer.toLowerCase()
        const searchArray = [actualAnswer]
        const fuse = new Fuse(searchArray);
        const checkedAnswer = fuse.search(userAnswer);
        if (checkedAnswer.length > 0) {
            handleAddPoints(clue.value)
            setResponseText(`Correct! The answer is ${clue.answer}.`)

        } else {
            handleSubtractPoints(clue.value)
            setResponseText(`Incorrect! The answer is ${clue.answer}.`)
        }
        setAnswer("")
        console.log(responseText)
    }

    function handleChange(event) {
        setAnswer(event.target.value)
    }

    return (
        <div>
            <h2>Current Clue</h2>
            <p>{clue.question}</p>
            <form onSubmit={handleSubmitAnswer}>
                <label>
                    Your Answer:
                    <input type="text" name="userAnswer" value={answer} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit Answer"/>
            </form>
            <p>{responseText}</p>
            {/* {showPointsButton} */}
            {showSaveUnsave}
        </div>
    )
}

export default ClueDisplay;