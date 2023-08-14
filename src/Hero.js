import HexagonBG from "./assets/svg/HexagonBG";

function Hero() {
  return (
    <div id="home" className="h-screen overflow-x-hidden">
      <div className="relative flex justify-center bg-gradient-to-tr from-[#1890DE] to-[#075DCE] min-h-[25rem] h-[84vh]">
        <section className="relative flex justify-center w-[72rem] max-w-6xl mx-[5%]">
          <HexagonBG classes={"absolute top-[16%] right-0 translate-x-1/2 h-16 pointer-events-none"} />
          <HexagonBG classes={"absolute top-[calc(16%+2rem)] -right-2 h-16 pointer-events-none"} />
          <div className="absolute top-1/2 translate-y-[-80%] md:-translate-y-1/2">
            <p className="text-xl text-white">
              Hi{" "}
              <span className="inline-block origin-[75%_75%] animate-[wave-hand_2.1s_0.6s_infinite] cursor-auto">
                👋
              </span>
              , I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">John Napoles</h1>
            <p className="text-xl text-white">
              A <u className="text-white">frontend web developer.</u>
            </p>
          </div>
          <HexagonBG classes={"absolute -bottom-24 left-0 -translate-x-3/4 h-64 pointer-events-none"} />
        </section>
        <button
          type="button"
          className="absolute bottom-[16%] text-sm px-6 h-10 bg-white mt-24 rounded select-none hover:opacity-90 active:opacity-80 shadow-custom"
        >
          See my projects
        </button>
        <svg
          className="absolute -bottom-px fill-gray-100 w-full"
          viewBox="0 0 2560 158"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L0 157.453H2560V5.2187e-06C2222.3 97.1869 1773.09 156.453 1280 156.453C786.914 156.453 337.698 97.1869 0 0Z" />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
