# 🛒 Shopee Cart Simulator

A simple Node.js simulation of the Shopee shopping cart. This project allows you to add, remove, delete, and display items in a virtual cart, with automatic subtotal and total calculations — all through the terminal.

## 📂 Project Structure

```
src/
├── index.js             # Main logic to simulate cart operations
└── services/
    ├── cart.js          # Cart logic: add/remove/delete/display items, calculate total
    └── item.js          # Item factory: create items with name, price, quantity, and subtotal
```

## 🚀 Features

* ✅ Add items to cart
* 🗑️ Remove a single unit or delete an item entirely
* 💰 Automatically calculate subtotals and total cost
* 🧾 Display the current cart content in the terminal
* ⚙️ Modular architecture for easy maintenance and scalability

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/)
* JavaScript (ES Modules)
* No external dependencies (100% native)

## 💻 Getting Started

### Prerequisites

* You need [Node.js](https://nodejs.org/) installed on your machine (version 14+ recommended)

### Installation

```bash
git clone https://github.com/your-username/shopee-cart-simulator.git
cd shopee-cart-simulator
npm install
```

### Run the Project

```bash
node src/index.js
```

### Output Example

```bash
🛒 Welcome to your Shopee Cart! 🛒

item encontrado no index:
1

Shopee Cart List:

1. hotwheels ferrari - R$ 20.99 | 1x | Subtotal 20.99

Shopee Cart TOTAL IS:

🎁 TOTAL: 20.99
```

## 🧩 How It Works

* `createItem(name, price, quantity)` creates a new product.
* `addItem(cart, item)` adds a new item to the cart.
* `removeItem(cart, item)` removes **one unit** of a specific item (or deletes it if quantity becomes 0).
* `deleteItem(cart, itemName)` deletes **all quantities** of a specific item from the cart.
* `displayCart(cart)` prints all current items in the cart with full details.
* `calculateTotal(cart)` shows the total cost of the cart.

## 🌱 Future Improvements

* Add support for discounts and promo codes
* Wishlist management
* Persist cart using a database or local JSON file
* Create a command-line interface (CLI) menu with inquirer

## 📝 License

MIT — use it freely for learning or extending.

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)

---
