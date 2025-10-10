import Accommodation from "@/widgets/Accommodation";
import NavbarFilter from "@/widgets/NavbarFilter";
import NavbarTop from "@/widgets/NavbarTop";
import SearchBar from "@/widgets/SearchBar";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <NavbarTop />
        <SearchBar />
      </header>

      <hr className="my-3" />

      <main className="container mx-auto">
        <NavbarFilter />
        <Accommodation />
      </main>

      <footer className="container mx-auto">Footer</footer>
    </>
  );
}
