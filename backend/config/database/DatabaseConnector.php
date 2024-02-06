<?php

class DatabaseConnector
{
    private $connection = null;

    public function __construct()
    {
        try {
            $this->connection = new PDO("mysql:hostname=YOUR-HOST;dbname=YOUR-DB-NAME;charset=utf8", "YOUR-USERNAME", "YOUR-PASSWORD");
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            $response = array("message" => "Database connection failed", "success" => false, "error" => "Database connection failed. Get contact with the admins.");
            echo json_encode($response);
            die();
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }

    private function checkUserCredentials(string $username, string $password)
    {
        try {
            $query = $this->connection->prepare("SELECT password FROM users where username=:username");
            $query->execute(array("username" => $username));
            $result = $query->fetch();

            if (!is_array($result)) {
                return false;
            }

            return password_verify($password, $result["password"]);

        } catch (Exception $e) {
            return false;
        }
    }

    public function getUser(string $username, string $password)
    {
        $response = array(
            "message" => "",
            "success" => false,
            "user" => null
        );

        if (!$this->checkUserCredentials($username, $password)) {
            $response["message"] = "Wrong Credentials";
            return $response;
        }

        try {
            $query = $this->connection->prepare("SELECT * FROM users where username=:username");
            $query->execute(array("username" => $username));
            $result = $query->fetch();

            if (!is_array($result)) {
                $response["message"] = "Wrong Credentials";
                return $response;
            }

            $user = new User(
                $result["firstName"],
                $result["lastName"],
                $result["username"],
                $result["email"],
                $result["birthDate"],
            );

            $response["message"] = "User found.";
            $response["success"] = true;
            $response["user"] = $user->toAssocArray();
            return $response;

        } catch (Exception $e) {
            $response["message"] = "Database connection failed.";
            return $response;
        }
    }

    public function registerUser(User $user, string $password)
    {
        $response = array("message" => "User cannot be added", "success" => false);

        try {
            $query = $this->connection->prepare("
                INSERT INTO users (firstName, lastName, username, email, password, birthdate)
                VALUES (:firstName, :lastName, :username, :email, :password, :birthdate)
            ");

            $query->execute(
                array(
                    "firstName" => $user->getFirstName(),
                    "lastName" => $user->getLastName(),
                    "username" => $user->getUsername(),
                    "email" => $user->getEmail(),
                    "password" => password_hash($password, PASSWORD_DEFAULT),
                    "birthdate" => $user->getBirthDate()
                )
            );

            if ($query->rowCount() > 0) {
                $response["message"] = "User added successfully.";
                $response["success"] = true;
            }
        } finally {
            echo json_encode($response);
        }
    }
}