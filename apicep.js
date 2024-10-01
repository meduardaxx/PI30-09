const inputCep = document.getElementById("cep");
const form = document.querySelector("form");
const divResultado = document.querySelector(".resultado");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("formulário foi submetido")
    let cep = inputCep.value;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(dados => dados.json())
    .then(dados => {
        console.log(dados);
        const pLocalidade = document.createElement("p");
        const pEstado = document.createElement("p");
        const pRegiao = document.createElement("p");
        pLocalidade.innerHTML = `Localidade: ${dados.localidade}`;
        pEstado.innerHTML = `Estado: ${dados.estado}`;
        pRegiao.innerHTML = `Região: ${dados.regiao}`;
        divResultado.innerHTML = "";
        divResultado.appendChild(pLocalidade);
        divResultado.appendChild(pEstado);
        divResultado.appendChild(pRegiao);

        // busca um resumo na wikipedia
        fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${dados.localidade}`)
            .then( wiki => wiki.json())
            .then( wiki => {
                const pResumo = document.createElement("p");
                pResumo.innerHTML = wiki.extract;
                divResultado.appendChild(pResumo);
            })
                
    })
    .catch(erro => {
        console.log("erro");
        divResultado.innerHTML = "Não foi possível buscar este cep. Tente novamente!"
    })
})

    