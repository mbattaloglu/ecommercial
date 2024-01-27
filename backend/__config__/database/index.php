<?php
//Connection to Database
header("content-type: text/html; charset=utf-8");

try {
    $connection = new PDO("mysql:hostname=localhost;dbname=ecom;charset=utf8", "admin", "12345");
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "" . $e->getMessage();
    die();
}