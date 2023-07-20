const nota1= 10;
const nota2= 5;
const nota3= 3;
const nota4= 8;

console.log (calcularMedia(nota1,nota2,nota3,nota4));
function calcularMedia (nota1,nota2,nota3,nota4){
    try{
       const media = (nota1+ nota2 + nota3 + nota4)/4;
       return Media.toFixed(2);
} 
    catch (e)
    {
        console.log("Erro ao calcular a média,tente novamente");
        console.log(e);
    }


}
