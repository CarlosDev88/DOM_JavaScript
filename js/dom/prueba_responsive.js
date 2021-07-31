const d = document;

export default function (idForm) {
  const $form = d.getElementById(idForm);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      console.log(`prueba de validacion ${e.target === $form}`);
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
