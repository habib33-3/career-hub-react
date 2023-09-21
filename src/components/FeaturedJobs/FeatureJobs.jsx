import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job
            job={job}
            key={job.id}
          />
        ))}
      </div>

      <div className={dataLength === jobs.length && `hidden`}>
        <div className="flex items-center justify-center my-10">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary mx-auto w-max"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
