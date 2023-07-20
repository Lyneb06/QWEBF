let carro1 = "Gol";
let carro2= "Celta Preto";
let carro3= "Fox";
let carro4 = "Opala";
let carro5 = "Ferrari";
// Aray arranjo de dados lsita de valores
// metodo push adicionar um item no final do Array
// metodo pop - remove o ultimo item do final do array
// metodo length - mostra a quantidade de valores no array
// metodo unshift - adiciona valores ao nicio do array
// metodo shift - remove o primeiro item do array
// metodo indexof - mostra o nidice usado dentro do array
// metodo splice (indice do intem quantidade para excluir - removo o item dentro do array
    let carros= ["Gol","Celta Preto","Fox","Opala","Ferrari","Kia Soul"];

    console.log(carros.length);
    carros.push("Mustang");
    console.log(carros.length);
    carros.pop();
    console.log(carros.length);
    console.log(carros.length);
    carros.unshift("Logan","Doblo");
    console.log(carros.length);
    console.log(carros[1]);
    
    let itemParaExcluir = carros.indexOf("Opala");
    carros.splice(itemParaExcluir,1);
    console.log(carros.indexOf("Opala"));
    