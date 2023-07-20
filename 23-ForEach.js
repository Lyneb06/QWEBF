const cidades= ["Jandira","Osasco","Barueri","Itapevi"];
console.log(cidades); 
const cidadesOrdenadas=cidades.sort();
console.log(cidadesOrdenadas);

cidades.sort().forEach((cidade)=>{
    cidades.sort('a cidade escolhida é:${cidade} ');
})





//cidades.forEach((cidade)=>{
 //  console.log(cidade);
//});

//cidades.forEach((cidade)=>{
 //  console.log('A cidade escolhida:${cidade}');
//});