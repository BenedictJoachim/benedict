import  { arrowRight }  from "./assets/icons";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Promise from "./components/Promise";
import Background from "./components/Background";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

const App =() => {
  return (
    <main>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Promise />
      </section>
      <section className="bg-violet-800">
        <Background />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactMe />
      </section>
      <section className="bg-violet-800">
        <Footer />
      </section>

    </main>
  )
}

export default App