var resposta = "s";
var cant = 0;
var nomes = [];
var sobreNomes = [];
var idades = [];


function Pessoa(nome, sobreNome, idade){
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
    resposta = prompt("Deseja agregar mas uma pessoa? s/n ");
}


while (resposta != "n"){
    var pessoas = new Pessoa(nome = prompt("Nome: "), sobreNome = prompt("Sobrenome: "), idade = Number(prompt("Idade: ")));
    console.log("O nome completo da pessoa n* " + (cant+1) + " é " + nome + " " + sobreNome);
    nomes.push(nome);
    sobreNomes.push(sobreNome);
    idades.push(idade);
    cant = cant + 1;
    
}

maior = 0;

for(var i=0,len=idades .length;i<len;i++){
 if(maior < idades [i]){
     maior = idades [i];
}
}
console.log("A pessoa maior tem " + maior + " anos");
