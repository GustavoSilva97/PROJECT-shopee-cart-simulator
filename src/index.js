import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("🛒 Welcome to your Shopee Cart! 🛒");

//creating two itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);


//add two itens from cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//delete item2 from cart
await cartService.removeItem(myCart, item2);

cartService.displayCart(myCart);

//delete two itens from cart
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);