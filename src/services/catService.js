export const BASE_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

export default {
  async getCart() {
    const response = await fetch(BASE_URL, {
      headers: {
        "x-api-key":
          "live_v3p7MS5quKaT7E4cQd1uEtobs7VLrLGb9PFJAMZgqlBUERMauTSIQeVfqtgPzstp",
      },
    });
    const data = await response.json();
    return data;
  },
  async getOneCat(id) {
    const response = await fetch("https://api.thecatapi.com/v1/images/" + id, {
      headers: {
        "x-api-key":
          "live_v3p7MS5quKaT7E4cQd1uEtobs7VLrLGb9PFJAMZgqlBUERMauTSIQeVfqtgPzstp",
      },
    });
    const data = await response.json();
    return data;
  },
};
