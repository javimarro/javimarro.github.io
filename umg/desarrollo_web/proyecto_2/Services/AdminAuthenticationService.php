<?php
require_once('GeneralService.php');
require_once('../Data/DatabaseConnection.php');
require_once('AuthenticationService.php');
start_session();

function login(string $userName, string $password)
{
    $identityuser = validate_user($userName, $password);
    validate_role_view();
    $_SESSION['username'] = $identityuser["UserName"];
}