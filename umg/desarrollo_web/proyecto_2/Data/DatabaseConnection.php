<?php

function create_db_client(string $dbName): mysqli
{
    $mysqli = new mysqli("localhost", "root", "GejA6hvWgg", $dbName) or die("Error de conexion a " . $dbName . " BD!");
    if ($mysqli->connect_errno) {
        echo "Lo sentimos, este sitio web está experimentando problemas.<br>";
        echo "Error Página: Fallo al conectarse a MySQL debido a:<br>";
        echo "Errno: " . $mysqli->connect_errno . "<br>";
        echo "Error: " . $mysqli->connect_error . "<br>";
        exit;
    }

    return $mysqli;
}

function create_identity_db_client(): mysqli
{
    return create_db_client("identity_db");
}

function create_bank_db_client(): mysqli
{
    return create_db_client("bank_db");
}

function execute_sp(mysqli $mysqli, string $query, string $paramTypes, array $params, bool $expectResult = false, bool $arrayResult = true)
{
    if ($stmt = $mysqli->prepare($query)) {
        $stmt->bind_param($paramTypes, ...$params);

        if (!$stmt->execute()) {
            echo "Error: " . $stmt->error . "\n";
            $stmt->close();
            return null;
        } else if ($expectResult) {
            $result = $stmt->get_result();

            if ($arrayResult) {
                while ($row = $result->fetch_array()) {
                    $rows[] = $row;
                }
                $result->free();
                $stmt->close();

                return $rows;
            } else {
                $object = $result->fetch_assoc();
                $result->free();
                $stmt->close();

                return $object;
            }
        }
    }
}

function close_client_connection(mysqli &$mysqli)
{
    $mysqli->close();
}