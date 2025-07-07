import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentPosts } from "../../redux/slices/index";
import type { RootState } from "../../redux/store/index";
import SecHeader from "../../Components/SecHeader/SecHeader";
import PostCard from "../../Components/Cards/PostCard/PostCard";

type RecentSecProps = {
  layout?: "home" | "post" | "row";
};

const RecentSec = ({ layout = "home" }: RecentSecProps) => {
  const dispatch = useDispatch();
  const recentPosts = useSelector(
    (state: RootState) => state.posts.recentPosts
  );

  useEffect(() => {
    const count = layout === "post" ? 9 : layout === "row" ? 3 : 4;
    dispatch(getRecentPosts(count));
  }, [dispatch, layout]);

  if (recentPosts.length === 0) return null;

  return (
    <section
      className={`w-full ${
        layout === "post" && recentPosts.length ? "p-0" : "px-4 py-[30px]"
      }`}
    >
      <SecHeader title="Recent blog posts" />

      {layout === "home" && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <PostCard
            key={recentPosts[0].id}
            post={recentPosts[0]}
            direction="col"
            isRecent={true}
          />

          <div className="flex flex-col gap-8">
            {recentPosts.slice(1, 3).map((post) => (
              <PostCard
                key={post.id}
                post={post}
                direction="row"
                isLargeTitle={false}
                isRecent={true}
              />
            ))}
          </div>

          {recentPosts[3] && (
            <div className="xl:col-span-2">
              <PostCard
                key={recentPosts[3].id}
                post={recentPosts[3]}
                direction="row"
                isRecent={true}
                isFullScreen={true}
              />
            </div>
          )}
        </div>
      )}

      {layout === "post" && (
        <div className="flex flex-col gap-8">
          {recentPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              direction="col"
              isRecent={true}
              isGrid={true}
            />
          ))}
        </div>
      )}

      {layout === "row" && (
        <div
          className="grid lg:gap-8 md:gap-6 gap-8
                  grid-cols-1 
                  md:grid-cols-2 
                  lg:grid-cols-3"
        >
          {recentPosts.map((post, index) => (
            <div
              key={post.id}
              className={`
          ${index === 2 && "md:col-span-2 lg:col-span-1"} 
           `}
            >
              <PostCard
                post={post}
                direction="col"
                isRecent={true}
                isGrid={true}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentSec;
