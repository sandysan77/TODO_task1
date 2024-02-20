import { useState } from "react";
import Mytodo from "./Mytodo.jsx";

export default function App() {
  const [todoname, setTodoname] = useState("");
  const [description, setDescription] = useState("");
  const [boxes, setBoxes] = useState([]);
  let One = todoname.concat("," + description);

  function clearvalues() {
    setBoxes([...boxes, One]);
    setTodoname("");
    setDescription("");
  }

  return (
    <>
      <div className="container">
        <h1>MY TODO</h1>

        <div className="container1">
          <input
            onChange={(e) => setTodoname(e.target.value)}
            type="text"
            value={todoname}
            placeholder="Todo Name"
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            placeholder="Todo Description"
          />

          <button onClick={clearvalues}> Todo</button>
        </div>

        <div className="container2">
          <h3>My Todos</h3>
          
          <div className="StatusFilter">
                <h3>Status Filter :</h3>
                <select className="option">
                  <option>All</option>
                  <option>Completed</option>
                  <option>Not Completed</option>
                </select>
          </div>
        </div>

        <div className="Total">
          {boxes.map((bo, index) => (
            <Mytodo key={index} names={bo} />
          ))}
        </div>
      </div>
    </>
  );
}
