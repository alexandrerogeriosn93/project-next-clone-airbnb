import Logo from "@/components/Logo/Logo";
import Link from "next/link";

const NavbarTop = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-6">
      <Logo />
      <div className="flex gap-6">
        <Link href="/" className="font-semibold">
          Acomodações
        </Link>
        <Link href="/" className="opacity-60">
          Experiências
        </Link>
      </div>
      <button className="rounded-md border-2">Entrar</button>
    </div>
  );
};

export default NavbarTop;
