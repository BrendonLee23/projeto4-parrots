(function shuffle(){
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









function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");
}



