import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import CategoryBadge from "../CategoryBadge/CategoryBadge";

const PostDetails = () => {
  const post = useSelector((state: RootState) => state.posts.selectedPost);

  if (!post) return null;

  return (
    <div className="flex flex-col gap-8 text-gray-4 dark:text-gray-5">
      <h3 className="text-purple font-semibold text-sm/[20px]">
        {post.author} •{" "}
        {new Date(post.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>
      <h1 className="text-4xl text-gray-2 dark:text-white font-bold">
        {post.title}
      </h1>
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full max-h-[426px] xl:aspect-[1.83/1] md:aspect-[2.06/1] aspect-[1.64/1] object-cover"
      />
      <div className="flex flex-col leading-6 gap-3">
        {post.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>;
          }

          if (item.type === "image") {
            return (
              <img
                key={index}
                src={item.url}
                alt={item.alt}
                className="w-full aspect-[1.45/1] lg:aspect-[1.83/1]"
              />
            );
          }

          if (item.type === "definition") {
            return (
              <p key={index} className="text-base font-normal text-center">
                {item.text}
              </p>
            );
          }

          if (item.type === "paragraph2") {
            return (
              <p key={index}>
                {item.content.map((subItem, subIndex) => {
                  if (subItem.type === "link") {
                    return (
                      <a
                        key={subIndex}
                        href={subItem.url || "#"}
                        className="underline cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subItem.text}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={subIndex}
                      className={
                        subItem.type === "bold"
                          ? "font-semibold"
                          : "font-normal"
                      }
                    >
                      {subItem.text}
                    </span>
                  );
                })}
              </p>
            );
          }

          if (item.type === "heading") {
            if (item.level === 3) {
              return (
                <h4 key={index} className="text-base font-bold text-center">
                  {item.text}
                </h4>
              );
            }
            if (item.level === 4) {
              return (
                <h4 key={index} className="text-lg font-bold">
                  {item.text}
                </h4>
              );
            }
            if (item.level === 5) {
              return (
                <h5 key={index} className="text-base font-bold">
                  {item.text}
                </h5>
              );
            }
            if (item.level === 6) {
              return (
                <h5 key={index} className="text-lg font-semibold">
                  {item.text}
                </h5>
              );
            }
          }

          if (item.type === "list") {
            return (
              <ul key={index} className="list-disc pl-5">
                {item.items.map((listItem, i) => {
                  if (listItem.type === "paragraph2") {
                    return (
                      <li key={i}>
                        {listItem.content.map((subItem, subIndex) => {
                          if (
                            subItem.type === "normal" ||
                            subItem.type === "bold"
                          ) {
                            return (
                              <span
                                key={subIndex}
                                className={
                                  subItem.type === "bold"
                                    ? "font-semibold"
                                    : undefined
                                }
                              >
                                {subItem.text}
                              </span>
                            );
                          }

                          if (subItem.type === "link") {
                            return (
                              <a
                                key={subIndex}
                                href={subItem.url || "#"}
                                className="underline cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {subItem.text}
                              </a>
                            );
                          }

                          return null;
                        })}
                      </li>
                    );
                  }

                  return null;
                })}
              </ul>
            );
          }

          return null;
        })}
      </div>
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
  );
};

export default PostDetails;
