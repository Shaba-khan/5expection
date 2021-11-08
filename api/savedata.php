<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST,OPTIONS,PUT');

header("Access-Control-Allow-Headers: X-Requested-With");
include('connection.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if(!empty($_POST['data'])){
	  // print_r($_POST['data']);die('hh');
	$sql = "INSERT INTO Formdata (rawData) VALUES ('".$_POST['data']."')";
		if (mysqli_query($conn, $sql)) {
		      echo "Done";
		} else {
		      echo "error";
		}

}else{
	echo 'error';
}
?>