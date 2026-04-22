import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobList from "./components/JobList";

function App() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />

      <main>
        <Home />
        <JobList />
      </main>
    </div>
  );
}

export default App;