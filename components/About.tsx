export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 px-6 bg-[#faf8f3]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen */}
          <div className="
            rounded-3xl
            overflow-hidden
            shadow-xl
          ">
            <img
              src="/galeria1.jpg"
              alt="Altos de Botrolhue, centro de eventos en Labranza Temuco"
              className="
                w-full
                h-[450px]
                object-cover
              "
            />
          </div>


          {/* Texto */}
          <div>

            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              mb-6
            ">
              Sobre Nosotros
            </h2>


            <p className="
              text-gray-700
              text-lg
              leading-relaxed
              mb-5
            ">
              Altos de Botrolhue es un centro de eventos ubicado en
              Labranza, Temuco, creado para recibir celebraciones
              especiales en un entorno natural, tranquilo y acogedor.
            </p>


            <p className="
              text-gray-700
              text-lg
              leading-relaxed
              mb-5
            ">
              Nuestro espacio está pensado para matrimonios, cumpleaños,
              celebraciones familiares, eventos corporativos y diferentes
              ocasiones especiales, combinando naturaleza, comodidad y
              una atención cercana para nuestros invitados.
            </p>


            <p className="
              text-gray-700
              text-lg
              leading-relaxed
            ">
              Nos preocupamos de cada detalle para entregar una experiencia
              personalizada, acompañando a nuestros clientes en cada etapa
              de su celebración y creando recuerdos únicos junto a quienes
              más quieren.
            </p>


            <div className="
              mt-8
              border-l-4
              border-green-700
              pl-5
            ">

              <p className="
                text-xl
                font-semibold
                text-gray-900
              ">
                Un espacio único en Temuco para celebrar momentos inolvidables.
              </p>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}