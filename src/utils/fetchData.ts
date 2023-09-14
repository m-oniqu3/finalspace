import { EndpointName, EndpointType } from "@/types";

export async function fetchData<T extends EndpointType>(
  type: EndpointName
): Promise<T[]> {
  const res = await fetch(`https://finalspaceapi.com/api/v0/${type}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export async function fetchDataById<T extends EndpointType>(
  endpointName: EndpointName,
  id: number
): Promise<T> {
  const response = await fetch(
    `https://finalspaceapi.com/api/v0/${endpointName}/${id}`
  );

  const characters = await response.json();
  return characters;
}
