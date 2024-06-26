import axios from "axios";
import { CountryType } from "../types/country.type";

const API_URL = "https://restcountries.com/v3.1/all";

export const fetchCountry = async (): Promise<CountryType[]> => {
  const response = await axios.get(API_URL);
  const result = response.data;
  return result;
};
