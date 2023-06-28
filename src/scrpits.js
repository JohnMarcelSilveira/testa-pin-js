function checarPin(num){
    const pinSenha = 87;
    let numero = num;
    while(numero != pinSenha){
        if(numero < pinSenha){
            if(numero < pinSenha / 2){
                alert("Numero inválido, numero muito menor \nDigite Novamente");
                break;
            } else {
                alert("Numero Inválido, mas não esta muito longe do numero correto\nDigite Novamente");
                break;
            }
        }

        if(numero > pinSenha){
            if(numero > pinSenha * 2){
                alert("Numero inválido, numero muito maior\nDigite Novamente");
                break;
            } else{
                alert("Numero Inválido, mas não esta muito longe do numero correto\nDigite Novamente");
                break;
            }
        
        } 
    }
    if(numero == pinSenha){
        alert("Parabéns você acertou o n° do PIN " + numero);
    } 
         
}

const botao = document.querySelector("#button");
const input = document.querySelector("#numeroInput");

botao.addEventListener("click", function() {
    let numeroUsuario = input.value;
    checarPin(numeroUsuario);
  });



