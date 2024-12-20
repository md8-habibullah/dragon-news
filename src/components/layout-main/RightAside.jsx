import FindUS from "../FindUS";
import SocialLoginWith from "../SocialLoginWith";

export default function RightAside() {
  return (
    <div>
      <h2 className="text-xl p-2">Login With</h2>
      <div>
        <SocialLoginWith></SocialLoginWith>
      </div>
      <h2 className="text-xl p-2">Find Us on</h2>
      <div>
        <FindUS></FindUS>
      </div>
    </div>
  );
}
