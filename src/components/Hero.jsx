import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div className="hero -mt-16">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              Welcome To{" "}
              <span className="bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>
            </h1>
            <p className="py-6 max-w-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <div className="flex justify-center gap-2 items-center">
              <Link
                to="/blogs"
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-red-500"></span>
                <span className="relative text-black group-hover:text-white">
                  Read Blogs
                </span>
              </Link>
              <Link
                to="/bookmarks"
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-red-500"></span>
                <span className="relative text-black group-hover:text-white">
                  Bookmarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
