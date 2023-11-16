import React from "react";
import Task from "./Task";
function TaskList({tasks, itemDelete}) {
 

   console.log(tasks);
  
  return (
    <div className="tasks" >
        {tasks.map((task,index)=>(
          <Task
          itemDelete={itemDelete}
          key={index}
          text={task.text}
          category={task.category}
          />
        ))}
    </div>
  );
}

export default TaskList;