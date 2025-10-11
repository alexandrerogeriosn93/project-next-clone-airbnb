import { IconHeartFilled, IconStarFilled } from "@/assets/icons";

interface AccommodationProps {
  children: React.ReactNode;
  location: string;
  host: string;
  date: string;
  price: number;
  rating: number;
  hasBadge: boolean;
}

const Accommodation = ({
  children,
  location,
  host,
  date,
  price,
  rating,
  hasBadge,
}: AccommodationProps) => {
  return (
    <figure className="relative">
      <div className="absolute flex w-full flex-row items-center justify-between p-2">
        <span className="rounded-full bg-white px-4 py-1 font-semibold dark:text-black">
          Preferido dos hóspedes
        </span>
        <IconHeartFilled
          className="stroke-white opacity-80 dark:stroke-black"
          aria-label="Favoritos"
          size={30}
        />
      </div>
      {children}
      <figcaption className="pt-2">
        <div className="flex flex-row justify-between">
          <span className="font-semibold">{location}</span>
          <div className="flex flex-row">
            <IconStarFilled aria-label="Avaliações" size={20} />
            <span className="font-semibold">{rating}</span>
          </div>
        </div>
        <div>Anfitriã(o): {host}</div>
        <div>{date}</div>
        <div className="font-semibold">R$ {price}</div>
      </figcaption>
    </figure>
  );
};

export default Accommodation;
