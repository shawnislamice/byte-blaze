import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const {
    cover_image,
    title,
    description,
    readable_publish_date,
    id,
    published_at,
    body_html,
    tags,
    url
  } = blog;

  return (
    <div
      to={`/blog/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="transition  duration-300  mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 p-3 border rounded-lg border-opacity-30"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:dark:border-gray-400">
        {tags.map((tag, index) => (
          <a
            key={index}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:dark:bg-violet-400 dark:dark:text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="p-6 space-y-2">
        <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </a>
        <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
