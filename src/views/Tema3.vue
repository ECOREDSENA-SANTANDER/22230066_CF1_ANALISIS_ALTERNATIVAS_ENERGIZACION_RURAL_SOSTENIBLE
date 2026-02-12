<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Clasificación y potencial de las fuentes energéticas
      
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Este componente formativo desarrolla el #[b saber conceptual sobre las fuentes básicas de energía renovable], con el propósito de que el aprendiz pueda #[b identificarlas, clasificarlas y comprender su origen], como base para la selección de alternativas energéticas sostenibles.
          p.mb-0s Para la formulación de soluciones energéticas apropiadas, resulta fundamental que el aprendiz comprenda la #[b clasificación de las fuentes de energía], así como las diferencias conceptuales entre los distintos tipos existentes.
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Clasificación fundamental
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-5
          .bg-fondo-1.p-4.br-1.hcard-1.mb-cus-2
            img.w-25.m-auto.mb-4(src='@/assets/curso/temas/t3/2.svg', alt='')
            .bg-color-7.py-2.px-3.mb-3.w-cus-1.m-auto
              h4.text-center.mb-0 Fuentes convencionales y no convencionales
            p.mb-0.text-center Las fuentes convencionales corresponden principalmente a los combustibles fósiles tradicionalmente utilizados para la generación de energía, mientras que las fuentes no convencionales incluyen aquellas alternativas que no han sido explotadas de manera masiva y que, en su mayoría, se basan en recursos renovables.
        .col-sm-12.col-md-6.col-lg-5
          .bg-fondo-1.p-4.br-1.hcard-1
            img.w-cus-2.m-auto.mb-4(src='@/assets/curso/temas/t3/3.svg', alt='')
            .bg-color-7.py-2.px-3.mb-3.w-cus-1.m-auto
              h4.text-center.mb-0 Fuentes renovables y no renovables
            p.mb-0.text-center Las fuentes renovables se caracterizan por provenir de recursos naturales que se regeneran de forma continua, como el sol, el viento, el agua y la biomasa. En contraste, las fuentes no renovables dependen de recursos finitos, cuya disponibilidad disminuye con su uso, como el carbón, el petróleo y el gas natural.
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 4.] Clasificación fundamental fuentes de energía
      .tabla-a.color-acento-contenido.mb-5.tabla-cus(data-aos="fade-right")
        table
          thead
            tr
              th.w-25 Categoría
              th Características Clave
              th Ejemplos
          tbody
            tr
              td.fw-bold Convencional
              td Fuentes tradicionales, con tecnología madura y uso masivo. Gran impacto ambiental.
              td Petróleo, gas natural, carbón mineral (fósiles).
            tr
              td.fw-bold No Convencional (FNC)
              td Fuentes de desarrollo más reciente, con menor escala de uso.  Gran potencial de crecimiento.
              td Todas las fuentes renovables.
            tr
              td.fw-bold Renovable
              td Se regeneran naturalmente y su uso no agota el recurso. Bajo o nulo impacto ambiental.
              td Solar, eólica, hídrica, biomasa.
            tr
              td.fw-bold No Renovable
              td Existen en cantidades limitadas y se consumen a un ritmo mucho más rápido que su regeneración geológica.
              td Combustibles fósiles y uranio.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12
          img(src='@/assets/curso/temas/t3/4.png', alt='')
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Fuentes Renovables para el Contexto Rural

      p.mb-5(data-aos="fade-right") Las #[b FNCER] representan las alternativas más viables para las #[b ZNI], gracias a su carácter #[b modular, descentralizado y ambientalmente limpio], lo que facilita su adaptación a las condiciones locales y su implementación sostenible en territorios apartados.

      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 5.] Fuentes de energía
      .tabla-a.color-acento-contenido.mb-5.tabla-cus(data-aos="fade-right")
        table
          thead
            tr
              th.w-25 Fuente de energía
              th Principio de funcionamiento
              th Potencial en zonas rurales
          tbody
            tr
              td.fw-bold Energía solar fotovoltaica
              td Convierte la radiación solar en electricidad de corriente continua (DC) mediante paneles solares.
              td Es la tecnología más utilizada en sistemas aislados individuales (SHS), debido a su bajo mantenimiento y a la alta disponibilidad de radiación solar en gran parte del territorio colombiano.
            tr
              td.fw-bold Energía eólica
              td Aprovecha la energía del viento para mover las palas de un aerogenerador y generar electricidad.
              td Adecuada para zonas con velocidades promedio de viento favorables, siendo un factor clave de viabilidad. Se emplea principalmente en sistemas híbridos y microrredes de pequeña escala.
            tr
              td.fw-bold Microhidráulica (pequeñas centrales hidroeléctricas)
              td Utiliza la energía cinética del agua a partir de la caída y el caudal de ríos o quebradas para generar electricidad.
              td Ideal para zonas montañosas con disponibilidad constante de recurso hídrico, permitiendo abastecer microrredes rurales.
            tr
              td.fw-bold Biomasa
              td Aprovecha residuos orgánicos agrícolas, forestales o pecuarios mediante procesos de combustión o producción de biogás.
              td Presenta alto potencial en áreas rurales al transformar residuos locales en energía, reduciendo impactos ambientales y fortaleciendo la economía local.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Recursos / necesidad
      p.mb-5(data-aos="fade-right") El diagnóstico energético inicial requiere evaluar cómo la disponibilidad del recurso natural local se alinea con la necesidad de la comunidad. No todas las ZNI tienen el mismo potencial (ejemplo: una zona con mucho sol puede tener poco viento), y no todas las necesidades son iguales (ejemplo: una demanda de solo iluminación es diferente a una demanda para riego y refrigeración). La selección de la tecnología óptima dependerá de esta concordancia entre la oferta natural y la demanda social.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12
          img(src='@/assets/curso/temas/t3/5.png', alt='')








  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
