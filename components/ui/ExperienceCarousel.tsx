import Image from "next/image";
import Photo1 from "../../public/carousel_images/poza1.jpg";
import Photo2 from "../../public/carousel_images/poza2.jpg";
import Photo3 from "../../public/carousel_images/poza3.jpg";
import Photo4 from "../../public/carousel_images/poza4.jpg";
import Photo5 from "../../public/carousel_images/poza5.jpg";
import Photo6 from "../../public/carousel_images/poza6.jpg";
import Photo7 from "../../public/carousel_images/poza7.jpg";
import Photo8 from "../../public/carousel_images/poza8.jpg";

const photos = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
];

export const ExperienceCarousel = () => {
  return (
    <section className="w-full overflow-hidden bg-primary py-12 md:py-16">
      <h2 className="mb-8 text-center font-sans text-3xl font-bold text-surface md:text-4xl">
        Photos from my experiences
      </h2>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 sm:px-6 md:px-12 snap-x snap-mandatory scrollbar-hide">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] w-[85vw] flex-none overflow-hidden rounded-xl border-b-4 border-transparent transition-all hover:border-secondary sm:w-[70vw] md:w-[520px] lg:w-[600px] snap-center"
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 600px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};