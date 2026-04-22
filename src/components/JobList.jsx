function JobList() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "Backend Developer", company: "Amazon" },
    { id: 3, title: "Full Stack Developer", company: "Microsoft" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;