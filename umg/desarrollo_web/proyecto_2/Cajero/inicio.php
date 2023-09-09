<?php
require_once('../Services/CashierAuthenticationService.php');
require_once('../Services/CashierService.php');

if (!is_authenticated())
{
    authenticate_user();
}

login($_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW']);

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Cajero</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="../layout.css">
</head>

<body>
    <div class="container">
        <h1>Cajero</h1>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script type="text/javascript" src="menu.js"></script>
    <script type="text/javascript" src="../layout.js"></script>
    <script type="text/javascript" src="inicio.js"></script>
</body>

</html>