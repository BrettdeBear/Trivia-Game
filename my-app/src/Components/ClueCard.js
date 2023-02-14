function ClueCard({clue, setDisplay, setShowAnswer}) {

    function handleClick() {
        setShowAnswer(false);
        setDisplay(clue);
    }

    return(
        <div onClick={handleClick}>
            <h3>{clue.value}</h3>
        </div>
    ) 
}

export default ClueCard;