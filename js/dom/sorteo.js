const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    return `el gandor es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
    }
  });
}

// //esta es la funcion que elije de manera randomica un ganador
// const getWinnerComments = (selector) => {
//   const $players = d.querySelectorAll(selector),
//     random = Math.floor(Math.random() * $players.length),
//     winner = $players[random];

//   return `el gandor es: ${winner.textContent}`;
// };
