import Accommodation from "@/components/Accommodation";
import { AccommodationType } from "@/types/AirbnbData";
import Image from "next/image";
import Link from "next/link";

interface AccommodationListProps {
  accommodations: AccommodationType[];
}

const AccommodationList = ({ accommodations }: AccommodationListProps) => {
  const accommodationsList = accommodations;

  return (
    <section className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {accommodationsList &&
        accommodationsList.map((accommodation, id) => (
          <div key={id}>
            <Link href={accommodation.slug}>
              <Accommodation
                location={accommodation.location.description}
                host={accommodation.host}
                date={accommodation.date}
                price={accommodation.price}
                rating={accommodation.rating}
                hasBadge={accommodation.hasBadge}
              >
                <Image
                  className="aspect-square w-full rounded-xl object-cover"
                  src={accommodation.photos[0].source}
                  alt={accommodation.photos[0].description}
                  width={300}
                  height={300}
                />
              </Accommodation>
            </Link>
          </div>
        ))}
    </section>
  );
};

export default AccommodationList;
