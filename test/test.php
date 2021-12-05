<?php
    $conn = mysqli_connect('localhost','test','test1234','phpsamples');
    
    if ($conn) {
        echo "Connected!";
      } 
    else {
        echo "Connection Failed";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>India is Connected</p>
</body>
</html>