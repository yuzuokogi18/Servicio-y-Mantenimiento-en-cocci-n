import { useState } from 'react'
import './Booking.css'

function Booking() {

  /* FECHA ACTUAL */
  const today =
    new Date().toISOString().split('T')[0]

  /* FORM */
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    equipment: '',
    date: '',
    problem: '',
    accept: false
  })

  /* ERRORS */
  const [errors, setErrors] = useState<any>({})

  /* HANDLE INPUTS */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const { name, value, type } = e.target

    setFormData({
      ...formData,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value
    })

    /* QUITA ERROR */
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  /* VALIDATE */
  const validateForm = () => {

    const newErrors: any = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Ingresa tu nombre'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Ingresa tu teléfono'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Ingresa tu correo'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Ingresa tu dirección'
    }

    if (!formData.equipment.trim()) {
      newErrors.equipment =
        'Ingresa el tipo de equipo'
    }

    if (!formData.date.trim()) {
      newErrors.date =
        'Selecciona una fecha válida'
    }

    if (!formData.problem.trim()) {
      newErrors.problem =
        'Describe el problema'
    }

    if (!formData.accept) {
      newErrors.accept =
        'Debes aceptar el procesamiento de datos'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /* SUBMIT */
  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    const isValid = validateForm()

    if (!isValid) return

    const message = `
📅 NUEVA AGENDA DE SERVICIO

👤 Nombre:
${formData.name}

📞 Teléfono:
${formData.phone}

📧 Correo:
${formData.email}

📍 Dirección:
${formData.address}

🛠️ Equipo:
${formData.equipment}

🗓️ Fecha:
${formData.date}

📝 Problema:
${formData.problem}
    `

    const whatsappUrl =
      `https://wa.me/5215659310139?text=${encodeURIComponent(message)}`

    window.open(
      whatsappUrl,
      '_blank'
    )

    alert('✅ Redirigiendo a WhatsApp')

    /* LIMPIAR */
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      equipment: '',
      date: '',
      problem: '',
      accept: false
    })
  }

  return (
    <section className="booking">

      <div className="booking-container">

        {/* LEFT */}
        <div className="booking-left">

          <div>

            <h2>
              Agenda tu Visita Técnica
            </h2>

            <p>
              Completa el formulario y uno de
              nuestros coordinadores se pondrá
              en contacto contigo en menos de
              15 minutos.
            </p>

            <div className="booking-info">

              <div className="info-box">

                <span>📅</span>

                <div>
                  <h4>
                    Lunes a Sábado
                  </h4>

                  <p>
                    8:00 AM - 8:00 PM
                  </p>
                </div>

              </div>

              <div className="info-box">

                <span>🕒</span>

                <div>
                  <h4>
                    Emergencias 24/7
                  </h4>

                  <p>
                    Atención inmediata vía WhatsApp
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="testimonial">

            <p>
              “El mejor servicio técnico que
              hemos contratado. Puntuales,
              limpios y muy profesionales.”
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="booking-right">

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              {/* NAME */}
              <div>

                <input
                  type="text"
                  name="name"
                  placeholder="Nombre Completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={
                    errors.name
                      ? 'error-input'
                      : ''
                  }
                />

                {
                  errors.name && (
                    <span className="error-text">
                      {errors.name}
                    </span>
                  )
                }

              </div>

              {/* PHONE */}
              <div>

                <input
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className={
                    errors.phone
                      ? 'error-input'
                      : ''
                  }
                />

                {
                  errors.phone && (
                    <span className="error-text">
                      {errors.phone}
                    </span>
                  )
                }

              </div>

              {/* EMAIL */}
              <div>

                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  value={formData.email}
                  onChange={handleChange}
                  className={
                    errors.email
                      ? 'error-input'
                      : ''
                  }
                />

                {
                  errors.email && (
                    <span className="error-text">
                      {errors.email}
                    </span>
                  )
                }

              </div>

              {/* ADDRESS */}
              <div>

                <input
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  value={formData.address}
                  onChange={handleChange}
                  className={
                    errors.address
                      ? 'error-input'
                      : ''
                  }
                />

                {
                  errors.address && (
                    <span className="error-text">
                      {errors.address}
                    </span>
                  )
                }

              </div>

              {/* EQUIPMENT */}
              <div>

                <input
                  type="text"
                  name="equipment"
                  placeholder="Tipo de Equipo"
                  value={formData.equipment}
                  onChange={handleChange}
                  className={
                    errors.equipment
                      ? 'error-input'
                      : ''
                  }
                />

                {
                  errors.equipment && (
                    <span className="error-text">
                      {errors.equipment}
                    </span>
                  )
                }

              </div>

              {/* DATE */}
              <div>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className={
                    errors.date
                      ? 'error-input'
                      : ''
                  }
                />

                {
                  errors.date && (
                    <span className="error-text">
                      {errors.date}
                    </span>
                  )
                }

              </div>

            </div>

            {/* PROBLEM */}
            <textarea
              name="problem"
              placeholder="Descripción del problema"
              value={formData.problem}
              onChange={handleChange}
              className={
                errors.problem
                  ? 'error-input'
                  : ''
              }
            ></textarea>

            {
              errors.problem && (
                <span className="error-text">
                  {errors.problem}
                </span>
              )
            }

            {/* CHECKBOX */}
            <div className="form-bottom">

              <div>

                <label className="checkbox">

                  <input
                    type="checkbox"
                    name="accept"
                    checked={formData.accept}
                    onChange={handleChange}
                  />

                  Acepto que mis datos sean procesados.

                </label>

                {
                  errors.accept && (
                    <span className="error-text">
                      {errors.accept}
                    </span>
                  )
                }

              </div>

            </div>

            <button type="submit">
              Confirmar Agendado
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Booking