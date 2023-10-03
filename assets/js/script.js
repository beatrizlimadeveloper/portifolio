const inputsFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

// formulario.addEventListener("submit", e => {
//     e.preventDefault();
//     console.log('ola');
// })

inputsFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    //blur quando tira o foco do input
    campo.addEventListener("invalid", (e) => e.preventDefault());
})

const tiposDeErro = [
    'valueMissing', 
    'typeMismatch', 
    'patternMismatch', 
    'tooShort', 
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },

    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
    },
};

function verificaCampo(campo){
    let mensagem = "";
    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            //name é o nome dado lá no html
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    //parentNode serve para pegar o irmão que está do lado tag, pq senão pegaria todos os spans
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    } else{
        mensagemErro.textContent = "";
    }
    console.log(campo.validity);
}








