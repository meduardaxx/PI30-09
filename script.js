//JSON
const curso = {
    nome: "CST Sistemas para Internet",
    cargaHoraria: 2000,
    disciplinas: ["Algoritmos", "BD1", "BD2"],
    coordenador: {
        nome: "Schalata"
    }
};

// console.log(`Nome do curso: ${curso.nome}`);
// console.log(`Nome do Coordenador: {$curso.coordenador.nome}`);
// fim da revisão

// programação assíncrona
console.log("Início do programa");

//callback
let a = 1;
function minhaFuncao(){
    a = 2;
    console.log("chamou")
}
setTimeout ( minhaFuncao , 2000);
console.log(a);

// Promisse
function chamar(){
    setTimeout(() => console.log("chamou!"), 2000);
}

let p1 = Promise.resolve(chamar);
p1.then( r => r() );

//***************************** */
fetch("https://viacep.com.br/ws/88495000/json")
.then(dados => dados.json())
.then(dados => console.log(`Localidade: ${dados.localidade}`))
.catch(erro => console.error("Deu ruim!))