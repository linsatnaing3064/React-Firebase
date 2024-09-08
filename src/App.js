import "./App.css";
import { useState } from "react"; //react hook

function App() {
  let [name, setName] = useState("Lin Sat Naing"); //useState will return array [getter,setterFun]. Destructuring and store in var.
  function nameChange() {
    setName("Aung Aung");
    console.log(name); //Lin Sat Naing / Because setterFun have running time, js will skip to console.log while setterFun running.
  }
  return (
    <div className="app">
      <h3>Hello {name}</h3>
      <button onClick={nameChange}>Click Me</button>
    </div>
  );
}

export default App;
