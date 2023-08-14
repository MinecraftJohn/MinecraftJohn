function FeaturedProjects() {
  return (
    <div className="flex justify-center">
      <div className="w-[72rem] max-w-6xl mx-[5%]">
        <header className="my-8 md:my-16">
          <h1 className="text-3xl font-bold text-center md:text-left">Featured Projects</h1>
          <p className="text-sm text-center md:text-left">Selected works</p>
        </header>
        <div>
          <section className="flex flex-col md:flex-row gap-8 bg-white p-4 md:p-8 rounded-lg shadow-custom">
            <a
              href="https://pinoylifecraft.github.io"
              className="grow bg-gray-100 border border-gray-200 rounded overflow-hidden cursor-pointer"
            >
              <img
                src="https://i.imgur.com/DW0Mgoz.png"
                alt="Pinoy LifeCraft desktop mode preview"
                className="transition-all duration-200 hover:scale-105"
              />
            </a>
            <div className="w-full md:w-96 shrink-0">
              <h1 className="text-3xl font-bold text-center md:text-left">Pinoy LifeCraft</h1>
              <h2 className="text-sm text-center md:text-left mb-8">Landing page & source of server news</h2>
              <p className="text-sm text-center md:text-left mb-8">
                A static website for Pinoy LifeCraft a Minecraft server for filipino players. This website is open
                source on github and open to contribution.
              </p>
              <div className="flex flex-wrap justify-center md:justify-normal gap-2 mb-8">
                <span className="inline-flex items-center text-xs leading-6 text-[#075DCE] h-6 px-3 bg-blue-100 rounded-full">
                  HTML
                </span>
                <span className="inline-flex items-center text-xs leading-6 text-[#075DCE] h-6 px-3 bg-blue-100 rounded-full">
                  CSS
                </span>
                <span className="inline-flex items-center text-xs leading-6 text-[#075DCE] h-6 px-3 bg-blue-100 rounded-full">
                  JavaScript
                </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-normal gap-2 mb-8">
                <a
                  href="https://pinoylifecraft.github.io"
                  className="inline-flex items-center justify-center text-sm text-white px-6 w-full md:w-auto h-10 bg-[#075DCE] rounded select-none hover:opacity-90 active:opacity-80"
                >
                  Take a look
                </a>
                <a
                  href="https://github.com/pinoylifecraft/pinoylifecraft.github.io"
                  title="Source code"
                  className="group flex justify-center items-center gap-2 h-10 w-full md:w-auto px-6 rounded border border-gray-200"
                >
                  <svg
                    className="fill-none stroke-current stroke-1 md:stroke-[1.6] h-4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-sm group-hover:underline">Source code</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
