import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10  pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() => window.open("https://github.com/DheerajRedd")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline Your Reading with Summize: Transform Lengthy Articles into
        Clear and Concise Summaries
      </h2>
    </header>
  );
};

export default Hero;
