import Logo from "./assets/svg/Logo";
import primaryPic from "./assets/img/my-graduation-pic-modified.png";
import secondaryPic from "./assets/img/my-picture@IC3.png";

function About() {
  return (
    <div id="about" className="flex flex-col items-center min-h-[66vh] mb-32">
      <section className="w-[72rem] max-w-[90%] mb-16">
        <h1 className="text-3xl font-bold text-center md:text-left">About Me</h1>
        <p className="text-sm text-center md:text-left">Introduction and summary</p>
      </section>
      <section className="flex flex-col justify-between md:flex-row gap-24 md:gap-16 w-[72rem] max-w-[90%]">
        <div className="md:w-[66%]">
          <p className="text-sm text-justify shrink-0">
            Hello, they call me MinecraftJohn and I make amazing things for the web, from design to development.
            <br />
            <br />I started my web development journey in 2017, when I created a website for my game server using a
            website builder. However, I was not satisfied with the limited customization options. Therefore, I decided
            to learn HTML and CSS, which are markup languages that allow me to create beautiful and responsive websites.
            Since then, I have never stopped improving my web development skills. In addition, I have learned
            JavaScript, React, and TailwindCSS, which are powerful technologies for creating interactive and
            user-friendly web applications. You can check out some of the websites I have created on my GitHub profile.{" "}
            <br />
            <br />
            If you have any questions or feedback for me, please don’t hesitate to reach out. I would love to hear from
            you. 😊
          </p>
        </div>
        <div className="relative w-full h-36 md:h-64 bg-white rounded-xl shadow-custom">
          <div className="group absolute -top-4 right-[12%] w-[44%] rotate-12 rounded-xl overflow-hidden shadow-custom transition-all duration-300 ease-out hover:-top-16 hover:rotate-0 hover:z-[1]">
            <div className="absolute top-0 group-hover:top-full bg-gradient-to-tr from-[#1890DE] to-[#075DCE] opacity-90 w-full h-full transition-all delay-300 duration-300 ease-out"></div>
            <img src={secondaryPic} alt="Me taking a picture IC3" />
          </div>
          <div className="group absolute -bottom-8 left-[12%] w-[54%] rounded-xl overflow-hidden shadow-custom">
            <div className="absolute top-0 group-hover:top-full bg-gradient-to-tr from-[#1890DE] to-[#075DCE] opacity-90 w-full h-full transition-all duration-300 ease-out"></div>
            <Logo
              className={
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-none h-[0.9375rem] md:h-5 transition-all duration-300 ease-out group-hover:scale-[4] group-hover:opacity-0"
              }
              fill={"#ffffff"}
            />
            <img src={primaryPic} alt="My graduation picture" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
