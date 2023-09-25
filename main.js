const URL = 'https://my-json-server.typicode.com/mateo-ruiz/nombres/datos';
let tweets = document.querySelector('.tweets');

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then(data => {
    // Crear una cadena para almacenar solo los valores de "name" y "text"
    let content = '';

    // Iterar sobre los objetos en los datos y agregar solo los valores de "name" y "text" al contenido
    data.forEach(item => {
      content += `${item.name}: ${item.text}<br>`;
    });

    // Establecer el contenido en el elemento div
    tweets.innerHTML = content;
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });