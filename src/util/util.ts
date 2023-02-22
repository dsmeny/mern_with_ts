export const fetcher = async () => {
  const response = await fetch("http://192.168.0.24:3001/api");
  const data = await response.json();
  return data;
};
