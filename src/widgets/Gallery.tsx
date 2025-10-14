import Image from "next/image";

type Photo = {
  id: string;
  source: string;
  description: string;
};

interface GalleryProps {
  photos: Photo[];
}

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {photos.length > 0 &&
        photos.slice(0, 9).map((photo, id) => {
          const firstPhoto = id === 0 ? "col-span-2 row-span-2" : "";

          return (
            <div key={id} className={`${firstPhoto}`}>
              <Image
                className="aspect-square w-full object-cover"
                src={photo.source}
                alt={photo.description}
                width={1280}
                height={720}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
