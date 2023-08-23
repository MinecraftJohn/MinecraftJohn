import Logo from "./assets/svg/Logo";
import NavigationIcon from "./assets/svg/NavigationIcon";
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
            <NavigationIcon className={"h-5 fill-none m-auto"} fill={isShowHeader ? "currentColor" : "#ffffff"} />
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;
