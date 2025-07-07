import Subscribe from "../../Components/Subscribe/Subscribe";
import RecentSec from "../../Sections/RecentSec/RecentSec";

export default function NewsLetter() {
  return (
    <div className="myContainer lg:mt-37 md:mt-27 mt-23 ">
      <Subscribe
        smallHeading="Newslatters"
        mainHeading="Stories and interviews"
        description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
      />
      <RecentSec layout="row" />
    </div>
  );
}
 