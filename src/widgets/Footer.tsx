import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto py-8">
      <span className="pb-4 text-lg font-semibold">&copy; AirBnb INC</span>
      <ul className="flex flex-row gap-2">
        <li>
          <Link
            href="/"
            className="transition duration-200 ease-in-out hover:text-[#FF5A5F]"
          >
            Privacidade
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link
            href="/"
            className="transition duration-200 ease-in-out hover:text-[#FF5A5F]"
          >
            Termos
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link
            href="/"
            className="transition duration-200 ease-in-out hover:text-[#FF5A5F]"
          >
            Mapa do site
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link
            href="/"
            className="transition duration-200 ease-in-out hover:text-[#FF5A5F]"
          >
            Informações da empresa
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
