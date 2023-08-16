function FeaturedProjects({ myProjects }) {
  return (
    <div className="flex flex-col items-center mb-16">
      <section className="w-[72rem] max-w-[90%] mt-16 mb-12">
        <h1 className="text-3xl font-bold text-center md:text-left">Featured Projects</h1>
        <p className="text-sm text-center md:text-left">Selected works.</p>
      </section>
      <div className="flex md:flex-col gap-4 md:gap-8 w-screen md:w-[74rem] md:max-w-[calc(90%+2rem)] overflow-x-auto px-[5%] md:px-4 py-4">
        {myProjects.slice(0, 2).map((project, index) => {
          return (
            <section
              key={index}
              className="flex flex-col md:flex-row md:items-start shrink-0 gap-8 bg-white w-[84vw] md:w-auto p-4 md:p-8 rounded-lg shadow-custom"
            >
              <a
                href={project.webPageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="grow bg-gray-100 border border-gray-200 rounded overflow-hidden cursor-pointer"
              >
                <img src={project.imgPreviewSrc} alt={project.imgPreviewAlt} />
              </a>
              <div className="w-full md:w-96 shrink-0">
                <h1 className="text-3xl font-bold text-center md:text-left">{project.title}</h1>
                <h2 className="text-sm text-center md:text-left mb-8">{project.subtitle}</h2>
                <p className="text-sm text-center md:text-left">{project.description}</p>
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
                    <svg
                      className="fill-none stroke-current stroke-1 md:stroke-[1.2] h-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span className="text-sm md:hidden">Source code</span>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;
