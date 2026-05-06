const IMAGES = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-10 md:py-section-gap bg-background"
    >
      <div className="max-w-container-max mx-auto px-gutter">

        {/* Title */}
        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-6 md:mb-section-gap">
          Surf Moments
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-unit pb-20 md:pb-0">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={src}
                alt={`Surf moment ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* extra breathing space bawah (mobile only feel) */}
        <div className="h-4 md:h-0" />

      </div>
    </section>
  )
}