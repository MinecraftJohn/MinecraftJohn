import GithubIcon from "../../components/icons/GithubIcon";

function FeaturedProjects({ myProjects }) {
  return (
    <div className="flex flex-col items-center mb-32">
      <section className="w-[72rem] max-w-[90%] mt-16 mb-12">
        <h1 className="text-3xl font-bold text-center md:text-left">Featured Projects</h1>
        <p className="text-sm text-center md:text-left">Selected works.</p>
      </section>
      <ul className="flex md:flex-col gap-4 md:gap-8 w-full md:w-[74rem] md:max-w-[calc(90%+2rem)] overflow-x-auto px-[5%] md:px-4 py-4">
        {myProjects.slice(0, 2).map((project) => {
          return (
            <li
              key={project.id}
              className="flex flex-col md:flex-row md:items-start shrink-0 gap-8 bg-white w-[80vw] md:w-auto p-4 md:p-8 rounded-lg shadow-custom"
            >
              <a
                href={project.webPageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 border border-gray-200 rounded overflow-hidden cursor-pointer"
              >
                <img src={project.imgPreviewSrc} alt={project.imgPreviewAlt} />
              </a>
              <div className="flex flex-col justify-between w-full md:w-96 grow md:shrink-0">
                <h1 className="text-3xl font-bold text-center md:text-left">{project.title}</h1>
                <h2 className="text-sm text-center md:text-left mb-8">{project.subtitle}</h2>
                <p className="text-sm text-center md:text-left">{project.description}</p>
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
                <div className="flex flex-wrap justify-center md:justify-normal gap-2">
                  <a
                    href={project.webPageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm text-white px-6 w-full md:w-auto h-10 bg-[#075DCE] rounded select-none hover:opacity-90 active:opacity-60"
                  >
                    View project
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Source code"
                    className="flex justify-center items-center gap-2 h-10 w-full md:w-10 px-6 md:p-0 rounded border border-gray-300 hover:border-gray-400 active:opacity-60"
                  >
                    <GithubIcon className="fill-none stroke-current stroke-[1.4] h-4" />
                    <span className="text-sm md:hidden">Source code</span>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturedProjects;
