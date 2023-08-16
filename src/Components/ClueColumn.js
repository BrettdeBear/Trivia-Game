
import ClueCard from "./ClueCard";

function ClueColumn({name, clues, setDisplay, setResponseText, setCanSubmit}) {
    

    const filteredClues = clues.filter(clue => {
        if (clue.category === name) {
            return clue
        } else {
            return null
        }
    })
    const clueCards = filteredClues.map(clue => {
        return <ClueCard key={clue.id} clue={clue} setDisplay={setDisplay} setResponseText={setResponseText} setCanSubmit={setCanSubmit}/>
    })

    return (
    <div className="category">
        <h2>{name.toUpperCase()}</h2>
        {clueCards}  
    </div>
    )
}

export default ClueColumn;