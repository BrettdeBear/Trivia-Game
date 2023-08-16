import { useState } from "react";
import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";
import PointsDisplay from "./PointsDisplay";
import Felix from "../assets/felixPodium.jpg"



function Gameboard({clues, savedClues, setSavedClues}) {

    const [display, setDisplay] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)
    const [points, setPoints] = useState(0)
    const [responseText, setResponseText] = useState("")

   const distinctCategories = [...new Set(clues.map(clue => clue.category))];
   const clueColumns = distinctCategories.map(category => {
      return <ClueColumn key={category} name={category} clues={clues} setDisplay={setDisplay} setResponseText={setResponseText} setCanSubmit={setCanSubmit}/>
   })


    return(
      <div id="main-game">
         <div className="game-info">
            <img src={Felix} alt="Host Felix Quebec instructs you to click on a card to view its clue." />
            <ClueDisplay clue={display} setPoints={setPoints} points={points} savedClues={savedClues} setSavedClues={setSavedClues} responseText={responseText} setResponseText={setResponseText} canSubmit={canSubmit} setCanSubmit={setCanSubmit}/>
            <PointsDisplay points={points} />
         </div>
         <h2 className="gameH2">Game Board</h2>
         <div className="gameboard">
            {
               (clues[0])
               ? clueColumns
               : <p className='load'>Loading...</p>
            }
         </div>
      </div>
     
     )

}

export default Gameboard;