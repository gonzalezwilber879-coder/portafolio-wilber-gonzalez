import './App.css'
import { useState, useEffect } from 'react'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'

function App() {

  // MODO OSCURO Y CLARO
  const [lightMode, setLightMode] = useState(
    localStorage.getItem('theme') === 'light'
  )

  // IDIOMA
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'es'
  )

  useEffect(() => {
    document.body.classList.toggle('light-theme', lightMode)
    localStorage.setItem('theme', lightMode ? 'light' : 'dark')
  }, [lightMode])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  function toggleTheme() {
    setLightMode(!lightMode)
  }

  function toggleLanguage() {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  // TEXTOS EN ESPAÑOL E INGLÉS
  const texts = {
    es: {
      inicio: 'Inicio',
      sobre: 'Sobre mí',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      saludo: 'Hola, soy',
      profesion: 'Estudiante de Ingeniería Informática',
      descripcion: 'Apasionado por la tecnología, la programación y el desarrollo de soluciones digitales.',
      verProyectos: 'Ver proyectos',
      contactarme: 'Contactarme',
      footer: 'Ingeniería Informática'
    },

    en: {
      inicio: 'Home',
      sobre: 'About me',
      habilidades: 'Skills',
      proyectos: 'Projects',
      contacto: 'Contact',
      saludo: 'Hello, I am',
      profesion: 'Computer Engineering Student',
      descripcion: 'Passionate about technology, programming and developing digital solutions.',
      verProyectos: 'View projects',
      contactarme: 'Contact me',
      footer: 'Computer Engineering'
    }
  }

  const t = texts[language]

  return (
    <>
      <header className="navbar">

        <div className="logo">
          WILBER
          <span>GONZALEZ</span>
        </div>

        <nav>
          <a href="#inicio">{t.inicio}</a>
          <a href="#sobre-mi">{t.sobre}</a>
          <a href="#habilidades">{t.habilidades}</a>
          <a href="#proyectos">{t.proyectos}</a>
          <a href="#contacto">{t.contacto}</a>
        </nav>

        <div className="header-buttons">

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {lightMode ? '🌙' : '☀️'}
          </button>

          <button
            className="language-button"
            onClick={toggleLanguage}
          >
            {language === 'es' ? '🇺🇸 EN' : '🇨🇴 ES'}
          </button>

        </div>

      </header>

      <main>

        <section id="inicio" className="hero">

          <p className="saludo">
            {t.saludo}
          </p>

          <h1>
            Wilber Gonzalez
          </h1>

          <h2>
            {t.profesion}
          </h2>

          <p className="descripcion">
            {t.descripcion}
          </p>

          <div className="botones">

            <a href="#proyectos" className="boton principal">
              {t.verProyectos}
            </a>

            <a href="#contacto" className="boton secundario">
              {t.contactarme}
            </a>

          </div>

        </section>

        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />

      </main>

      <footer>
  <p>
    © 2026 Wilber Gonzalez — {t.footer}
  </p>

  <div className="social-links">
    <a
      href="https://github.com/gonzalezwilber879-coder"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a href="mailto:gonzalezwilber879@gmail.com">
      Correo
    </a>
  </div>
</footer>

    </>
  )
}

export default App