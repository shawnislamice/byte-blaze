import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import { TiDelete } from "react-icons/ti";

const BlogCard = ({ blog, deleteAble,handleDelete }) => {
  const {
    cover_image,
    title,
    description,
    readable_publish_date,
    id,
    published_at,
  } = blog;

  
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="transition border-2  border-primary hover:border-secondary border-opacity-30 duration-300 max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 p-3 rounded-xl shadow-xl"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-400">
            {readable_publish_date}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deleteAble && (
        <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-2 rounded-full cursor-pointer hover:scale-75 duration-300 -top-5 right-5 ">
          {" "}
          <TiDelete
            className="  text-secondary group-hover:text-primary"
            size={20}
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
