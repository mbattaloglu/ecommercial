<?php

include("../__config__/config.php");

try {
    $id = @$_GET['id'];
    $query = $connection->prepare("SELECT * FROM categories where id=:id");
    $query->execute(array("id" => $id));
    $result = $query->fetchAll();

    if ($query->rowCount() > 0) {
        echo json_encode((array("message" => "Category find successfully.", "success" => true, "user" => $result[0])));
    } else {
        echo json_encode((array("message" => "Category cannot be found.", "success" => false, "user" => null)));
    }
} catch (PDOException $e) {
    echo "" . $e->getMessage();
    echo json_encode((array("message" => "Category cannot be found. " + $e->getMessage(), "success" => false)));
    die();
}