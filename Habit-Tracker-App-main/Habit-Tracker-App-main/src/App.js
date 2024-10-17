import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import AddHabit from "./Components/Addhabit";
import Week from "./Components/Week";
import Lists from "./Components/Lists";

function App() {
  let habits = useSelector((state) => state["habits"]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Lists habits={habits} />} />
        <Route path="/add-habit" element={<AddHabit />} />
        <Route path="/week-view" element={<Week />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
