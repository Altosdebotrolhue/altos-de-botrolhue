export default function Services() {

  const services = [
    {
      titulo: "Matrimonios",
      descripcion:
        "Celebra tu matrimonio en un centro de eventos en Labranza, Temuco, con un entorno natural, tranquilo y pensado para crear recuerdos inolvidables.",
    },
    {
      titulo: "Cumpleaños",
      descripcion:
        "Realizamos celebraciones de cumpleaños para todas las edades, con espacios cómodos para disfrutar junto a familiares y amigos.",
    },
    {
      titulo: "Eventos Familiares",
      descripcion:
        "Un lugar acogedor para reuniones familiares, aniversarios y celebraciones especiales en un ambiente tranquilo y rodeado de naturaleza.",
    },
    {
      titulo: "Eventos Corporativos",
      descripcion:
        "Espacios preparados para empresas, reuniones, actividades corporativas y encuentros profesionales en un entorno diferente.",
    },
    {
      titulo: "Celebraciones Especiales",
      descripcion:
        "Baby showers, aniversarios y eventos personalizados adaptados a cada ocasión, cuidando cada detalle de tu celebración.",
    },
    {
      titulo: "Áreas Verdes",
      descripcion:
        "Disfruta de amplios espacios exteriores rodeados de naturaleza para crear una experiencia única junto a tus invitados.",
    },
  ];


  return (
    <section
      id="servicios"
      className="
        py-24
        px-6
        bg-white
      "
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-14">

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
            "
          >
            Servicios para Eventos en Temuco
          </h2>


          <p
            className="
              mt-5
              text-gray-600
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            En Altos de Botrolhue ofrecemos un espacio ideal para
            matrimonios, cumpleaños, eventos familiares y celebraciones
            especiales en Labranza, Temuco.
          </p>


        </div>




        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {services.map((service) => (

            <div
              key={service.titulo}
              className="
                group
                bg-[#faf8f3]
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                hover:-translate-y-2
                border
                border-gray-100
              "
            >


              <div
                className="
                  w-12
                  h-1
                  bg-green-700
                  mb-6
                  rounded-full
                  transition
                  group-hover:w-20
                "
              />


              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  mb-4
                "
              >
                {service.titulo}
              </h3>



              <p
                className="
                  text-gray-600
                  leading-relaxed
                "
              >
                {service.descripcion}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}