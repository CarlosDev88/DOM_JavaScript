const d = document,
  n = navigator;
export default function gerGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const succes = (position) => {
    $id.innerHTML = `
    <p>
    Tu pocición es :
    <ul>
        <li>Latitud: <b>${position.coords.latitude}</b></li>
        <li>Longitud <b>${position.coords.longitude}</b></li>
        <li>Precisión lectura: <b>${position.coords.accuracy} Mt</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z"
    target="_blank" rel="noopener">Ver en Google Maps</a>
   
    `;
    console.log(position);
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark> </p>`;
    console.error(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(succes, error, options);
}
