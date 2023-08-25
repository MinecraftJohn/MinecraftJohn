import HexagonBG from "../../assets/svg/HexagonBG";
import RounderBG from "../../assets/svg/RounderBG";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div id="home" className="h-screen overflow-x-hidden">
      <div className="relative flex justify-center bg-gradient-to-tr from-[#1890DE] to-[#075DCE] min-h-[25rem] h-[84vh]">
        <section className="relative flex justify-center w-[72rem] max-w-[90%]">
          <HexagonBG className={"absolute top-[16%] right-0 translate-x-1/2 h-16 pointer-events-none"} />
          <HexagonBG className={"absolute top-[calc(16%+2rem)] -right-2 h-16 pointer-events-none"} />
          <div className="absolute top-1/2 translate-y-[-80%] md:-translate-y-1/2">
            <p className="text-xl text-white">
              Hi <span className="inline-block origin-[75%_75%] animate-wave cursor-auto">👋</span>, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">John Napoles</h1>
            <p className="text-xl text-white">A frontend web developer.</p>
          </div>
          <HexagonBG className={"absolute -bottom-24 left-0 -translate-x-3/4 h-64 pointer-events-none"} />
        </section>
        <Link
          to="projects"
          smooth={true}
          duration={400}
          offset={-144}
          className="absolute bottom-[16%] text-sm leading-10 px-6 h-10 bg-white rounded select-none cursor-pointer hover:opacity-90 active:opacity-60"
        >
          See my projects
        </Link>
        <RounderBG className={"absolute -bottom-px fill-blue-50 w-full"} />
      </div>
    </div>
  );
}

export default Hero;
