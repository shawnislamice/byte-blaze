import { Link } from "react-router-dom";
const EmptyState = ({ message}) => {
  return (
    <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16">
      <h1 className="text-3xl font-bold">{message}</h1>
      <Link
        to="/blogs"
        href="#_"
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-red-500"></span>
        <span className="relative text-black group-hover:text-white">
          Browse Blogs
        </span>
      </Link>
    </div>
  );
};

export default EmptyState;
