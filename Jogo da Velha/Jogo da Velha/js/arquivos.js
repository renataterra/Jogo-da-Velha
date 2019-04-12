//Declaração de variáveis
var controle = true;
var jogador1 = '<img src="img/x.png">';
var jogador2 = '<img src="img/coracao.png">';

//função para acrescentar as imagens em cada div clicada, sendo respectivamente, um x e um coração.
function Clicar(quadrado) {

    // Não permite que uma div seja clicada duas vezes.
    if (quadrado.innerHTML == '') {

        //O innerHTML puxa o que tem em cada div clicada, pelo this que foi declarado no html.
        if (controle) {
            quadrado.innerHTML = jogador1;
            controle = false;
        } else if (!controle) {
            quadrado.innerHTML = jogador2;
            controle = true;
        }
    }
    //Chama a função Jogar(quadrado) para verificar se já tem vencedor.
    Jogar();
}

function Jogar() {

    //Declaração de variáveis chamando o Id de cada box.
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");

    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");

    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");

    var vencedor = '';

    //Possibilidades existentes de jogo.
    if ((box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML) || (box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML) || (box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML) && (box1.innerHTML != "")) {
        vencedor = box1.innerHTML;
    } else if ((box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML) || (box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML) && (box3.innerHTML != "")) {
        vencedor = box3.innerHTML;
    } else if ((box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML) && (box2.innerHTML != "")) {
        vencedor = box2.innerHTML;
    } else if ((box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML) && (box4.innerHTML != "")) {
        vencedor = box4.innerHTML;
    } else if ((box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML) && (box7.innerHTML != "")) {
        vencedor = box7.innerHTML;
    }

    //Verificação de qual foi o vencedor.
    if (vencedor != '') {
        if (vencedor == jogador1) {
            (alert("O jogador 'X' ganhou!!"));
        } else (alert("O jogador 'CORAÇÃO' ganhou!!"));
        Recomecar()
    }

    //Alerta caso não tenha vencedor.
    if ((vencedor == '') && (box1.innerHTML && box2.innerHTML && box3.innerHTML && box4.innerHTML && box5.innerHTML && box6.innerHTML && box7.innerHTML && box8.innerHTML && box9.innerHTML != '')) {
        alert("Deu VELHA!!");
        Recomecar();
    }
}

//Botão para recomeçar jogo, usando a declaração do onclick no html.
function Recomecar() {
    location.reload();
}