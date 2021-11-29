<?php
    include_once('conexao.php');
    $nome = mysqli_real_escape_string($conexao, $_POST['name']);
    $email = mysqli_real_escape_string($conexao, $_POST['email']);
    $senha = mysqli_real_escape_string($conexao, $_POST['password']);

    $queryInserirDados = "INSERT INTO `cadastro`(`name`,`email`,`password`) VALUES ('$nome','$email','$senha')";
    $resultado_cadastro = mysqli_query($conexao, $queryInserirDados) or die(mysqli_error($conexao));
    echo "success";

    $sql = "select count(*) as total from email where email = '$email'";
    $row = mysqli_fetch_assoc($result);

    if ($row['total'] == 1) {
        $_SESSION['email_existe'] = true;
        header('Location: login.html');
        exit;
    }
?>