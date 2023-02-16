import { useState } from "react";
import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";
import PointsDisplay from "./PointsDisplay";
import Felix from "../assets/podium.jpg"


function Gameboard({clues, savedClues, setSavedClues, onClickDelete}) {

    const [display, setDisplay] = useState({})
    const [points, setPoints] = useState(0)
    const [responseText, setResponseText] = useState("")

   const distinctCategories = [...new Set(clues.map(clue => clue.category))];
   const clueColumns = distinctCategories.map(category => {
      return <ClueColumn key={category} name={category} clues={clues} setDisplay={setDisplay} onClickDelete={onClickDelete} setResponseText={setResponseText}/>
   })


    return(
      <div id="main-game">
        <PointsDisplay points={points} />
         <ClueDisplay clue={display} setPoints={setPoints} points={points} savedClues={savedClues} setSavedClues={setSavedClues} responseText={responseText} setResponseText={setResponseText}/>
         <h2>Game Board</h2>
         <img src={Felix} alt="Host Felix Quebec instructs you to click on a card to view its clue." />
         <div className="gameboard">
            {clueColumns}
         </div>
      </div>
     
     )

}

export default Gameboard;