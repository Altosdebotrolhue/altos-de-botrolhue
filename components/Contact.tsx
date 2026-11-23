
export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-[#faf8f3] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}

        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
            Estamos para ayudarte
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Contáctanos
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Estamos disponibles para resolver tus consultas
            y ayudarte a organizar tu próximo evento.
          </p>
        </div>

        {/* Tarjeta de información */}

        <div
          className="
            mx-auto
            max-w-4xl
            rounded-3xl
            border
            border-stone-200
            bg-white
            p-8
            shadow-lg
            md:p-12
          "
        >
          <div className="grid gap-10 md:grid-cols-2">

            {/* Datos del recinto */}

            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Altos de Botrolhue
              </h3>

              <div className="space-y-6 text-gray-700">

                <div>
                  <p className="mb-1 font-semibold text-gray-900">
                    Ubicación
                  </p>

                  <p>
                    Labranza, Temuco
                    <br />
                    Región de La Araucanía
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-gray-900">
                    Horario de atención
                  </p>

                  <p>
                    Lunes a Domingo
                    <br />
                    09:00 - 20:00 hrs
                  </p>
                </div>

              </div>
            </div>

            {/* Medios de contacto */}

            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Información de contacto
              </h3>

              <div className="space-y-6 text-gray-700">

                <div>
                  <p className="mb-1 font-semibold text-gray-900">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/56926194264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-green-700"
                  >
                    +56 9 2619 4264
                  </a>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-gray-900">
                    Correo electrónico
                  </p>

                  <a
                    href="mailto:Altosbotrolhue@gmail.com"
                    className="break-all transition hover:text-green-700"
                  >
                    Altosbotrolhue@gmail.com
                  </a>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-gray-900">
                    Consultas
                  </p>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Puedes escribirnos directamente por WhatsApp
                    o correo electrónico para resolver cualquier duda.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
