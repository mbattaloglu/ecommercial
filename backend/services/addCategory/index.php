<?php

require "../../config/config.php";

try {
    $categoryName = $_POST["categoryName"];
    $query = $connection->prepare("
        INSERT INTO categories (category_name)
        VALUES (:category_name)
    ");
    $query->execute(
        array(
            "category_name" => $categoryName,
        )
    );
    if ($query->rowCount() > 0) {
        echo json_encode((array("message" => "Category added successfully.", "success" => true)));
    } else {
        echo json_encode((array("message" => "Category cannot be added.", "success" => false)));
    }

} catch (PDOException $e) {
    echo "" . $e->getMessage();
    echo json_encode((array("message" => "Category cannot be added. " + $e->getMessage(), "success" => false)));
    die();
}