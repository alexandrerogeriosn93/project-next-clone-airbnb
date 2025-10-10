"use client";

import { IconAdjustmentsHorizontal } from "@/assets/icons";
import IconButton from "@/components/IconButton";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const icons = [
  {
    id: "0001",
    description: "Piscina",
    source: "https://web.codans.com.br/airbnb/img/icon/0001.jpg",
    url: "/piscina",
  },
  {
    id: "0002",
    description: "Icônicos",
    source: "https://web.codans.com.br/airbnb/img/icon/0002.jpg",
    url: "/iconicos",
  },
  {
    id: "0003",
    description: "Chalés",
    source: "https://web.codans.com.br/airbnb/img/icon/0003.jpg",
    url: "/chales",
  },
  {
    id: "0004",
    description: "Vistas incríveis",
    source: "https://web.codans.com.br/airbnb/img/icon/0004.jpg",
    url: "/vistas-incriveis",
  },
  {
    id: "0005",
    description: "Casas na árvore",
    source: "https://web.codans.com.br/airbnb/img/icon/0005.jpg",
    url: "/casas-arvore",
  },
  {
    id: "0006",
    description: "Casas triangulares",
    source: "https://web.codans.com.br/airbnb/img/icon/0006.jpg",
    url: "/casas-triangulares",
  },
  {
    id: "0007",
    description: "Em frente à praia",
    source: "https://web.codans.com.br/airbnb/img/icon/0007.jpg",
    url: "/frente-praia",
  },
  {
    id: "0008",
    description: "Containêres",
    source: "https://web.codans.com.br/airbnb/img/icon/0008.jpg",
    url: "/containeres",
  },
  {
    id: "0009",
    description: "No interior",
    source: "https://web.codans.com.br/airbnb/img/icon/0009.jpg",
    url: "/interior",
  },
  {
    id: "0010",
    description: "Pousadas",
    source: "https://web.codans.com.br/airbnb/img/icon/0010.jpg",
    url: "/pousadas",
  },
  {
    id: "0011",
    description: "Na beira do lago",
    source: "https://web.codans.com.br/airbnb/img/icon/0011.jpg",
    url: "/beira-lago",
  },
  {
    id: "0012",
    description: "Parques nacionais",
    source: "https://web.codans.com.br/airbnb/img/icon/0012.jpg",
    url: "/parques-nacionais",
  },
  {
    id: "0013",
    description: "Microcasas",
    source: "https://web.codans.com.br/airbnb/img/icon/0013.jpg",
    url: "/microcasas",
  },
  {
    id: "0014",
    description: "Fazendas",
    source: "https://web.codans.com.br/airbnb/img/icon/0014.jpg",
    url: "/fazendas",
  },
  {
    id: "0015",
    description: "Mansões",
    source: "https://web.codans.com.br/airbnb/img/icon/0015.jpg",
    url: "/mansoes",
  },
  {
    id: "0016",
    description: "Ilhas",
    source: "https://web.codans.com.br/airbnb/img/icon/0016.jpg",
    url: "/ilhas",
  },
  {
    id: "0017",
    description: "Casas-barco",
    source: "https://web.codans.com.br/airbnb/img/icon/0017.jpg",
    url: "/casas-barco",
  },
  {
    id: "0018",
    description: "Luxe",
    source: "https://web.codans.com.br/airbnb/img/icon/0018.jpg",
    url: "/luxe",
  },
  {
    id: "0019",
    description: "Uau!",
    source: "https://web.codans.com.br/airbnb/img/icon/0019.jpg",
    url: "/uau",
  },
  {
    id: "0020",
    description: "Castelos",
    source: "https://web.codans.com.br/airbnb/img/icon/0020.jpg",
    url: "/castelos",
  },
];

const NavbarFilter = () => {
  return (
    <div className="flex flex-row items-center">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          764: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
      >
        {icons &&
          icons.map((icon, id) => (
            <SwiperSlide key={id}>
              <Link
                href={icon.url}
                className="flex flex-col items-center text-sm transition duration-200 ease-in-out hover:text-[#FF5A5F]"
              >
                <Image
                  src={icon.source}
                  alt={icon.description}
                  width={24}
                  height={24}
                  className="dark:bg-gray-400"
                />
                <span>{icon.description}</span>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
      <IconButton
        icon={
          <IconAdjustmentsHorizontal aria-label="Ícone de filtro" size={20} />
        }
      >
        Filtros
      </IconButton>
    </div>
  );
};

export default NavbarFilter;
