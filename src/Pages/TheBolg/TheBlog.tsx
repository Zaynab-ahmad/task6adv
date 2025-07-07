import Hero from "../../Components/Hero/Hero";
import RecentSec from "../../Sections/RecentSec/RecentSec";
import AllPosts from "../../Sections/AllPosts/AllPosts";

const TheBlog: React.FC = () => {
  return (
    <div className="myContainer lg:mt-37 md:mt-27 mt-23 mx-auto flex flex-col justify-center items-center">
      <Hero title="THE BLOG" />
      <RecentSec layout="home"/>
      <AllPosts />
    </div>
  );
};

export default TheBlog;
