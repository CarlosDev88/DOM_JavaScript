const d = document;
let x = 0,
  y = 0;

export function shorcuts(event) {
  if (event.key === "a" && event.altKey) {
    alert("Alerta con el teclado");
  }

  if (event.key === "p" && event.altKey) {
    prompt("promt con el teclado");
  }

  if (event.key === "c" && event.altKey) {
    confirm("aviso con el teclado");
  }
}

export function moveBall(event, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  let pressKey = event.keyCode;

  switch (pressKey) {
    /**
     * 37 izquierda
     * 39 derecha
     * 38 arriba
     * 40 abajo
     */
    case 37:
      if (Math.round(limitsBall.left) > Math.round(limitsStage.left)) {
        event.preventDefault();
        x--;
      }
      break;
    case 39:
      if (Math.round(limitsBall.right) < Math.round(limitsStage.right)) {
        event.preventDefault();
        x++;
      }

      break;
    case 38:
      if (Math.round(limitsBall.top) > Math.round(limitsStage.top)) {
        event.preventDefault();
        y--;
      }
      break;
    case 40:
      if (Math.round(limitsBall.bottom) < Math.round(limitsStage.bottom)) {
        event.preventDefault();
        y++;
      }
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
