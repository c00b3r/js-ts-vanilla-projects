import { ICar } from "../../interface";
import { deleteCarAPI, fetchGarageData } from "./api";
import { updateCarView } from "./garageView";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.body;

  container.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("btn-remove-car")) {
      const buttonDeleteCar = target;
      const idString: string | null = buttonDeleteCar.getAttribute("id");
      if (idString !== null) {
        const id: number = parseInt(idString, 10);
        try {
          await deleteCarAPI(id);
          const updatedData: ICar[] = await fetchGarageData();
          updateCarView(updatedData);
        } catch (error) {
          console.error(error);
        }
      }
    }
  });
});
