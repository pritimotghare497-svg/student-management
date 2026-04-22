function JobList() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "Backend Developer", company: "Amazon" },
    { id: 3, title: "Full Stack Developer", company: "Microsoft" },
  ];

  return (
    <div style={{ padding: "40px", background: "#f8fafc" }}>
      <h2 style={{ marginBottom: "20px", color: "#0f172a" }}>
        Available Jobs
      </h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {jobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              width: "250px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3>{job.title}</h3>
            <p style={{ color: "#64748b" }}>{job.company}</p>

            <button
              style={{
                marginTop: "10px",
                padding: "10px 18px",
                background: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;