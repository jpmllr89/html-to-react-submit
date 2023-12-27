import "./App.css";
import { Header } from "./components/Header";
import { Data } from "./components/Data";
import { Cards } from "./components/Cards";
import { Rankings } from "./components/Rankings";

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
