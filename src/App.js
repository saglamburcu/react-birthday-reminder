import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <div className="list-container">
        <div className="title">
          <h1>{people.length} birthdays today</h1>
        </div>
        <div className="list">
          <List people={people} />
        </div>
        <div className="button-container">
          <button type="button" onClick={() => setPeople([])}>Clear All</button>
        </div>
      </div>
    </div>
  )
};

export default App;