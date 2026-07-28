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


  const videos = [
    {
      src: "/video1.mp4",
      title: "Cómo llegar a Altos de Botrolhue",
      description: "Conoce nuestra ubicación y el camino hacia nuestro centro de eventos.",
    },
    {
      src: "/video2.mp4",
      title: "Nuestros espacios",
      description: "Descubre los ambientes preparados para tus celebraciones.",
    },
    {
      src: "/video3.mp4",
      title: "Momentos especiales",
      description: "Revive experiencias y celebraciones realizadas en nuestro espacio.",
    },
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

        <h3
          className="
            text-3xl
            font-bold
            text-gray-900
            mb-8
          "
        >
          Fotografías
        </h3>



        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            mb-24
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





        {/* Videos */}

        <h3
          className="
            text-3xl
            font-bold
            text-gray-900
            mb-8
          "
        >
          Videos
        </h3>




        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {videos.map((video) => (

            <div
              key={video.src}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                border
                border-gray-100
              "
            >


              <video
                controls
                preload="metadata"
                className="
                  w-full
                  aspect-video
                  bg-black
                "
              >

                <source
                  src={video.src}
                  type="video/mp4"
                />

                Tu navegador no soporta videos.

              </video>




              <div
                className="
                  p-6
                "
              >

                <h4
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                    mb-2
                  "
                >
                  {video.title}
                </h4>


                <p
                  className="
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {video.description}
                </p>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );
}