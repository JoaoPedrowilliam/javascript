var idade = 15;
var temAutorizacao = true;

if( idade == 14 || temAutorizacao){
    console.log("Pode entrar");
}else{
    console.log("Não tem acesso");
}


if((temAutorizacao == true || 20 > 50) && 10 == 10){
    console.log("Acesso liberado");
}

/*| condição1 | condição2 | Resultado |
| --------- | --------- | --------- |
|   true      true       ✅ true    |
|   true      false      ✅ true    |
|   false     true        ✅ true    |
|   false     false      ❌ false   |
*/
