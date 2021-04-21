import React, {Component} from 'react'
// we import our FuncComponent and ClassComponent to render
// here in the Parent Component. We intend to pass props to both of these components
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'

class Parent extends Component{
  constructor(props){
    super(props)
    // Currently in the constructor method of our Parent component we are only tracking 1 piece of state called "name". We will have a few methods that will update this name.
    this.state = {
      name: 'Ben'
    }
    // at the bottom of our constructor function we need to bind any methods we want to use that will need to reference this.state. Those methods will be found down below
    // but remember to come up here and bind methods as you create them.
    this.updateName = this.updateName.bind(this)
    this.updateNameWithValue = this.updateNameWithValue.bind(this)
  }

  // updateName is a method that when called will simply change this.state.name to be "Adam"
  updateName(){
    this.setState({
      name: 'Adam'
    })
  }

  // updateNameWithValue is a method that will take in a newName value. 
  // It will then update this.state.name to be whatever value we passed in.
  updateNameWithValue(newName){
    this.setState({
      name: newName
    })
  }

  render(){
    return (
      <div>
        {/* Here we render our FuncComponent and pass it 3 props,
        -parentName which will have the value of this.state.name
        -hi which will just be the string "pizza"
        -and updateNameFn which will have the value of the update name function update or this.updateName (this.updateName will always change this.state.name to be Adam when it is called) */}
        <FuncComponent 
        parentName={this.state.name} 
        hi={"pizza"}
        updateNameFn={this.updateName} 
         />
         {/* Here we render our ClassComponent and pass it 2 props, parentName and updateNameWithValueFn.
          parentName will again be the value of this.state.name
          and updateNameWithValueFn will be the value of this.updateNameWithValue.
          When we want to use this second prop we need to remember to pass it a new name to change this.state.name to. */}
        <ClassComponent
        parentName={this.state.name}
        updateNameWithValueFn={this.updateNameWithValue} />
      </div>
    )
  }
}

export default Parent