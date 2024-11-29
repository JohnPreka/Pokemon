import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = () => {
  const [list, setList] = useState([]); 
  const [selectedId, setSelectedId] = useState(""); 
  const [details, setDetails] = useState(null); 
  const [errorMsg, setErrorMsg] = useState(""); 

  useEffect(() => {
    const fetchList = async () => { 
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setList(data.results); 
    };
    fetchList();
  }, []);

  const fetchDetails = async () => { 
    if (!selectedId) {
      setErrorMsg("Please choose a Pokemon."); 
      return;
    }
    setErrorMsg(""); 
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedId}`);
    const data = await res.json();
    setDetails(data); 
  };

  return (
    <>
      <div className="container">
        <select className="dropdown" onChange={(e) => setSelectedId(e.target.value)}>
          <option value="">Choose Pokemon</option>
          {list.map((item, idx) => (
            <option key={idx} value={idx + 1}>
              {item.name}
            </option>
          ))}
        </select>
        <button onClick={fetchDetails}>Get Details</button>
        {errorMsg && <p className="error">{errorMsg}</p>} 
      </div>
      {details && <Pokemon details={details} />} 
    </>
  );
};

export default PokemonApplication;
