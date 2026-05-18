import './Specialties.css'
import { useEffect } from 'react'

function Specialties() {

  useEffect(() => {

    const elements = document.querySelectorAll(
      '.specialties-left, .specialty-card'
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

    <section
      className="specialties"
      id="nosotros"
    >

      <div className="specialties-left">

        <div className="specialties-badge">
          Catálogo Completo
        </div>

        <h2>
          Especialidades
          <br />
          Técnicas
        </h2>

        <div className="specialties-line"></div>

        <p>
          Ofrecemos un abanico integral de soluciones
          para el sector HORECA. Si utiliza calor para cocinar,
          nosotros podemos mantenerlo funcionando.
        </p>

        <div className="specialty-info">
          ⏱️ Respuesta en menos de 4 horas
        </div>

        <div className="specialty-info">
          🔥 Piezas originales certificadas
        </div>

      </div>

      <div className="specialties-right">

        <div className="specialty-card">
          Mantenimiento Correctivo de Urgencia
        </div>

        <div className="specialty-card">
          Limpieza Industrial de Extractores
        </div>

        <div className="specialty-card">
          Reemplazo de Refacciones
        </div>

        <div className="specialty-card">
          Diagnóstico Electrónico
        </div>

        <div className="specialty-card">
          Soporte Técnico Multimarca
        </div>

        <div className="specialty-card">
          Ajuste de Combustión y Eficiencia
        </div>

        <div className="specialty-card big">
          Mantenimiento de Hornos multimarca,
          cafeteras, equipos de cocinas, cafeterías
          y amasadoras, mesas frías y cámaras
          de refrigeración
        </div>

        <div className="specialty-card">
          Reparación de Freidoras Industriales
        </div>

        <div className="specialty-card">
          Certificación de Líneas de Gas
        </div>

        <div className="specialty-card">
          Asesoría en Optimización de Cocina
        </div>

      </div>

    </section>
  )
}

export default Specialties