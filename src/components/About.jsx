function About({ language }) {

  const texts = {
    es: {
      subtitle: 'CONÓCEME',
      title: 'Sobre mí',
      paragraph1: 'Soy Wilber Gonzalez, estudiante de Ingeniería Informática apasionado por la tecnología y el desarrollo de software.',
      paragraph2: 'Me interesa aprender nuevas tecnologías, crear proyectos y convertir ideas en soluciones digitales.'
    },

    en: {
      subtitle: 'GET TO KNOW ME',
      title: 'About me',
      paragraph1: 'I am Wilber Gonzalez, a Computer Engineering student passionate about technology and software development.',
      paragraph2: 'I am interested in learning new technologies, creating projects and turning ideas into digital solutions.'
    }
  }

  const t = texts[language]

  return (
    <section id="sobre-mi" className="about">
      <div className="about-content">

        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <h2>
          {t.title}
        </h2>

        <p>
          {t.paragraph1}
        </p>

        <p>
          {t.paragraph2}
        </p>

      </div>
    </section>
  )
}

export default About