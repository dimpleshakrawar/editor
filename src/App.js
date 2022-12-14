import Header from "./components/Header";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [openSlider, setOpenSlider] = useState(false);
  return (
    <div className="App" style={{ border: "1px solid black" }}>
      <Header openSlider={openSlider} setOpenSlider={setOpenSlider} />
      {openSlider && <Container />}
    </div>
  );
}

export default App;
