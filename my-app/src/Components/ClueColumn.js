
import ClueCard from "./ClueCard";

function ClueColumn({name, clues, setDisplay, setShowAnswer, onClickDelete}) {
    

    const filteredClues = clues.filter(clue => {
        if (clue.category === name) {
            return clue
        }
    })
    const clueCards = filteredClues.map(clue => {
        return <ClueCard key={clue.id} clue={clue} setDisplay={setDisplay} setShowAnswer={setShowAnswer} onClickDelete={onClickDelete} />
    })

    return (
    <div className="category">
        <h2>{name.toUpperCase()}</h2>
        {clueCards}  
    </div>
    )
}

export default ClueColumn;