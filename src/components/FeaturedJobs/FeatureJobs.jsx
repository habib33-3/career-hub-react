import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/jobs.json");
      const data = await response.json();
      setJobs(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <Job
            job={job}
            key={job.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
