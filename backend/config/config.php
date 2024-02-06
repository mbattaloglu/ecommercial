<?php

require "../../config/cors/cors.php";
require "../../config/database/DatabaseConnector.php";
require "../../classes/User.php";

corsHandler();
header('Content-type: application/json');


date_default_timezone_set('Europe/Istanbul');

//Any JSON Body
$data = json_decode(file_get_contents("php://input"), true);
print_r($data);
