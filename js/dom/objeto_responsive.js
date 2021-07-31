const d = document,
  w = window;

export default function responsiveMedia(
  id,
  mediaQueri,
  mobileContent,
  desktopContenet
) {
  let breakPoint = w.matchMedia(mediaQueri);

  const responvive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContenet;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }

    console.log(e.matches);
  };

  breakPoint.addEventListener("change", responvive);
  responvive(breakPoint);
}
