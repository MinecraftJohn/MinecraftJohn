function Experiences({ myExperiences }) {
  return (
    <div id="experiences" className="flex flex-col items-center min-h-[66vh] mb-32">
      <section className="w-[72rem] max-w-[90%] mb-16">
        <h1 className="text-3xl font-bold text-center md:text-left">Experiences</h1>
        <p className="text-sm text-center md:text-left">The past adventures of mine.</p>
      </section>
      <ul
        className={`grid md:grid-cols-2 md:grid-rows-${Math.ceil(
          myExperiences.length / 2
        )} gap-16 w-[72rem] max-w-[90%]`}
      >
        {myExperiences.map((exp) => {
          return (
            <li key={exp.id}>
              <h5 className="text-center md:text-left text-base font-bold">{exp.title}</h5>
              <p className="text-center md:text-left text-sm opacity-70 mb-4">{exp.subtitle}</p>
              <p className="text-sm text-center md:text-justify">{exp.info}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experiences;
