import './About.css'
import { useEffect } from 'react'

function About() {

  useEffect(() => {

    const elements = document.querySelectorAll(
      '.about-image, .about-content, .mini-card'
    )

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }

        })

      },
      {
        threshold: 0.2
      }
    )

    elements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }

  }, [])

  return (
    <section className="about">

      <div className="about-image">

        <img
          src="/about.png"
          alt="About"
        />

        <div className="experience">
          <h3>15+</h3>

          <span>
            AÑOS DE
            <br />
            EXPERIENCIA
          </span>
        </div>

      </div>

      <div className="about-content">

        <div className="about-badge">
          Nuestra Identidad
        </div>

        <h2>
          Pasión por la Precisión en su Cocina
        </h2>

        <div className="about-line"></div>

        <p>
          Nacimos de la necesidad de ofrecer un servicio técnico
          que comprenda la urgencia de una cocina en horas pico.
          No solo reparamos fierros, garantizamos que su negocio
          nunca se detenga.
        </p>

        <div className="about-cards">

          <div className="mini-card">
            🛡️
            <span>CERTIFICACIÓN NOM</span>
          </div>

          <div className="mini-card">
            🔥
            <span>TÉCNICOS DE GAS</span>
          </div>

          <div className="mini-card">
            ⚙️
            <span>CALIDAD ISO 9001</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About