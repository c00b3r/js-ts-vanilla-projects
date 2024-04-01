// import configureOneCar from "./garageView";
import { createCar, fetchGarageData } from "./api";
import { updateCarView } from "./garageView";

const buttonCreateCar = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  ".btn-create-car"
) as HTMLButtonElement;
const carNameInput: HTMLInputElement = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  "#carNameInput"
) as HTMLInputElement;
const carColorInput: HTMLInputElement = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  "#carColorInput"
) as HTMLInputElement;

if (buttonCreateCar) {
  buttonCreateCar.addEventListener("click", async () => {
    const valueName = carNameInput.value;
    const valueColor = carColorInput.value;
    try {
      await createCar({ name: valueName, color: valueColor });
      const updatedData = await fetchGarageData();
      updateCarView(updatedData);
    } catch (error) {
      console.error("Failed to create car:", error);
    }
  });
}
