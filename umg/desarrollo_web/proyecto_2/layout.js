var navBar = 
'<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">' +
    '<a class="navbar-brand" href="inicio.php">Proyecto 2</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
        '<ul class="navbar-nav mr-auto">'
;

var i;
for(i = 0; i < menuItems.length; i++){
    navBar += '<li id="' + menuItems[i].Id + '" class="nav-item"><a class="nav-link" href="' + menuItems[i].Link + '">' + menuItems[i].Name + '</a></li>';
}

navBar +=
        '</ul>' +
        '<span class="navbar-text" id="userNameNavBar"></span>' +
        ''
    '</div>' +
'</nav>';

$('body').prepend(navBar);

$('body').append(
    '<footer>' +
        '<nav class="navbar fixed-bottom navbar-dark bg-dark">' +
            '<div class="navbar-brand"><i class="bi bi-c-circle"></i> 2023</div>' +
        '</nav>' +
    '</footer>'
);

function setActiveNav(navId){
    $('#' + navId).addClass('active');
}

$.ajax({
    url: '../services/get_session_data.php',
    method: 'POST',
    dataType: 'json',
    success: function(data) {
        $("#userNameNavBar").html(data.username + '<a href="../services/logout.php"><i class="bi bi-box-arrow-in-right pl-2"></i></a>');
    }
});