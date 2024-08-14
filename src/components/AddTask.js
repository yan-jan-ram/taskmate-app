import React, { useEffect, useState } from "react";
import style from "./addTask.module.css";

const AddTask = ({ addTaskItem, isEditing, taskToEdit, updateTaskItem }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (isEditing && taskToEdit) {
      setText(taskToEdit.task);
    }
  }, [isEditing, taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() !== "") {
      if (isEditing) {
        updateTaskItem({ ...taskToEdit, task: text });
      } else {
        const newTask = {
          id: Date.now(),
          task: text,
          date: new Date().toLocaleString(),
        };
        addTaskItem(newTask);
      }
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section>
      <form className={style.add} onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          name="task"
          placeholder="Enter a task"
          autoComplete="off"
          maxLength={25}
        />
        <button type="submit" className={style.addBtn}>
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

export default AddTask;
