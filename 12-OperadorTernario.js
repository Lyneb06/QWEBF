//senha do usuario recebida do banco de dados
const BdSenha = 12345;

const senhaInformada = 12345;
let usuarioLogado;

if (senhaInformada == BdSenha){
    usuarioLogado= true;
} 
else
{
    usuarioLogado= false;
}

console.log((usuarioLogado == true?"Usuario logado":"Senha incorreta"))