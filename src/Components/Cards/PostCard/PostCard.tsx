import type { Article } from "../../../Data/data";
import CategoryBadge from "../../CategoryBadge/CategoryBadge";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPostById } from "../../../redux/slices";

interface PostCardProps {
  post: Article & { categories?: { name: string; colorClass: string }[] };
  direction?: "row" | "col";
  isLargeTitle?: boolean;
  isGrid?: boolean;
  isRecent?: boolean;
  isFullScreen?: boolean;
}

const PostCard = ({
  post,
  direction = "col",
  isLargeTitle = true,
  isGrid = false,
  isRecent = false,
  isFullScreen = false,
}: PostCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getPostById(post.id));
    navigate(`/blog-detail/${post.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex ${
        direction === "col"
          ? "flex-col gap-8 items-between"
          : isLargeTitle
          ? "xl:flex-row flex-col gap-6 justify-between"
          : "md:flex-row flex-col gap-6 justify-between"
      }`}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className={`object-center object-cover ${
          isGrid
            ? "w-full aspect-[8/5]"
            : isFullScreen
            ? "w-full xl:w-1/2 xl:aspect-[2.41/1] md:aspect-[4/0.97] aspect-[1.63/1] object-top"
            : isRecent
            ? isLargeTitle
              ? "w-full aspect-[1.43/1] md:aspect-[26/10]"
              : "w-full md:w-[54%] aspect-[8/5]"
            : ""
        }`}
      />

      <div className="flex flex-col justify-between">
        <h3 className="text-purple font-semibold text-sm/[20px] mb-3">
          {post.author} •{" "}
          {new Date(post.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h3>

        <div className="flex justify-between items-center gap-2 mb-3">
          <h3
            className={`${
              isLargeTitle ? "text-2xl" : "text-lg"
            } font-semibold text-gray-2 dark:text-white`}
          >
            {post.title}
          </h3>

          <div className="pb-1 shrink-0">
            <img
              src="/Icons/Iconwrap-light.svg"
              alt="icon"
              className="block w-6 h-6 dark:hidden transition-transform duration-200 hover:scale-105"
            />
            <img
              src="/Icons/Iconwrap-dark.svg"
              alt="icon"
              className="hidden w-6 h-6 dark:block  transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
        <p
          className={`text-gray-4 dark:text-gray-5 text-base mb-6 
          ${isFullScreen ? "line-clamp-2 md:line-clamp-3" : "line-clamp-3"}`}
        >
          {post.description}
        </p>

        {post.categories?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 mb-3">
            {post.categories.map((category, index) => (
              <CategoryBadge
                key={index}
                category={category.name}
                colorClass={category.colorClass}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
