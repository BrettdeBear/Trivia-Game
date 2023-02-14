import { useState } from "react";
import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";

function Gameboard({clues}) {

    const [display, setDisplay] = useState()

   const distinctCategories = [...new Set(clues.map(clue => clue.category))];
   const clueColumns = distinctCategories.map(category => {
      return <ClueColumn key={category} name={category} clues={clues} setDisplay={setDisplay}/>
   })


    return(
     <div className="gameboard">
         {clueColumns}
     </div>
     )
}

export default Gameboard;