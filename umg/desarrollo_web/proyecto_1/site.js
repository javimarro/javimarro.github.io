const navInicioId = 'nav-inicio';
const navCarritoId = 'nav-carrito';
var language = 'es-GT';
var currentCurrency = 'GTQ';
var menuItems = [
    {
        Id: navInicioId,
        Name: 'Inicio',
        Link: 'inicio.html'
    },
    {
        Id: navCarritoId,
        Name: 'Carrito de Compras',
        Link: 'carrito_de_compras.html'
    }
];

var navBar =
    '<nav class="navbar navbar-inverse navbar-fixed-top">' +
    '<div class="container-fluid">' +
    //Brand and toggle get grouped for better mobile display -->
    '<div class="navbar-header">' +
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
    '<span class="sr-only">Toggle navigation</span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '</button>' +
    '<a class="navbar-brand" href="#">UMG</a>' +
    '</div>' +
    //Collect the nav links, forms, and other content for toggling -->
    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
    '<ul class="nav navbar-nav">';

var i;
for (i = 0; i < menuItems.length; i++) {
    navBar += '<li id="' + menuItems[i].Id + '"><a href="' + menuItems[i].Link + '">' + menuItems[i].Name + '</a></li>';
}

navBar +=
    '</ul>' +
    '</div>' + //.navbar-collapse
    '</div>' + //.container-fluid
    '</nav>';

$('body').prepend(navBar);

$('body').append(
    '<footer>' +
    '<nav class="navbar navbar-inverse navbar-fixed-bottom">' +
    '<a class="navbar-brand" href="#">2023</a>' +
    '</nav>' +
    '</footer>'
);

function setActiveNav(navId) {
    $('#' + navId).addClass('active');
}

function GetCurrencyToLocalString(currency) {
    return currency.toLocaleString(language, { style: 'currency', currency: currentCurrency });
}