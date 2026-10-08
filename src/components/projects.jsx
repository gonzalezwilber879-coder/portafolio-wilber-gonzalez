function Projects() {
  return (
    <section id="proyectos" className="projects">
      <p className="section-subtitle">MI TRABAJO</p>

      <h2>Proyectos</h2>

      <div className="projects-container">

        <article className="project-card">
          <h3>Pac-Man PRO 👾</h3>
          <p>
            Videojuego desarrollado con Python y Pygame,
            utilizando movimiento, obstáculos, enemigos y sistema de puntuación.
          </p>
          <span>Python</span>
          <span>Pygame</span>
        </article>

        <article className="project-card">
          <h3>Base de datos</h3>
          <p>
            Proyecto académico de diseño y gestión de una base de datos
            utilizando tablas, relaciones y consultas.
          </p>
          <span>SQL</span>
          <span>Base de datos</span>
        </article>

        <article className="project-card">
          <h3>Portafolio Web</h3>
          <p>
            Este portafolio fue desarrollado utilizando React,
            JavaScript, HTML y CSS.
          </p>
          <span>React</span>
          <span>JavaScript</span>
        </article>

      </div>
    </section>
  )
}

export default Projects