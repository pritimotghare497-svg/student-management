function Navbar() {
  const linkStyle = {
    margin: "0 12px",
    cursor: "pointer",
    color: "#0f172a",
    fontWeight: "500",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <h2 style={{ color: "#4f46e5", cursor: "pointer" }}>
        JobPortal
      </h2>

      <div>
        <span
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
          onMouseLeave={(e) => (e.target.style.color = "#0f172a")}
        >
          Home
        </span>

        <span
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
          onMouseLeave={(e) => (e.target.style.color = "#0f172a")}
        >
          Jobs
        </span>

        <span
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
          onMouseLeave={(e) => (e.target.style.color = "#0f172a")}
        >
          Login
        </span>
      </div>
    </nav>
  );
}

export default Navbar;