import "./App.css";

function App() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
