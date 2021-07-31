const d = document;

export default function scrollSpy() {
  const $seccions = d.querySelectorAll("section[data-scroll-spy]");
  const callback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: [0.5, 0.75],
  });

  $seccions.forEach((seccion) => {
    observer.observe(seccion);
  });
}
