import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobList from "./components/JobList";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;