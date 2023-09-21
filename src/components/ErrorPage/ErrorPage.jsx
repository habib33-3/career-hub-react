import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h2 className="text-7xl">Error</h2>
      <Link
        className="btn btn-lg btn-primary m-10"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
