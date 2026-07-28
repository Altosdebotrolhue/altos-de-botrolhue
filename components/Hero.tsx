export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Imagen de fondo */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />


      {/* Capa oscura */}

      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />



      {/* Contenido */}

      <div
        className="
          relative
          z-10
          text-center
          text-white
          px-6
          max-w-5xl
        "
      >


        <p
          className="
            uppercase
            tracking-[0.3em]
            text-sm
            md:text-base
            text-gray-200
            mb-6
          "
        >
          Centro de Eventos
        </p>



        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          "
        >
          Altos de
          <br />
          Botrolhue
        </h1>



        <p
          className="
            mt-8
            text-xl
            md:text-2xl
            text-gray-200
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Un espacio rodeado de naturaleza en Labranza, Temuco,
          ideal para matrimonios, celebraciones y eventos inolvidables.
        </p>




        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
          "
        >


          {/* WhatsApp */}

          <a
            href="https://wa.me/56926194264?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20realizar%20un%20evento."
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-green-700
              hover:bg-green-800
              text-white
              px-9
              py-4
              rounded-full
              font-semibold
              transition
              shadow-xl
            "
          >
            Consultar disponibilidad
          </a>




          {/* Galería */}

          <a
            href="#galeria"
            className="
              border
              border-white
              text-white
              hover:bg-white
              hover:text-gray-900
              px-9
              py-4
              rounded-full
              font-semibold
              transition
            "
          >
            Conocer espacios
          </a>


        </div>


      </div>



      {/* Indicador inferior */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white/70
          text-sm
        "
      >
        Descubre nuestro espacio
      </div>


    </section>
  );
}