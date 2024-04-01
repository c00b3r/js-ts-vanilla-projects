import "./garageView.css";

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

createControlPanel();
createGarageView(4);
