import React from "react";
import style from "./addTask.module.css";

const AddTask = () => {
  return (
    <section>
      <form className={style.add}>
        <input type="text" title="task" placeholder="Enter a task" autoComplete="off" />
        <button type="submit" className={style.addBtn}>
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTask;
