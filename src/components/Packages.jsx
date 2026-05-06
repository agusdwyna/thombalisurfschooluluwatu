const SINGLE_LESSONS = [
  {
    tag:       'SOLO FOCUS',
    tagStyle:  'bg-secondary-container text-on-secondary-container',
    title:     'Private',
    price:     'IDR 650k',
    features:  ['Pro Surfboard', 'High-End Wetsuit', 'Premium Zinc & Water', '1-on-1 Instruction'],
    featured:  true,
  },
  {
    tag:       'DUO EXPERIENCE',
    tagStyle:  'bg-primary text-on-primary',
    title:     'Semi-Private',
    price:     'IDR 500k',
    features:  ['Pro Surfboard', 'High-End Wetsuit', 'Premium Zinc & Water', '2-on-1 Instruction'],
    featured:  false,
  },
  {
    tag:       'SOCIAL SURF',
    tagStyle:  'bg-secondary-container text-on-secondary-container',
    title:     'Group',
    price:     'IDR 400k',
    features:  ['Pro Surfboard', 'High-End Wetsuit', 'Premium Zinc & Water', 'Max 4 students'],
    featured:  false,
  },
]

const THREE_DAY = [
  {
    title:   'Private',
    price:   'IDR 1.65m',
    desc:    'Full personal attention for 3 consecutive days. Ideal for rapid improvement.',
    cardBg:  'bg-primary text-on-primary',
    priceCl: 'text-primary-fixed',
    btnBg:   'bg-primary-fixed text-on-primary-fixed',
  },
  {
    title:   'Semi-Private',
    price:   'IDR 1.2m',
    desc:    'The perfect balance of social learning and focused attention for couples or friends.',
    cardBg:  'bg-on-secondary-fixed-variant text-on-primary',
    priceCl: 'text-secondary-fixed',
    btnBg:   'bg-secondary-fixed text-on-secondary-fixed',
  },
  {
    title:   'Group',
    price:   'IDR 1.1m',
    desc:    'Fun, social, and cost-effective intensive training with fellow surfers.',
    cardBg:  'bg-tertiary-container text-on-primary',
    priceCl: 'text-tertiary-fixed',
    btnBg:   'bg-tertiary-fixed text-on-tertiary-fixed',
  },
]
const WHATSAPP_NUMBER = "6282146828788"

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

function PackageCard({ card }) {
  const base =
    'p-stack-md rounded-xl flex flex-col h-full transition-all duration-300'
  const featured =
    'bg-secondary-container/20 border-2 border-primary/10 shadow-xl shadow-primary/5 md:-translate-y-4 relative'
  const normal =
    'bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5'

  return (
    <div className={`${base} ${card.featured ? featured : normal}`}>
      {card.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-stack-sm py-1 rounded-full text-label-caps font-label-caps">
          MOST POPULAR
        </div>
      )}

      <span className={`${card.tagStyle} px-stack-sm py-1 rounded-full text-label-caps font-label-caps w-fit mb-stack-md`}>
        {card.tag}
      </span>

      <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">{card.title}</h3>

      <div className="mb-stack-md">
        <span className="text-primary font-extrabold text-headline-md">{card.price}</span>
        <span className="text-on-surface-variant font-body-md"> / person</span>
      </div>

      <ul className="space-y-unit mb-stack-md flex-grow">
        {card.features.map((f) => (
          <li key={f} className="flex items-center gap-unit text-on-surface-variant font-body-md">
            <span className="material-symbols-outlined text-primary text-body-md">check</span>
            {f}
          </li>
        ))}
      </ul>

     <button
  onClick={() =>
    openWhatsApp(
      `Halo Thom Bali Surf School 👋\nSaya ingin booking *${card.title} Package*\n\nHarga: ${card.price}\n\nMohon info ketersediaan jadwal 🙏`
    )
  }
  className="w-full py-4 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors duration-300"
>
  Book via WhatsApp
</button>
    </div>
  )
}

export default function Packages() {
  return (
    <>
      {/* ── Single-lesson packages ─────────────────────────────────────────── */}
      <section id="packages" className="py-12 md:py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-10 md:mb-section-gap">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">
              Surf Lesson Packages
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Choose the perfect session to start your journey. Each lesson is 2 hours of expert
              guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-gutter">
            {SINGLE_LESSONS.map((card) => (
              <PackageCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-day packages ────────────────────────────────────────────────── */}
       <section className="py-12 md:py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-10 md:mb-section-gap">
            <span className="font-label-caps text-label-caps text-secondary mb-unit block">
              INTENSIVE LEARNING
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">
              3 Days Surf Package
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Accelerate your progress with our structured 3-day program.
            </p>
          </div>
 
          {/* Mobile: horizontal scroll snap. md+: grid 3 kolom normal */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-stack-md md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            {THREE_DAY.map((pkg) => (
              <div
                key={pkg.title}
                className={`snap-center shrink-0 w-[80vw] sm:w-[60vw] md:w-auto md:shrink p-stack-md rounded-xl hover:scale-[1.02] transition-transform duration-300 ${pkg.cardBg}`}
              >
                <h4 className="font-headline-md text-headline-md mb-stack-sm">{pkg.title}</h4>
                <p className={`text-headline-md font-extrabold mb-stack-md ${pkg.priceCl}`}>
                  {pkg.price}
                </p>
                <p className="font-body-md mb-stack-md opacity-80">{pkg.desc}</p>
                <button className={`w-full py-3 rounded-lg font-bold ${pkg.btnBg}`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
 
          {/* Scroll hint dots — mobile only */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {THREE_DAY.map((pkg, i) => (
              <div key={pkg.title} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-outline-variant'}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

