import React from "react";

function Task({category, text, itemDelete}) {
  
  
  // const texts = tasks.map(task => task.text);
  // const categories = tasks.map(task => task.category);
  // console.log(texts)
  //  const text =texts.map((text, index) => (
  //   <li key={index}>{text}</li>
  // ))
  
  // const categoryData = categories.map((category, index) => (
  //   <li key={index}>{category}</li>
  // ))


  return (
    <div className="task">
       <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>itemDelete(text)}>X</button>
    </div>
  );
}

export default Task;