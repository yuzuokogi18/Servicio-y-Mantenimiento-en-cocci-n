import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-title">
        <span>Opiniones Reales</span>
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="line"></div>
      </div>

      <div className="testimonials-container">

        {/* CARD 1 */}
        <div className="testimonial-card">

          <div className="quote">❞</div>

          <div className="stars">
            ★★★★★
          </div>

          <p>
            "Gracias a su programa preventivo, hemos
            reducido nuestras fallas críticas en un 80%.
            Son verdaderos aliados en la cocina."
          </p>

          <div className="client">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt=""
            />

            <div>
              <h4>Chef Roberto Carrillo</h4>
              <span>
                DIRECTOR EJECUTIVO - HOTEL ROYAL
              </span>
            </div>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="testimonial-card">

          <div className="quote">❞</div>

          <div className="stars">
            ★★★★★
          </div>

          <p>
            "Repararon mi horno en menos de 3 horas un
            sábado por la tarde. El servicio de urgencia
            es simplemente excelente."
          </p>

          <div className="client">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt=""
            />

            <div>
              <h4>Ana María López</h4>
              <span>
                DUEÑA DE PASTELERÍA DULCE ARTE
              </span>
            </div>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="testimonial-card">

          <div className="quote">❞</div>

          <div className="stars">
            ★★★★★
          </div>

          <p>
            "Puntualidad y limpieza. Sus técnicos realmente
            saben lo que hacen y siempre usan repuestos
            originales."
          </p>

          <div className="client">
            <img
              src="https://i.pravatar.cc/100?img=15"
              alt=""
            />

            <div>
              <h4>Marco Valenzuela</h4>
              <span>
                GERENTE DE OPERACIONES - GROUP FOOD
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials