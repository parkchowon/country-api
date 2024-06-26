export type CountryType = {
  altSpellings: string[];
  area: number;
  capital: string[] | [];
  capitalInfo: {
    latlng: string[];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: object;
  continents: string[];
  currencies: {
    XPF: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    fra: string;
  };
  latlng: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: {
      fra: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    ara: {
      common: string;
      official: string;
    };
    ces: {
      common: string;
      official: string;
    };
    cym: {
      common: string;
      official: string;
    };
    deu: {
      common: string;
      official: string;
    };
    est: {
      common: string;
      official: string;
    };
    fin: {
      common: string;
      official: string;
    };
    fra: {
      common: string;
      official: string;
    };
    hrv: {
      common: string;
      official: string;
    };
    hun: {
      common: string;
      official: string;
    };
    ita: {
      common: string;
      official: string;
    };
    jpn: {
      common: string;
      official: string;
    };
    kor: {
      common: string;
      official: string;
    };
    nld: {
      common: string;
      official: string;
    };
    per: {
      common: string;
      official: string;
    };
    pol: {
      common: string;
      official: string;
    };
    por: {
      common: string;
      official: string;
    };
    rus: {
      common: string;
      official: string;
    };
    slk: {
      common: string;
      official: string;
    };
    spa: {
      common: string;
      official: string;
    };
    srp: {
      common: string;
      official: string;
    };
    swe: {
      common: string;
      official: string;
    };
    tur: {
      common: string;
      official: string;
    };
    urd: {
      common: string;
      official: string;
    };
    zho: {
      common: string;
      official: string;
    };
  };
  unMember: boolean;
  isSelected: boolean;
};
