import './Footer.css'

import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaFire,
  FaLocationDot
} from 'react-icons/fa6'

const Footer = () => {
  return (

    <footer className="footer">

      <div className="footer__top">

        <div className="footer__info">

          <h2>
            ¿Listo para mejorar tu operación?
          </h2>

          <p>
            Estamos a solo un mensaje o llamada de distancia.
            No arriesgues tu inversión con técnicos improvisados.
          </p>

          <div className="footer__contacts">

            {/* PHONE */}
            <div className="footer__contact">

              <div className="footer__icon">
                <FaPhone />
              </div>

              <div>
                <span>LLÁMANOS</span>
                <h4>+52 1 56 5931 0139</h4>
              </div>

            </div>

            {/* EMAIL */}
            <div className="footer__contact">

              <div className="footer__icon">
                <FaEnvelope />
              </div>

              <div>

                <span>EMAIL</span>

                <h4>
                  serviciomantenimientococcion@gmail.com
                </h4>

              </div>

            </div>

            {/* WHATSAPP */}
            <div className="footer__contact">

              <div className="footer__icon">
                <FaWhatsapp />
              </div>

              <div>
                <span>WHATSAPP</span>
                <h4>+52 1 56 5931 0139</h4>
              </div>

            </div>

            {/* LOCATION */}
            <div className="footer__contact">

              <div className="footer__icon">
                <FaLocationDot />
              </div>

              <div>
                <span>DIRECCIÓN</span>
                <h4>Guadalajara Jalisco</h4>
              </div>

            </div>

          </div>

          {/* SOCIALS */}
          <div className="footer__socials">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/coccion_servicios?igsh=MWNxbTI1ZGJjMDh1Yg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com/profile.php?id=61589804159359"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            {/* X / TWITTER */}
            <a
              href="https://x.com/SCoccion7357"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

          </div>

        </div>

        {/* MAP */}
        <div className="footer__map">

          <img
            src="/mapa.png"
            alt="Mapa México"
          />

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="footer__bottom"
        id="contacto"
      >

        {/* BRAND */}
        <div className="footer__brand">

          <div className="footer__logo">

            <FaFire />

            <h3>
              Mantenimiento de Cocción
            </h3>

          </div>

          <p>
            Expertos líderes en el mantenimiento y reparación
            de equipos de cocción industrial en México.
            Calidad garantizada en cada intervención.
          </p>

        </div>

        {/* SERVICES */}
        <div className="footer__links">

          <h4>
            SERVICIOS
          </h4>

          <a href="#">
            Preventivos
          </a>

          <a href="#">
            Correctivos
          </a>

          <a href="#">
            Limpieza Industrial
          </a>

          <a href="#">
            Instalaciones
          </a>

        </div>

        {/* COMPANY */}
        <div className="footer__links">

          <h4>
            COMPAÑÍA
          </h4>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#testimonios">
            Testimonios
          </a>

          <a href="#blog">
            Blog de Expertos
          </a>

          <a href="#">
            Aviso de Privacidad
          </a>

        </div>

        {/* NEWSLETTER */}
        <div className="footer__newsletter">

          <h4>
            NEWSLETTER
          </h4>

          <p>
            Recibe tips de mantenimiento cada mes.
          </p>

          <div className="footer__input">

            <input
              type="email"
              placeholder="Tu correo"
            />

            <button>
              ›
            </button>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer__copyright">

        <p>
          © 2024 CocciónPro S.A. de C.V.
          Todos los derechos reservados.
        </p>

        <div>

          <a href="#">
            TÉRMINOS
          </a>

          <a href="#">
            SEGURIDAD
          </a>

          <a href="#">
            SOPORTE
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer