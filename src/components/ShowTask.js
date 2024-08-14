import React, { useState } from "react";
import AddTask from "./AddTask.js";
import style from "./showTask.module.css";

const ShowTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTaskItem = (task) => {
    setTaskList((prevTasks) => [...prevTasks, task]);
  };

  const clearAllTasks = () => {
    setTaskList([]);
    setIsEditing(false);
    setTaskToEdit(null);
  };

  const updateTaskItem = (updatedTask) => {
    const updatedTaskList = taskList.map((todo) =>
      todo.id === updatedTask.id ? updatedTask : todo
    );
    setTaskList(updatedTaskList);
    setIsEditing(false);
    setTaskToEdit(null);
  };

  const handleEdit = (id) => {
    const updatedTaskList = taskList.find((todo) => todo.id === id);
    setIsEditing(true);
    setTaskToEdit(updatedTaskList);
  };

  const handleDelete = (id) => {
    if (isEditing && taskToEdit?.id === id) {
      setIsEditing(false);
      setTaskToEdit(null);
    }
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <AddTask
        addTaskItem={addTaskItem}
        isEditing={isEditing}
        taskToEdit={taskToEdit}
        updateTaskItem={updateTaskItem}
      />
      <section className={style.showTask}>
        <div>
          <div className={style.items}>
            <h3>Show task</h3>
            <span>{taskList.length}</span>
          </div>
          <button onClick={clearAllTasks}>Clear all</button>
        </div>
        <div className={style.tasks}>
          {taskList.map((taskName) => (
            <div key={taskName.id} className={style.taskItem}>
              <div className={style["task-content"]}>
                <span>{taskName.task}</span>
                <small>{taskName.date}</small>
              </div>
              <div className={style["task-icons"]}>
                <i
                  className="bi bi-pencil-square"
                  onClick={() => handleEdit(taskName.id)}
                ></i>
                <i
                  className="bi bi-trash3-fill"
                  onClick={() => handleDelete(taskName.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ShowTask;
