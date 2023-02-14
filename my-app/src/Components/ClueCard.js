function ClueCard({clue, setDisplay}) {
    console.log(clue.value)
    

    function handleClick() {
        setDisplay(clue)
    }

    return(
        <div onClick={handleClick}>
            <h3>{clue.value}</h3>
        </div>
    ) 
}

export default ClueCard;