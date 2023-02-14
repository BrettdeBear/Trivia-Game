import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";

function Gameboard() {
    return(
     <div className="gameboard">
        <ClueColumn />
        <ClueColumn />
        <ClueColumn />
        <ClueColumn />
        <ClueColumn />
        <ClueColumn />
     </div>
     )
}

export default Gameboard;