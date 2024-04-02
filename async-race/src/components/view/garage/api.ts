const url = "http://127.0.0.1:3000";

const garageEndpoint = `${url}/garage`;

export const fetchGarageData = async () => {
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
};

const getDataOfCars = async () => {
  try {
    const data = await fetchGarageData();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const dataOfCars = getDataOfCars();

export const createCar = async (body: object) => {
  await fetch(garageEndpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteCarAPI = async (id: number) => {
  await fetch(`${garageEndpoint}/${id}`, {
    method: "DELETE",
  });
};

export const updateCarAPI = async (body: object, id: number) => {
  await fetch(`${garageEndpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
