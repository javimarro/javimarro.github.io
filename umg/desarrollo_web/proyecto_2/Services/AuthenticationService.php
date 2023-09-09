<?php
require_once('GeneralService.php');
require_once('../Data/DatabaseConnection.php');
start_session();

function authenticate_user()
{
    header('WWW-Authenticate: Basic realm="Authentication required"');
    header("HTTP/1.0 401 Unauthorized");
    print('La autenticación es requerida');
    exit;
}

function validate_authentication()
{
    if (!is_authenticated()) {
        header("Location: inicio.php");
        exit;
    }
}

function is_authenticated() : bool
{
    return isset($_SERVER['PHP_AUTH_USER']);
}

function validate_user(string $userName, string $password)
{
    $mysqli = create_identity_db_client();
    
    $query = "call GetUser(?,?)";
    $paramTypes = 'ss';
    $params = [$userName, $password];
    $identityuser = execute_sp($mysqli, $query, $paramTypes, $params, true, false);
    
    if(!isset($identityuser) || $identityuser === null)
    {
        close_client_connection($mysqli);
        authenticate_user();
    }
    
    $_SESSION['identityuserid'] = $identityuser["Id"];
    $_SESSION['role'] = $identityuser["Role"];
    close_client_connection($mysqli);

    return $identityuser;
}