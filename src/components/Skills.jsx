function Skills({ language }) {

  const texts = {
    es: {
      subtitle: 'MIS HABILIDADES',
      title: 'Tecnologías'
    },

    en: {
      subtitle: 'MY SKILLS',
      title: 'Technologies'
    }
  }

  const t = texts[language]

  return (
    <section id="habilidades" className="skills">

      <p className="section-subtitle">
        {t.subtitle}
      </p>

      <h2>{t.title}</h2>

      <div className="skills-container">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">React</div>
        <div className="skill">Python</div>
        <div className="skill">Git</div>
        <div className="skill">GitHub</div>
      </div>

    </section>
  )
}

export default Skills