const n1= 10;
const n2= 20;
const n3= 30;
const n4= 40;


somar(n1,n1);
somar(n1,n2);
somar(n1,n3);
somar(n1,n4);

function somar(numero1,numero2){
    const resultado = numero1 + numero2;
    console.log(resultado);
}

multiplicar(n1,n1);
multiplicar(n1,n2);
multiplicar(n1,n3);
multiplicar(n1,n4);

function multiplicar (numero1,numero2){
    const resultado = numero1 * numero2;
    console.log(resultado);
}

function multiplicar (numero1,numero2){
    const resultado = numero1 * numero2;
    return resultado;
}


console.log("Hoje é dia"+ exibirDataAtual());
function exibirDataAtual(){
    const data = new Date ();
    const hoje = date.getDate ();
    const mes = data.getMonth ();
    const ano = data.getFullYear ();
    const dataCompleta = hoje + "/" + mes + "/" + ano;
    return dataCompleta;
}