
function ClueCard({clue, setDisplay, onClickDelete}) {

    function handleClick() {
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