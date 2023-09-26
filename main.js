const URL = 'https://my-json-server.typicode.com/mateo-ruiz/nombres/datos';
let tweetsDiv = document.querySelector('.tweets');

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then(data => {
    // Crear una cadena para almacenar los elementos de la lista con la clase "list-group"
    let content = '<ul class="list-group list-group-flush">';

    // Iterar sobre los objetos en los datos y agregar los nombres, textos y fotos en un solo elemento de lista
    data.forEach((item, index) => {
      // Generar el número de imagen (por ejemplo, 1, 2, 3, etc.) usando el índice
      const imagenNumero = index + 1;
      
      content += `
        <li class="list-group-item">
          <div class="media">
            <img src="https://xsgames.co/randomusers/assets/avatars/pixel/${imagenNumero}.jpg" class="mr-3" alt="${item.name}" width="64" height="64">
            <div class="media-body">
              <p class="mt-0"><strong>${item.name}</strong></p> 
              <p>${item.text}</p>
            </div>
          </div>
        </li>
      `;
    });

    content += '</ul>'; // Cerrar la lista

    // Establecer el contenido en el elemento div
    tweetsDiv.innerHTML = content;
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });
