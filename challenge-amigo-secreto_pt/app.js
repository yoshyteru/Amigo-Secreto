//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let inputsAmigos = [];

function exibirMsg(tag, texto){
    let campo = document.querySelector(tag);    
    campo.innerHTML = texto;  
}

exibirMsg('ul', 'Boa Sorte!');  


function exibirAmigosAdd(tag, texto){
    let campo = document.querySelector(tag);    
    campo.innerHTML = texto.join(" | ");  
    // poderia usar (<br>) para quebra de linha no html, mas achei mais viavél separa por pipe por conta de se for muitos nomes
}

function limparInput(){
    amigos = document.querySelector('input').value = '';
}

function adicionarAmigo(){
    let amigos = document.querySelector('input').value;
     if (amigos.length === 0){
        alert('Por favor, insira um nome.');
     }else{
        // Verifica se o nome já existe (ignorando maiúsculas/minúsculas)
        for (let i = 0; i < inputsAmigos.length; i++) {
            if (inputsAmigos[i].toLowerCase() === amigos.toLowerCase()) {
                alert(`${amigos} já está na lista!`);
                limparInput();
                return; // Sai da função se já existir
            }
    }
        inputsAmigos.push(amigos);
        limparInput();
        console.log(amigos, 'Adicionado com sucesso!');
        console.log(`Input adicionado: ${amigos}`);
        console.log(`Array atual:`, inputsAmigos);
        exibirAmigosAdd("ul", inputsAmigos);       
    }
}


function exibirGanhador(tag, texto){
    let campo = document.querySelector(tag);    
    campo.innerHTML = texto;  
}

function reiniciarLista() {
    // Limpa o array
    inputsAmigos = [];  
    alert('Lista de amigos foi reiniciada!');
}

function sortearAmigo() {
    if (inputsAmigos.length === 0) {
        alert('Não é possível sortear sem nomes na lista.'); 
    } else {
        // Sorteia um índice aleatório do array
        let indiceSorteado = Math.floor(Math.random() * inputsAmigos.length);
        // Pega o índice sorteado
        let amigoSorteado = inputsAmigos[indiceSorteado];
        // Altera a cor do sorteado para verde e atribui a uma nova variavel ganhadorCor
        let ganhadorCor = `<span style="color:green">${amigoSorteado}</span>`;
        exibirGanhador("ul", "O sorteado(a) foi "+ " " + ganhadorCor);      
            setTimeout(() => {
            reiniciarLista();
            exibirAmigosAdd("#listaAmigos", inputsAmigos);
        }   , 5000); // tempo para resetar a lista
    }   
   
}


