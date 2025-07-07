import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../redux/slices";
import PostDetails from "../../Components/PostSec/PostDetails";
import RecentSec from "../../Sections/RecentSec/RecentSec";
import Subscribe from "../../Components/Subscribe/Subscribe";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPostById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="myContainer lg:px-16 md:px-[18px] p-4 lg:mt-37 md:mt-27 mt-23 mx-auto flex flex-col">
      <div className="flex md:flex-row flex-col-reverse items-start lg:gap-8 md:gap-4 gap-8">
        <div className="w-full md:w-[44.4%] lg:w-[29.6%]">
          <RecentSec layout="post" />
        </div>
        <div className="w-full md:w-[53.5%] lg:w-[67.65%]">
          <PostDetails />
          <div className="hidden lg:block">
            <Subscribe />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Subscribe />
      </div>
    </div>
  );
};

export default BlogDetail;
