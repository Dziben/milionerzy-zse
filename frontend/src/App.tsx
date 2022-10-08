import React from "react";
import "./App.scss";
import Koty from "./Koty";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Koty />
      </header>
    </div>
  );
};

export default App;
