import React, { Component } from "react"

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    // in ClassComponent we store a piece of state called
    // inputValue. This piece of state will be for tracking
    // what we type into our input field below
    this.state = {
      inputValue: "",
    }
  }

  // this handleChange function will take in a value and set the state
  // of this.state.inputValue to be the new value it was passed. Note
  // that I did not need to bing handleChange because I made it an arrow
  // function. If we make our methods arrow functions they do not need to be bound.
  handleChange = (value) => {
    this.setState({
      inputValue: value,
    })
  }

  render() {
    return (
      <div>
        <h1>This is Class Component</h1>
        {/* Class Component displays the value of parentName that it received
        as a prop. Note that in order to access our props in a class component
        we need to use the "this" keyword. Class Components access their props
        in this.props, functional components will not use this keyword. */}
        <h3>I am in Class Component and my name is {this.props.parentName}</h3>

        {/* When we create an input field we need to give it 2 props. 1 is a "value" which
        will be the piece of state we want to tie the input field to. We want to have
        this value prop so that we can change that piece of state and have it update
        this input field. We also need to have an onChange event handler. the onChange
        event handler calls our this.handleChange function up above so that we can update the inputValue piece of state whenever we type into this input field. */}
        <input
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        {/* This button simply takes whatever we typed into the input field (which
        has been saved to state as this.state.inputValue) and passes it into the
        function "updateNameWithValueFn". If you remember from the parent this is a
        function that takes in a value and saves that value in Parent.js to this.state.name. 
        This allows us to type into the input field and when we hit this button it will save it into Parent.js for us. */}
        <button
          onClick={() =>
            this.props.updateNameWithValueFn(this.state.inputValue)
          }
        >
          Update Name With Value
        </button>
        {/* This h2 is doing nothing other than displaying whatever we type into
        the input field as we type it. */}
        <h2>{this.state.inputValue}</h2>
      </div>
    )
  }
}

export default ClassComponent
