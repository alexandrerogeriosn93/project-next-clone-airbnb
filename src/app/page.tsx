import NavbarTop from "@/widgets/NavbarTop";
import SearchBar from "@/widgets/SearchBar";

export default function Home() {
  return (
    <>
      <div>
        <NavbarTop />
        <SearchBar />
      </div>

      <hr className="mt-5" />

      <div className="mt-10 border-2 border-green-600">Content</div>
      <div className="border-2 border-purple-600">Footer</div>
    </>
  );
}
