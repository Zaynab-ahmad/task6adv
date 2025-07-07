import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatePosts } from "../../redux/slices/index";
import type { RootState } from "../../redux/store";
import PostCard from "../../Components/Cards/PostCard/PostCard";
import SecHeader from "../../Components/SecHeader/SecHeader";
import Pagination from "../../Components/Pagination/Pagination"; 

const AllPosts = () => {
  const dispatch = useDispatch();
  const { paginatedPosts, currentPage} = useSelector(
    (state: RootState) => state.posts
  );


  useEffect(() => {
    dispatch(paginatePosts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <section className="mx-auto px-4 py-8">
      <SecHeader title="All blog posts" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {paginatedPosts.map((post) => (
          <PostCard key={post.id} post={post} isGrid={true}/>
        ))}
      </div>

      <Pagination />
    </section>
  );
};

export default AllPosts;
