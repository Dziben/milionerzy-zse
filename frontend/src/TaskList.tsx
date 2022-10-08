import React, { useState } from "react";
import classes from "./TaskList.module.scss";

const TaskList: React.FC = () => {
  const startTasks = ['Gówno', 'task 2', 'task 3', 'task 4'];
  const [message, setMessage] = useState('coś');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  }

  const [tasks, setTasks] = useState<string[]>(startTasks);

  const handleClick = () => {
    setTasks(oldTasks => {
      return [...oldTasks, 'cośtam'];
    });
  }

  return (
    <div>
      <div className={classes.container}>
        <h1>Lista Zadań</h1>
        <div className={classes.tasks}>
          <div className={classes.task}>
            <h1>Task 1 - {message}</h1>
            <div>
              <button>✎</button>
              <button>✓</button>
              <button>🞩</button>
            </div>
          </div>
          {tasks.map(task =>
          (
            <div className={classes.task}>
              <h1>{task} - {message}</h1>
              <div>
                <button>✎</button>
                <button>✓</button>
                <button>🞩</button>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.createTask}>
          <input type="text" placeholder="Nazwa Zadania" onChange={handleChange} />
          <button onClick={handleClick}>Dodaj Zadanie</button>
        </div>
      </div>
    </div >
  );
};

export default TaskList;
