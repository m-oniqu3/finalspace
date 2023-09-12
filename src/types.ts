export type EndpointName = "character" | "episode" | "location" | "quote";
export type EndpointType = Character | Episode | Location | Quote;

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  hair: string;
  origin: string;
  abilities: string[];
  alias: string[];
  img_url: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  director: string;
  writer: string;
  characters: string[];
  img_url: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  inhabitants: string[];
  notable_residents: string[];
  img_url: string;
};

export type Quote = {
  id: number;
  quote: string;
  by: string;
  character: string;
  image: string;
};
