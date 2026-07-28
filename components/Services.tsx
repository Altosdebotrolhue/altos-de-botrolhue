export default function Services() {

  const services = [
    {
      titulo: "Matrimonios",
      descripcion:
        "Un espacio especial para celebrar uno de los días más importantes de tu vida, rodeado de naturaleza y tranquilidad.",
    },
    {
      titulo: "Cumpleaños",
      descripcion:
        "Celebraciones para todas las edades con ambientes cómodos y preparados para disfrutar junto a tus invitados.",
    },
    {
      titulo: "Eventos Familiares",
      descripcion:
        "Reuniones y celebraciones familiares en un entorno acogedor pensado para compartir grandes momentos.",
    },
    {
      titulo: "Eventos Corporativos",
      descripcion:
        "Espacios ideales para reuniones, capacitaciones, actividades empresariales y encuentros especiales.",
    },
    {
      titulo: "Celebraciones Especiales",
      descripcion:
        "Baby showers, aniversarios y eventos personalizados adaptados a cada ocasión.",
    },
    {
      titulo: "Áreas Verdes",
      descripcion:
        "Amplios espacios exteriores para disfrutar la naturaleza y crear una experiencia inolvidable.",
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
            Nuestros Servicios
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
            Espacios preparados para crear celebraciones únicas,
            con la comodidad y tranquilidad que tu evento merece.
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