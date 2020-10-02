// 1 day
/*
Получим со страницы необходимые элементы
Реализуем меню категориями и подкатегориями
Напишем название категории в headere в подкатегориями
Напишем функции для генерации header, footer, menu
*/
import { getData } from "./getData.js";
import generateSubMenu from "./generateSubMenu.js";

// 1 вариант export
export const catalogMenu = () => {
  const updateHTML = generateSubMenu();
  const btnBurger = document.querySelector(".btn-burger");
  const catalog = document.querySelector(".catalog");
  const btnClose = document.querySelector(".btn-close");
  const subCatalog = document.querySelector(".subcatalog");
  const subCatalogHeader = document.querySelector(".subcatalog-header");
  const btnReturn = document.querySelector(".btn-return");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.insertAdjacentElement("beforeend", overlay);

  const openMenu = () => {
    catalog.classList.add("open");
    overlay.classList.add("active");
  };

  const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove("open");
    overlay.classList.remove("active");
  };

  const openSubMenu = (event) => {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest(".catalog-list__item");
    console.log();
    if (itemList) {
      getData.subcatalog(target.innerHTML, (data) => {
        updateHTML(target.innerHTML, data);
        subCatalog.classList.add("subopen");
      });
    }
  };

  const closeSubMenu = () => {
    subCatalog.classList.remove("subopen");
  };

  btnBurger.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  catalog.addEventListener("click", openSubMenu);
  // btnReturn.addEventListener("click", closeSubMenu);
};
