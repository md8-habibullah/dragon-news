import { Link } from "react-router-dom";
import userLogo from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between w-11/12 mx-auto items-center">
      <div></div>
      <div className="space-x-3 ">
        <Link className="btn btn-ghost border-none rounded" to="">About</Link>
        <Link className="btn btn-ghost border-none rounded" to="">Home</Link>
        <Link className="btn btn-ghost border-none rounded" to="">Career</Link>
        
      </div>
      <div className="flex gap-5 items-center">
        <img src={userLogo} alt="  " />
        <button className="btn btn-neutral">Login</button>
      </div>
    </div>
  );
}
