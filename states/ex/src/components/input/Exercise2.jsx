import { useState } from "react";

function Exercise2 (){
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => setFruit(e.target.value)}
        value={fruit}
      >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
      </select>
      {
        console.log(  name+ " selected " +fruit)
      }
    </div>
  );
};
export default Exercise2;