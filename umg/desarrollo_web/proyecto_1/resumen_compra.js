setActiveNav(navCarritoId);

$(document).ready(function(){
    LoadShoppingListItems();
});

function LoadShoppingListItems(){
  var shoppingListItems = GetShoppingList();
  shoppingListItems.forEach(element => {
    AddItemHtml(element.id, 
      element.name,
      element.price,
      element.quantity);
  });
  SetTotal();
}

function Generar()
{  
    var shoppingListItems = GetShoppingList();
    if(!shoppingListItems || shoppingListItems.length === 0)
    {
      alert('Agrega artículos a tu carrito para confirmar tu compra.');
    }
    else
    {      
      alert('Se ha generado tu compra!');
      ClearShoppingList();
      window.location.href = "inicio.html";
    }
}