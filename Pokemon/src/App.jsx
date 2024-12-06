import { useState } from "react";
import "./App.css";
import PokemonApplication from "./components/PokemonApplication"

function App() {
  const [showApp, setShowApp] = useState(false); 
  return (
    <>
      <h1>Pokemon App</h1>
      <div>
        <button onClick={() => setShowApp(!showApp)}>
          {showApp ? "Back" : "Start"}
        </button>
      </div>
      {showApp && <PokemonApplication />}
    </>
  );
}

export default App;
