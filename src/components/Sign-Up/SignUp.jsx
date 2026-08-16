import SignupDesktop from "./Desktop/SignupDesktop";
import SignupMobile from "./Mobile/SignupMobile";

function SignUp() {
  return (
    <section>
      <div className="hidden lg:block">
        <SignupDesktop />
      </div>

      <div className="lg:hidden">
        <SignupMobile />
      </div>
    </section>
  );
}
export default SignUp;
