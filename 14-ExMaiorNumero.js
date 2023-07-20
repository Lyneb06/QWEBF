let n1, n2, n3;
n1 = 0;
n2 = 0;
n3 = 0;
let maiorNumero;

//Esse abaixo foi o que você fez na aula passada

/*if(n1,n2, n3< 30)
{
    console.log ("n1Menor número")
} else if (n1,n2,n3< 50)
{
    console.log ("n2Número intermediario")
}
else (n1,n2,n3>80)
{
    console.log ("n3 Maior número")
}*/



//***Esse abaixo foi o que o professor corrigiu na sala***
//Verificação condicional para descobrir o maior número

if(n1>n2){//Aqui verifica apenas se o n1 é o maior número
    maiorNumero = n1;
}
if(n2>n3){//Aqui verifica apenas se o n2 é o maior número
    maiorNumero = n2;
}
else{
    maiorNumero = n3;
}
console.log(`O Maior Número é: ${maiorNumero}`);


// //Verificação Condicional se os Números são iguais

if(n1 == n2 && n1 == n3){
     console.log("Os três números são iguais");
 }

 else if(n2 == n1 && n2 == n3){
     console.log("Os três números são iguais");
 }

 else if(n3 == n2 && n3 == n1){
     console.log("Os três números são iguais");
 }


 //2º alternativa - Verificação condicional para descobrir o maior número

    if(n1 >= n2 && n1 >= n3){
        maiorNumero = n1;
    }
    if(n2 >= n1 && n2>= n3){//Aqui verifica apenas se o n2 é o maior número
        maiorNumero = n2;
    }
 
    if(n3 >= n1 && n3>= n2){//Aqui verifica apenas se o n2 é o maior número
        maiorNumero = n3;
    }
 else{
        console.log(`Números Inválidos!`);
 }
