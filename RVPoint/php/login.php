<?php
include_once('conexao.php'); //conexão com o BD
$email = $_POST['email'];
$senha = $_POST['senha'];
$queryLogin = mysqli_query($conexao,"SELECT * FROM usuario WHERE email='$email' AND senha='$senha'");
$rowsResultadosLogin = mysqli_num_rows($queryLogin);
if($rowsResultadosLogin <= 0){
    echo "usuario_ou_senha_incorreto";
}else{
    while($usuario = mysqli_fetch_array($queryLogin)){
       setcookie("ID",$usuario['id'],time()+(86400*30),'/');
       echo "success";
    }
}
?>