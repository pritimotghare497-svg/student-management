import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name.trim() === "") return;

    setStudents([...students, name]);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <hr />

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

