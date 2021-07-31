import scrollTopButton from "./dom/boton_scroll.js";
import slider from "./dom/carrucel.js";
import countDown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webCam.js";
import searchFilter from "./dom/filtro_busqueda.js";
import gerGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburger.js";
import speechReader from "./dom/narrador.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import prueba_responsive from "./dom/prueba_responsive.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { moveBall, shorcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactFormValidations from "./dom/validacion_formulario.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("countdown", "May 25, 2022 08:30:19", "Feliz Cumpleaños 🤓 🤘🤘");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" 
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
     clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen></iframe>
     `
  );

  responsiveMedia(
    "google-map",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/pHzqYFWUrYRrJnN37" target="_blank">Ver mapa</a>`,
    `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.128986257818!2d-73.13300668985403!3d6.555394711657538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c72ed54c3c83%3A0xb2e335308f82fca1!2sParque%20Natural%20El%20Gallineral!5e0!3m2!1ses!2sco!4v1627397823792!5m2!1ses!2sco"
     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `
  );

  prueba_responsive("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  gerGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winer-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (event) => {
  shorcuts(event);
  moveBall(event, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
