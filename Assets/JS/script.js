let result = ''
while (true) {
    result = prompt("Com quantas cartas você quer jogar?")

    if (result % 2 === 0 && (result >= 4 && result <= 14)) {
        break
    }
}


function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");
}

//  nem mensage

