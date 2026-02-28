var admin = "João";
var senha = "1234";

 //Aqui está dando condição false -> pois a senhas não batem
if(admin === "João" && senha === "123"){ 
    console.log("Seja bem vindo!");
}else{
    console.log("Ususário não encontado.")
}


/*condição1	condição2	Resultado
true	true	✅ true
true	false	❌ false
false	true	❌ false
false	false	❌ false
*/

var idade1 = 18;
var temCarteira = true;
//Aqui está dando condição true-> pois as informações batem
if(idade1 >= 18 && temCarteira === true){
    console.log("Pode dirigir");
}else{
    console.log("Você não possiu CNH. Espere mais um ano!")
}



var idade = 15;

if (typeof idade !== "number" || idade < 0) {
    console.log("Idade inválida");
} else if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}