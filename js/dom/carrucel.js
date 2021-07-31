const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".next"),
    $prevBtn = d.querySelector(".prev"),
    $slides = d.querySelectorAll(".slider-slide");

  let contador = 0;

  $nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $slides[contador].classList.remove("active");
    contador++;

    if (contador >= $slides.length) {
      contador = 0;
    }

    $slides[contador].classList.add("active");
  });

  $prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $slides[contador].classList.remove("active");
    contador--;

    if (contador < 0) {
      contador = $slides.length - 1;
    }

    $slides[contador].classList.add("active");
  });
}
