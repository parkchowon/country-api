import { CountryType } from "../../types/country.type";
import CountryCard from "../CountryCard";

interface CountryListProps {
  countryList: CountryType[] | undefined;
  onClick: (country: string) => void;
}

function CountryList({ countryList, onClick }: CountryListProps) {
  return (
    <div className="grid place-items-center gap-9 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {countryList?.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            country={country}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

export default CountryList;
