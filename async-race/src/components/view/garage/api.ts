const url = "http://127.0.0.1:3000";

const garageEndpoint = `${url}/garage`;

async function fetchGarageData() {
  try {
    const response = await fetch(garageEndpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch garage data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching garage data:", error);
    throw error;
  }
}

export default fetchGarageData;
