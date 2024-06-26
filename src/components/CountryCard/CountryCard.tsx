import { CountryType } from "../../types/country.type";

type CountryCardProps = {
  country: CountryType;
  onClick: (country: string) => void;
};

function CountryCard({
  country,
  onClick,
}: CountryCardProps): React.ReactElement {
  return (
    <div
      onClick={() => onClick(country.name.common)}
      className={`w-60 h-max bg-white drop-shadow-lg cursor-pointer hover:scale-105 transition ${
        country.isSelected ? "border-solid border-b-4 border-green-600" : false
      }`}
    >
      <img className="w-full h-40" src={country.flags.png} />
      <div className="p-3">
        <p className="font-bold text-xl">{country.name.common}</p>
        {country.capital?.map((item) => (
          <p className="">{item}</p>
        ))}
      </div>
    </div>
  );
}

export default CountryCard;
