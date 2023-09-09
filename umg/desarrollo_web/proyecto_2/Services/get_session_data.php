<?php
require_once('GeneralService.php');
require_once('AuthenticationService.php');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400); // Bad Request
    die('Access denied.');
}

start_session();

$data = array(
    'identityuserid' => $_SESSION['identityuserid'],
    'role' => $_SESSION['role'],
    'username' => $_SESSION['username'],
    'cashierid' => isset($_SESSION['cashierid']) ? $_SESSION['cashierid'] : null,
    'userid' => isset($_SESSION['userid']) ? $_SESSION['userid'] : null
);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
