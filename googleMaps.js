 // Função para inicializar o mapa
 function initMap(local) {
    const coordenadas = { lat: local.localizacao[0], lng: local.localizacao[1] };
    console.log(coordenadas)
  // Substitua pelas coordenadas desejadas
    const map = new google.maps.Map(document.querySelector('.map'), {
      center: coordenadas,
      zoom: 15 // Define o nível de zoom (ajuste conforme necessário)
    });

    // Adicione um marcador no mapa
    const marker = new google.maps.Marker({
      position: coordenadas,
      map: map,
      title: 'Localização Personalizada' // Título do marcador
    });
  }


