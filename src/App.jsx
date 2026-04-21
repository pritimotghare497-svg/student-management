import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Student Management System</h1>

      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Typed Name: {name}</p>

      <hr />

      <h2>Student List</h2>
      <p>No students added yet</p>
    </div>
  );
}

export default App;