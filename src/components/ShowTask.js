import React from "react";
import style from "./showTask.module.css";

const ShowTask = () => {
  const taskList = [
    {
      id: 1,
      task: "Task-1",
      date: new Date().toLocaleString(),
    },
    {
      id: 2,
      task: "Task-2",
      date: new Date().toLocaleString(),
    },
    {
      id: 3,
      task: "Task-3",
      date: new Date().toLocaleString(),
    },
    {
      id: 4,
      task: "Task-4",
      date: new Date().toLocaleString(),
    },
    {
      id: 5,
      task: "Task-5",
      date: new Date().toLocaleString(),
    },
    {
      id: 6,
      task: "Task-6",
      date: new Date().toLocaleString(),
    },
    {
      id: 7,
      task: "Task-7",
      date: new Date().toLocaleString(),
    },
    {
      id: 8,
      task: "Task-8",
      date: new Date().toLocaleString(),
    },
  ];

  return (
    <section className={style.showTask}>
      <div>
        <div className={style.items}>
          <h3>Show task</h3>
          <span>0</span>
        </div>
        <button>Clear all</button>
      </div>
      <div className={style.tasks}>
        {taskList.map((taskName) => (
          <div key={taskName.id} className={style.taskItem}>
            <div className={style["task-content"]}>
              <span>{taskName.task}</span>
              <small>{taskName.date}</small>
            </div>
            <div className={style["task-icons"]}>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash3-fill"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowTask;
