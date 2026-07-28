export default function Gallery() {

  const images = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.jpg",
    "/galeria6.jpg",
    "/galeria7.jpg",
    "/galeria8.jpg",
    "/galeria9.jpg",
    "/galeria10.jpg",
    "/galeria11.jpg",
    "/galeria12.jpg",
    "/galeria13.jpg",
    "/galeria14.jpg",
    "/galeria15.jpg",
    "/galeria16.jpg",
    "/galeria17.jpg",
    "/galeria18.jpg",
    "/galeria19.jpg",
  ];


  return (

    <section
      id="galeria"
      className="
        py-24
        px-6
        bg-[#faf8f3]
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* Título */}

        <div className="text-center mb-16">

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
            "
          >
            Galería
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
            Conoce nuestros espacios, detalles y experiencias
            que hacen único a Altos de Botrolhue.
          </p>

        </div>



        {/* Fotos */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {images.map((image) => (

            <div
              key={image}
              className="
                h-72
                rounded-3xl
                overflow-hidden
                shadow-lg
                group
              "
            >

              <img
                src={image}
                alt="Altos de Botrolhue"
                className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

            </div>

          ))}

        </div>


      </div>

    </section>

  );
}