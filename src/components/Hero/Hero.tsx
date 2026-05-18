import './Hero.css'

function Hero() {

  const handleWhatsApp = () => {

    const message =
      'Hola, quisiera más información sobre el servicio de mantenimiento de equipos de cocción.'

    const url =
      `https://wa.me/5215659310139?text=${encodeURIComponent(message)}`

    window.open(url, '_blank')
  }

  return (
    <section className="hero">

      <div className="hero-text">

        <div className="badge">
          Mantenimiento Industrial de Élite
        </div>

        <h1>
          Servicio en <span>Mantenimiento</span>
          <br />
          de Equipos de
          <br />
          Cocción
        </h1>

        <p>
          Garantizamos la continuidad operativa de su cocina
          con técnicos certificados y repuestos originales.
          Servicio 24/7 y hacemos servicios a toda la
          república mexicana para emergencias.
        </p>

        <button
          className="whatsapp-btn"
          onClick={handleWhatsApp}
        >
          Contactar WhatsApp
        </button>

      </div>

      <div className="hero-image">

        <img
          src="/hero.jpeg"
          alt="Hero"
        />

        <div className="card">
          <h3>100%</h3>
          <span>GARANTÍA DE SATISFACCIÓN</span>
        </div>

      </div>

    </section>
  )
}

export default Hero