function Experiences({ myExperiences }) {
  return (
    <div id="experiences" className="flex flex-col items-center mb-32">
      <section className="w-[72rem] max-w-[90%] mb-16">
        <h1 className="text-3xl font-bold text-center md:text-left">Experiences</h1>
        <p className="text-sm text-center md:text-left">The past adventures of mine.</p>
      </section>
      <ul className="flex flex-wrap flex-col md:flex-row gap-16 w-[72rem] max-w-[90%]">
        {myExperiences.map((exp, index) => {
          return (
            <li key={index} className="grow md:w-2/5 md:max-w-[calc(50%-1rem)]">
              <h5 className="text-base font-bold">{exp.title}</h5>
              <p className="text-sm opacity-70 mb-4">{exp.subtitle}</p>
              <p className="text-sm text-justify">{exp.info}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experiences;
