<?php

	
$base=mysqli_connect("localhost","root","","utilisateurs");
$req="SELECT *FROM utilisateurs";
$result = mysqli_query($base, $req);

while( $row = mysqli_fetch_assoc( $result ) ) {
    $json[] = $row;
}
echo json_encode($json);



?>