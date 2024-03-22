import toast from "react-hot-toast";
export const getBlogs = () => {
  let blogs = [];
  let storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

export const saveBlog = (blogItem) => {
  let blogs = getBlogs();
  const isExist = blogs.find((blog) => blog.id == blogItem.id);
  if (isExist) {
    return toast.error("Already Bookmarked");
  } else {
    blogs.push(blogItem);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Blog Bookmarked Successfully");
  }
};

export const deleteBlogs = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((blog) => blog.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Deleted Successfully");
};
