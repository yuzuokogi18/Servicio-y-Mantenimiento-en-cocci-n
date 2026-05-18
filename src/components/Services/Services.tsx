import './Services.css'
import { useEffect, useState } from 'react'

function Services() {

  const [openCard, setOpenCard] = useState<number | null>(null)

  useEffect(() => {

    const cards = document.querySelectorAll('.service-card')

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

    cards.forEach((card) => {
      observer.observe(card)
    })

    /* =========================
       AUTO SLIDER MOBILE
    ========================= */

    const container = document.querySelector(
      '.services-container'
    ) as HTMLElement

    let currentIndex = 0

    const autoSlide = () => {

      /* SI HAY CARD ABIERTA
         NO SE MUEVE */

      if (openCard !== null) return

      if (window.innerWidth <= 768 && container) {

        const cardWidth =
          container.querySelector('.service-card')
            ?.clientWidth || 0

        currentIndex++

        if (currentIndex >= cards.length) {
          currentIndex = 0
        }

        container.scrollTo({
          left: currentIndex * (cardWidth + 16),
          behavior: 'smooth'
        })

      }

    }

    const interval = setInterval(autoSlide, 3500)

    return () => {

      cards.forEach((card) => {
        observer.unobserve(card)
      })

      clearInterval(interval)

    }

  }, [openCard])

  const toggleCard = (index: number) => {

    if (openCard === index) {
      setOpenCard(null)
    } else {
      setOpenCard(index)
    }
  }

  return (

    <section
      className="services"
      id="servicios"
    >

      <div className="services-title">

        <div className="services-badge">
          Nuestras Fortalezas
        </div>

        <h2>
          Servicios Destacados
        </h2>

        <div className="line"></div>

      </div>

      <div className="services-container">

        {/* CARD 1 */}
        <div className="service-card">

          <div className="icon">🛠️</div>

          <h3>
            Mantenimiento
            <br />
            Preventivo
          </h3>

          {
            openCard === 1 ? (

              <ul className="details-list">
                <li>Limpieza profunda de quemadores.</li>
                <li>Revisión eléctrica y calibración.</li>
                <li>Inspección de líneas de gas.</li>
                <li>Lubricación y ajuste de piezas.</li>
                <li>Detección temprana de fallas.</li>
                <li>Planes personalizados.</li>
                <li>Reporte técnico detallado.</li>
              </ul>

            ) : (

              <p>
                Programas personalizados para evitar paros
                costosos y extender la vida de sus hornos y estufas.
              </p>

            )
          }

          <button
            className="details-btn"
            onClick={() => toggleCard(1)}
          >

            {
              openCard === 1
                ? 'Ocultar detalles ←'
                : 'Ver detalles →'
            }

          </button>

        </div>

        {/* CARD 2 */}
        <div className="service-card">

          <div className="icon">⚡</div>

          <h3>
            Mantenimiento
            <br />
            Correctivo
          </h3>

          {
            openCard === 2 ? (

              <ul className="details-list">
                <li>Diagnóstico rápido de fallas.</li>
                <li>Reparación de equipos industriales.</li>
                <li>Cambio de refacciones.</li>
                <li>Atención de emergencias.</li>
                <li>Problemas eléctricos y de gas.</li>
                <li>Técnicos especializados.</li>
                <li>Servicio en sitio.</li>
              </ul>

            ) : (

              <p>
                Atención inmediata para fallas críticas.
                Técnicos disponibles 24/7 con stock
                de partes comunes.
              </p>

            )
          }

          <button
            className="details-btn"
            onClick={() => toggleCard(2)}
          >

            {
              openCard === 2
                ? 'Ocultar detalles ←'
                : 'Ver detalles →'
            }

          </button>

        </div>

        {/* CARD 3 */}
        <div className="service-card">

          <div className="icon">⚙️</div>

          <h3>
            Instalación
            <br />
            Profesional
          </h3>

          {
            openCard === 3 ? (

              <ul className="details-list">
                <li>Instalación segura de equipos.</li>
                <li>Conexión de gas y electricidad.</li>
                <li>Nivelación y configuración.</li>
                <li>Pruebas de funcionamiento.</li>
                <li>Capacitación básica.</li>
                <li>Cumplimiento de normativas.</li>
                <li>Puesta en marcha lista.</li>
              </ul>

            ) : (

              <p>
                Montaje y puesta en marcha de equipos
                de todas las marcas líderes bajo normativa vigente.
              </p>

            )
          }

          <button
            className="details-btn"
            onClick={() => toggleCard(3)}
          >

            {
              openCard === 3
                ? 'Ocultar detalles ←'
                : 'Ver detalles →'
            }

          </button>

        </div>

        {/* CARD 4 */}
        <div className="service-card">

          <div className="icon">🔥</div>

          <h3>
            Detección de Fugas
          </h3>

          {
            openCard === 4 ? (

              <ul className="details-list">
                <li>Revisión completa de tuberías.</li>
                <li>Herramientas certificadas.</li>
                <li>Inspección de válvulas.</li>
                <li>Verificación de presión.</li>
                <li>Corrección de riesgos.</li>
                <li>Reporte técnico de seguridad.</li>
                <li>Protección del personal.</li>
              </ul>

            ) : (

              <p>
                Inspección certificada de líneas de gas
                y sistemas de seguridad para proteger a su personal.
              </p>

            )
          }

          <button
            className="details-btn"
            onClick={() => toggleCard(4)}
          >

            {
              openCard === 4
                ? 'Ocultar detalles ←'
                : 'Ver detalles →'
            }

          </button>

        </div>

      </div>

    </section>

  )
}

export default Services