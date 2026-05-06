const ABOUT_IMG =
  'about.jpeg' 

const FEATURES = [
  { icon: 'verified',     label: 'Professional local instructors' },
  { icon: 'beach_access', label: 'Beginner friendly beach' },
  { icon: 'groups',       label: 'Small focused groups' },
  { icon: 'check_circle', label: 'All professional equipment included' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* IMAGE (ONLY MOBILE FIX) */}
        <div className="relative group order-1 md:order-1">
          <img
            src={ABOUT_IMG}
            alt="Surf instructor on Uluwatu beach"
            className="w-full h-48 md:h-[500px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* TEXT (UNCHANGED DESKTOP) */}
        <div className="space-y-5 md:space-y-6 order-2">
          
          <span className="text-xs md:text-sm font-semibold tracking-widest text-primary">
            ESTABLISHED ULUWATU
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-snug">
            About Thom Bali Surf School
          </h2>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
            At Thom Bali Surf School, we merge the thrill of the ocean with professional athletic
            instruction. Located in the heart of Uluwatu's premium coastline, we offer a sanctuary
            for water enthusiasts. Our approach is rooted in safety, fun, and the pursuit of excellence.
          </p>

          {/* FEATURES (UNCHANGED DESKTOP) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon, label }) => (
              <div key={icon} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  {icon}
                </span>
                <span className="text-sm md:text-base font-medium text-gray-800">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}