import ClueColumn from "./ClueColumn";
import ClueDisplay from "./ClueDisplay";

function Gameboard({clues}) {

   const distinctCategories = [...new Set(clues.map(clue => clue.category))];
   const clueColumns = distinctCategories.map(category => {
      return <ClueColumn key={category} name={category} clues={clues}/>
   })


    return(
     <div className="gameboard">
         {clueColumns}
     </div>
     )
}

export default Gameboard;