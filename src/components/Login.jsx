function Login() {
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f8fafc",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#0f172a" }}>
        Login Page
      </h2>

      <input
        type="text"
        placeholder="Enter email"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #e2e8f0",
        }}
      />

      <input
        type="password"
        placeholder="Enter password"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #e2e8f0",
        }}
      />

      <button
        style={{
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;