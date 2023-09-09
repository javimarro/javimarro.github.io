<?php

function start_session()
{
    if(session_status() == PHP_SESSION_NONE)
    {
        session_start();
    }
}

function validate_role_redirect_view(string $spectedRole)
{
    start_session();
    if($spectedRole != $_SESSION['role'])
    {
        redirect_to_role_view();
    }
}

function redirect_to_role_view()
{
    header("Location: ../" . $_SESSION["role"] . "/inicio.php");
}