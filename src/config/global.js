export default {
  global: {
    Name: 'Contexto rural energético.',
    Description:
      'Este material de formación introduce al aprendiz en el panorama de la energización en Colombia. Su objetivo es establecer la base conceptual necesaria para el análisis de alternativas. El documento aborda la problemática central de las Zonas No Interconectadas (ZNI), detallando sus desafíos sociales, económicos y ambientales. Adicionalmente, el material proporciona el marco institucional y normativo clave (MME, IPSE, CREG) y la clasificación fundamental de las fuentes de energía (convencionales y no convencionales), permitiendo al aprendiz describir e interpretar el escenario actual y la justificación para la búsqueda de soluciones sostenibles y descentralizadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La problemática y el contexto nacional',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo e institucional',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación y potencial de las fuentes energéticas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La problemática y el contexto nacional',
      referencia:
        'IPSE. (2023). ¿Te imaginas vivir sin electricidad? Para muchas personas en Colombia esta es una realidad cotidiana .',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uSUA_wUdPI0',
    },
    {
      tema: 'Marco normativo e institucional',
      referencia: ' IPSE. (2022). ¿Qué son las Zonas No Interconectadas?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4BBWlQXeBX0',
    },
    {
      tema: 'Clasificación y potencial de las fuentes energéticas',
      referencia:
        'Ecología Verde. (2018). ENERGÍAS RENOVABLES y NO RENOVABLES - Tipos de energía.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Og6C1HyeaBs',
    },
  ],
  glosario: [
    {
      termino: 'Biomasa',
      significado:
        'materia orgánica de origen vegetal o animal que puede ser aprovechada como fuente de energía, ya sea por combustión o mediante procesos como la digestión anaeróbica para producir biogás.',
    },
    {
      termino: 'Carbón mineral',
      significado:
        'combustible fósil de origen orgánico, altamente contaminante, que se clasifica como una fuente de energía convencional y no renovable debido a su consumo limitado.',
    },
    {
      termino: 'Diésel',
      significado:
        'combustible fósil derivado del petróleo, utilizado comúnmente en las zni para la generación eléctrica local mediante plantas térmicas. su alto costo e impacto ambiental justifican el análisis de alternativas.',
    },
    {
      termino: 'Fuente de energía convencional',
      significado:
        'fuentes de energía ampliamente utilizadas, con tecnología madura y alto volumen de producción, siendo en su mayoría los combustibles fósiles (carbón, petróleo y gas).',
    },
    {
      termino: 'Fuente de energía no convencional (FNC)',
      significado:
        'fuentes de energía de reciente desarrollo tecnológico en el país, o que se utilizan de forma marginal, siendo las renovables (solar, eólica, biomasa) el principal ejemplo.',
    },
    {
      termino: 'Generación intermitente',
      significado:
        'servicio de suministro eléctrico que no es continuo (24 horas al día), sino que se restringe a horarios limitados (ejemplo: 4 a 6 horas diarias), común en las zni que dependen del diésel.',
    },
    {
      termino: 'IPSE',
      significado:
        'siglas del instituto de planificación y promoción de soluciones energéticas para las zonas no interconectadas. es la entidad promotora del gobierno nacional para la electrificación rural.',
    },
    {
      termino: 'PNER',
      significado:
        'siglas del plan nacional de electrificación rural. es el programa que establece la estrategia y las metas del gobierno para llevar cobertura eléctrica a las zonas rurales dispersas de colombia.',
    },
    {
      termino: 'Sostenibilidad energética',
      significado:
        'principio basado en el equilibrio de los tres pilares (social, económico y ambiental) para asegurar que el suministro de energía sea equitativo, accesible y que minimice el daño al medio ambiente.',
    },
    {
      termino: 'Sistema interconectado nacional (SIN)',
      significado:
        'red extensa de infraestructura de generación, transmisión y distribución eléctrica que cubre la mayor parte del territorio colombiano. las grandes ciudades y la industria están conectadas a este sistema.',
    },
    {
      termino: 'Zonas no interconectadas (ZNI)',
      significado:
        'áreas geográficas que, por su lejanía, dispersión o alto costo logístico, no están físicamente conectadas a la red principal del SIN. es el foco de la problemática analizada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión de Regulación de Energía y Gas (CREG). (2020). Estructura tarifaria del servicio de energía eléctrica. (Resolución CREG 015 de 2018 y sus modificaciones).',
      link:
        'https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0015_2018.htm',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2099 de 2021: Por medio de la cual se dictan disposiciones para la Transición Energética, la dinamización del Mercado Energético, la reactivación económica del país y se dictan otras disposiciones. Diario Oficial No. 51.738.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=166326',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022). Plan Nacional de Desarrollo 2022-2026: Colombia Potencia Mundial de la Vida. (Capítulo sobre Transición Energética).',
      link: 'https://www.dnp.gov.co/plan-nacional-desarrollo/pnd-2022-2026',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (2017). Towards a Circular Economy: A business case for energy efficiency.',
      link:
        'https://content.ellenmacarthurfoundation.org/m/4384c08da576329c/original/Towards-a-circular-economy-Business-rationale-for-an-accelerated-transition.pdf',
    },
    {
      referencia:
        'IPSE. (2023). Caracterización de las ZNI. Instituto de Planificación y Promoción de Soluciones Energéticas para las Zonas No Interconectadas.',
      link: 'https://ipse.gov.co/cnm/caracterizacion-energetica-de-las-zni/',
    },
    {
      referencia:
        'Naciones Unidas. (1987). Informe de la Comisión Mundial sobre Medio Ambiente y Desarrollo: Nuestro Futuro Común (Informe Brundtland). Asamblea General de las Naciones Unidas.',
      link:
        'https://www.ecominga.uqam.ca/PDF/BIBLIOGRAPHIE/GUIDE_LECTURE_1/CMMAD-Informe-Comision-Brundtland-sobre-Medio-Ambiente-Desarrollo.pdf',
    },
    {
      referencia:
        'Oikonomou, V. A., Gielen, D. J., & Rübbelke, D. (2020). Energy Efficiency and the Three Pillars of Sustainable Development: A Concise Review. Energy Policy, 137(1), 111100.',
      link:
        'https://www.ecominga.uqam.ca/PDF/BIBLIOGRAPHIE/GUIDE_LECTURE_1/CMMAD-Informe-Comision-Brundtland-sobre-Medio-Ambiente-Desarrollo.pdf',
    },
    {
      referencia:
        'Rincón, J. M., & Rincón, A. E. (2021). Análisis de Ciclo de Vida (ACV) como herramienta para la evaluación de sostenibilidad de proyectos energéticos. Revista de la Escuela Colombiana de Ingeniería, 120(2), 54-67.',
      link:
        'https://www.raco.cat/index.php/afinidad/article/download/276501/364433',
    },
    {
      referencia:
        'UPME. (2025). Guías Plan Energético Rural Sostenible (PERS). Sistema de Información Minero Energético de Colombia (SIMEC).',
      link:
        'https://www.upme.gov.co/simec/planeacion-energetica/plan-energetico-rural-sostenible-pers/guias-pers/',
    },
    {
      referencia:
        'UPME. (2019). Plan Indicativo de Expansión de Cobertura (PIEC) 2019-2023. Unidad de Planeación Minero Energética.',
      link: 'https://www1.upme.gov.co/siel/PIEC/2019-23/PIEC_2019-2023_VF.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '-- ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
