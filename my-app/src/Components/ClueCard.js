
import {useState} from "react";

function ClueCard({clue, setDisplay, setResponseText}) {

    const [disabled, setDisabled] = useState(false);

    function handleClick() {
        setResponseText("");
        setDisplay(clue);
        /* onClickDelete(clue.id) */
        setDisabled(true);
    }

    return(
        <div className="clueCard" onClick={handleClick} disabled={disabled}>
            <h3>${clue.value}</h3>
        </div>
    ) 
}

export default ClueCard;