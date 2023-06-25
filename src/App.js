import "./App.css";
import Button from "./Button";
import Child from "./Child";
import ChildButton from "./ChildButton";
import Parent from "./Parent";

function App() {
  const fName = "Shahbaz";
  const lName = "Malik";
  const age = 25;
  const string = "Click The Below Button";

  const handleButtonClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <div className="App">
      <Child fName={fName} lName={lName} age={age} />
      <ChildButton onClick={handleButtonClick} />
      <Button string={string} />
      <Parent />
    </div>
  );
}

export default App;
