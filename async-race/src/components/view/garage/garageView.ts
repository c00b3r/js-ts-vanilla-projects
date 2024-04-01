import "./garageView.css";
import { dataOfCars } from "./api";
import createImageCar from "../../../utils";
import { ICar } from "../../interface";

let countOfCars = 0;

const createControlPanel = () => {
  const controlPanel = `<div class="carsCreate">
    <input type="text" id="carNameInput" />
    <input type="color" id="carColorInput" name="" id="" />
    <button class="button btn-create-car">Create</button>
  </div>
  <div class="carsUpdate">
      <input type="text" readonly="readonly"/>
      <input type="color" name="" id="" />
      <button class="button btn-update-car">Update</button>
    </div>
    <div class="buttons-controller">
      <button class="button btn-to-race">Race</button>
      <button class="button btn-to-reset">Reset</button>
      <button class="button btn-to-generate">Generate Cars</button>
    </div>`;
  const div = document.createElement("div");
  div.classList.toggle("create-container");
  div.innerHTML = controlPanel;
  document.body.append(div);
};

const createGarageView = (countOfCar: number) => {
  const garage = `<h4>Garage (${countOfCar})</h4>`;
  const div = document.createElement("div");
  div.classList.toggle("garage-container");
  div.innerHTML = garage;
  document.body.append(div);
};

const configureOneCar = (name: string, color: string, id: number) => {
  return `<div class="edit-car">
    <button class="button btn-select-car">select</button><button class="button btn-remove-car">remove</button><span class='nameCar'>${name}</span>
  </div>
  <div class="control-car">
    <button class="button btn-start-engine" id="start-${id}">A</button>
    <button class="button btn-stop-engine" id="stop-${id}">B</button>
    ${createImageCar(color)}
    <img class="flag" src="../img/flag.png" alt="flag" width="35px" height="35px"/>
  </div>`;
};

export const viewCarOnGarage = (data: ICar[]) => {
  const carsContainer = document.createElement("div");
  carsContainer.classList.toggle("cars-container");
  for (let i = 0; i < data.length; i += 1) {
    const car = document.createElement("div");
    car.classList.toggle("car");
    car.innerHTML = configureOneCar(data[i].name, data[i].color, data[i].id);
    carsContainer.append(car);
  }
  document.body.append(carsContainer);
};

export const updateCarView = (newDataCars: ICar[]) => {
  const currentCarsContainer = document.querySelector(
    // eslint-disable-next-line prettier/prettier
    ".cars-container"
  ) as HTMLElement;
  const currentGarageContainer = document.querySelector(
    // eslint-disable-next-line prettier/prettier
    ".garage-container"
  ) as HTMLElement;
  currentCarsContainer.remove();
  currentGarageContainer.remove();
  createGarageView(newDataCars.length);
  viewCarOnGarage(newDataCars);
};

dataOfCars
  .then((data) => {
    console.log(data);
    countOfCars = data.length;
    createGarageView(countOfCars);
    viewCarOnGarage(data);
  })
  .catch(() => createGarageView(404));

createControlPanel();

export default configureOneCar;
