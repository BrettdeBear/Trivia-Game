import { useState } from "react";
import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";

function Gameboard({clues, points, setPoints}) {

    const [display, setDisplay] = useState({})

   const distinctCategories = [...new Set(clues.map(clue => clue.category))];
   const clueColumns = distinctCategories.map(category => {
      return <ClueColumn key={category} name={category} clues={clues} setDisplay={setDisplay}/>
   })


    return(
      <div>
         <ClueDisplay clue={display} setPoints={setPoints} points={points}/>
         <div className="gameboard">
            {clueColumns}
         </div>
      </div>
     
     
     )




}

export default Gameboard;