<?php
error_reporting(0);
@ini_set('display_errors', 0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// $baseurl='https://phpstack-537428-1996109.cloudwaysapps.com/new_code/';
// clint server
$servername = "localhost";
$database = "5exception";
$username = "root";
$password = "";
$baseurl="http://localhost/api/";

// // Create connection
// // AWS server
// $servername = "mysqldb.chqvvsux04jw.us-east-1.rds.amazonaws.com";
// $database = "turnkeyc_cc";
// $username = "turnkeyc_cc";
// $password = "dH{;0x9HIC5+";
// $baseurl="http://turnkeycybersecurityandprivacysolutions.com/";
// phpinfo();
$conn = new mysqli($servername, $username, $password);
// $pdo = new PDO("mysql:host=localhost;dbname=turnkeyc_cc", "turnkeyc_cc", "XQUjXTkfu)lv");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
mysqli_select_db($conn, $database);

?>