import './App.css'

import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'

function App() {
  return (
    <>
      <header className="navbar">

        <div className="logo">
          WILBER
          <span>GONZALEZ</span>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </header>

      <main>

        <section id="inicio" className="hero">

          <p className="saludo">
            Hola, soy
          </p>

          <h1>
            Wilber Gonzalez
          </h1>

          <h2>
            Estudiante de Ingeniería Informática
          </h2>

          <p className="descripcion">
            Apasionado por la tecnología, la programación y el
            desarrollo de soluciones digitales.
          </p>

          <div className="botones">

            <a
              href="#proyectos"
              className="boton principal"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="boton secundario"
            >
              Contactarme
            </a>

          </div>

        </section>

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

      <footer>
        <p>
          © 2026 Wilber Gonzalez — Ingeniería Informática
        </p>
      </footer>

    </>
  )
}

export default App