import { CartItem } from "./CartItem";

export const Purchases = ({ purchases, removeOrder }) => {
  return purchases.map((purchase) => <CartItem key={purchases.id} purchase={purchase} removeOrder={removeOrder} />);
};
