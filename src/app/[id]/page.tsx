import Footer from "@/widgets/Footer";
import NavbarTop from "@/widgets/NavbarTop";
import SearchBar from "@/widgets/SearchBar";

interface DetailsProps {
  id: string;
}

export default async function Details({
  params,
}: {
  params: Promise<DetailsProps>;
}) {
  const data = await params;
  return (
    <div>
      <header className="container mx-auto">
        <NavbarTop />
        <SearchBar />
      </header>
      <hr className="my-6" />
      <main className="container mx-auto py-6">
        <h1 className="text-3xl">
          Rancho da Lua, tranquilo e rodeado por montanhas
        </h1>
      </main>
      <footer className="bg-gray-200 dark:bg-[#0a0a0a]">
        <Footer />
      </footer>
    </div>
  );
}
