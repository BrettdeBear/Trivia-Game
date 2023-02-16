
function ClueCard({clue, setDisplay, onClickDelete, setResponseText}) {

    function handleClick() {
        setResponseText("");
        setDisplay(clue);
        onClickDelete(clue.id)
    }

    return(
        <div className="clueCard" onClick={handleClick}>
            <h3>${clue.value}</h3>
        </div>
    ) 
}

export default ClueCard;