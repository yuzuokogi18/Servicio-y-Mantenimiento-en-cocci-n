import { useState } from 'react'
import './Blog.css'

function Blog() {

  const [selectedPost, setSelectedPost] = useState<any>(null)

  const posts = [

    {
      id: 1,

      image: '/horno.jpg',

      title:
        '5 Señales de que tu Horno necesita mantenimiento',

      category: 'Mantenimiento',

      content: `
Los hornos industriales trabajan constantemente a altas temperaturas, por lo que el desgaste es inevitable. Detectar fallas a tiempo puede evitar reparaciones costosas y paros inesperados.

Señales más comunes:

• El horno tarda más en calentar.
• La temperatura no es uniforme.
• Se percibe olor a gas.
• Hay ruidos extraños durante el funcionamiento.
• El consumo de gas o energía aumentó.
      `
    },

    {
      id: 2,

      image: '/gas.jpg',

      title:
        'Cómo ahorrar gas en tu cocina industrial',

      category: 'Mantenimiento',

      content: `
El consumo excesivo de gas puede aumentar considerablemente los costos operativos de una cocina industrial. Implementar buenas prácticas ayuda a mejorar la eficiencia y reducir gastos.

Consejos para ahorrar gas:

• Mantén limpios quemadores y parrillas.
• Verifica fugas periódicamente.
• Usa equipos con mantenimiento al día.
• Evita precalentar por tiempos prolongados.
• Revisa que la flama sea azul y estable.
      `
    },

    {
      id: 3,

      image: '/limpieza.jpg',

      title:
        'Guía de limpieza diaria para parrillas',

      category: 'Mantenimiento',

      content: `
La limpieza diaria de parrillas industriales es fundamental para garantizar higiene, seguridad y un mejor funcionamiento del equipo.

Pasos recomendados:

• Apaga y deja enfriar la parrilla.
• Retira residuos de grasa y comida.
• Limpia la superficie con productos adecuados.
• Revisa quemadores y conexiones.
• Seca completamente antes de volver a usar.
      `
    }

  ]

  return (

    <section
      className="blog"
      id="blog"
    >

      <div className="blog__container">

        {/* HEADER */}
        <div className="blog__header">

          <div>

            <span className="blog__tag">
              Blog y Consejos
            </span>

            <h2>
              Aprende a cuidar tu equipo
            </h2>

            <div className="blog__line"></div>

          </div>

        </div>

        {/* CARDS */}
        <div className="blog__cards">

          {
            posts.map((post) => (

              <div
                className="blog__card"
                key={post.id}
              >

                <img
                  src={post.image}
                  alt={post.title}
                  className="blog__image"
                />

                <div className="blog__content">

                  <span className="blog__category">
                    {post.category}
                  </span>

                  <h3>
                    {post.title}
                  </h3>

                  <div className="blog__footer">

                    <button
                      className="read-more-btn"
                      onClick={() => setSelectedPost(post)}
                    >
                      LEER MÁS
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

      {/* MODAL */}
      {
        selectedPost && (

          <div
            className="blog-modal"
            onClick={() => setSelectedPost(null)}
          >

            <div
              className="blog-modal-content"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="close-modal"
                onClick={() => setSelectedPost(null)}
              >
                ✕
              </button>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="modal-image"
              />

              <span className="blog__category">
                {selectedPost.category}
              </span>

              <h2>
                {selectedPost.title}
              </h2>

              <div className="modal-text">

                {
                  selectedPost.content
                    .split('\n')
                    .map((line: string, index: number) => (

                      <p key={index}>
                        {line}
                      </p>

                    ))
                }

              </div>

            </div>

          </div>

        )
      }

    </section>

  )
}

export default Blog