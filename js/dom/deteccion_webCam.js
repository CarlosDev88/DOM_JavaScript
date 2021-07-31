const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((error) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>${error} Permiso denegado a la camara web y el microfono</mark> </p>`
        );
        console.error(`sucedió el siguiente error ${error}`);
      });
  }
}
