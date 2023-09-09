<?php
require_once('GeneralService.php');
require_once('../Data/DatabaseConnection.php');
require_once('AuthenticationService.php');
start_session();

function login(string $userName, string $password)
{
    $identityuser = validate_user($userName, $password);
    validate_role_view();
    
    $mysqli = create_bank_db_client();

    $query = "call GetUser(?)";
    $paramTypes = 'i';
    $params = [$identityuser["Id"]];
    $user = execute_sp($mysqli, $query, $paramTypes, $params, true, false);
    
    $_SESSION['userid'] = $user["Id"];
    $_SESSION['username'] = $identityuser["UserName"];

    close_client_connection($mysqli);
}