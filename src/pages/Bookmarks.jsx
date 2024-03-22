import { useEffect, useState } from "react";
import { getBlogs } from "../utilities";
import BlogCard from "../components/BlogCard";
import { deleteBlogs } from "../utilities";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlogs(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1) {
    return <EmptyState message="No Bookmarks Available!"></EmptyState>;
  }

  return (
    <div className="grid justify-center py-8 px-4 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <BlogCard
          handleDelete={handleDelete}
          deleteAble={true}
          blog={blog}
          key={index}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
