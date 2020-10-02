import { getData } from "./getData.js";

const cartList = [
  {
    id: "idd100",
    count: 4,
  },
  {
    id: "idd003",
    count: 2,
  },
  {
    id: "idd011",
    count: 1,
  },
];

export const loadData = () => {
  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => console.log(data));
  }

  if (location.pathname.includes("cart")) {
    // Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
    getData.cart(cartList, (data) => console.log(data));
  }

  // getData.catalog((data) => console.log(data));
  // getData.subcatalog("Мебель", (data) => console.log(data));
};
