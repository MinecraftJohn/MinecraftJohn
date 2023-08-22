import Logo from "./assets/svg/Logo";
import { Link } from "react-scroll";

function Header({ isShowHeader }) {
  const navigations = ["home", "projects", "experiences", "about", "contact"];
  return (
    <header
      className={`${
        isShowHeader ? "fixed backdrop-blur-xl bg-white/95 !h-20 border-b border-gray-300" : "absolute"
      } flex justify-center md:h-40 h-20 w-full z-10 header-container`}
    >
      <div className="flex justify-between items-center h-full w-[72rem] max-w-[90%]">
        <section>
          <Link to="home" smooth={true} duration={400} title="John Napoles" className="cursor-pointer">
            <Logo
              className={"fill-none h-[0.9375rem] md:h-5"}
              fill={isShowHeader ? "url(#paint0_linear_840_2)" : "#ffffff"}
            />
          </Link>
        </section>
        <section>
          <ul className="hidden gap-8 md:flex">
            {navigations.map((navigation, index) => {
              return (
                <li key={index}>
                  <Link
                    to={navigation}
                    smooth={true}
                    offset={-144}
                    duration={400}
                    className={`${
                      isShowHeader ? null : "text-white"
                    } text-sm capitalize hover:underline active:opacity-60 cursor-pointer`}
                  >
                    {navigation}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            title="Navigations"
            className={`h-8 w-8 rounded ${
              isShowHeader ? "hover:bg-[#24292f]/10" : "hover:bg-white/10"
            } active:opacity-60 md:hidden`}
          >
            <svg className="h-5 fill-none m-auto" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
                fill={isShowHeader ? "currentColor" : "#ffffff"}
              />
            </svg>
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;
