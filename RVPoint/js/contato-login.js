function enviarInformacoesDosContatos() { //função de enviar a mensagem da página contato
    var nome = document.getElementById('txt-nome').value
    var sobrenome = document.getElementById('txt-sobrenome').value
    var email = document.getElementById('txt-email').value
    var assunto = document.getElementById('txt-assunto').value
    var msg = document.getElementById('txt-msg').value

    //Condição para verificar se os campos estão vazios
    if(nome.length == 0 || sobrenome.length == 0 || email.lenght == 0 || assunto.lenght == 0 || msg.lenght == 0) {
        swal({
            icon:"warning", //icone de alerta
            title:"Preencha todos os campos" //texto junto ao icone
        })
    }else { //Condição que confirmará se a mensagem foi enviada com sucesso ou não
        $.post('../php/salvamsg.php', {
            nome : nome,
            sobrenome : sobrenome,
            email : email,
            assunto : assunto,
            msg : msg
        },function(resposta){
            if(resposta == "success") { //caso seja sucesso
                swal({title:"Sua mensagem foi enviada com êxito", icon:"success"}).then(() => window.location.reload());
            }else { //caso ocorra algum erro
                swal({title:"Houve algum erro incomum", icon:"error"});
            }
        })
    }
}

function Cadastrar() {
    var nome = document.getElementById('tx-nome').value
    var email = document.getElementById('tx-email').value
    var senha = document.getElementById('tx-senha').value
    if (nome.length == 0 || email.length == 0 || senha.length == 0) {
        swal({ icon: "warning", title: "Preencha todos os campos" })
    } else {
        $.post('../php/cadastro.php',{
            nome : nome,
            email : email,
            senha : senha
        },function(resposta){
            if(resposta == "success"){
                swal({title:"Cadastro efetuado com sucesso",icon:"success"}).then(() => window.location.reload());
            }else if(resposta == "existente"){
                swal({ title: "Um usuario com o mesmo email ja existe", icon: "info" })
            }else{
                swal({ title: "Houve um erro incomum", icon: "error" })
            }
        })
    }
}

function login(){
    var email = document.getElementById('txt-email').value
    var senha = document.getElementById('txt-senha').value
    if (email.length == 0 || senha.length == 0){
        swal({ icon: "warning", title: "Preencha todos os campos" })
    } else {
        $.post('../php/login.php', {
            email : email,
            senha : senha
        },function(resposta){
            if(resposta == "success"){
                swal({title:"Login efetuado com sucesso", icon:"success"}).then(() => window.location.href='compra.html');
            }else if(resposta == 'usuario_ou_senha_incorreto'){
                swal({title: "Usuario ou Senha incorreto", icon:"error" })
            }
        })
    }
}