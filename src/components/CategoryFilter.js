import React from "react";

function CategoryFilter({categories, selectBtn,onBtn}){

  const btn = categories.map((category,index)=>{
    return <button 
    onClick={()=>selectBtn(category)}
    key={index}
    className={onBtn===category? "selected":""}
    >{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {btn}
    </div>
  );
}

export default CategoryFilter;