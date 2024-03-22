import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { saveBlog } from "../utilities";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const blog = useLoaderData();
  const {
    cover_image,
    title,
    description,
    readable_publish_date,
    id,
    published_at,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
    tags,
  } = blog;

  const handleBookMark=(blog)=>{
    saveBlog(blog)
    de
  }
  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:dark:bg-gray-800 dark:dark:text-gray-50">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:dark:text-gray-400">
            <p className="text-sm">
              {reading_time_minutes} min read • {readable_publish_date}
            </p>

            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count}0 views
            </p>
          </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:dark:bg-gray-800 dark:dark:text-gray-100">
            <Link
              to={""}
              onClick={() => setTabIndex(0)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? " border border-b-0" : "border-b"
              } rounded-t-lg dark:dark:border-gray-400 dark:dark:text-gray-50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              to={`author`}
              onClick={() => setTabIndex(1)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? " border border-b-0" : "border-b"
              } rounded-t-lg dark:dark:border-gray-400 dark:dark:text-gray-50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div
              onClick={() => handleBookMark(blog)}
              className="bg-primary ml-5 p-3 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 duration-200 overflow-hidden"
            >
              <BsBookmarkPlusFill size={20} className="text-secondary" />
            </div>
          </div>
        </div>
        <div className="dark:dark:text-gray-100"></div>
        <Outlet></Outlet>
      </article>
      <div></div>
    </div>
  );
};

export default Blog;
