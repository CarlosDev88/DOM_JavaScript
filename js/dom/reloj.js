const d = document;
export function digitalClock(clock, buttonPlay, buttonStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(buttonPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(buttonStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(buttonPlay).disabled = false;
    }
  });
}

export function alarm(sound, buttonPlay, buttonStop) {
  let alarmTem;
  const $alamr = d.createElement("audio");
  $alamr.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(buttonPlay)) {
      alarmTem = setTimeout(() => {
        $alamr.play();
      }, 0);

      e.target.disabled = true;
    }

    if (e.target.matches(buttonStop)) {
      clearTimeout(alarmTem);
      $alamr.pause();
      $alamr.currentTime = 0;
      d.querySelector(buttonPlay).disabled = false;
    }
  });
}
