export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">


        {/* Información */}
        <div>

          <img
            src="/logo.png"
            alt="Altos de Botrolhue"
            className="h-16 w-auto mb-6"
          />


          <p className="text-gray-400 leading-relaxed">
            Centro de eventos ubicado en{" "}
            <strong className="text-white">
              Labranza - Temuco
            </strong>
            , Región de La Araucanía.
          </p>


          <p className="text-gray-400 leading-relaxed mt-4">
            Un espacio rodeado de naturaleza,
            ideal para matrimonios, celebraciones
            familiares y eventos especiales.
          </p>

        </div>





        {/* Navegación */}
        <div>

          <h3 className="text-xl font-bold mb-6">
            Navegación
          </h3>


          <ul className="space-y-3 text-gray-400">

            <li>
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>
            </li>

            <li>
              <a href="#nosotros" className="hover:text-white transition">
                Sobre Nosotros
              </a>
            </li>

            <li>
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>
            </li>

            <li>
              <a href="#galeria" className="hover:text-white transition">
                Galería
              </a>
            </li>

            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>

          </ul>

        </div>






        {/* Contacto */}
        <div>

          <h3 className="text-xl font-bold mb-6">
            Contacto
          </h3>


          <div className="space-y-4 text-gray-400">


            <p>
              Labranza - Temuco
              <br />
              Región de La Araucanía
            </p>



            <p>
              WhatsApp:
              <br />

              <a
                href="https://wa.me/56926194264"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                +56 9 2619 4264
              </a>

            </p>




            <p>
              Correo:
              <br />

              <a
                href="mailto:contacto@altosdebotrolhue.cl"
                className="hover:text-white transition"
              >
                contacto@altosdebotrolhue.cl
              </a>

            </p>




            <p>
              Atención:
              <br />
              Lunes a Domingo
              <br />
              09:00 - 20:00 hrs
            </p>


          </div>




          <a
            href="https://wa.me/56926194264?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20un%20evento."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-6
              bg-green-700
              hover:bg-green-800
              px-7
              py-3
              rounded-full
              font-semibold
              transition
            "
          >
            Consultar disponibilidad
          </a>


        </div>


      </div>





      {/* Línea inferior */}

      <div
        className="
          max-w-7xl
          mx-auto
          border-t
          border-gray-700
          mt-12
          pt-6
          text-center
          text-gray-500
          text-sm
        "
      >

        © {new Date().getFullYear()} Altos de Botrolhue.
        Todos los derechos reservados.

      </div>


    </footer>
  );
}