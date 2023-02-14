import { useEffect, useState } from "react";
import Header from "./Header";
import ClueForm from "./ClueForm";
import Gameboard from "./Gameboard";
import SavedClues from "./SavedClues";

function App() {
  const [clues, setClues] = useState([])
  const [points, setPoints] = useState(0)

  useEffect(() => {
    fetch("http://localhost:4000/clues")
      .then((response) => response.json())
      .then((clueData) => setClues(clueData))
  }, [])
  console.log(clues)

  return (
    <div className="App">
        <Header points={points}/>
        <Gameboard clues={clues} points={points} setPoints={setPoints}/>
    </div>
  );
}

export default App;
