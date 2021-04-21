import React from 'react'

function FuncComponent (props){
  // console.log(props)
  return(
    <div>
      <h1>This is Func Component</h1>
      {/* Func Component currently displays props.parentName here
      which as a reminder is being passed down from Parent.js
      whith a value of the "name" piece of state on Parent.js */}
      <h3>I am inside of Func Component and my name is {props.parentName}</h3>
      {/* Func Component also has a button that when clicked will invoke props.updateNameFn. This function will change the name stored on state in Parent.js to be "Adam" */}
      <button onClick={props.updateNameFn}>Update Name to Adam</button>
    </div>
  )
}

export default FuncComponent