function Home() {
  return (
    <div
      style={{
        height: "60vh",
        background: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          color: "#0f172a",
        }}
      >
        Find Your Dream Job 🚀
      </h1>

      <p style={{ margin: "10px 0", color: "#64748b" }}>
        Explore thousands of job opportunities
      </p>

      <input
        type="text"
        placeholder="Search jobs..."
        style={{
          padding: "12px",
          width: "320px",
          marginTop: "10px",
          borderRadius: "6px",
          border: "1px solid #e2e8f0",
          background: "#ffffff",
          outline: "none",
        }}
      />

      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "500",
          transition: "0.3s",
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = "#4338ca")
        }
        onMouseLeave={(e) =>
          (e.target.style.background = "#4f46e5")
        }
      >
        Search
      </button>
    </div>
  );
}

export default Home;