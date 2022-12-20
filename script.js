let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

//Aqui pego o valor minimo do campo
sizePassword.innerHTML = sliderElement.value;
//Depois para que quando eu mexo o range do input, o valor do tamanho seja alterado dinamicamente.
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    //Minha variavel de senha vai está vazia;
    let pass = "";
    //Faço um for para que percorra a quantidade de caracteres selcionados e gere a senha;
    //Minha variavel i começa com o valor de 0 e logo após pego o tamanho do charset para que gere a senha com base na quantidade de caracter selecionado.
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        //CharAt para pegar posição, Math.Floor gera um numero inteiro, Math.random para gerar um numero randomico * a quatidade de caracteres selecionado.
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    //Mostra o campo da senha
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
//Função para copiar o codigo.
function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}
