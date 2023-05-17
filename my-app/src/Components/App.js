import { useEffect, useState } from "react";
import Header from "./Header";
import ClueForm from "./ClueForm";
import Gameboard from "./Gameboard";
import SavedClues from "./SavedClues";
import {Switch, Route} from "react-router-dom";

function App() {
  const [clues, setClues] = useState([])
  const [savedClues, setSavedClues] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/clues`)
      .then((response) => response.json())
      .then((clueData) => setClues(clueData))
  }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/saved`)
    .then(response => response.json())
    .then(clueData => setSavedClues(clueData))
}, [])

  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <Gameboard clues={clues} savedClues={savedClues} setSavedClues={setSavedClues}/>
        </Route>
        <Route path="/submit">
          <ClueForm clues={clues} setClues={setClues}/>
        </Route>
        <Route>
          <SavedClues path="/saved" savedClues={savedClues} setSavedClues={setSavedClues}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
