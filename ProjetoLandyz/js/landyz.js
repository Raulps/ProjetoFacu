var fd = new FormData();
var xhr = new XMLHttpRequest();
var url = "salva_msg.php";

var formulario = document.getElementById("formulario").addEventListener("submit",function(evento){
    evento.preventDefault();
    enviarInformacoesDosContatos();
});

function enviarInformacoesDosContatos(){
    var nome = document.getElementById('txt-nome').value
    var sobrenome = document.getElementById('txt-sobrenome').value
    var email = document.getElementById('txt-email').value
    var assunto = document.getElementById('txt-assunto').value
    var msg = document.getElementById('txt-msg').value
    if(nome.length == 0 || sobrenome.length == 0 || email.length == 0 || assunto.length == 0 || msg.length == 0){
        swal({icon:"error",title:"Preencha todos os campos"})
    }else{
        fd.append('nome',nome);
        fd.append('sobrenome',sobrenome);
        fd.append('email', email);
        fd.append('assunto',assunto);
        fd.append('msg',msg);
        xhr.open("POST",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(xhr.responseText == "success"){
                    swal({ icon: "success", title: "A sua solicitação foi enviada com sucesso" }).then(function(){
                        window.location.reload()
                    })
                }else{
                    swal({icon:"error",title:"Houve algum erro incomum"});
                }
            }
        }
        xhr.send(fd)
        
    }
}