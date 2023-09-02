var shoppingList = [];
var storageShoppingList = localStorage.getItem('shoppingList');
if (storageShoppingList) {
    shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
}

function GetShoppingList() {
    return shoppingList;
}

function GetShoppingListItem(id) {
    return shoppingList.findIndex((obj => obj.id == id));
}

function AddShoppingListItem(id, name, price, quantity) {
    shoppingList.push({ 
        id: id,
        name: name,
        price: parseFloat(price),
        quantity: quantity,
        total: parseFloat(price)
     });
    UpdateShoppingList();
}

function UpdateShoppingListItem(id, quantity) {
    var itemIndex = GetShoppingListItem(id);
    if (itemIndex > -1) {
        shoppingList[itemIndex].quantity = parseInt(quantity);
        shoppingList[itemIndex].total = shoppingList[itemIndex].quantity * shoppingList[itemIndex].price;
        UpdateShoppingList();
    }
}

function RemoveShoppingListItem(id) {
    const itemIndex = shoppingList.findIndex((obj) => obj.id === id);

    if (itemIndex > -1) {
        shoppingList.splice(itemIndex, 1);
        UpdateShoppingList();
        return true;
    }
    return false;
}

function UpdateShoppingList(){
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function GetTotal()
{
    var total = 0.0;
    shoppingList.forEach(element => {
        total += element.total;
      });
    
    return total;
}

function ClearShoppingList()
{
    shoppingList = [];
    UpdateShoppingList();
}