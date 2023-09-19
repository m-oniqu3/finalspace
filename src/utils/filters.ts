import { Character, Episode, Location } from "@/types";

export function filterCharacters(character: Character, query: string) {
  return (
    character.name?.toLowerCase().includes(query.toLowerCase()) ||
    character.species?.toLowerCase().includes(query.toLowerCase()) ||
    character.origin?.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterEpisodes(ep: Episode, query: string) {
  return ep.name.toLowerCase().includes(query.toLowerCase());
}

export function filterLocations(location: Location, query: string) {
  return (
    location.name.toLowerCase().includes(query.toLowerCase()) ||
    location.type.toLowerCase().includes(query.toLowerCase())
  );
}
