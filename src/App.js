import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Projects from "./components/sections/Projects";
import Experiences from "./components/sections/Experiences";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import PLCLogo from "./assets/img/pinoy-lifecraft-logo.png";
import ToDOLogo from "./assets/img/to-do-list-logo.png";
import WiFiLogo from "./assets/img/wifi-connect-logo.png";
import CrudhubLogo from "./assets/img/crudhub-logo.png";
import BiographyLogo from "./assets/img/john-logo.png";
import Seven11Logo from "./assets/img/7-eleven-logo.png";
import PLCPreview from "./assets/img/pinoylifecraft-ui-preview.png";
import ToDOPreview from "./assets/img/to-do-list-ui-preview.png";
import GithubIcon from "./components/icons/GithubIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import EmailIcon from "./components/icons/EmailIcon";
import FacebookIcon from "./components/icons/FacebookIcon";

function App() {
  const myProjects = [
    {
      id: 1,
      title: "Pinoy LifeCraft",
      subtitle: "Official landing page",
      imgLogoSrc: PLCLogo,
      imgPreviewSrc: PLCPreview,
      imgPreviewAlt: "Pinoy LifeCraft desktop mode preview",
      description:
        "A static website for Pinoy LifeCraft a Minecraft server for filipino players. This website is open source on github and open to contribution.",
      tags: ["HTML", "CSS", "JavaScript"],
      webPageLink: "https://pinoylifecraft.github.io",
      sourceCodeLink: "https://github.com/pinoylifecraft/pinoylifecraft.github.io",
    },
    {
      id: 2,
      title: "To Do List",
      subtitle: "JavaScript (localStorage)",
      imgLogoSrc: ToDOLogo,
      imgPreviewSrc: ToDOPreview,
      imgPreviewAlt: "To Do List desktop mode preview",
      description:
        "A to-do list app that will help you stay organized every time you open a browser. Best pair with browser extension that changes the new tab page.",
      tags: ["JavaScript", "localStorage", "CRUD"],
      webPageLink: "https://minecraftjohn.github.io/to-do-list/",
      sourceCodeLink: "https://github.com/MinecraftJohn/to-do-list",
    },
    {
      id: 3,
      title: "Wi-Fi Connect",
      subtitle: "Custom Portal Web Page",
      imgLogoSrc: WiFiLogo,
      description:
        "Open source my Omada custom portal web page for firmware controller below v4.4.3. I also made a custom design voucher generator for it.",
      tags: ["JavaScript", "Omada", "Omada Portal", "Windows UI", "Custom Template"],
      webPageLink: "https://minecraftjohn.github.io/wifi-connect/",
      sourceCodeLink: "https://github.com/MinecraftJohn/wifi-connect",
    },
    {
      id: 4,
      title: "Crudhub",
      subtitle: "CRUD Application",
      imgLogoSrc: CrudhubLogo,
      description:
        "The 4 basic server-side functions: create, read, update, and delete. Our very first project performance during our intern days.",
      tags: ["PHP", "MySQL", "CRUD", "JavaScript"],
      sourceCodeLink: "https://github.com/MinecraftJohn/crud-app",
    },
    {
      id: 5,
      title: "Biography",
      subtitle: "Biography (John Napoles)",
      imgLogoSrc: BiographyLogo,
      description:
        "This project is a school performance project for subject WEB 241. Its main purpose is to improve my web development skill.",
      tags: ["PHP", "MySQL", "CSS", "Arrays"],
      sourceCodeLink: "https://github.com/MinecraftJohn/biography",
    },
    {
      id: 6,
      title: "7-Eleven",
      subtitle: "School Web Project",
      imgLogoSrc: Seven11Logo,
      description:
        "This project is a school performance project for subject Software Development 244 and WEB 241. Its main purpose is to improve my web development skill.",
      tags: ["PHP", "MySQL", "Authentication System", "Form Validations"],
      sourceCodeLink: "https://github.com/MinecraftJohn/7-eleven",
    },
  ];
  const myExperiences = [
    {
      id: 1,
      title: "Proweaver, Inc.",
      subtitle: "Frontend web developer",
      info: "I maintain and improve websites, convert design layouts to responsive web pages, and fix any website issues or bugs. We used technologies such as HTML, CSS, JavaScript, PHP, and WordPress.",
    },
    {
      id: 2,
      title: "Wellmade Motors & Development Corporation",
      subtitle: "Frontend web developer (Intern)",
      info: "I've provided technical support and maintain IT resources as an intern for 12 months. On my last few months I was given a chance to be part of their development team, I created UI and layout for their quotation system and posible printable data.",
    },
    {
      id: 3,
      title: "Pinoy LifeCraft",
      subtitle: "Web builder",
      info: "I built a static landing website for Pinoy LifeCraft (Minecraft server) with Zyro a drag-and-drop website builder last 2017. The website was hosted on Hostinger.ph, with Namecheap as the DNS provider.",
    },
    // {
    //   id: 0,
    //   title: "???",
    //   subtitle: "Frontend web developer",
    //   info: "This is a slot for new experience. I am ready to take on new challenges and opportunities that match my skillset and qualifications.",
    // }
  ];
  const mySocialMedia = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/MinecraftJohn",
      iconFooter: <GithubIcon className="fill-none stroke-white stroke-[1.6] h-4" />,
      iconHeader: <GithubIcon className="fill-none stroke-current stroke-[1.4] h-4" />,
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/johnnapoles/",
      iconFooter: <LinkedinIcon className={"fill-none h-4"} fill={"#ffffff"} />,
      iconHeader: <LinkedinIcon className={"fill-none h-4"} fill={"currentColor"} />,
    },
    {
      id: 3,
      name: "Gmail",
      link: "mailto:minecraft.john727@gmail.com",
      iconFooter: <EmailIcon className={"fill-none h-4"} fill={"#ffffff"} />,
      iconHeader: <EmailIcon className={"fill-none h-4"} fill={"currentColor"} />,
    },
    {
      id: 4,
      name: "Facebook",
      link: "https://www.facebook.com/minecraft.john72",
      iconFooter: <FacebookIcon className={"fill-none h-4"} stroke={"#ffffff"} />,
      iconHeader: <FacebookIcon className={"fill-none h-4"} stroke={"currentColor"} />,
    },
  ];
  return (
    <div className="relative bg-blue-50">
      <Header mySocialMedia={mySocialMedia} />
      <Hero />
      <FeaturedProjects myProjects={myProjects} />
      <Projects myProjects={myProjects} />
      <Experiences myExperiences={myExperiences} />
      <About />
      <Contact />
      <Footer mySocialMedia={mySocialMedia} />
    </div>
  );
}

export default App;
