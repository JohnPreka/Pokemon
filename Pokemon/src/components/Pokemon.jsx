const Pokemon = ({ details }) => {
  return (
    <>
      <div className="card">
        <img className="image" src={details.sprites.front_default} alt={details.name}></img>
        <p>
          <strong>Name: </strong>
          {details.name}
        </p>
        <p>
          <strong>Weight: </strong> {details.weight} Lbs
        </p>
        <p>
          <strong>Height: </strong> {details.height} Dm
        </p>
        <div className="types">
          <p>
            <strong>Ability: </strong>
          </p>
          <div className="list">
            {details.types.map((type, idx) => ( 
              <p key={idx}>{type.type.name}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon
