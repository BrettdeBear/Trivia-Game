import { useState } from "react";
import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";
import PointsDisplay from "./PointsDisplay";


function Gameboard({clues, savedClues, setSavedClues, onClickDelete}) {

    const [display, setDisplay] = useState({})
    const [points, setPoints] = useState(0)

   const distinctCategories = [...new Set(clues.map(clue => clue.category))];
   const clueColumns = distinctCategories.map(category => {
      return <ClueColumn key={category} name={category} clues={clues} setDisplay={setDisplay} onClickDelete={onClickDelete} />
   })


    return(
      <div>
        <PointsDisplay points={points} />
         <ClueDisplay clue={display} setPoints={setPoints} points={points} savedClues={savedClues} setSavedClues={setSavedClues}/>
         <div className="gameboard">
            {clueColumns}
         </div>
      </div>
     
     )

}

export default Gameboard;