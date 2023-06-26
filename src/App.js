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

  const data = { name: "John", age: 42 };

  const handleButtonClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Child fName={fName} lName={lName} age={age} />
      <ChildButton onClick={handleButtonClick} />
      <Button string={string} />
      <Parent />
    </div>
  );
}

export default App;
