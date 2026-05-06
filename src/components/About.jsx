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
  At Thom Bali Surf School, we offer surfing lessons for all levels—from complete beginners to advanced surfers. If you’d like, we also provide photo & video services (additional cost) to capture your surfing experience and turn it into a beautiful memory 📸. We usually surf at Balangan Beach, Padang Padang, Jimbaran, Bingin, and most often in Nusa Dua—depending on the best conditions on the day. No need to worry—our experienced instructors will guide you step by step, ensuring you feel safe, confident, and enjoy every moment in the water. Our schedule is flexible and based on tides, waves, and wind conditions, so we always choose the best time for your session.  

  <span className="font-semibold text-gray-800 block mt-2">
    Our 2-hour surfing lesson includes:
  </span>

  <span className="block">• 30-minute ground theory covering safety instructions, pop-ups, and standing techniques for beginners</span>
  <span className="block">• 1.5 hours in the water (and 2 hours for each additional lesson)</span>
  <span className="block">• Surfboards for all levels, surfwear, zinc/sun protection, and drinking water after the session</span>

  Let me know if you’d like to book a lesson—I’ll be happy to arrange everything for you.
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