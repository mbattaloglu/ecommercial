<?php

class User
{
    private string $firstName;
    private string $lastName;
    private string $username;
    private string $email;
    private string $birthDate;

    public function __construct(string $firstName, string $lastName, string $username, string $email, string $birthDate)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->username = $username;
        $this->email = $email;
        $this->birthDate = $birthDate;
    }

    public function getName()
    {
        return $this->firstName . " " . $this->lastName;
    }

    public function getFirstName()
    {
        return $this->firstName;
    }

    public function getLastName()
    {
        return $this->lastName;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getBirthDate()
    {
        return $this->birthDate;
    }

    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function setBirthDate($birthDate)
    {
        $this->birthDate = $birthDate;
    }

    public function toAssocArray()
    {
        return
            array(
                "fistName" => $this->getFirstName(),
                "lastName" => $this->getLastName(),
                "username" => $this->getUsername(),
                "email" => $this->getEmail(),
                "birthDate" => $this->getBirthDate(),
            );
    }
}