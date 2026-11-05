import Image from "next/image";

const slides = [
  {
    image: "/images/window.jpg",
    title: "Rockridge Member Experiences",
    quote: "Same cleaner every time—and my apartment finally feels calm.",
  },
  {
    image: "/images/kitchen.jpg",
    title: "Berkeley Home Reset",
    quote: "They treat marble and oak the way a lab would treat glass.",
  },
  {
    image: "/images/bedroom.jpg",
    title: "Oakland Mid-Century Clean",
    quote: "Nothing missed. Quiet, consistent, and ahead of the dust.",
  },
];

export function Experiences() {
  return (
    <section className="overflow-hidden bg-cream text-forest">
      <div className="mx-auto max-w-[900px] px-6 pt-8 text-center sm:px-10">
        <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.85rem]">
          Over 2,400 home transformations (and counting).
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-moss">
          From Craftsman bungalows in Rockridge to hillside homes in the Oakland
          hills—East Bay members share what changed when cleaning became
          reliable.
        </p>
      </div>

      <div className="mt-14 mask-fade-r">
        <div className="scroll-x flex gap-5 overflow-x-auto px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] pb-20 snap-x snap-mandatory">
          {slides.map((slide) => (
            <figure
              key={slide.title}
              className="relative h-[28rem] w-[78vw] max-w-[520px] shrink-0 snap-center overflow-hidden rounded-[1.75rem] sm:h-[32rem] sm:w-[420px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/15 to-forest/20" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
                  <p className="text-sm font-medium">SeraHome</p>
                  <p className="mt-1 text-sm text-white/80">{slide.title}</p>
                  <p className="mt-4 max-w-xs text-[15px] leading-snug text-white/90">
                    “{slide.quote}”
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
