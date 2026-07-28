"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mvzelovl");

  return (
    <section
      id="contacto"
      className="
        py-24
        px-6
        bg-[#faf8f3]
      "
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
            "
          >
            Contáctanos
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              text-lg
            "
          >
            Estamos preparados para ayudarte a organizar
            tu próximo evento.
          </p>

        </div>


        <div
          className="
            grid
            md:grid-cols-2
            gap-10
          "
        >

          {/* Información */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                text-gray-900
                mb-8
              "
            >
              Altos de Botrolhue
            </h3>


            <div
              className="
                space-y-5
                text-gray-700
              "
            >

              <p>
                Labranza, Temuco
                <br />
                Región de La Araucanía
              </p>


              <p>
                WhatsApp:
                <br />
                +56 9 2619 4264
              </p>


              <p>
                <a
                  href="mailto:Altosbotrolhue@gmail.com"
                  className="
                    hover:text-green-700
                    transition
                  "
                >
                  Altosbotrolhue@gmail.com
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
              href="https://wa.me/56926194264?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20realizar%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-8
                bg-green-700
                hover:bg-green-800
                text-white
                px-8
                py-3
                rounded-full
                font-semibold
                transition
              "
            >
              Consultar por WhatsApp
            </a>


          </div>



          {/* Formulario */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                text-gray-900
                mb-6
              "
            >
              Solicita información
            </h3>



            {state.succeeded ? (

              <div
                className="
                  text-center
                  py-10
                "
              >

                <h4
                  className="
                    text-2xl
                    font-bold
                    text-green-700
                  "
                >
                  Consulta enviada
                </h4>


                <p className="mt-3 text-gray-600">
                  Gracias por contactarnos.
                  Te responderemos lo antes posible.
                </p>

              </div>


            ) : (


              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >


                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-600
                  "
                />



                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  required
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-600
                  "
                />


                <ValidationError
                  prefix="Correo"
                  field="email"
                  errors={state.errors}
                />



                <input
                  type="text"
                  name="evento"
                  placeholder="Tipo de evento"
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                  "
                />



                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu evento"
                  rows={4}
                  required
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                  "
                />



                <button
                  type="submit"
                  disabled={state.submitting}
                  className="
                    w-full
                    bg-green-700
                    hover:bg-green-800
                    disabled:opacity-50
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  {state.submitting
                    ? "Enviando..."
                    : "Enviar consulta"}
                </button>


              </form>

            )}


          </div>


        </div>


      </div>


    </section>
  );
}