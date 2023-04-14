import { useState } from "react";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Canvas from "./canvas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
