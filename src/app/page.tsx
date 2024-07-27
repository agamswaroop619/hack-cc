import Navbar from "./components/navbar";
import MyApp from "react-calendar";
import SimpleSlider from "./components/Slider";

function App() {
  return (
    <div className="App bg-white text-black">
      <Navbar />
      <div className="flex gap-2">
        <SimpleSlider />
      </div>

      <div>
        <MyApp />
      </div>
    </div>
  );
}

export default App;
