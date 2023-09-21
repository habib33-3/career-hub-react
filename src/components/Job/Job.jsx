import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt={company_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_type}</h2>
          <p>{company_name}</p>

          <div className="space-x-4">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7e90f3]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7e90f3]">
              {job_type}
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-4 items-center">
            <h2>
              <MdLocationOn className="text-2xl mr-2 inline" />
              {location}
            </h2>
            <h2>
              <AiOutlineDollar className="text-2xl mr-2 inline" />
              {salary}
            </h2>
          </div>

          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
