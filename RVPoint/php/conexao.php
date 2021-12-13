<?php
header("Access-Control-Allow-Origin: *");
$conexao = mysqli_connect("localhost","root","","turismo") or die(mysqli_connect_error($conexao));
?>