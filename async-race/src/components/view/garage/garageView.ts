import "./garageView.css";
import { dataOfCars } from "./api";
import createImageCar from "../../../utils";

let countOfCars: number;

const createControlPanel = () => {
  const controlPanel = `<div class="carsCreate">
    <input type="text" />
    <input type="color" name="" id="" />
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

interface ICar {
  name: string;
  color: string;
  id: number;
}

const configureOneCar = (name: string, color: string) => {
  return `<div class="edit-car">
    <button class="button btn-select-car">select</button><button class="button btn-remove-car">remove</button><span class='nameCar'>${name}</span>
  </div>
  <div class="control-car">
    <button class="button btn-start-engine">A</button>
    <button class="button btn-stop-engine">B</button>
    ${createImageCar(color)}
    <img class="flag" src="../img/flag.png" alt="flag" width="35px" height="35px"/>
  </div>`;
};

const viewCarOnGarage = (data: ICar[]) => {
  const carsContainer = document.createElement("div");
  carsContainer.classList.toggle("cars-container");
  for (let i = 0; i < data.length; i += 1) {
    const car = document.createElement("div");
    car.classList.toggle("car");
    car.innerHTML = configureOneCar(data[i].name, data[i].color);
    carsContainer.append(car);
  }
  document.body.append(carsContainer);
};

createControlPanel();
dataOfCars
  .then((data) => {
    countOfCars = data.length;
    createGarageView(countOfCars);
    viewCarOnGarage(data);
  })
  .catch(() => createGarageView(404));
