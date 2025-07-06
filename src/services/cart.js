//which actions my cart can perform?

//USE CASES (one function each)
//->add item
//->delete item
//->remove one item
//->evaluate total cost

//add item logic
async function addItem(userCart, item){
    userCart.push(item);
}

//evaluate total cost
async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n🎁 TOTAL: ${result}`);
}

//delete item
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

//remove one item - 1 less item
async function removeItem(userCart, item){
    
    //find item index
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log("item encontrado no index:");
    console.log(indexFound);

    //in case you don't find the item
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    //item > 1 remove 1 unit
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    };

    //item = 1 delete item from cart
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

//display cart itens to screen
async function displayCart(userCart){
    console.log("\nShopee Cart List:\n");
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}