<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST,OPTIONS,PUT');

header("Access-Control-Allow-Headers: X-Requested-With");
include('connection.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


	  // print_r($_POST['data']);die('hh');
	$sql = "SELECT * FROM Formdata ";
		if ($result=mysqli_query($conn, $sql)) {
		     while($row = mysqli_fetch_array($result)){
		     	print_r($row['rawData']);
		     }
		} else {
		      echo "error";
		}

?>