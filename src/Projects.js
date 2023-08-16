function Projects({ myProjects }) {
  return (
    <div id="projects" className="flex flex-col items-center pt-16">
      <section className="w-[72rem] max-w-[90%] mb-12">
        <h1 className="text-3xl font-bold text-center md:text-left">My Projects</h1>
        <p className="text-sm text-center md:text-left">Some things I've built.</p>
      </section>
      <div className="flex md:flex-wrap gap-4 md:gap-8 w-screen md:w-[74rem] md:max-w-[calc(90%+2rem)] overflow-x-auto px-[5%] md:px-4 py-4">
        {myProjects.map((project, index) => {
          return (
            <section
              key={index}
              className="flex flex-col justify-between shrink-0 md:grow bg-white w-[84vw] md:w-80 p-4 md:p-8 rounded-lg shadow-custom"
            >
              <div>
                <img src={project.imgLogoSrc} alt={project.title} className="mx-auto" />
                <p className="text-sm text-center md:text-left mt-2">{project.subtitle}</p>
                <p className="text-sm text-center md:text-left my-8">{project.description}</p>
                <div className="flex flex-wrap justify-center md:justify-normal gap-2 my-8">
                  {project.tags.map((data, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center text-xs leading-6 text-[#075DCE] h-6 px-3 bg-blue-100 rounded-full"
                      >
                        {data}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-normal gap-2">
                {project.webPageLink ? (
                  <a
                    href={project.webPageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm px-6 w-full md:w-auto h-10 rounded select-none border border-gray-300 hover:border-gray-400 active:opacity-60"
                  >
                    View project
                  </a>
                ) : null}
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source code"
                  className={`flex justify-center items-center gap-2 h-10 w-full ${
                    project.webPageLink ? "md:w-10 md:p-0" : "md:w-auto px-6"
                  } rounded border border-gray-300 hover:border-gray-400 active:opacity-60`}
                >
                  <svg
                    className="fill-none stroke-current stroke-1 md:stroke-[1.2] h-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className={`text-sm ${project.webPageLink ? "md:hidden" : null}`}>Source code</span>
                </a>
              </div>
            </section>
          );
        })}
      </div>
      <p className="text-sm w-[72rem] max-w-[90%] mt-4">
        You can explore more projects on my{" "}
        <a
          href="https://github.com/MinecraftJohn?tab=repositories"
          className="text-[#075DCE] underline hover:no-underline active:opacity-60"
        >
          github respositories
        </a>
        .
      </p>
    </div>
  );
}

export default Projects;
