<?php

require "../__config__/cors/cors.php";
require "../__config__/database/index.php";

cors();

date_default_timezone_set('Europe/Istanbul');

$data = json_decode(file_get_contents("php://input"), true);
print_r($data);
