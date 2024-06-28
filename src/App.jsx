import Background from "./components/Background";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Promise from "./components/Promise";

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
      <section className="bg-[#F2F8FC]">
        <ContactMe />
      </section>
      <section className="bg-violet-800">
        <Footer />
      </section>

    </main>
  )
}

export default App