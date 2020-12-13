import React from "react";
import "./index.css";

function Lists(props) {
  const names = ["Afghanistan", "China", "India", "Iran"];
  return (
    <div className="d-flex justify-content-around">
      <div>
        <p>This list has an image instead of bullet</p>
        <ul>
          {names.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>This list starts at 5</p>
        <ol start="5">
          {names.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </div>
      <div>
        <p>This list starts at 2 and is reversed</p>
        <ol start="2" reversed>
          {names.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </div>
      <div>
        <p>This list has numbers on the li tag</p>
        <ol>
          {names.map((x, i) => (
            <li key={x} value={i + 4}>
              {x}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Lists;
