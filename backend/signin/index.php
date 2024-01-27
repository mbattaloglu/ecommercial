<?php

include("../__config__/config.php");

try {
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $birthDate = $_POST["birthDate"];

    $query = $connection->prepare("
        INSERT INTO users (name, surname, username, email, password, birthdate)
        VALUES (:name, :surname, :username, :email, :password, :birthdate)
    ");
    $query->execute(
        array(
            "name" => $name,
            "surname" => $surname,
            "username" => $username,
            "email" => $email,
            "password" => password_hash($password, PASSWORD_DEFAULT),
            "birthdate" => $birthDate
        )
    );
    if ($query->rowCount() > 0) {
        echo json_encode((array("message" => "User added successfully.", "success" => true)));
    } else {
        echo json_encode((array("message" => "User cannot be added.", "success" => false)));
    }

} catch (PDOException $e) {
    echo "" . $e->getMessage();
    echo json_encode((array("message" => "User cannot be added. " + $e->getMessage(), "success" => false)));
    die();
}