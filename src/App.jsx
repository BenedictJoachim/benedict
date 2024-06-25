import  { arrowRight }  from "./assets/icons";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Promise from "./components/Promise";
import Background from "./components/Background";
import Footer from "./components/Footer";

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
        Display
      </section>
      <section>
        Contact Me
      </section>
      <section className="bg-violet-800">
        <Footer />
      </section>

    </main>
  )
}

export default App