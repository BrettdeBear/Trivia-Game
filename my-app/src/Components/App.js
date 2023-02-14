import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ClueForm from "./ClueForm";
import Gameboard from "./Gameboard";
import SavedClues from "./SavedClues";

function App() {
  const [clues, setClues] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/clues")
      .then((response) => response.json())
      .then((clueData) => setClues(clueData))
  }, [])
  console.log(clues)

  return (
    <div className="App">
      <header className="App-header">
        <Gameboard clues={clues}/>
      </header>
    </div>
  );
}

export default App;
