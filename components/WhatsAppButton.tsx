export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56926194264?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20realizar%20un%20evento."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-600
        hover:bg-green-700
        text-white
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-2xl
        transition
        duration-300
        hover:scale-110
      "
      aria-label="Contactar por WhatsApp"
    >

      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M16 2.8C8.7 2.8 2.8 8.5 2.8 15.7c0 2.6.8 5.1 2.2 7.2L3 29.2l6.5-2c2 .9 4.2 1.4 6.5 1.4 7.3 0 13.2-5.7 13.2-12.9S23.3 2.8 16 2.8zm0 23.5c-2.1 0-4.1-.5-5.8-1.5l-.4-.2-3.8 1.2 1.2-3.7-.3-.4c-1.3-1.9-2-4.1-2-6.3 0-6 5-10.8 11.1-10.8s11.1 4.8 11.1 10.8-5 10.9-11.1 10.9zm6.1-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.7.1-.3 0-.5-.1-.7-.1-.2-.7-1.8-1-2.5-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.8.9-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5z"/>
      </svg>

    </a>
  );
}