import Header from "./Header";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import Projects from "./Projects";

function App() {
  const myProjects = [
    {
      title: "Pinoy LifeCraft",
      subtitle: "Official landing page",
      imgLogoSrc: "https://i.imgur.com/sijQ0tB.png",
      imgPreviewSrc: "https://i.imgur.com/DW0Mgoz.png",
      imgPreviewAlt: "Pinoy LifeCraft desktop mode preview",
      description:
        "A static website for Pinoy LifeCraft a Minecraft server for filipino players. This website is open source on github and open to contribution.",
      tags: ["HTML", "CSS", "JavaScript"],
      webPageLink: "https://pinoylifecraft.github.io",
      sourceCodeLink: "https://github.com/pinoylifecraft/pinoylifecraft.github.io",
    },
    {
      title: "To Do List",
      subtitle: "JavaScript (localStorage)",
      imgLogoSrc: "https://i.imgur.com/rIPQRxz.png",
      imgPreviewSrc: "https://i.imgur.com/jxNyVdM.png",
      imgPreviewAlt: "To Do List desktop mode preview",
      description:
        "A to-do list app that will help you stay organized every time you open a browser. Best pair with browser extension that changes the new tab page.",
      tags: ["JavaScript", "localStorage", "CRUD"],
      webPageLink: "https://minecraftjohn.github.io/to-do-list/",
      sourceCodeLink: "https://github.com/MinecraftJohn/to-do-list",
    },
    {
      title: "Wi-Fi Connect",
      subtitle: "Custom Portal Web Page",
      imgLogoSrc: "https://i.imgur.com/AtYczBM.png",
      description:
        "Open source my Omada custom portal web page for firmware controller below v4.4.3. I also made a custom design voucher generator for it.",
      tags: ["JavaScript", "Omada", "Omada Portal", "Windows UI", "Custom Template"],
      webPageLink: "https://minecraftjohn.github.io/wifi-connect/",
      sourceCodeLink: "https://github.com/MinecraftJohn/wifi-connect",
    },
    {
      title: "Crudhub",
      subtitle: "CRUD Application",
      imgLogoSrc: "https://i.imgur.com/x7XCeeY.png",
      description:
        "The 4 basic server-side functions: create, read, update, and delete. Our very first project performance during our intern days.",
      tags: ["PHP", "MySQL", "CRUD", "JavaScript"],
      sourceCodeLink: "https://github.com/MinecraftJohn/crud-app",
    },
    {
      title: "Biography",
      subtitle: "Biography (John Napoles)",
      imgLogoSrc: "https://i.imgur.com/KFQAdd8.png",
      description:
        "This project is a school performance project for subject WEB 241. Its main purpose is to improve my web development skill.",
      tags: ["PHP", "MySQL", "CSS", "Arrays"],
      sourceCodeLink: "https://github.com/MinecraftJohn/crud-app",
    },
    {
      title: "7-Eleven",
      subtitle: "School Web Project",
      imgLogoSrc: "https://i.imgur.com/twcLmZ7.png",
      description:
        "This project is a school performance project for subject WEB 241. Its main purpose is to improve my web development skill.",
      tags: ["PHP", "MySQL", "Authentication System", "Form Validations"],
      sourceCodeLink: "https://github.com/MinecraftJohn/crud-app",
    },
  ];
  return (
    <div className="relative bg-blue-50">
      <Header />
      <Hero />
      <FeaturedProjects myProjects={myProjects} />
      <Projects myProjects={myProjects} />
    </div>
  );
}

export default App;
