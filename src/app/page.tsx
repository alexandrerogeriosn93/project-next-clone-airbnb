import NavbarTop from "@/widgets/NavbarTop";

export default function Home() {
  return (
    <>
      <div>
        <NavbarTop />
      </div>

      <hr />

      <div className="border-2 border-green-600">Content</div>
      <div className="border-2 border-purple-600">Footer</div>
    </>
  );
}
