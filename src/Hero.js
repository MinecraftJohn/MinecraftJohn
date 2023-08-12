function Hero() {
  return (
    <div id="home" className="h-screen">
      <section className="relative flex justify-center bg-gradient-to-tr from-[#1890DE] to-[#075DCE] h-[90vh]">
        <div className="absolute bottom-[20%]">
          <p className="text-lg text-white">Hi 👋, I'm</p>
          <h1 className="text-7xl font-bold text-white">John Napoles</h1>
          <p className="text-lg text-white">
            A <u className="text-white">frontend web developer.</u>
          </p>
          <div align="center">
            <button className="text-sm font-medium px-6 h-10 bg-white mt-24 rounded hover:opacity-80 active:opacity-60">
              See my projects
            </button>
          </div>
        </div>
        <svg
          className="absolute -bottom-px fill-white w-full"
          viewBox="0 0 2560 158"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L0 157.453H2560V5.2187e-06C2222.3 97.1869 1773.09 156.453 1280 156.453C786.914 156.453 337.698 97.1869 0 0Z" />
        </svg>
      </section>
    </div>
  );
}

export default Hero;
