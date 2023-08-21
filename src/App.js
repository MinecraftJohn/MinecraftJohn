import Header from "./Header";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import Projects from "./Projects";
import Experiences from "./Experiences";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

function App() {
  const [isShowHeader, setShowHeader] = useState(false);
  const showHeader = () => {
    const height = document.querySelector("#home").scrollHeight;
    let calcPerc = height * 0.16;
    document.querySelector("html").scrollTop > height - calcPerc ? setShowHeader(true) : setShowHeader(false);
  };
  window.addEventListener("scroll", showHeader);
  const myProjects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      title: "Crudhub",
      subtitle: "CRUD Application",
      imgLogoSrc: "https://i.imgur.com/x7XCeeY.png",
      description:
        "The 4 basic server-side functions: create, read, update, and delete. Our very first project performance during our intern days.",
      tags: ["PHP", "MySQL", "CRUD", "JavaScript"],
      sourceCodeLink: "https://github.com/MinecraftJohn/crud-app",
    },
    {
      id: 5,
      title: "Biography",
      subtitle: "Biography (John Napoles)",
      imgLogoSrc: "https://i.imgur.com/KFQAdd8.png",
      description:
        "This project is a school performance project for subject WEB 241. Its main purpose is to improve my web development skill.",
      tags: ["PHP", "MySQL", "CSS", "Arrays"],
      sourceCodeLink: "https://github.com/MinecraftJohn/biography",
    },
    {
      id: 6,
      title: "7-Eleven",
      subtitle: "School Web Project",
      imgLogoSrc: "https://i.imgur.com/twcLmZ7.png",
      description:
        "This project is a school performance project for subject Software Development 244 and WEB 241. Its main purpose is to improve my web development skill.",
      tags: ["PHP", "MySQL", "Authentication System", "Form Validations"],
      sourceCodeLink: "https://github.com/MinecraftJohn/7-eleven",
    },
  ];
  const myExperiences = [
    {
      id: 1,
      title: "Wellmade Motors & Development Corporation",
      subtitle: "Frontend web developer (Intern)",
      info: "I've provided technical support and maintain IT resources as an intern for 12 months. On my last few months I was given a chance to be part of their development team, I created UI and layout for their quotation system and posible printable data.",
    },
    {
      id: 2,
      title: "Pinoy LifeCraft",
      subtitle: "Web builder",
      info: "I built a static landing website for Pinoy LifeCraft with Zyro web builder (a Wordpress alternative) in 2017. The website was hosted on Hostinger.ph, with Namecheap as the DNS provider.",
    },
    {
      id: 3,
      title: "???",
      subtitle: "Frontend web developer",
      info: "This is a slot for new experience. I am ready to take on new challenges and opportunities that match my skillset and qualifications.",
    },
  ];
  return (
    <div className="relative bg-blue-50">
      <Header isShowHeader={isShowHeader} />
      <Hero />
      <FeaturedProjects myProjects={myProjects} />
      <Projects myProjects={myProjects} />
      <Experiences myExperiences={myExperiences} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
