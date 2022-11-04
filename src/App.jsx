import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomeContactList from "./pages/HomeContactList";
import CreateNewContact from "./pages/CreateNewContact";
import EditExistingContact from "./pages/EditExistingContact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContactList />} />
      <Route path="/CreateNewContact" element={<CreateNewContact/>}/>
      <Route path="/EditExistingContact/:id" element={<EditExistingContact/>}/>
    </Routes>
  );
}

export default App;
