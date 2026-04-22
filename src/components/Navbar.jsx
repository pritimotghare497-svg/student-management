import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    margin: "0 12px",
    color: "#0f172a",
    fontWeight: "500",
    textDecoration: "none",
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
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/jobs" style={linkStyle}>Jobs</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;