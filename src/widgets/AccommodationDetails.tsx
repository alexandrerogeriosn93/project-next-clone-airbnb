import {
  IconAlarmSmoke,
  IconBrandCarbon,
  IconDesk,
  IconDog,
  IconParking,
  IconPhoto,
  IconPool,
  IconSailboat,
  IconToolsKitchen2,
  IconWifi,
} from "@/assets/icons";
import { AccommodationType } from "@/types/AirbnbData";

interface AccommodationDetailsProps {
  accommodation: AccommodationType;
}

const AccommodationDetails = ({ accommodation }: AccommodationDetailsProps) => {
  const accommodationById = accommodation;

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">
        {accommodationById.location.description}
      </h2>
      <ul className="flex flex-row gap-2">
        <li>10 hóspedes</li>
        <li>&middot;</li>
        <li>5 quartos</li>
        <li>&middot;</li>
        <li>5 camas</li>
        <li>&middot;</li>
        <li>6 banheiros</li>
      </ul>
      <h2 className="pt-4 text-xl font-semibold">O que este lugar oferece?</h2>
      <ul className="grid grid-cols-2 items-center gap-y-6 py-6">
        <li className="flex gap-1.5">
          <IconPhoto />
          <span>Vista para as montanhas</span>
        </li>
        <li className="flex gap-1.5">
          <IconToolsKitchen2 />
          <span>Cozinha</span>
        </li>
        <li className="flex gap-1.5">
          <IconDesk />
          <span>Espalo de trabalho exclusivo</span>
        </li>
        <li className="flex gap-1.5">
          <IconPool />
          <span>Piscina privativa</span>
        </li>
        <li className="flex gap-1.5">
          <IconBrandCarbon />
          <span className="line-through">Alarme de segurança para gás</span>
        </li>
        <li className="flex gap-1.5">
          <IconSailboat />
          <span>Vista para as águas</span>
        </li>
        <li className="flex gap-1.5">
          <IconWifi />
          <span>Wi-Fi rápido (83 Mbps)</span>
        </li>
        <li className="flex gap-1.5">
          <IconParking />
          <span>Estacionamento incluído</span>
        </li>
        <li className="flex gap-1.5">
          <IconDog />
          <span>Permitido animais</span>
        </li>
        <li className="flex gap-1.5">
          <IconAlarmSmoke />
          <span className="line-through">Detector de fumaça</span>
        </li>
      </ul>
    </div>
  );
};

export default AccommodationDetails;
