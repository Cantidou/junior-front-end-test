import React from "react";
import Card from "./components/Card";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/Cantidou/json-server/catFood")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="container-content">
          {items.map((obj, i) => (
            <Card key={i} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
