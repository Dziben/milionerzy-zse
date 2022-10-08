import React from "react";
import "./App.scss";
import TaskList from "./TaskList"

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskList/>
    </div>
  );
};

export default App;
