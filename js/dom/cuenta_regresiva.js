const d = document;
export default function countDown(id, limitDate, finalMessage) {
  const $coundDown = d.getElementById(id),
    countDownDate = new Date(limitDate).getTime();
  let countDownTempo;

  countDownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $coundDown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas 
                            ${minutes} minutos ${seconds} Segundos para my cumpleaños
                            </h3>`;

    if (limitTime < 0) {
      clearInterval(countDownTempo);
      $coundDown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
