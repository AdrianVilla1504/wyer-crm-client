import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeClientList from "./pages/HomeClientList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeClientList />} />
    </Routes>
  );
}

export default App;
