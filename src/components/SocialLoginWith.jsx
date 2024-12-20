import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLoginWith() {
  return (
    <div className="*:w-full space-y-2 bg-base-100">
      <button className="btn flex">
        <FaGoogle></FaGoogle>Continue With Google
      </button>
      <button className="btn flex">
        <FaGithub></FaGithub>Continue With GitHub
      </button>
    </div>
  );
}
