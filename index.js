const prompt = require("prompt-sync")();
console.clear();

// o jogo só irá parar caso o usuário opte por parar, isso quebra o laço while
while (1) { 
  let rodadas = prompt("Quantas rodadas deseja jugar, meu chapa?"); // quantas rodadas o usuário irá jogar nessa partida
  console.log(typeof(rodadas));
  while(isNaN(rodadas)){
       rodadas = +prompt("Quantas rodadas deseja jugar, meu chapa?")
    }
//contadores de vitória
  let cont_wins_CPU = 0;
  let cont_wins_user = 0;

  for (let contador = 0; contador < rodadas; contador++) {
    escolhaUser = prompt("Escolha: Pedra, papel ou tesoura!");
    //verificação de entrada
    while (
      escolhaUser.toLowerCase() != "pedra" &&
      escolhaUser.toLowerCase() != "papel" &&
      escolhaUser.toLowerCase() != "tesoura"
    ) {
      escolhaUser = prompt("Escolha: Pedra, papel ou tesoura!");
    }
    console.log("Você escolheu:" + escolhaUser + "\n");

    let escolhasPossiveisCpu = ["pedra", "papel", "tesoura"];
    let randomIndex = Math.floor(Math.random() * escolhasPossiveisCpu.length); //escolha do CPU
    let escolhaCpu = escolhasPossiveisCpu[randomIndex];
    console.log("O CPU escolheu:" + escolhaCpu + "\n");

    // condicionais de vitória
    if (escolhaCpu == "pedra") {
      if (escolhaUser == "pedra") {
        console.log("Empate\n");
      } else if (escolhaUser == "tesoura") {
        console.log("Você perdeu, meu chapa!\n");
        cont_wins_CPU = cont_wins_CPU + 1;
      } else if (escolhaUser == "papel") {
        console.log("Você venceu, meu chapa!\n");
        cont_wins_user = cont_wins_user + 1;
      }
    }
    if (escolhaCpu == "papel") {
      if (escolhaUser == "papel") {
        console.log("Empate\n");
      } else if (escolhaUser == "pedra") {
        console.log("Você perdeu, meu chapa!\n");
        cont_wins_CPU = cont_wins_CPU + 1;
      } else if (escolhaUser == "tesoura") {
        console.log("Você venceu, meu chapa!\n");
        cont_wins_user = cont_wins_user + 1;
      }
    }
    if (escolhaCpu == "tesoura") {
      if (escolhaUser == "tesoura") {
        console.log("Empate\n");
      } else if (escolhaUser == "papel") {
        console.log("Você perdeu, meu chapa!\n");
        cont_wins_CPU = cont_wins_CPU + 1;
      } else if (escolhaUser == "pedra") {
        console.log("Você venceu, meu chapa!\n");
        cont_wins_user = cont_wins_user +1 ;
      }
    }
  }
  console.log(`Você venceu ${cont_wins_user} rodadas, meu chapa!\n`);
  console.log(`O CPU venceu ${cont_wins_CPU} rodadas, meu chapa!\n`);

  // condicionais de vencedor
  if (cont_wins_CPU > cont_wins_user) {
    console.log("O CPU foi o grande vencedor da partida!\n");
  } else if (cont_wins_user > cont_wins_CPU) {
    console.log("Você foi o grande vencedor da partida, meu CHAPA!!!!\n");
  } else {
    console.log("Empatou, que chato!\n");
  }
  // o usuário vai continuar?
  let continuar = prompt("deseja continuar?");
  while (continuar.toLowerCase() !== "sim" && continuar.toLowerCase() !== "nao" ){
    continuar = prompt("deseja continuar?");
  }
  if (continuar == "nao") {
    console.log("Muito obrigado por jogar!");
    break;
  }
}
