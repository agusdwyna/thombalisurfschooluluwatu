const BG_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDDoKGbi2tvfX9sSM0yHauRx8lV6Tiyh01MD0vnLC292Hv7tVDV_NWnsdDhJQQaS9duY68CtHDqsOcq-ElavpartuQxwl62aa0k3Ak-5w7o531SL0EBzWupac57_zRurzncBkj99SFdQdNh0NTSm868CDT-R_Rbc4cpi1LJgY_8L14WnI9VxV0Uj5K_7Fe_fl075_XzZHCqWlzfYEoXvorCxYtzB9WLUu2h4aU6s_BDJongckawx_YobnrvhPr4BbKKts9iP6_-YX3G'

const WHATSAPP_NUMBER = "6282146828788"
  function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}
export default function CTA() {
  return (
    <section className="py-section-gap bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={BG_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
        <h2 className="font-headline-lg text-headline-lg text-on-primary mb-stack-sm">
          Ready to Catch Your First Wave?
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary/80 mb-stack-md max-w-2xl mx-auto">
          Book your surf lesson now and start your surfing journey in Bali with the experts.
          Professional instruction, premium gear, and the best waves await you.
        </p>
      <button
  onClick={() =>
    openWhatsApp(
      `Halo Thom Bali Surf School 👋\nSaya ingin bertanya tentang surf lesson di Uluwatu.\n\nMohon info lengkapnya 🙏`
    )
  }
  className="bg-white text-primary px-12 py-5 rounded-full font-headline-md text-body-md hover:scale-105 transition-all duration-300 shadow-2xl"
>
  Chat on WhatsApp Now
</button>

        
      </div>
    </section>
  )
}
