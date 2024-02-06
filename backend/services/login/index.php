<?php

require "../../config/config.php";

$db = new DatabaseConnector();

$connection = $db->getConnection();

$username = $_POST['username'];
$password = $_POST["password"];

echo json_encode($db->getUser($username, $password));
