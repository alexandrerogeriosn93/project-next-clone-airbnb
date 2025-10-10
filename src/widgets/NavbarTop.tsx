import { IconUserCircle } from "@/assets/icons";
import IconButton from "@/components/IconButton";
import Logo from "@/components/Logo";
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
      <IconButton
        icon={<IconUserCircle aria-label="Ícone de usuário" size={20} />}
      >
        Entrar
      </IconButton>
    </div>
  );
};

export default NavbarTop;
