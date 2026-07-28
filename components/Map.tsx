export default function Map() {
  return (
    <section
      id="ubicacion"
      className="py-24 px-6 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto">


        {/* Título */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Cómo llegar
          </h2>


          <p className="mt-4 text-gray-600 text-lg">
            Visítanos en nuestro centro de eventos ubicado en
            Labranza, Temuco.
          </p>

        </div>




        <div className="grid md:grid-cols-2 gap-10 items-center">



          {/* Información */}
          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-8
            "
          >


            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ubicación
            </h3>



            <p className="text-gray-700 leading-relaxed mb-6">

              <strong>
                Centro de Eventos Altos de Botrolhue
              </strong>

              <br />

              Labranza, Temuco

              <br />

              S-262, Región de La Araucanía

              <br />

              Chile

            </p>




            <p className="text-gray-600 mb-8">
              Un espacio rodeado de naturaleza,
              ideal para matrimonios, celebraciones
              familiares y eventos especiales.
            </p>




            <a
              href="https://www.google.com/maps/search/?api=1&query=Centro+de+eventos+Altos+de+Botrolhue+S-262+Temuco"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                bg-green-600
                hover:bg-green-700
                text-white
                px-7
                py-3
                rounded-full
                font-semibold
                transition
                hover:scale-105
              "
            >
              Ver ubicación en Google Maps
            </a>



          </div>





          {/* Mapa */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              shadow-xl
            "
          >

            <iframe
              src="https://maps.google.com/maps?q=Centro%20de%20eventos%20Altos%20de%20Botrolhue%20S-262%20Temuco&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>


          </div>



        </div>


      </div>


    </section>
  );
}