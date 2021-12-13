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