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
              alt="Altos de Botrolhue"
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
              Labranza, Temuco, creado para recibir momentos
              importantes y transformarlos en recuerdos inolvidables.
            </p>



            <p className="
              text-gray-700
              text-lg
              leading-relaxed
              mb-5
            ">
              Nuestro espacio combina naturaleza, tranquilidad y
              comodidad, ofreciendo un entorno ideal para matrimonios,
              cumpleaños, celebraciones familiares y eventos especiales.
            </p>



            <p className="
              text-gray-700
              text-lg
              leading-relaxed
            ">
              Trabajamos para entregar una experiencia cercana y
              personalizada, cuidando cada detalle para que cada
              celebración sea única.
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
                Un lugar especial para celebrar grandes momentos.
              </p>

            </div>


          </div>


        </div>


      </div>


    </section>
  );
}