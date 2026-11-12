function Projects({ language }) {

  const texts = {
    es: {
      subtitle: 'MI TRABAJO',
      title: 'Proyectos',

      pacman: 'Videojuego desarrollado con Python y Pygame, utilizando movimiento, obstáculos, enemigos y sistema de puntuación.',

      database: 'Proyecto académico de diseño y gestión de una base de datos utilizando tablas, relaciones y consultas.',

      portfolio: 'Este portafolio fue desarrollado utilizando React, JavaScript, HTML y CSS.',

      databaseTag: 'Base de datos'
    },

    en: {
      subtitle: 'MY WORK',
      title: 'Projects',

      pacman: 'Video game developed with Python and Pygame, featuring movement, obstacles, enemies and a scoring system.',

      database: 'Academic project focused on database design and management using tables, relationships and queries.',

      portfolio: 'This portfolio was developed using React, JavaScript, HTML and CSS.',

      databaseTag: 'Database'
    }
  }

  const t = texts[language]

  return (
    <section id="proyectos" className="projects">

      <p className="section-subtitle">
        {t.subtitle}
      </p>

      <h2>{t.title}</h2>

      <div className="projects-container">

        <article className="project-card">
          <h3>Pac-Man PRO 👾</h3>

          <p>{t.pacman}</p>

          <span>Python</span>
          <span>Pygame</span>
        </article>

        <article className="project-card">
          <h3>{language === 'es' ? 'Base de datos' : 'Database'}</h3>

          <p>{t.database}</p>

          <span>SQL</span>
          <span>{t.databaseTag}</span>
        </article>

        <article className="project-card">
          <h3>{language === 'es' ? 'Portafolio Web' : 'Web Portfolio'}</h3>

          <p>{t.portfolio}</p>

          <span>React</span>
          <span>JavaScript</span>
        </article>

      </div>
    </section>
  )
}

export default Projects