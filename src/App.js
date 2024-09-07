import logo from "./logo.svg";
import "./App.css";
import Image_2 from "./assests/image-2.jpg";

function App() {
  return (
    <div>
      <h3>Image 1</h3>
      <img src="/image.jpg" />
      <h3>Image 2</h3>
      <img src={Image_2} />
    </div>
  );
}

export default App;
