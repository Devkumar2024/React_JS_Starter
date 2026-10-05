import "./App.css";

function Hello() {
  const name = "Dev Kumar";
  const greet = (n) => {
    return `How are you ${n}, have a nice day`;
  };
  function alertBTN() {
    alert("Button was clicked");
  }
  function handleInput(e) {
    console.clear();
    console.log(`Value : ${e.target.value}`);
  }

  function handleMouseHover() {
    console.log(`mouse is over the text`);
  }

  function onDoubleClick() {
    console.log(`h2 double click`);
  }

  return (
    <>
      <h2
        onMouseOver={handleMouseHover}
        onDoubleClick={onDoubleClick}
        className="test"
      >
        Hello {name}, {greet("dev")}
      </h2>

      <button onClick={alertBTN}>Click Me</button>
      <button
        onClick={() => {
          console.log(`Greet Button click`);
        }}
      >
        Greet
      </button>

      <br />
      <input type="text" onChange={handleInput} placeholder="type text" />
    </>
  );
}

export default Hello;
