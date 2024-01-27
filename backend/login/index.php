<?php

include("../__config__/config.php");

try {
    $username = $_POST['username'];
    $password = $_POST["password"];
    $query = $connection->prepare("SELECT * FROM users where username=:username");
    $query->execute(array("username" => $username));
    $result = $query->fetch(PDO::FETCH_ASSOC);

    if (is_array($result)) {
        if (password_verify($password, $result["password"])) {
            $user = $result;
            unset($user["password"]);
            echo json_encode((array("message" => "User find successfully.", "success" => true, "user" => $user)));
        } else {
            echo json_encode((array("message" => "Wrong password", "success" => false, "user" => null)));
        }
    } else {
        echo json_encode((array("message" => "User cannot be found.", "success" => false, "user" => null)));
    }
} catch (PDOException $e) {
    echo json_encode((array("message" => "User cannot be found. " + $e->getMessage(), "success" => false)));
    die();
}