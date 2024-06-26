import { WritableDraft, produce } from "immer";
import { useEffect, useState } from "react";
import ReactSelect, { SingleValue } from "react-select";
import { fetchCountry } from "./apis/country.api";
import CountryList from "./components/CountryList";
import { CountryType } from "./types/country.type";

type OptionType = {
  value: string;
  label: string;
};

function App() {
  const [selectedCountry, setSelectedCountry] = useState<CountryType[]>([]);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [countryList, setCountryList] = useState<CountryType[]>([]);
  const selectOption: OptionType[] = [
    { value: "name", label: "이름 순" },
    { value: "population", label: "인구 순" },
  ];

  //랜딩페이지 진입 시 데이터 불러오기
  useEffect(() => {
    async function fetch() {
      const countrys = await fetchCountry();
      const countryEdit = countrys.map((data) => {
        return { ...data, isSelected: false };
      });
      setCountryList(countryEdit);
      setCountries(countryEdit);
    }
    fetch();
  }, []);

  //카드 클릭 시
  const handleCountryClick = (country: string) => {
    const cardList = countryList;
    if (cardList) {
      const index = cardList.findIndex((item) => item.name.common === country);
      setCountryList((prev) =>
        produce(prev, (draft: WritableDraft<CountryType>[]) => {
          draft[index].isSelected = !draft[index].isSelected;
        })
      );
    }
  };

  //select 박스 클릭 시
  const handleSelectBoxClick = (option: SingleValue<OptionType>) => {
    const selectList = countries;
    if (option?.value === "name") {
      const sortByName = selectList?.sort(
        (a: CountryType, b: CountryType): number => {
          if (a.name.common > b.name.common) return 1;
          if (a.name.common < b.name.common) return -1;
          else return 0;
        }
      );
      return setCountries([...sortByName]);
    } else if (option?.value === "population") {
      const sortByPop = selectList?.sort(
        (a: CountryType, b: CountryType): number => {
          if (a.population < b.population) return 1;
          if (a.population > b.population) return -1;
          else return 0;
        }
      );
      return setCountries([...sortByPop]);
    }
  };

  //contrylist 가 바뀔 때마다 선택한 나라 filtering
  useEffect(() => {
    const selectedCountry: CountryType[] = [];
    const allCountry: CountryType[] = [];
    countryList?.forEach((country) => {
      if (country.isSelected) selectedCountry.push(country);
      else allCountry.push(country);
    });

    setSelectedCountry(selectedCountry);
  }, [countryList]);

  return (
    <div className="grid place-items-center w-full">
      <div className="grid place-items-center">
        <p className="text-2xl py-11 font-bold">Favorite country</p>
        <CountryList
          countryList={selectedCountry}
          onClick={handleCountryClick}
        />
      </div>
      <div className="grid place-items-center">
        <div className="relative py-11 w-full">
          <p className=" text-center text-2xl font-bold">Country</p>
          <div className="absolute bottom-3 right-0">
            <ReactSelect
              options={selectOption}
              onChange={handleSelectBoxClick}
            />
          </div>
        </div>

        <CountryList countryList={countries} onClick={handleCountryClick} />
      </div>
    </div>
  );
}

export default App;
