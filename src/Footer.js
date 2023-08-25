import Logo from "./assets/svg/Logo";

function Footer({ mySocialMedia }) {
  return (
    <footer className="flex justify-center bg-[#24292f]">
      <section className="flex flex-col md:flex-row md:justify-between w-[72rem] max-w-[90%] pt-16 pb-8">
        <div className="flex flex-col items-center md:items-start">
          <Logo className={"fill-none h-[0.9375rem] md:h-5"} fill="#ffffff" />
          <blockquote className="text-white text-center md:text-left text-sm w-3/4 md:w-[60%] pt-8 pb-20 md:pb-0">
            "If you're not a good shot today, don't worry. There are other ways to be useful."
            <br />
            <br />- Sova
          </blockquote>
        </div>
        <div className="flex flex-col items-center md:items-end md:justify-end">
          <ul className="flex md:-mr-3">
            {mySocialMedia.map((social) => {
              return (
                <li key={social.id}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="flex justify-center items-center h-10 w-10 rounded hover:bg-white/10 active:opacity-60"
                  >
                    {social.iconFooter}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-white text-sm mt-4">Made with 🍜 by John Napoles.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
