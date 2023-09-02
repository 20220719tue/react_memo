import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import List from "./components/Test/List";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={LandingPage()} />
        <Route exact path="/list" element={List()} />
      </Routes>
    </div>
  );
}

export default App;
