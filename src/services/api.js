const BASE_URL = "https://picsum.photos/v2/list";

export const getImages = async (page) => {
  const response = await fetch(`${BASE_URL}?page=${page}&limit=10`);

  if (!response.ok) {
    throw new Error("API failed");
  }

  return response.json();
};