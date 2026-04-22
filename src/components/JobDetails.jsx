import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", desc: "React + UI development role" },
    { id: 2, title: "Backend Developer", company: "Amazon", desc: "Spring Boot + APIs development role" },
    { id: 3, title: "Full Stack Developer", company: "Microsoft", desc: "Frontend + Backend full stack role" },
  ];

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div
      style={{
        padding: "40px",
        background: "#f8fafc",
        minHeight: "70vh",
      }}
    >
      <h1>{job.title}</h1>
      <h3 style={{ color: "#4f46e5" }}>{job.company}</h3>
      <p style={{ marginTop: "10px", color: "#64748b" }}>
        {job.desc}
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;