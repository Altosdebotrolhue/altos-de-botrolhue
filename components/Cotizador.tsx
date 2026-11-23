
"use client";

import { useState } from "react";

export default function Cotizador() {
  const [nombre, setNombre] = useState("");
  const [evento, setEvento] = useState("Matrimonio");
  const [invitados, setInvitados] = useState(50);
  const [fecha, setFecha] = useState("");
  const [comentarios, setComentarios] = useState("");

  const telefono = "56926194264";

  const hoy = new Date();

  const fechaMinima = [
    hoy.getFullYear(),
    String(hoy.getMonth() + 1).padStart(2, "0"),
    String(hoy.getDate()).padStart(2, "0"),
  ].join("-");

  const enviarCotizacion = () => {
    if (!nombre.trim()) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    if (!fecha || fecha < fechaMinima) {
      alert("Selecciona una fecha válida para tu evento.");
      return;
    }

    if (
      !Number.isInteger(invitados) ||
      invitados < 1 ||
      invitados > 150
    ) {
      alert("Ingresa una cantidad de invitados entre 1 y 150.");
      return;
    }

    const [anio, mes, dia] = fecha.split("-");
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const mensaje = [
      "Hola, quisiera consultar disponibilidad y solicitar una cotización en Altos de Botrolhue.",
      "",
      `Nombre: ${nombre.trim()}`,
      `Tipo de evento: ${evento}`,
      `Fecha: ${fechaFormateada}`,
      `Cantidad de invitados: ${invitados}`,
      comentarios.trim()
        ? `Comentarios: ${comentarios.trim()}`
        : "",
      "",
      "Quedo atento/a a su respuesta. Muchas gracias.",
    ]
      .filter((linea, indice, arreglo) =>
        linea !== "" ||
        (indice > 0 && arreglo[indice - 1] !== "")
      )
      .join("\n");

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const estiloCampo = `
    w-full
    rounded-xl
    border
    border-stone-200
    bg-[#fcfbf8]
    px-4
    py-3.5
    text-stone-800
    outline-none
    transition-all
    duration-200
    placeholder:text-stone-400
    hover:border-stone-300
    focus:border-green-700
    focus:bg-white
    focus:ring-4
    focus:ring-green-700/10
  `;

  return (
    <section
      id="cotizador"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#faf8f3]
        px-4
        py-20
        md:py-28
      "
    >

      {/* Decoración de fondo */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-green-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-amber-100/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Encabezado */}

        <div className="mb-12 text-center">

          <p
            className="
              mb-5
              inline-block
              rounded-full
              border
              border-green-200
              bg-green-50
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-green-800
            "
          >
            Tu celebración comienza aquí
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-stone-900
              md:text-5xl
            "
          >
            Cotiza tu{" "}
            <span className="text-green-800">
              evento
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-6
              h-1
              w-20
              rounded-full
              bg-[#b99a5b]
            "
          />

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-stone-600
              md:text-lg
            "
          >
            Cada momento especial merece un lugar único.
            Cuéntanos cómo imaginas tu celebración
            y prepararemos una propuesta personalizada.
          </p>

        </div>

        {/* Formulario principal */}

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-stone-200/70
            bg-white
            shadow-[0_20px_70px_rgba(45,55,35,0.10)]
          "
        >

          {/* Encabezado verde */}

          <div
            className="
              bg-gradient-to-r
              from-[#244d36]
              via-[#326747]
              to-[#244d36]
              px-6
              py-8
              text-white
              md:px-12
            "
          >
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-green-100
              "
            >
              Altos de Botrolhue
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                md:text-3xl
              "
            >
              Cuéntanos sobre tu evento
            </h3>

            <p className="mt-3 text-sm text-green-100">
              Completa los datos de tu celebración
              para solicitar información.
            </p>
          </div>

          {/* Campos */}

          <div className="p-6 md:p-12">

            <div className="space-y-7">

              {/* Nombre */}

              <div>
                <label
                  htmlFor="nombre"
                  className="
                    mb-2.5
                    block
                    text-sm
                    font-semibold
                    text-stone-800
                  "
                >
                  Nombre completo
                  <span className="ml-1 text-green-700">*</span>
                </label>

                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  maxLength={100}
                  className={estiloCampo}
                />
              </div>

              {/* Tipo de evento */}

              <div>
                <label
                  htmlFor="evento"
                  className="
                    mb-2.5
                    block
                    text-sm
                    font-semibold
                    text-stone-800
                  "
                >
                  Tipo de celebración
                </label>

                <select
                  id="evento"
                  value={evento}
                  onChange={(e) => setEvento(e.target.value)}
                  className={estiloCampo}
                >
                  <option>Matrimonio</option>
                  <option>Cumpleaños</option>
                  <option>Graduación</option>
                  <option>Celebración familiar</option>
                  <option>Evento empresarial</option>
                  <option>Otro</option>
                </select>
              </div>

              {/* Fecha e invitados */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-6
                  md:grid-cols-2
                "
              >

                <div>
                  <label
                    htmlFor="fecha"
                    className="
                      mb-2.5
                      block
                      text-sm
                      font-semibold
                      text-stone-800
                    "
                  >
                    Fecha del evento
                    <span className="ml-1 text-green-700">*</span>
                  </label>

                  <input
                    id="fecha"
                    type="date"
                    min={fechaMinima}
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className={estiloCampo}
                  />
                </div>

                <div>
                  <label
                    htmlFor="invitados"
                    className="
                      mb-2.5
                      block
                      text-sm
                      font-semibold
                      text-stone-800
                    "
                  >
                    Cantidad de invitados
                    <span className="ml-1 text-green-700">*</span>
                  </label>

                  <input
                    id="invitados"
                    type="number"
                    min={1}
                    max={150}
                    step={1}
                    value={invitados}
                    onChange={(e) =>
                      setInvitados(
                        e.target.value === ""
                          ? 0
                          : Number(e.target.value)
                      )
                    }
                    className={estiloCampo}
                  />

                  <p className="mt-2 text-xs text-stone-500">
                    Hasta 150 invitados
                  </p>
                </div>

              </div>

              {/* Comentarios */}

              <div>
                <label
                  htmlFor="comentarios"
                  className="
                    mb-2.5
                    block
                    text-sm
                    font-semibold
                    text-stone-800
                  "
                >
                  Cuéntanos más sobre tu evento

                  <span className="ml-2 font-normal text-stone-400">
                    (Opcional)
                  </span>
                </label>

                <textarea
                  id="comentarios"
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                  placeholder="Por ejemplo: decoración, música, horarios o cualquier detalle especial que tengas en mente..."
                  rows={5}
                  maxLength={500}
                  className={`${estiloCampo} resize-y`}
                />
              </div>

            </div>

            {/* Información adicional */}

            <div
              className="
                mt-9
                rounded-2xl
                border
                border-green-100
                bg-[#f4f8f3]
                p-6
                text-center
              "
            >
              <h4
                className="
                  text-lg
                  font-bold
                  text-green-900
                "
              >
                Cada celebración es única
              </h4>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-stone-600
                "
              >
                Revisaremos los detalles de tu solicitud
                para orientarte sobre disponibilidad
                y entregarte una propuesta personalizada.
              </p>
            </div>

            {/* Enviar a WhatsApp */}

            <button
              type="button"
              onClick={enviarCotizacion}
              className="
                mt-8
                flex
                w-full
                items-center
                justify-center
                rounded-2xl
                bg-green-700
                px-6
                py-5
                text-center
                text-base
                font-bold
                text-white
                shadow-lg
                shadow-green-900/15
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-green-800
                hover:shadow-xl
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-green-700
                md:text-lg
              "
            >
              Solicitar cotización por WhatsApp
            </button>

            <p
              className="
                mt-5
                text-center
                text-xs
                leading-relaxed
                text-stone-500
              "
            >
              Al continuar, se abrirá WhatsApp
              con los datos de tu solicitud.
              El mensaje se enviará cuando
              confirmes el envío.
            </p>

          </div>
        </div>

        {/* Pie */}

        <p className="mt-8 text-center text-sm text-stone-500">
          Altos de Botrolhue · Labranza, Temuco
        </p>

      </div>
    </section>
  );
}
