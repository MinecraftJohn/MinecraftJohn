import HexagonBG from "../../assets/svg/HexagonBG";
import RounderBG from "../../assets/svg/RounderBG";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="home" className="h-screen overflow-x-hidden">
      <div className="relative flex justify-center bg-gradient-to-tr from-[#1890DE] to-[#075DCE] min-h-[32rem] h-[84vh]">
        <section className="relative flex justify-center w-[72rem] max-w-[90%]">
          <HexagonBG className={"absolute top-[16%] right-0 translate-x-1/2 h-16 pointer-events-none"} />
          <HexagonBG className={"absolute top-[calc(16%+2rem)] -right-2 h-16 pointer-events-none"} />
          <div className="absolute top-1/2 translate-y-[-80%] md:-translate-y-1/2">
            <p className="text-xl">
              <motion.span
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                transition={{ delay: 1.6 }}
                className="text-white"
              >
                Hi
              </motion.span>{" "}
              <motion.span
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                transition={{ delay: 1.7 }}
                className="inline-block origin-[75%_75%] animate-wave cursor-grab"
              >
                👋
              </motion.span>
              <motion.span
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                transition={{ delay: 4 }}
                className="text-white"
              >
                , I'm
              </motion.span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <motion.span
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                transition={{ delay: 4.6 }}
                className="text-white"
              >
                John
              </motion.span>{" "}
              <motion.span
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                transition={{ delay: 5.2 }}
                className="text-white"
              >
                Napoles
              </motion.span>
            </h1>
            <motion.p
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 6.2, duration: 0.2 }}
              className="text-xl text-white"
            >
              A frontend web developer.
            </motion.p>
          </div>
          <HexagonBG className={"absolute -bottom-24 left-0 -translate-x-3/4 h-64 pointer-events-none"} />
        </section>
        <motion.button
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 8, duration: 0.2 }}
          className="absolute bottom-[16%]"
        >
          <Link
            to="projects"
            smooth={true}
            duration={400}
            offset={-144}
            className="block text-sm leading-10 px-6 h-10 bg-white rounded select-none hover:opacity-90 active:opacity-60"
          >
            See my projects
          </Link>
        </motion.button>
        <RounderBG className={"absolute -bottom-px fill-blue-50 w-full"} />
      </div>
    </div>
  );
}

export default Hero;
