import { useState } from 'react'
import './FAQ.css'

function FAQ() {

  const [activeIndex, setActiveIndex] =
    useState<number | null>(0)

  const faqData = [
    {
      question:
        '¿Atienden a toda la República Mexicana?',
      answer:
        'Sí, brindamos servicio en toda la República Mexicana. Contamos con atención prioritaria para emergencias y soporte técnico especializado para garantizar la continuidad de operación de sus equipos.'
    },

    {
      question:
        '¿Sus reparaciones cuentan con garantía?',
      answer:
        'Sí, todas nuestras reparaciones y servicios cuentan con garantía sobre mano de obra y refacciones instaladas. El periodo de garantía puede variar según el tipo de servicio realizado.'
    },

    {
      question:
        '¿Realizan conversiones de gas natural a LP?',
      answer:
        'Sí, realizamos conversiones de gas natural a gas LP y viceversa, siguiendo normas de seguridad y calibración profesional para asegurar un funcionamiento eficiente y seguro de los equipos.'
    },

    {
      question:
        '¿Atienden fuera de la zona metropolitana?',
      answer:
        'Sí, ofrecemos servicio fuera de la zona metropolitana y cobertura nacional. Nuestro equipo puede trasladarse a distintas ciudades para instalaciones, mantenimientos y reparaciones programadas o de emergencia.'
    }
  ]

  const toggleFAQ = (index: number) => {

    setActiveIndex(
      activeIndex === index
        ? null
        : index
    )
  }

  return (
    <section className="faq">

      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">

          <span className="faq-tag">
            Preguntas Frecuentes
          </span>

          <h2>
            Resolvemos tus dudas
          </h2>

          <div className="faq-line"></div>

          <p>
            Si no encuentras la respuesta que buscas,
            no dudes en contactarnos directamente a
            través de nuestros canales oficiales.
          </p>

          <button
            className="whatsapp-btn"
            onClick={() =>
              window.open(
                'https://wa.me/5215659310139',
                '_blank'
              )
            }
          >
            💬 Mandar WhatsApp
          </button>

        </div>

        {/* RIGHT */}
        <div className="faq-right">

          {
            faqData.map((faq, index) => (

              <div
                key={index}
                className={
                  activeIndex === index
                    ? 'faq-card active'
                    : 'faq-card'
                }
              >

                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >

                  <h3>
                    {faq.question}
                  </h3>

                  <span
                    className={
                      activeIndex === index
                        ? 'rotate'
                        : ''
                    }
                  >
                    ⌄
                  </span>

                </div>

                <div
                  className={
                    activeIndex === index
                      ? 'faq-answer open'
                      : 'faq-answer'
                  }
                >

                  <p>
                    {faq.answer}
                  </p>

                </div>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default FAQ