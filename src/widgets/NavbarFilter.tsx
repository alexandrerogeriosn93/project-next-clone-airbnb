"use client";

import { IconAdjustmentsHorizontal } from "@/assets/icons";
import IconButton from "@/components/IconButton";
import { Icon } from "@/types/AirbnbData";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface NavbarFilterProps {
  icons: Icon[];
}

const NavbarFilter = ({ icons }: NavbarFilterProps) => {
  const iconsList = icons;

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
        {iconsList &&
          iconsList.map((icon, id) => (
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
                <span className="text-sm">{icon.description}</span>
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
