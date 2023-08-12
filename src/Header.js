import Logo from "./Logo";

function Header() {
  return (
    <header className="absolute flex justify-center h-40 w-full z-10">
      <div className="flex justify-between items-center h-full w-[72rem] max-w-6xl mx-[5%]">
        <section>
          <a href="#" title="John Napoles">
            <Logo color="#ffffff" />
          </a>
        </section>
        <section>
          <ul className="hidden gap-8 md:flex">
            <li>
              <a href="#home" className="text-sm text-white hover:underline cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#home" className="text-sm text-white hover:underline cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a href="#home" className="text-sm text-white hover:underline cursor-pointer">
                Experience
              </a>
            </li>
            <li>
              <a href="#home" className="text-sm text-white hover:underline cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#home" className="text-sm text-white hover:underline cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
          <button className="md:hidden">=</button>
        </section>
      </div>
    </header>
  );
}

export default Header;
