import "./App.css";
import { Header } from "./components/Header/Header";
import { Data } from "./data/Data";
import { Cards } from "./components/Cards/Cards";
import { Rankings } from "./components/Rankings/Rankings";

const workingData = Data;

function App() {
  return (
    <>
      <Header />
      <Rankings data={workingData} />
      <Cards items={workingData} />
    </>
  );
}

export default App;
