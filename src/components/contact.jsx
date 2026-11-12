function Contact({ language }) {

  const texts = {
    es: {
      subtitle: 'CONTACTO',
      title: '¿Hablamos?',
      description: 'Si quieres conocer más sobre mis proyectos o trabajar conmigo, puedes contactarme.',
      button: 'Enviar correo'
    },

    en: {
      subtitle: 'CONTACT',
      title: 'Let’s talk!',
      description: 'If you want to know more about my projects or work with me, feel free to contact me.',
      button: 'Send email'
    }
  }

  const t = texts[language]

  return (
    <section id="contacto" className="contact">

      <p className="section-subtitle">
        {t.subtitle}
      </p>

      <h2>{t.title}</h2>

      <p>{t.description}</p>

      <a
        href="mailto:gonzalezwilber879@gmail.com"
        className="boton principal"
      >
        {t.button}
      </a>

    </section>
  )
}

export default Contact