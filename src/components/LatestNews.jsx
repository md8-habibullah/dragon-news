import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className=" flex gap-3 bg-base-200">
      <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-15">
        <Link to="/news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, vel!
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, vel!
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, vel!
        </Link>
      </Marquee>
    </div>
  );
}
