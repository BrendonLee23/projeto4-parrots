var quantidadeCartas

(function shuffle() {
    embaralharCartas()
})()

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

    // criar uma lista com a quantidade de cartas que o usuario escolheu e remover oa classe d-none
    const cartas = document.querySelectorAll(".d-none")
    let cartasSelecionadas = []


    for (let i = 0; i < Number(result); i++) {
        cartasSelecionadas.push(cartas[i])
    }
    console.log(cartasSelecionadas)

    // embaralhar todas elas
    cartasSelecionadas.forEach((carta => {
        let ramdomPos = Math.floor(Math.random() * 14)
        carta.style.order = ramdomPos
        carta.classList.remove("d-none")
    }))
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
    else if (carta2 == undefined){
        carta2 = carta;
        carta2.removeAttribute("onclick")
    }
    console.log(cartasViradas)
    if (cartasViradas.length < 2) {
        cliques++
        carta.classList.add("flip")
        // pegar as cartas viradas 
        if (carta2 != undefined & carta1 != undefined) {
            if (carta1.id != carta2.id) {
                setTimeout(() => {
                    carta1.classList.remove("flip")
                    carta2.classList.remove("flip")
                    carta2.setAttribute("onclick","virarCarta(this)")
                    carta1.setAttribute("onclick","virarCarta(this)")
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


function mensagemVitoria(){
    // pegar as cartas pareadas
    const cartasPareadas = document.querySelectorAll(".pareada")
    // pegar a quantidade de cartas que jogador selecionou 
    if (cartasPareadas.length == Number(quantidadeCartas)){
        setTimeout(() => {window(alert(`Você ganhou em ${cliques} jogadas!`))} , 500) 
    }
    // se a quantidade de cartas pareadas for igual a quantidade de cartas que o jogador selecionou, exibe um alert
}


