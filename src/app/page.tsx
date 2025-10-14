import { fetchData } from "@/utils/api";
import AccommodationList from "@/widgets/AccommodationList";
import Footer from "@/widgets/Footer";
import NavbarFilter from "@/widgets/NavbarFilter";
import NavbarTop from "@/widgets/NavbarTop";
import SearchBar from "@/widgets/SearchBar";

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <header className="container mx-auto">
        <NavbarTop />
        <SearchBar />
      </header>
      <hr className="my-6" />
      <main className="container mx-auto">
        <NavbarFilter icons={data.icons} />
        <AccommodationList accommodations={data.accommodation} />
      </main>
      <footer className="bg-gray-200 dark:bg-[#0a0a0a]">
        <Footer />
      </footer>
    </>
  );
}
