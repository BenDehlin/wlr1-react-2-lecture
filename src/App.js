import './App.css';
import Parent from './components/Parent'

//App.js is a Functional Component and contains no state
//But renders our "Parent" component

function App() {
  return (
    <div className="App">
      {/* The Parent Component which will hold our relevant state is rendered in our JSX here */}
      <Parent />
    </div>
  );
}

export default App;
