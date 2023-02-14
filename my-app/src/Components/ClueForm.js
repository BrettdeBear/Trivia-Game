import { useState } from "react";

function ClueForm() {

    const [formData, setFormData] = useState({
        clue: "",
        answer: "",
        points: "100",
    })

    const handleInput = (event) => {
        const key = event.target.name
        const value = event.target.value

        setFormData({...formData, [key]: value})
    }

    return (
        <div>
            <form>
                <label htmlFor="question">Clue: </label>
                <input 
                    type="text" 
                    id="clue"
                    name="clue"
                    placeholder="Clue..." 
                    onChange={handleInput}
                    value={formData.clue}
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
                <button type="submit">Submit Clue</button>
            </form>
        </div>
    )
}

export default ClueForm;