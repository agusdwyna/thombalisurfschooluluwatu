const HERO_IMG =
  "Hero.jpeg" // Replace with your actual image path or URL;
const WHATSAPP_NUMBER = "6282146828788"

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}
export default function Hero() 
{
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <img
    src={HERO_IMG}
    alt="Uluwatu beach sunrise"
    className="w-full h-full object-cover object-center"
  />

        {/* DARK OVERLAY FIX */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        <h1 className="text-white font-extrabold text-6xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
          Learn to Surf in Bali Like a Pro
        </h1>

        <p className="text-white/90 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Private & group surf lessons with experienced local instructors.
          Discover the joy of Bali's best waves in a safe, professional, and
          luxurious environment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

         <button
  onClick={() =>
    openWhatsApp(
      `Halo Thom Bali Surf School 👋\nSaya tertarik untuk booking surf lesson di Uluwatu.\n\nMohon info jadwal & ketersediaan 🙏`
    )
  }
  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
>
  Book via WhatsApp
</button>

          <a
            href="#packages"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition"
          >
            View Packages
          </a>

        </div>
      </div>
    </section>
  )
}