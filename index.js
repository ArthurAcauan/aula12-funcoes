//funções!!!
function imprimirOlaMundo() {
    console.log("Ola Mundo!");
}

imprimirOlaMundo();

//estrutura da função!!!
function calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area);
}

calculaArea(2, 3);

//exercicio
function saudacao(nome) {
    console.log("Olá " + nome);
}

saudacao("Arthur");
saudacao("João");
saudacao("Maria");

//escopo
const a = 1

function imprimeVariavel() {
    const b = 2
    console.log(a, a);
    console.log(b, b);
}

imprimeVariavel();

console.log(a, a);
//console.log(b, b);

//return
function calculaArea(altura, largura) {
    const area = altura * largura
    return area
}
const areaCalculada = calculaArea(2, 3);
console.log(calculaArea(2, 3));

//exercicio
function somaNumero(numero1, numero2) {
    const total = numero1 + numero2
    return total
}
const somaTotal = somaNumero(5, 5);
console.log(somaNumero(5, 5));

//exercicio
function retornaPrimeiroEUltimo(meuArray = []){
    let novoArray = [];
    novoArray[0] = (meuArray[meuArray.length -1])/2;
    novoArray[1] = (meuArray[0]) /2;
    return novoArray;
}
let antigoArray= [1,2,3,4,5,6,76,87,98,9];
console.log(retornaPrimeiroEUltimo(antigoArray));
