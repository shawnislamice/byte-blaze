import Hero from "../components/Hero";
import Nav from "../components/Nav";
import wave from "../../src/assets/wave.svg";
const Home = () => {
  return (
    <div className="flex relative flex-col justify-center min-h-[calc(100vh-64px-52px)]">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full opacity-50" src={wave} alt="" />
    </div>
  );
};

export default Home;
