const MAP_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBfO6vie3IJj8jr-aID7OAyalNnQQgkz3_oOawp5XC4Z-fFnnOVa_p_nAzkVChEcfaK89nErT2F2T0NGdQUy0dYFmUVEl6iXCIujkNiObekOl2vuHof_ZaTehPbRy1XANl-a-SvZr7aHK-0j2XMOgGe3EKo6B4ag9_OPly8R071HzbUZ8AiUFQYFtYJW55cGG_qOtlqv-YGvnFdnssCkfyLF_FwdNFcaOHxHqpsgOgttguNmDysFgF0vhULrtzxU50pdGJsV_yErwlH'

/* ─────────────────────────────────────────────── */
/* LOCATION */
/* ─────────────────────────────────────────────── */

export function Location() {
  return (
    <section
      id="location"
      className="py-10 md:py-section-gap bg-surface-container-low"
    >
      <div className="max-w-container-max mx-auto px-gutter">

        <div className="grid md:grid-cols-2 gap-10 md:gap-section-gap items-center">

          {/* INFO */}
          <div className="space-y-stack-md">

            <span className="font-label-caps text-label-caps text-secondary tracking-widest">
              VISIT US
            </span>

            <h2 className="font-headline-lg text-headline-lg text-primary">
              Our Location
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Visit us at Uluwatu's best surfing beach. Experience the perfect waves in Bali's most
              exclusive coastal area.
            </p>

            
          </div>

          {/* MAP */}
          {/* MAP */}
<div className="relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.651114938152!2d115.09171429999999!3d-8.8188087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24fc550b2948b%3A0x6eec6509d4598e4a!2sTHOM%20BALI%20SURF%20SCHOOL%20ULUWATU!5e0!3m2!1sid!2sid!4v1778042939816!5m2!1sid!2sid"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* overlay biar tetap aesthetic (opsional tapi recommended) */}
  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

</div>

        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/* FOOTER */
/* ─────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary border-t border-white/5">

      <div className="max-w-container-max mx-auto px-gutter pt-12 md:pt-section-gap pb-8 md:pb-stack-md">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-section-gap mb-10 md:mb-section-gap">

          {/* BRAND */}
          <div className="space-y-stack-sm">
            <div className="font-headline-md text-headline-md font-bold text-white">
              Thom Bali Surf School Uluwatu
            </div>

            <p className="text-on-primary/70 font-body-md">
              Providing world-class surf instruction in the heart of Uluwatu. Excellence in every wave.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-label-caps text-label-caps text-white mb-stack-md">
              Quick Links
            </h4>

            <ul className="space-y-unit">
              {['Home', 'About Us', 'Surf Packages', 'Gallery'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-on-primary/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-label-caps text-label-caps text-white mb-stack-md">
              Contact
            </h4>

            <ul className="space-y-unit">
              <li className="text-on-primary/70 flex gap-unit items-start">
                <span className="material-symbols-outlined">location_on</span>
               Jl. Pantai Padang-Padang, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361
              </li>

              <li className="text-on-primary/70 flex gap-unit items-start">
                <span className="material-symbols-outlined">call</span>
                <a href="tel:+6281234567890" className="hover:text-white">
                  +62 821 468 28788
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-stack-md border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-stack-sm">

          <p className="text-on-primary/50 text-body-md text-center md:text-left">
            © 2024 Thom Bali Surf School. Uluwatu Excellence.
          </p>

        

        </div>

      </div>

    </footer>
  )
}