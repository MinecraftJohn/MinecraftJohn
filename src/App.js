import Header from "./Header";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import Projects from "./Projects";

function App() {
  return (
    <div className="relative bg-gray-100">
      <Header />
      <Hero />
      <FeaturedProjects />
      <Projects />
    </div>
  );
}

export default App;
