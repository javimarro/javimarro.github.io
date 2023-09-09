<?php
require_once('GeneralService.php');

start_session();
session_destroy();

// Send a header to clear the browser's authentication cache
header('HTTP/1.1 401 Unauthorized');
header('WWW-Authenticate: Basic realm="Authentication required"');

header('Location: http://log:out@localhost:8080/umg/proyecto_2/home/inicio.php');
?>
