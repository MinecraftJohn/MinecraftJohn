import Logo from "./assets/svg/Logo";

function Header() {
  const navigations = ["home", "projects", "experiences", "about", "contact"];
  return (
    <header className="absolute flex justify-center md:h-40 h-20 w-full z-10 header-container">
      <div className="flex justify-between items-center h-full w-[72rem] max-w-[90%]">
        <section>
          <a href="#home" title="John Napoles">
            <Logo color="#ffffff" />
          </a>
        </section>
        <section>
          <ul className="hidden gap-8 md:flex">
            {navigations.map((navigation, index) => {
              return (
                <li key={index}>
                  <a
                    href={"#" + navigation}
                    className="text-sm capitalize text-white hover:underline active:opacity-60 cursor-pointer"
                  >
                    {navigation}
                  </a>
                </li>
              );
            })}
          </ul>
          <button type="button" className="h-8 w-8 rounded hover:bg-white/10 md:hidden">
            <svg className="h-5 fill-none m-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.753 18h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493L2.753 18h18.5-18.5Zm0-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493l.102-.007h18.5-18.5Zm-.001-6.5h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5A.75.75 0 0 1 2.65 5.01l.102-.007h18.5-18.5Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;
