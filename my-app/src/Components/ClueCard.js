function ClueCard({clue, setDisplay, setShowAnswer, onClickDelete}) {
    console.log(clue.value)    

    function handleClick() {
        setShowAnswer(false);
        setDisplay(clue);
        onClickDelete(clue.id)
    }

    return(
        <div onClick={handleClick}>
            <h3>{clue.value}</h3>
        </div>
    ) 
}

export default ClueCard;