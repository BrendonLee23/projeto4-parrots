var quantidadeCartas


embaralharCartas()

function embaralharCartas() {
    // pegar a quantidade de cartas escolhida pelo usuário
    let result = ''
    while (true) {
        result = prompt("Com quantas cartas você quer jogar?")

        if (result % 2 === 0 && (result >= 4 && result <= 14)) {
            break
        }
    }
    quantidadeCartas = result
    criarCartas()
}
function comparador() { 
	return Math.random() - 0.5; 
}

function criarCartas() {
    const gifPassaro = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot']
    const selecionaCartasCriadas = []

    for (let i = 0; i < quantidadeCartas / 2; i++){
        selecionaCartasCriadas.push(gifPassaro[i])
        selecionaCartasCriadas.push(gifPassaro[i])
    }
    selecionaCartasCriadas.sort(comparador)

    const container = document.querySelector(".container")
    let contador = 0
    let conteudo = ""
    let indiceId = 1
    while (contador < quantidadeCartas){

        if (contador % 2 === 0){
            indiceId++
        }
        let cartaCriada = selecionaCartasCriadas[0]
        selecionaCartasCriadas.shift()
        conteudo += `<div data-test="card" id="par-${indiceId}" onclick="virarCarta(this)" class="card d-none">`
        conteudo += `<div class="carta1 front-face face">`
        conteudo += `<img data-test="face-down-image" class="img-parrot" src="./Imagens/Arquivos U╠üteis - Projeto 04 - Parrot Card Game/back.png"alt=""></div>`
        conteudo += `<div class="carta2 back-face face">`
        conteudo += `<img data-test="face-up-image" class="gif-card" src="./Imagens/Arquivos U╠üteis - Projeto 04 - Parrot Card Game/${cartaCriada}.gif" alt="">`
        conteudo += `</div></div>`

        contador++
    }
    container.innerHTML = conteudo
}

var cliques = 0

var carta1, carta2
function virarCarta(carta) {

    const cartasViradas = document.querySelectorAll(".flip")
    // se não houver 2 cartas viradas, permite virar a seguinte
    if (carta1 == undefined) {
        carta1 = carta;
        carta1.removeAttribute("onclick")
    }
    else if (carta2 == undefined) {
        carta2 = carta;
        carta2.removeAttribute("onclick")
    }

    if (cartasViradas.length < 2) {
        cliques++
        carta.classList.add("flip")
        // pegar as cartas viradas 
        if (carta2 != undefined & carta1 != undefined) {
            if (carta1.id != carta2.id) {
                setTimeout(() => {
                    carta1.classList.remove("flip")
                    carta2.classList.remove("flip")
                    carta2.setAttribute("onclick", "virarCarta(this)")
                    carta1.setAttribute("onclick", "virarCarta(this)")
                    carta1 = undefined
                    carta2 = undefined
                }, 1000)
            }
            else {
                carta1.classList.remove("flip")
                carta1.classList.add("pareada")
                carta2.classList.remove("flip")
                carta2.classList.add("pareada")
                carta1 = undefined
                carta2 = undefined
                mensagemVitoria()
            }
        }
    }
}


function mensagemVitoria() {
    // pegar as cartas pareadas
    const cartasPareadas = document.querySelectorAll(".pareada")
    // pegar a quantidade de cartas que jogador selecionou 
    if (cartasPareadas.length == Number(quantidadeCartas)) {
        setTimeout(() => { window(alert(`Você ganhou em ${cliques} jogadas!`)) }, 500)
    }
    // se a quantidade de cartas pareadas for igual a quantidade de cartas que o jogador selecionou, exibe um alert
}


