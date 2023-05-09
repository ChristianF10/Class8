/** @format */

document.addEventListener('DOMContentLoaded', () => {
  fetch('../assets/img/chile.svg')
    .then((response) => response.text())
    .then((svg) => {
      document.getElementById('miDiv').innerHTML = svg;
      $(document).ready(function () {
        $('#svg2').css({
          fill: 'black',
          stroke: 'white',
        });
        $('#CL-AP').css({
          fill: 'green',
        });
        $('#CL-RM').css({
          fill: 'green',
        });
        $('#CL-MA').css({
          fill: 'green',
        });

        $('#svg2').attr('title', 'Mi título');

        $(
          '#CL-TA, #CL-AN, #CL-AT, #CL-CO, #CL-AR, #CL-BI, #CL-NU, #CL-LI, #CL-LL, #CL-ML, #CL-LR, #CL-BZ, #CL-AI'
        ).hover(function () {
          $(this).css({
            transition: 'all 0.3s ease-in-out',
            transform: 'translate(-2px, -2px)',
            strokeWidth: '1px',
            stroke: 'black',
          });
        });

        $(
          '#CL-TA, #CL-AN, #CL-AT, #CL-CO, #CL-AR, #CL-BI, #CL-NU, #CL-LI, #CL-LL, #CL-ML, #CL-LR, #CL-AP, #CL-BZ, #CL-AI'
        ).mouseleave(function () {
          $(this).css({
            transition: 'all 0.3s ease-in-out',
            transform: 'translate(0px, 0px)',
            strokeWidth: '1px',
            stroke: 'white',
          });
        });

        $('#group-marker-arica').click(function () {
          $('#region').fadeOut(500, function () {
            $(this).text('Región de Arica y Parinacota ').fadeIn(500);
          });
          $('#regionDescription').fadeOut(500, function () {
            $(this)
              .text(
                'La Región de Arica y Parinacota2​ es una de las 16 regiones en que se divide la República de Chile. Está ubicada en el extremo norte del país, limita al norte con el departamento de Tacna en Perú, al este con los departamentos de La Paz y Oruro pertenecientes a Bolivia, al sur con la Región de Tarapacá y al oeste con el océano Pacífico'
              )
              .fadeIn(500);
          });
        });
        $('#group-marker-puntaArenas').click(function () {
          $('#region').fadeOut(500, function () {
            $(this)
              .text('Región de Magallanes y de la Antártica Chilena')
              .fadeIn(500);
          });
          $('#regionDescription').fadeOut(500, function () {
            $(this)
              .text(
                'La Región de Magallanes y de la Antártica Chilena,2​3​4​ también denominada simplemente Región de Magallanes, es una de las dieciséis regiones en que se divide Chile. Se ubica en el extremo austral del continente sudamericano, en la parte sur de la Patagonia. Su capital y centro urbano con mayor población es Punta Arenas.'
              )
              .fadeIn(500);
          });
        });
        $('#group-marker-santiago').click(function () {
          $('#region').fadeOut(500, function () {
            $(this).text('Región Metropolitana de Santiago').fadeIn(500);
          });
          $('#regionDescription').fadeOut(500, function () {
            $(this)
              .text(
                'La Región Metropolitana de Santiago,2​3​ abreviada RM, es una de las dieciséis regiones en que se divide Chile. Su capital es Santiago, que es también la capital nacional. Ubicada en el centro del país, limita al norte y al oeste con la Región de Valparaíso, al este con la provincia de Mendoza en Argentina y al sur con la Región de O Higgins.'
              )
              .fadeIn(500);
          });
        });
      });
    });
});
