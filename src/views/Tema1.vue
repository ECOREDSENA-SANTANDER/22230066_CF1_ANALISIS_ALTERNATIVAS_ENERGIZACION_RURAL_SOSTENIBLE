<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 La problemática y el contexto nacional
      
      .bloque-texto-g.bloque-texto-g--inverso.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-1
          .row.justify-content-center.mb-2.d-flex.flex-row.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/2.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Este componente formativo introduce la pertinencia del curso, al definir el panorama energético de Colombia y fundamentar la necesidad de promover soluciones basadas en fuentes renovables. Uno de los principales retos del país, y de vital importancia para el desarrollo territorial, es garantizar un suministro de energía eléctrica confiable, 
          p.mb-0 continuo y sostenible para las comunidades rurales y poblaciones apartadas que actualmente no cuentan con este servicio. El acceso a la energía constituye un servicio público esencial y un factor determinante para el desarrollo socioeconómico, la reducción de brechas y el mejoramiento de la calidad de vida en estas regiones.

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-sm-12.col-lg-8
            p.mb-3 La limitada cobertura energética en zonas rurales y cabeceras municipales aisladas obedece, en gran medida, a la ausencia de infraestructura adecuada, los altos costos de implementación, las grandes distancias y las condiciones geográficas de difícil acceso. Estas restricciones han impedido la consolidación de sistemas energéticos robustos que garanticen la prestación del servicio de manera eficiente y sostenible. Frente a este escenario, el componente aborda el desafío de la electrificación rural mediante la formulación de una metodología ágil y sencilla orientada a la selección de alternativas energéticas apropiadas para territorios que aún no cuentan con suministro eléctrico.
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img.w-75.m-auto(src='@/assets/curso/temas/t1/3.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 La metodología propuesta contempla el análisis integral de factores técnicos, económicos, ambientales y sociales, lo cual permite establecer bases sólidas para evaluar las diferentes opciones de generación energética disponibles en cada territorio. Este enfoque facilita la toma de decisiones informadas, articulando las condiciones locales, la información existente y las necesidades específicas de cada comunidad rural, con el fin de identificar la alternativa energética más adecuada.
      .bg-color-2.p-4.mb-5.br-1(data-aos="fade-right")
        .row.justify-content-center
          .col-sm-12.col-lg-12
              p.mb-0.text-white El desarrollo de los procesos para la implementación de esta metodología implica la recolección y análisis de información proveniente de fuentes primarias y secundarias, así como la evaluación de variables relacionadas con la viabilidad económica, el impacto ambiental, la factibilidad técnica y las consideraciones sociales, culturales y étnicas. Estos criterios resultan fundamentales para la selección de soluciones de electrificación rural sostenibles, inclusivas y acordes con el contexto territorial.
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Energía y desarrollo sostenible
      
      p.mb-5(data-aos="fade-right") La energía no es únicamente un commodity; constituye un pilar fundamental para el desarrollo humano, la equidad social y el bienestar colectivo. El acceso a un suministro eléctrico confiable y de calidad es reconocido a nivel global como un factor clave para el fortalecimiento de la salud, la educación, la productividad y la generación de oportunidades económicas, especialmente en contextos rurales y territorios apartados.

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-6
          .bg-color-3.p-5.br-1
            p.mb-0 En este sentido, la sostenibilidad energética tiene como propósito alcanzar un equilibrio armónico entre tres dimensiones interdependientes: la #[b social], orientada a garantizar el acceso equitativo y universal a la energía; la #[b económica], enfocada en asegurar la viabilidad financiera y la eficiencia del suministro a largo plazo; y la #[b ambiental], dirigida a minimizar los impactos ecológicos mediante el uso responsable de los recursos y la promoción de fuentes de energía limpias y renovables. La articulación de estas dimensiones permite avanzar hacia modelos energéticos que contribuyan al desarrollo sostenible y a la reducción de las brechas sociales y territoriales.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.svg', alt='')
      
      p.mb-5(data-aos="fade-right") En este contexto, la meta de la sostenibilidad energética busca lograr un equilibrio entre tres pilares interdependientes:
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 1.] Pilares de la sostenibilidad energética
      .tabla-b.color-primario.mb-5(data-aos="fade-right")
        table
          thead
            tr
              th.w-25 Pilar
              th Descripción
          tbody
            tr
              td.fw-bold Social
              td Garantizar la equidad y el acceso universal a la energía, asegurando la asequibilidad y la calidad del servicio, con el fin de mejorar la calidad de vida y promover el desarrollo social de las comunidades.
            tr
              td.fw-bold Economico
              td Asegurar que el suministro energético sea económicamente viable y sostenible a largo plazo, reduciendo la dependencia de fuentes de energía costosas y volátiles, y optimizando los recursos disponibles.
            tr
              td.fw-bold Ambiental
              td Minimizar el impacto ecológico mediante la priorización del uso de fuentes de Energía Renovable No Convencionales (ERNC), contribuyendo a la reducción de las emisiones de Gases de Efecto Invernadero (GEI) y de la contaminación ambiental local.
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 El Contexto de las Zonas No Interconectadas (ZNI)


      .bloque-texto-g.bloque-texto-g--inverso.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/5.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El Sistema Interconectado Nacional (SIN) es la columna vertebral de la infraestructura eléctrica colombiana. Sin embargo, una parte significativa del territorio nacional se clasifica como Zonas No Interconectadas (ZNI).
          p.mb-3 Las ZNI están distribuidas principalmente en áreas de frontera, Amazonía y la Costa Pacífica, y a menudo son hogar de comunidades étnicas y rurales. Esta condición genera una realidad energética precaria.
          p.mb-0 El Artículo 1 de la Ley 855 de 2003, se establece que “para todos los efectos relacionados con la prestación del servicio público de energía eléctrica se entiende por Zonas No Interconectadas a los municipios, corregimientos, localidades y caseríos no conectados al Sistema Interconectado Nacional”

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/7.png', alt='')
        .col-sm-12.col-lg-8
          p.mb-5 Las Zonas No Interconectadas (ZNI) en Colombia corresponden a un aproximado del 53 % del territorio nacional, correspondiente a cuatro (4) departamentos totalmente ZNI, catorce (14) con regiones ZNI - SIN, setenta y siete (77) municipios ZNI y dieciséis (16) áreas no municipalizadas, de acuerdo con lo reportado por el Centro Nacional de Monitoreo (CNM) para 2023.
          .bg-color-1.p-4.mb-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/6.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 De acuerdo con el CNM, para el año 2023 se identificaron 1750 localidades ZNI, sin embargo, únicamente se realizó el monitoreo de aproximadamente 252.000 usuarios residenciales rurales, correspondiente a 134 localidades, es decir el 11 % del total, en su mayoría atendidos por sistemas de generación con diésel como combustible, esto teniendo en cuenta que en su mayoría cuentan con una densidad poblacional importante, lo que genera facilidad de acceso para la información.
          p.mb-0 Cabe destacar que para las localidades que cuentan con seguimiento del CNM, únicamente el 34 % de los usuarios reportan 24 horas continuas de servicio de energía eléctrica, y con mayor proporción en un promedio de 5 a 10 horas diarias se reportan cerca del 41% de los usuarios centralizados.

      .bloque-texto-g.bloque-texto-g--inverso.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/8.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 En la figura 1 se presenta la distribución de los usuarios ubicados en las Zonas No Interconectadas (ZNI), concentrados principalmente en regiones estratégicas del país como la Orinoquía (Llanos Orientales), la Amazonía, la región Pacífica (incluyendo los departamentos de Chocó, Valle del Cauca, Cauca y Nariño) y el Archipiélago de San Andrés, Providencia y Santa Catalina. Estas zonas se caracterizan por presentar bajos niveles de consumo de energía eléctrica, limitada capacidad de pago por parte de la población y elevados costos asociados a la prestación del servicio.
           p.mb-0 Adicionalmente, la figura ilustra la localización de proyectos de generación eléctrica que utilizan diversas fuentes energéticas, evidenciando la relación entre la ubicación de los usuarios en ZNI y las alternativas de generación disponibles en el territorio nacional.

      .bg-color-1.p-4.mb-2.br-1(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 1. 
          span Caracterización energética en ZNI  
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-8     
            figure
              img(src='@/assets/curso/temas/t1/9.svg', alt='La figura es un mapa de Colombia que ilustra la distribución geográfica de las Zonas No Interconectadas (ZNI), las cuales se extienden predominantemente por las áreas periféricas, fronterizas y departamentos de la Amazonía y el Pacífico (resaltadas en verde). El mapa utiliza una leyenda con íconos para señalar las fuentes de generación eléctrica que operan en estas zonas, destacando la presencia de sistemas basados en diésel (círculos naranjas y amarillos), así como puntos específicos donde operan soluciones renovables, como sistemas Solar Fotovoltaico (SFV), biomasa e hidroeléctricas pequeñas, lo que subraya el desafío de cobertura y la variedad de soluciones descentralizadas que coexisten en el territorio colombiano.')
      figcaption.mb-5 #[b Fuente:] IPSE. (2023). Caracterización de las ZNI. Instituto de Planificación y Promoción de Soluciones Energéticas para las Zonas No Interconectadas. 


      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-10
            .bg-color-1.p-4.mb-0.br-1
              .row.justify-content-center.mb-0.align-items-center
                .col-sm-12.col-lg-1.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/10.svg', alt='')
                .col-sm-12.col-lg-11
                    p.mb-0 Según los datos reportados por CNM, la matriz energética en ZNI se compone principalmente por generación con combustibles fósiles en un 84 %, mientras que el restante es asumido por Fuentes No Convencionales de Energía Renovable (FNCER) siendo mayoritariamente implementados Sistemas Individuales Solares Fotovoltaicos (SISFV), tal como se aprecia en la Figura 2.
            


      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12
          img(src='@/assets/curso/temas/t1/12.png', alt='')

      .bg-color-1.p-4.mb-2.br-1(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 2. 
          span Matriz energética en las ZNI 
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-8     
            figure
              img(src='@/assets/curso/temas/t1/11.svg', alt='Muestra la matriz eléctrica ZNI, con una capacidad instalada total de 311.439 kW. El gráfico circular de la izquierda indica la fuerte dependencia de los combustibles fósiles, pues la Capacidad Diésel domina con 262.433 kW (84 %). En contraste, la Capacidad FNCER (Fuentes No Convencionales de Energía Renovable) es de solo 49.006 kW (16 %). Al analizar el desglose de las FNCER (lado derecho), se observa que la mayor contribución proviene de los Sistemas Solares Fotovoltaicos Individuales (SISFV) con 34.109 kW (70 % del total FNCER), seguidos en menor medida por la Solar Centralizada, Biomasa, Pequeñas Centrales Hidroeléctricas (PCH) y la generación a partir de Residuos Sólidos Urbanos (RSU).')
      figcaption.mb-5 #[b Fuente:] IPSE. (2023). Caracterización de las ZNI. Instituto de Planificación y Promoción de Soluciones Energéticas para las Zonas No Interconectadas. 


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Consecuencias de la falta de energía continua


      .tarjeta--container.row.mb-5.bg-color-3(data-aos="fade-right")
        .col-md.tarjeta.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/13.png', alt='')
        .col-md.tarjeta.p-5
          .row.justify-content-start.mb-3.d-none.d-lg-block
            .col-2
                img(src='@/assets/curso/temas/t1/14.svg')          
          p.mb-0 La dependencia de soluciones energéticas ineficientes en las Zonas No Interconectadas (ZNI) constituye una barrera significativa para el desarrollo integral de los territorios, generando impactos negativos a nivel técnico, socioeconómico y ambiental. Estas consecuencias se manifiestan principalmente en los siguientes aspectos:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-10
          .bg-color-4.p-5.mb-2.br-1
                p.mb-0 La generación eléctrica en las ZNI se realiza, en su mayoría, mediante plantas que operan con diésel, cuyo combustible debe ser transportado a través de rutas complejas y de alto costo logístico. Esta situación deriva en un suministro intermitente, con una disponibilidad limitada de energía que suele oscilar entre 4 y 6 horas diarias, lo que restringe el uso productivo del servicio en horarios nocturnos y matutinos. Asimismo, los elevados costos operacionales (OPEX) hacen que el precio del kilovatio - hora (kWh) sea considerablemente superior al del Sistema Interconectado Nacional (SIN), pudiendo alcanzar valores hasta cinco veces mayores.

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-7.p-5.bg-color-3       
          p.mb-0 Desde el punto de vista socioeconómico, la falta de un suministro continuo afecta de manera directa sectores clave como la salud y la educación, al limitar la refrigeración de vacunas y medicamentos, así como el uso de tecnologías y la ampliación de los horarios académicos. De igual forma, la baja disponibilidad energética impide el funcionamiento de microempresas, sistemas de refrigeración de alimentos y procesos productivos locales, reduciendo las oportunidades de generación de ingresos y el aprovechamiento de las cosechas.
          p.mb-0 En el ámbito ambiental, el uso permanente de plantas diésel genera emisiones contaminantes, ruido y riesgos asociados al transporte y almacenamiento de combustibles, lo cual resulta especialmente crítico en ecosistemas frágiles y de alto valor ambiental.
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
            img(src='@/assets/curso/temas/t1/15.svg', alt='')


      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 2.] Consecuencias de la falta de energía continua en las ZNI
      .tabla-b.color-primario.mb-0(data-aos="fade-right")
        table
          thead
            tr
              th.w-25 Dimensión
              th Consecuencia
              th Descripción
          tbody
            tr
              td.br-2.fw-bold(rowspan="2").bg-color-5 Técnica / Operativa
              td.br-2 Consecuencia Generación intermitente.
              td.br-3 Suministro eléctrico limitado a pocas horas diarias (4 a 6 horas), lo que restringe el uso continuo y productivo de la energía.
            tr
              td.br-2 Altos costos operacionales (OPEX).
              td.br-3 Dependencia del diésel con altos costos de transporte, lo que incrementa significativamente el precio final del kWh frente al SIN.  

            tr
              td.br-2.fw-bold(rowspan="2").bg-color-5 Socioeconómica
              td.br-2 Afectaciones en salud y educación.
              td.br-3 Baja productividad local.
            tr
              td.br-2 Limitaciones para la refrigeración de medicamentos y vacunas, y reducción del acceso a tecnologías y horarios extendidos en centros educativos.
              td.br-3 Imposibilidad de operar microempresas, conservar alimentos y desarrollar actividades económicas sostenibles.

            tr
              td.br-2.fw-bold.bg-color-5 Ambiental
              td.br-2 Contaminación y riesgos ambientales.
              td.br-3 Emisiones atmosféricas y acústicas, junto con riesgos por manejo de combustibles en ecosistemas sensibles.
            




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
