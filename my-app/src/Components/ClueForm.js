import { useEffect, useState } from "react";

function ClueForm({ clues, setClues }) {

    const [submittedClues, setSubmittedClues] = useState([])
    const [formData, setFormData] = useState({
        question: "",
        answer: "",
        points: "100",
        category: "Movies",
    })

    function handleInput(event) {
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:4000/submitted", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newClue => setSubmittedClues([...submittedClues, newClue]))
    }

    useEffect(() => {
        fetch("http://localhost:4000/submitted")
            .then(response => response.json())
            .then((clueData) => setSubmittedClues(clueData))
    }, [])

    function deleteSubmittedClue(id) {
        const newSubmitted = submittedClues.filter(clue => {
            return clue.id !== id
        })
        fetch(`http://localhost:4000/submitted/${id}`, {
            method: "DELETE"
        })
        .then(setSubmittedClues(newSubmitted))
    }

    const renderSubmittedClues = submittedClues.map((clue) => {
        return <li key={clue.id}>
            <strong>Question: </strong>
            {clue.question}
            <br></br>
            <strong>Answer: </strong>
            {clue.answer}
            <br></br>
            <strong>Point Value: </strong>
            {clue.points}
            <br></br>
            <strong>Category: </strong>
            {clue.category}
            <br></br>
            <button onClick={() => deleteSubmittedClue(clue.id)}>Delete Clue</button>
        </li>
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Question: </label>
                <input 
                    type="text" 
                    id="question"
                    name="question"
                    placeholder="Question..." 
                    onChange={handleInput}
                    value={formData.question}
                />
                <label htmlFor="question">Answer: </label>
                <input 
                    type="text" 
                    id="answer"
                    name="answer"
                    placeholder="Answer..." 
                    onChange={handleInput}
                    value={formData.answer}
                />
                <label>
                    Point Value:
                    <select name="points" id="points" onChange={handleInput} value={formData.points}>
                        <option value="100">100 Points</option>
                        <option value="200">200 Points</option>
                        <option value="300">300 Points</option>
                        <option value="400">400 Points</option>
                        <option value="500">500 Points</option>
                    </select>
                </label>
                <label>
                    Category: 
                    <select name="category" id="category" onChange={handleInput} value={formData.category}>
                    <option value="movies">Movies</option>
                    <option value="uscities">US Cities</option>
                    <option value="sports">Sports</option>
                    <option value="oddjobs">Odd Jobs</option>
                    <option value="foodfacts">Food Facts</option>
                    <option value="people">People</option>
                    </select>
                </label>
                <button type="submit">Submit Clue</button>
            </form>
            <h2>Submitted Clues: </h2>
            <ul>
                {renderSubmittedClues}
            </ul>
        </div>
    )
}

export default ClueForm;