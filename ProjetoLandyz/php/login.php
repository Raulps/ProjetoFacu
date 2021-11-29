<?php
    session_start();
    include_once('conexao.php');

    $email_login = mysqli_real_escape_string($conexao, $_POST['email_login']);
    $senha_login = mysqli_real_escape_string($conexao, $_POST['senha_login']);

    $queryInserirDados = "INSERT INTO `login`(`email`,`senha`) VALUES ('$email','$senha')";
    $resultado_login = mysqli_query($conexao, $queryInserirDados) or die(mysqli_error($conexao));
    echo "success";
?>