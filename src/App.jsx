import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeContactList from "./pages/HomeContactList";
import CreateNewContact from "./pages/CreateNewContact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContactList />} />
      <Route path="/CreateNewContact" element={<CreateNewContact/>}/>
    </Routes>
  );
}

export default App;
