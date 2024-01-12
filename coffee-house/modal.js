const tab = document.querySelector(".tab");
const tabsMenu = document.querySelector("#tabs-menu");
const tabs = Array.from(tabsMenu.querySelectorAll(".tab"));

tabsMenu.children.addEventListener("click", switchTab);

function switchTab() {
    console.log(tab)
    tab.classList.add("activeTab");
}
