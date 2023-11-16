import React, {useState}  from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  // const [text, setText]= useState("")
  // const [newCat, setNewCat]=  useState("")

  const [newItems, setNewItems]= useState({
    text:"",
    category:"code"
  })


  const formCat = categories.map((category, index)=>(<option key={index}>{category}</option>))

  function newItemPost(e){
    setNewItems({...newItems, [e.target.name]:e.target.value})
  }
  return(

  <form className="new-task-form" onSubmit={(e)=>{
    e.preventDefault();
    onTaskFormSubmit(newItems);
    }}>
  
    
      <label>
        Details
        <input type="text" name="text" value={newItems.text} onChange={newItemPost}/>
      </label>
      <label>
        Category
        <select name="category"
        onChange={newItemPost}
        value={newItems.category}
        >
          {/* render <option> elements for each category here */}
          {formCat}
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;