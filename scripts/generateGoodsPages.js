import { getData } from "./getData.js";

const wishList = ["idd001", "idd002", "idd003"];

const generateGoodsPages = () => {
  const mainHeader = document.querySelector(".main-header");
  const goodsList = document.querySelector(".goods-list");

  const generateCart = (data) => {
    goodsList.textContent = "";

    data.forEach((item) => {
      goodsList.insertAdjacentHTML(
        "afterbegin",
        `
        <li class="goods-list__item">
						<a class="goods-item__link" href="card.html#${item.id}">
							<article class="goods-item">
								<div class="goods-item__img">
									<img
										src="${item.img}"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG"
										alt="${item.name}">
								</div>
								<p class="goods-item__new">Новинка</p>
								<h3 class="goods-item__header">${item.name}</h3>
								<p class="goods-item__description">${item.description}</p>
								<p class="goods-item__price">
									<span class="goods-item__price-value">${item.price}</span>
									<span class="goods-item__currency"> ₽</span>
								</p>
								<button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${item.id}"></button>
							</article>
						</a>
					</li>
      `
      );
    });
  };

  if (location.search) {
    const search = decodeURI(location.search); // decodeURI() - переводит строку в нормальный читальный видл
    const prop = search.split("=")[0].substring(1); // split() - разделяет строку по определленному знаку на массив
    const value = search.split("=")[1]; // substring() -  удаляет символы с определенного места

    if (prop === "s") {
      getData.search(value, generateCart);
      mainHeader.textContent = `Поиск: ${value}`;
    } else if (prop === "wishlist") {
      getData.wishList(wishList, generateCart);
      mainHeader.textContent = `Список желаний:`;
    } else if (prop === "cat" || prop === "subcat") {
      getData.category(prop, value, generateCart);
      mainHeader.textContent = `${value}`;
    }
  }
};

export default generateGoodsPages;
