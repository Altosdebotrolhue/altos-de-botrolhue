"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
        "
      >


        {/* Logo */}

        <a href="#inicio">

          <img
            src="/logo.png"
            alt="Altos de Botrolhue"
            className="
              h-14
              w-auto
              object-contain
            "
          />

        </a>





        {/* Menú */}

        <ul
          className={`
            hidden
            md:flex
            items-center
            gap-8
            font-medium
            ${
              scrolled
                ? "text-gray-800"
                : "text-white"
            }
          `}
        >

          <li>
            <a
              href="#inicio"
              className="hover:text-green-600 transition"
            >
              Inicio
            </a>
          </li>


          <li>
            <a
              href="#nosotros"
              className="hover:text-green-600 transition"
            >
              Nosotros
            </a>
          </li>


          <li>
            <a
              href="#servicios"
              className="hover:text-green-600 transition"
            >
              Servicios
            </a>
          </li>


          <li>
            <a
              href="#galeria"
              className="hover:text-green-600 transition"
            >
              Galería
            </a>
          </li>


          <li>
            <a
              href="#contacto"
              className="hover:text-green-600 transition"
            >
              Contacto
            </a>
          </li>


        </ul>





        {/* Botón Cotizar */}

        <a
          href="https://wa.me/56926194264?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20realizar%20un%20evento."
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            md:inline-flex
            bg-green-700
            hover:bg-green-800
            text-white
            px-7
            py-3
            rounded-full
            font-semibold
            transition
            shadow-md
            hover:scale-105
          "
        >
          Cotizar
        </a>


      </div>


    </nav>
  );
}