function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Welcome to Job Portal 🚀
      </h1>

      <p style={{ fontSize: "18px", color: "gray", marginBottom: "20px" }}>
        Find your dream job with ease
      </p>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Explore Jobs
      </button>
    </div>
  );
}

export default Home;