const headerView = () => {
  const root = document.createElement("div");
  const header = `
  <header>
    <nav>
        <button class="button btn-to-garage">To garage</button>
        <button class="button btn-to-winners">To winners</button>
    </nav>
  </header>`;
  root.innerHTML = header;
  document.body.appendChild(root);
};
headerView();
