import { ContactIcons } from "~/components/ContactIcons";
import { SplashScreen } from "~/components/SplashScreen";

export default function Index() {
  return (
    <div className="text-center contents">
      <SplashScreen />
      <img
        src="/logo.svg"
        alt="mateuszpigula text inside transparent rectangle with black stroke"
        className="inline-flex mb-8"
      />
      <h1 className="text-4xl mt-5">Mateusz Piguła</h1>
      <h2 className="text-md">Frontend Developer</h2>
      <p className="text-stone-500">
        🤍 Super passionate about exploring frontend in depth
      </p>

      <ContactIcons className="mt-8 mb-4" />

      <ul className="leading-8 my-8">
        <li> ✅ Experienced Javascript developer</li>
        <li>✅ Team Leader</li>
        <li>✅ Technical interviewer</li>
        <li>✅ Chapter Lead</li>
      </ul>

      <p>
        If you are looking for experienced developer <br />
        feel free to reach me out{" "}
        <a
          href="mailto:contact@mateuszpigula.dev?subject=Found your personal website"
          className="text-green-500 italic"
        >
          contact@mateuszpigula.dev
        </a>
      </p>
    </div>
  );
}
