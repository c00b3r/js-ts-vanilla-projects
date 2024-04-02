import { ICar } from "../../interface";
import { fetchGarageData, updateCarAPI } from "./api";
import { updateCarView } from "./garageView";

const buttonUpdateCar = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  ".btn-update-car"
) as HTMLButtonElement;
const buttonUpdateNameInput = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  ".cars-update-name"
) as HTMLInputElement;
const buttonUpdateColorInput = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  ".cars-update-color"
) as HTMLInputElement;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.body;

  container.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("btn-select-car")) {
      const buttonSelectCar = target;
      const idString: string | null = buttonSelectCar.getAttribute("id");
      console.log("fufel");
      buttonUpdateNameInput.removeAttribute("readonly");
      const updateName = buttonUpdateNameInput.value;
      const updateColor = buttonUpdateColorInput.value;
      if (idString !== null) {
        const id: number = parseInt(idString, 10);
        buttonUpdateCar.addEventListener("click", async () => {
          try {
            console.log(updateName, updateColor);
            await updateCarAPI({ name: updateName, color: updateColor }, id);
            const updatedData: ICar[] = await fetchGarageData();
            updateCarView(updatedData);
          } catch (error) {
            console.error(error);
          }
        });
      }
    }
  });
});
