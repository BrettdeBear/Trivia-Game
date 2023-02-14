import ClueCard from "./ClueCard";

function ClueColumn({name, clues}) {

    const filteredClues = clues.filter(clue => {
        if (clue.category === name) {
            return clue
        }
    })
    const clueCards = filteredClues.map(clue => {
        return <ClueCard key={clue.id} clue={clue}/>
    })

    return (
    <div className="category">
        <h2>{name}</h2>
        {clueCards}  
    </div>
    )
}

export default ClueColumn;