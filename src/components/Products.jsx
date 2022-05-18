import { ProductCard } from "./ProductCard";

import nokia from "../img/Nokia.jpg";
import apple from "../img/Apple.jpg";
import red from "../img/Redmi_10Pro.jpg";
import zte from "../img/ZTE.jpg";

const products = [
  {
    id: 1,
    name: "Mobile phone Nokia G10 3/32GB",
    text:
      'Screen (6.1", Apple A14 Bionic / dual main camera: 12 MP + 12 MP, ' +
      "front camera: 12 MP / 64 GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14",
    img: nokia,
    price: 500,
  },
  {
    id: 2,
    name: "Mobile phone Samsung Galaxy M52 5G 6/128GB",
    text:
      'Screen (6.1", Apple A14 Bionic / dual main camera: 12 MP + 12 MP, ' +
      "front camera: 12 MP / 64 GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14",
    img: zte,
    price: 700,
  },
  {
    id: 3,
    name: "Mobile phone Apple iPhone 12 mini 128GB",
    text:
      'Screen (6.1", Apple A14 Bionic / dual main camera: 12 MP + 12 MP, ' +
      "front camera: 12 MP / 64 GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14",
    img: apple,
    price: 1000,
  },
  {
    id: 4,
    name: "Mobile phone Xiaomi Redmi Note 10S 6/128GB Ocean Blue",
    text:
      'Screen (6.1", Apple A14 Bionic / dual main camera: 12 MP + 12 MP, ' +
      "front camera: 12 MP / 64 GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14",
    img: red,
    price: 600,
  },
  {
    id: 5,
    name: "Mobile phone Nokia G15 3/32GB",
    text:
      'Screen (6.1", Apple A14 Bionic / dual main camera: 12 MP + 12 MP, ' +
      "front camera: 12 MP / 64 GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14",
    img: nokia,
    price: 900,
  },
  {
    id: 6,
    name: "Mobile phone Apple iPhone 11 mini 128GB",
    text:
      'Screen (6.1", Apple A14 Bionic / dual main camera: 12 MP + 12 MP, ' +
      "front camera: 12 MP / 64 GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14 super product",
    img: red,
    price: 1600,
  },
];
// console.log(products.map((product) => product.name));

export const Products = ({ onBuy }) => {
  return products.map((product) => <ProductCard key={product.id} product={product} onBuy={onBuy} />);
};
