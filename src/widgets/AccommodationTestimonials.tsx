import { IconStarFilled } from "@/assets/icons";
import { Testimonials } from "@/types/AirbnbData";
import Image from "next/image";

interface AccommodationTestimonialsProps {
  testimonials: Testimonials[];
}

const AccommodationTestimonials = ({
  testimonials,
}: AccommodationTestimonialsProps) => {
  const testimonialsList = testimonials;

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">Testimonials</h2>
      <div className="flex items-center gap-2">
        <IconStarFilled className="size-4" />
        <span>4.9(400+ avaliações)</span>
      </div>
      {testimonialsList.length > 0 &&
        testimonialsList.map((testimonial, id) => (
          <div key={id} className="flex flex-row items-start gap-2 py-4">
            <Image
              className="aspect-square rounded-full object-cover"
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
            />
            <div>
              <span className="text-md font-semibold">{testimonial.name}</span>
              <p>{testimonial.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AccommodationTestimonials;
