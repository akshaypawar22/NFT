<?php

$firstName = $_POST['firstName'];
$middleName = $_POST['middleName'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$ConfirmPassword = $_POST['ConfirmPassword'];

//Database Connection
$conn = new mysqli('localhost:3307', 'root', '', 'db_form');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into myform(firstName, middleName, lastName, Email, Password, ConfirmPassword) values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstName, $middleName, $lastName, $Email, $Password, $ConfirmPassword);
    $stmt->execute();
    echo "Registration Successfully...";
    $stmt->close();
    $conn->close();
}
