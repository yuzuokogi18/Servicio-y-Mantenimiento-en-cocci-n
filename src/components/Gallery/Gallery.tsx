import './Gallery.css'
import { useState } from 'react'

function Gallery() {

  const projects = [

    {
      image: '/1c.jpeg',
      title: 'Mantenimiento preventivo',
      description: 'Mantenimiento preventivo cocina industrial'
    },

    {
      image: '/2c.jpeg',
      title: 'Mantenimiento Correctivo',
      description: 'Mantenimiento horno en jiquilpan.'
    },

    {
      image: '/3c.jpeg',
      title: 'Mantenimiento Correctivo',
      description: 'Mantenimiento cafetera 1 grupo degollado jalisco.'
    },

    {
      image: '/4c.jpeg',
      title: 'Reparacion Industrial',
      description: 'Reparación cámara calentamiento horno san son Guadalajara Jalisco.'
    },

    {
      image: '/5c.jpeg',
      title: 'Mantenimiento preventivo',
      description: 'Mantenimiento horno Gpaniz 300 Sayula jal.'
    },

    {
      image: '/6c.jpeg',
      title: 'Reparacion',
      description: 'Servicio y reparación horno san son manzanillo col.'
    },

    {
      image: '/7c.jpeg',
      title: 'Reparacion',
      description: 'Servicio y reparación batidora el grullo jal.'
    },

    {
      image: '/9c.jpeg',
      title: 'Mantenimiento',
      description: 'Mantenimiento panadería Guadalajara Jalisco.'
    },

    {
      image: '/10c.jpeg',
      title: 'Mantenimiento Preventivo',
      description: 'Mantenimiento y reparación horno eco rotor Guadalajara Jalisco.'
    },

    {
      image: '/11c.jpeg',
      title: 'Mantenimiento',
      description: 'Mantenimiento cocina Autlán jal.'
    },

    {
      image: '/12c.jpeg',
      title: 'Mantenimiento y Reparacion',
      description: 'Mantenimiento y reparación cocina Morelia Michoacán.'
    },

    {
      image: '/13c.jpeg',
      title: 'Mantenimiento y Reparacion',
      description: 'Mantenimiento y reparación pirómetro de temperatura horno zucchelli.'
    },

    {
      image: '/14c.jpeg',
      title: 'Mantenimiento',
      description: 'Mantenimiento Guadalajara jal.'
    },

    {
      image: '/15c.jpeg',
      title: 'Mantenimiento y Reparacion',
      description: 'Reparación y mantenimiento horno pizza Altamirano guerrero.'
    },

    {
      image: '/16c.jpeg',
      title: 'Mantenimiento y Reparacion',
      description: 'Mantenimiento y reparación En el Grullo jal.'
    },

    {
      image: '/17c.jpeg',
      title: 'Mantenimiento y Reparacion',
      description: 'Cambio de piso y mantenimiento camara refrigeración cd. Guzmán.'
    },

    {
      image: '/18c.jpeg',
      title: 'Mantenimiento y Reparacion',
      description: 'Mantenimiento Cocina en tequila jal.'
    },

    {
      image: '/19c.jpeg',
      title: 'Mantenimiento',
      description: 'Mantenimiento cocina.'
    },

    {
      image: '/20c.jpeg',
      title: 'Mantenimiento',
      description: 'Mantenimiento cocina San Fransisco del rincón guanajuato.'
    },

  ]

  /* =========================
     MOBILE PAGINAS DE 4
  ========================= */

  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerPage = 4

  const totalPages = Math.ceil(
    projects.length / itemsPerPage
  )

  const start = currentPage * itemsPerPage

  const visibleProjects = projects.slice(
    start,
    start + itemsPerPage
  )

  const showMore = () => {

    if (currentPage + 1 >= totalPages) {
      setCurrentPage(0)
    } else {
      setCurrentPage(currentPage + 1)
    }

    window.scrollTo({
      top: document.getElementById('galeria')?.offsetTop,
      behavior: 'smooth'
    })

  }

  return (

    <section
      className="gallery"
      id="galeria"
    >

      <div className="gallery-title">

        <div className="gallery-badge">
          Nuestro Trabajo
        </div>

        <h2>
          Galería de Proyectos
        </h2>

        <div className="gallery-line"></div>

      </div>

      <div className="gallery-grid">

        {
          visibleProjects.map((project, index) => (

            <div
              className="gallery-card"
              key={index}
            >

              <div className="gallery-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="gallery-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

            </div>

          ))
        }

      </div>

      <button
        className="gallery-btn"
        onClick={showMore}
      >

        {
          currentPage + 1 >= totalPages
            ? 'Volver al Inicio'
            : 'Ver Más'
        }

      </button>

    </section>
  )
}

export default Gallery