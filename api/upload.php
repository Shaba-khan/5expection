<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);


if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];

      $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
      
      $extensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$extensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
   
      if(empty($errors)==true){
      	$name="/api/img/".$file_name;
         move_uploaded_file($file_tmp,$_SERVER['DOCUMENT_ROOT'].$name);
         // echo "Success";
         print_r($name);
      }else{
         print_r($errors);
      }
   }
// move_uploaded_file($_FILES["image"]["tmp_name"], "img/" . $_FILES["image"]["name"]);

?>