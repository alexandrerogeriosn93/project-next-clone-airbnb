import { fetchDataById } from "@/utils/api";
import AccommodationDetails from "@/widgets/AccommodationDetails";
import AccommodationTestimonials from "@/widgets/AccommodationTestimonials";
import Footer from "@/widgets/Footer";
import Gallery from "@/widgets/Gallery";
import NavbarTop from "@/widgets/NavbarTop";
import SearchBar from "@/widgets/SearchBar";
import { notFound } from "next/navigation";

interface DetailsProps {
  id: string;
}

export default async function Details({
  params,
}: {
  params: Promise<DetailsProps>;
}) {
  const { id } = await params;
  const accommodation = await fetchDataById(id);

  if (!accommodation) {
    notFound();
  }

  return (
    <div>
      <header className="container mx-auto">
        <NavbarTop />
        <SearchBar />
      </header>
      <hr className="my-6" />
      <main className="container mx-auto py-6">
        <h1 className="pb-2 text-3xl font-semibold">{accommodation.title}</h1>
        <Gallery photos={accommodation.photos} />
        <div className="flex flex-col md:flex-row">
          <AccommodationDetails accommodation={accommodation} />
          <AccommodationTestimonials
            testimonials={accommodation.testimonials}
          />
        </div>
      </main>
      <footer className="bg-gray-200 dark:bg-[#0a0a0a]">
        <Footer />
      </footer>
    </div>
  );
}
