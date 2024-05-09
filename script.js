document.addEventListener('DOMContentLoaded', function() {
    // Establece la fecha y hora de destino (año, mes (0-11), día, horas, minutos, segundos)
    var fechaDestino = new Date('2024-06-08T18:00:00').getTime();
  
    // Actualiza el contador cada segundo
    var intervalo = setInterval(function() {
      var ahora = new Date().getTime();
      var tiempoRestante = fechaDestino - ahora;
  
      var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
  
      // Actualiza el contenido en el HTML
      document.getElementById('dias').innerHTML = dias + '  dies';
      document.getElementById('horas').innerHTML = horas + '  hores';
      document.getElementById('minutos').innerHTML = minutos + '  minuts';
      document.getElementById('segundos').innerHTML = segundos + '  segons';
  
      // Si el tiempo restante es menor o igual a 0, detén el contador
      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        document.getElementById('contador').innerHTML = '¡Tiempo alcanzado!';
      }
    }, 1000);
  });