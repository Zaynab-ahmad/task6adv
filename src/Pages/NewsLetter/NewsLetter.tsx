import Subscribe from "../../Components/Subscribe/Subscribe";
import RecentSec from "../../Sections/RecentSec/RecentSec";

export default function NewsLetter() {
  return (
    <div className="myContainer lg:mt-37 md:mt-27 mt-23 ">
      <Subscribe />
      <RecentSec layout="row" />
    </div>
  );
}
 