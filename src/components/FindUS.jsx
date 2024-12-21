import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUS() {
  return (
    <div className="*:w-full bg-base-100 space-y-2">
      <div className="join join-vertical">
        <button className="btn justify-start join-item">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn justify-start join-item">
          <FaTwitter></FaTwitter>Twitter
        </button>
        <button className="btn justify-start join-item">
          <FaInstagram></FaInstagram>Instagram
        </button>
      </div>
    </div>
  );
}
