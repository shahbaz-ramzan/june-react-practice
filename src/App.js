import "./App.css";
import Button from "./Button";
import Child from "./Child";

function App() {
  const fName = "Shahbaz";
  const lName = "Malik";
  const age = 25;
  const string = "Click The Below Button";
  return (
    <div className="App">
      <Button string={string} />
      <Child fName={fName} lName={lName} age={age} />
    </div>
  );
}

export default App;
