import { Hero } from "~/components/Hero";
import { SplashScreen } from "~/components/SplashScreen";

export default function Index() {
  return (
    <main className="container mx-auto text-center max-w-3xl font-sans px-4 min-h-screen flex flex-col justify-center items-center">
      <SplashScreen />
      <Hero />
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
      <ul className="text-2xl flex gap-3 justify-center mt-8 mb-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mateuszpigula"
        >
          <i className="ri-linkedin-box-fill hover:text-green-500 transition-all"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mateuszpigula"
        >
          <i className="ri-github-fill hover:text-green-500 transition-all"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/mateusz_pigula"
        >
          <i className="ri-twitter-fill hover:text-green-500 transition-all"></i>
        </a>
      </ul>

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
    </main>
  );
}
