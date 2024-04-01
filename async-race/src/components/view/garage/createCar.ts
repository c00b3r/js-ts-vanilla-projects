// import configureOneCar from "./garageView";
import { createCar } from "./api";
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
  buttonCreateCar.addEventListener("click", () => {
    // eslint-disable-next-line prettier/prettier
    const valueName = carNameInput.value;
    const valueColor = carColorInput.value;
    createCar({ name: valueName, color: valueColor }).then(() =>
      // eslint-disable-next-line prettier/prettier
      updateCarView()
    );
  });
}
