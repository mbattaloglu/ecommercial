<?php

require "../../config/config.php";

$db = new DatabaseConnector();

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$birthDate = $_POST["birthDate"];

$user = new User(
    $firstName,
    $lastName,
    $username,
    $email,
    $birthDate
);

$db->registerUser($user, $password);