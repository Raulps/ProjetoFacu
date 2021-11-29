var fd = new FormData();
var xhr = new XMLHttpRequest();
var url = "cadastro.php";

var form_cadastro = document.getElementById("form_cadastro").addEventListener("submit",function(evento){
    evento.preventDefault();
    enviarInformacoesDoCadastro();
});

function enviarInformacoesDoCadastro(){
    var nome = document.getElementById('tx-nome').value
    var email = document.getElementById('tx-email').value
    var senha = document.getElementById('tx-senha').value
    if(nome.length == 0 ||  email.length == 0 || senha.length == 0){
        swal({icon:"error",title:"Preencha todos os campos"})
    }else{
        fd.append('nome',nome);
        fd.append('email',email);
        fd.append('senha',senha);
        xhr.open("POST",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(xhr.responseText == "success"){
                    swal({ icon: "success", title: "Seu Cadastro foi feito com Sucesso" }).then(function(){
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