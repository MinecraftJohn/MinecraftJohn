import GithubIcon from "./assets/svg/GithubIcon";

function Projects({ myProjects }) {
  return (
    <div id="projects" className="flex flex-col items-center mb-32">
      <section className="w-[72rem] max-w-[90%] mb-12">
        <h1 className="text-3xl font-bold text-center md:text-left">My Projects</h1>
        <p className="text-sm text-center md:text-left">Some things I've built.</p>
      </section>
      <ul className="grid grid-flow-col md:grid-flow-row grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8 w-full md:w-[74rem] md:max-w-[calc(90%+2rem)] overflow-x-auto px-[5%] md:px-4 py-4">
        {myProjects.map((project) => {
          return (
            <li
              key={project.id}
              className="flex flex-col justify-between bg-white w-[80vw] md:w-auto p-4 md:p-8 rounded-lg shadow-custom"
            >
              <div>
                <img src={project.imgLogoSrc} alt={project.title} className="mx-auto" />
                <p className="text-sm text-center md:text-left mt-2">{project.subtitle}</p>
                <p className="text-sm text-center md:text-left my-8">{project.description}</p>
                <ul className="flex flex-wrap justify-center md:justify-normal gap-2 my-8">
                  {project.tags.map((data) => {
                    return (
                      <li
                        key={data}
                        className="inline-flex items-center text-xs leading-6 text-[#075DCE] h-6 px-3 bg-blue-100 rounded-full"
                      >
                        {data}
                      </li>
                    );
                  })}
                </ul>
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
                  <GithubIcon className="fill-none stroke-current stroke-1 md:stroke-[1.2] h-4" />
                  <span className={`text-sm ${project.webPageLink ? "md:hidden" : null}`}>Source code</span>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-sm text-center md:text-left w-[72rem] max-w-[90%] mt-4">
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
