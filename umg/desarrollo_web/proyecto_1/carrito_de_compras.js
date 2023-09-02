setActiveNav(navCarritoId);

$(document).ready(function(){
    LoadShoppingListItems();
    GetProductList(function(productList){
        var i;
        var htmlText = '';
    
        for(i = 0; i < productList.length; i++){
            htmlText += 
            '<div class="col-sm-12 col-md-6 col-lg-6 drag" data-id="' + productList[i].Id + '" data-name="' + productList[i].Name + '" data-price="' + productList[i].Price + '">' +
                '<div class="thumbnail">' +
                    '<img src="' + productList[i].Image + '" alt="' + productList[i].Name + '" style="height:200px;">' +
                    '<div class="caption">' +
                        '<h3>' + productList[i].Name + '</h3>' +
                        '<p>' + GetCurrencyToLocalString(productList[i].Price)  + '<button class="btn btn-primary pull-right" type ="button" onclick="AddItem(' + productList[i].Id + ', \'' + productList[i].Name + '\', ' + productList[i].Price + ')"><span class="glyphicon glyphicon-plus"></span></button></p>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
    
        $('#productList').html(htmlText);
        SetDraggable();
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Extraer el nombre del país
                    var country = data.address.country;
                    $('#NombrePais').html(country);
                })
                .catch(error => {
                    $('#NombrePais').html("Error al obtener la información de geolocalización: " + error);
                });
        });
    }
    else {
        $('#NombrePais').html("Geolocalization not sopported or enabled.");
    }
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