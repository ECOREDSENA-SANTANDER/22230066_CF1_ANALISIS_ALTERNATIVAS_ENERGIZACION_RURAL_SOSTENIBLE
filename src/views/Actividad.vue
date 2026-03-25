<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del CF',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza principalmente a las Zonas No Interconectadas (ZNI)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta industrialización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conexión directa al sistema eléctrico nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una consecuencia social de la falta de energía en las ZNI?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora en la calidad educativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitación en servicios básicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 3,
          texto: '¿Qué sistema NO está disponible en las ZNI?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema solar autónomo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema Interconectado Nacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 4,
          texto: '¿Cuál es una consecuencia económica de la falta de energía?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor productividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento del empleo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 5,
          texto: '¿Por qué se requieren soluciones sostenibles en las ZNI?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para aumentar el consumo energético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reemplazar todas las tecnologías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de fuentes energéticas son el carbón y el petróleo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Renovables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alternativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes es una fuente no convencional de energía?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gas natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carbón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 8,
          texto: '¿Qué entidad regula el sector energético en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Educación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comisión de Regulación de Energía y Gas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 9,
          texto: '¿Cuál es el objetivo principal de la electrificación rural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la exportación de energía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el uso de tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 10,
          texto: '¿Qué energía aprovecha la radiación del sol?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eólica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hidráulica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 11,
          texto: '¿Cuál es una ventaja de las energías renovables?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son contaminantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son inagotables a corto plazo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 12,
          texto:
            '¿Qué problema ambiental se asocia al uso de combustibles fósiles?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminución del oxígeno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumento de biodiversidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 13,
          texto: '¿Qué tipo de energía utiliza el viento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eólica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 14,
          texto: '¿Qué permite el marco normativo del sector energético?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar regulaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la producción energética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 15,
          texto: '¿Qué es la biomasa como fuente energética?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Energía del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Energía del viento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 16,
          texto: '¿Cuál es una limitación común en las ZNI?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exceso de infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta conectividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 17,
          texto: '¿Qué tipo de tecnología es clave en zonas rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Energía nuclear.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Energías renovables descentralizadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 18,
          texto: '¿Qué entidad define políticas públicas energéticas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Minas y Energía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ministerio de Cultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 19,
          texto: '¿Qué busca el uso de energías limpias en las ZNI?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la contaminación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir costos únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una característica de las energías no convencionales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de petróleo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta contaminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Contexto rural energético.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo el Contexto rural energético.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
