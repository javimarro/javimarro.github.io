setActiveNav(navInicioId);

$(document).ready(function(){
    GetProductList(function(productList){
        var i;
        var htmlText = '';
    
        for(i = 0; i < productList.length; i++){
            htmlText += 
            '<div class="col-sm-6 col-md-4 col-lg-3">' +
                '<div class="thumbnail">' +
                    '<img src="' + productList[i].Image + '" alt="' + productList[i].Name + '" style="height:300px;">' +
                    '<div class="caption">' +
                        '<h3>' + productList[i].Name + '</h3>' +
                        '<p>' + GetCurrencyToLocalString(productList[i].Price) + '</p>' +
                        //'<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
    
        $('#productList').html(htmlText);
    });
});