<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        p.mb-0 Bienvenido al componente formativo “Contexto Rural Energético”, primer eje fundamental de su proceso de formación. Este documento tiene como objetivo establecer las bases conceptuales que sustentan la necesidad de buscar alternativas sostenibles para la electrificación en el campo colombiano.
        p.mb-4 La primera etapa de cualquier proyecto de energización consiste en comprender el porqué y el dónde de la intervención. 
        .bg-color-1.p-4.mb-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/intro/2.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 En este sentido, este componente formativo orienta al lector en el análisis de la realidad de las Zonas No Interconectadas (ZNI), las cuales representan uno de los principales desafíos en materia de cobertura energética en el país. Se examinan las consecuencias socioeconómicas y ambientales derivadas de la ausencia de un suministro eléctrico continuo, resaltando la urgencia de transitar de esquemas de generación tradicional basados en diésel hacia soluciones energéticas limpias y sostenibles
        p.mb-0 A lo largo de este componente formativo, el estudiante aprenderá a interpretar el marco de acción institucional y normativo, mediante la identificación de las entidades clave del sector energético, como el IPSE, la UPME y la CREG, así como la normativa que regula y promueve los proyectos de electrificación en las ZNI. Finalmente, se abordará la clasificación de las fuentes de energía, diferenciando entre energías convencionales y renovables, con el fin de reconocer el potencial de recursos como el sol, el viento y la biomasa en el entorno rural.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
    p.mb-5 Al finalizar este componente formativo, el aprendiz habrá logrado establecer el contexto rural energético, constituyendo un paso esencial para la posterior evaluación y formulación de alternativas de electrificación sostenible.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
