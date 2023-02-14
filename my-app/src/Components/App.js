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
    fetch("http://localhost:4000/clues")
      .then((response) => response.json())
      .then((clueData) => setClues(clueData))
  }, [])

  useEffect(() => {
    fetch("http://localhost:4000/saved")
    .then(response => response.json())
    .then(clueData => setSavedClues(clueData))
}, [])

  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <Gameboard clues={clues} savedClues={savedClues}/>
        </Route>
        <Route path="/submit">
          <ClueForm />
        </Route>
        <Route>
          <SavedClues path="/saved" savedClues={savedClues}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
