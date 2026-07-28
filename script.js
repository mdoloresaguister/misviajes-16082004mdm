// 1. TU BASE DE DATOS DE VIAJES (Con imágenes reales de cada destino)
window.misViajes = [
    
    {
        destino: "HUELVA",
        pais: "España",
        fecha: "Abril de 2007",
        lat: 37.2583, 
        lng: -6.9508,
        imagen: "imagenes/huelva2007.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1nYc4b9e2RXbZQEQDmSU5qBMyZx3NHQX8?usp=drive_link"
    },
    {
        destino: "PARÍS",
        pais: "Francia",
        fecha: "Agosto de 2008",
        lat: 48.8566,
        lng: 2.3522,
        imagen: "imagenes/paris2008.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1z5qUYtblFYqwAHBw1ht6sTZAEr3FeArr?usp=drive_link"
    },
    {
        destino: "TENERIFE",
        pais: "España",
        fecha: "Julio de 2009",
        lat: 28.2916, 
        lng: -16.6291,
        imagen: "imagenes/tenerife2009.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1aJewsUgpb_zTCO0B7zg2M6tgtk4mcCy5?usp=drive_link"
    },
    {
        destino: "PARÍS - HONEY MOON",
        pais: "Francia",
        fecha: "Julio de 2010",
        lat: 48.8569,
        lng: 2.3529,
        imagen: "imagenes/paris2010.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1ks9cawk2D-uJWOADaXI16FmrmA_zkbbP?usp=drive_link"
    },
    {
        destino: "SEGOVIA - MADRID - ARANJUEZ",
        pais: "España",
        fecha: "Noviembre de 2012",
        lat: 40.9480,
        lng: -4.1183,
        imagen: "imagenes/segovia2012.jpg", // Acueducto de Segovia
        linkDrive: "https://drive.google.com/drive/folders/1D1ZJx_0i6SptvipDUXBgrBHAp9jHDHAB?usp=drive_link"
    },
    {
        destino: "ALMERIMAR - SEMANA SANTA",
        pais: "España",
        fecha: "Marzo de 2013",
        lat: 36.7025, // Variación sutil en el decimal para evitar solapamientos exactos
        lng: -2.7955,
        imagen: "imagenes/almerimar2013.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1-bsmVAsB43j7kVmjSVn5ZUApGkGIlnSw?usp=drive_link"
    },
    {
        destino: "ALPUJARRA GRANADINA",
        pais: "España",
        fecha: "Noviembre de 2013",
        lat: 36.9318,
        lng: -3.3421,
        imagen: "imagenes/alpujarra2013.jpg",
        linkDrive: "https://drive.google.com/drive/folders/129kxK115lPFq2nZ007G1H5Vr4V13PUA4?usp=drive_link"
    },
    {
        destino: "BAÑOS DE LA ENCINA",
        pais: "España",
        fecha: "Febrero de 2014",
        lat: 38.1697,
        lng: -3.7744,
        imagen: "imagenes/banosencina2014.jpg", // Castillo andaluz antiguo
        linkDrive: "https://drive.google.com/drive/folders/1p5V6OMJVk3GcADdewAGHtnVjbidn0k5I?usp=drive_link"
    },
    {
        destino: "Feria de los Pueblos Jaén",
        pais: "España",
        fecha: "Marzo de 2014",
        lat: 37.7796,
        lng: -3.7849,
        imagen: "imagenes/feriapueblos2014.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Lu4VotxEQwxxoQQcJRNyvWOh3LsRScDg?usp=drive_link"
    },
    {
        destino: "SALAMANCA - VALLE DEL JERTE - ALMAGRO",
        pais: "España",
        fecha: "Abril de 2014",
        lat: 40.2185,
        lng: -5.9234,
        imagen: "imagenes/salamanca2014.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1DSn1crZt-JKBZu86ZxULZPHnyjoWm0lH?usp=drive_link"
    },
    {
        destino: "ALGECIRAS Y TARIFA",
        pais: "España",
        fecha: "Agosto de 2014",
        lat: 36.0754,
        lng: -5.5186,
        imagen: "imagenes/algeciras2014.jpg",
        linkDrive: "https://drive.google.com/drive/folders/155ZulaHZceFOCyLU3u2JhXiFQ9GOx5tQ?usp=drive_link"
    },
    {
        destino: "CABO DE GATA",
        pais: "España",
        fecha: "Noviembre de 2014",
        lat: 36.7589,
        lng: -2.2031,
        imagen: "imagenes/cabodegata2014.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1S8Zm-lFuiVktC_G4X4QHE-iuog6z38gf?usp=drive_link"
    },
    {
        destino: "ASTURIAS Y CANTABRIA",
        pais: "España",
        fecha: "Enero de 2015",
        lat: 43.3000,
        lng: -4.5000,
        imagen: "imagenes/asturias2015.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Cg9ychoiJe4TLkGbhNCSDY2Zz-dsLWNf?usp=drive_link"
    },
    {
        destino: "SWINDON",
        pais: "Reino Unido",
        fecha: "Agosto de 2015",
        lat: 51.5558,
        lng: -1.7797,
        imagen: "imagenes/swindon2015.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1ZZHjsiHa9R1PYJz5wPp9vQlHTNZ8CuYI?usp=drive_link"
    },
    {
        destino: "ALMERIMAR - AMIGOS",
        pais: "España",
        fecha: "Octubre de 2015",
        lat: 36.7029, // Nueva variación en los decimales para esta fecha
        lng: -2.7959,
        imagen: "imagenes/almerimar10_2015.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1nPRMR1Pnt_9Vqsc95MY8qvSTg1F4b_KL?usp=drive_link"
    },
    {
        destino: "SETENIL - SANLÚCAR - CHIPIONA Y PUERTO DE SANTA MARÍA",
        pais: "España",
        fecha: "Enero de 2016",
        lat: 36.7201,
        lng: -6.2104,
        imagen: "imagenes/setenil2016.jpg", // Cádiz costa
        linkDrive: "https://drive.google.com/drive/folders/12y3gGR6JHzQ6omKjsz4C_uHteCHEWCcX?usp=drive_link"
    },
    {
        destino: "MADRID",
        pais: "España",
        fecha: "Mayo de 2016",
        lat: 40.4167,
        lng: -3.7037,
        imagen: "imagenes/madrid2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1O9zZ9XKD2Ow0hfhWcriG1u9h3xSO6tlB?usp=drive_link"
    },
    {
        destino: "CRUCERO ITALIA",
        pais: "Italia",
        fecha: "Julio de 2016",
        lat: 42.3000, // Coordenada en el Mar Tirreno central para situar el barco cerca de la costa italiana
        lng: 11.5000,
        imagen: "imagenes/cruceroitalia2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1p6mbMPrl2p9uFsSSqfoSfqUWwOTCqL0_?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Julio de 2016",
        lat: 36.7032, // Variación en el cuarto decimal
        lng: -2.7962,
        imagen: "imagenes/almerimar07_2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1wC7_d-7myaOlhN5ACB1Eq5kEPbVtXdLY?usp=drive_link"
    },
    {
        destino: "RONDA Y ANTEQUERA",
        pais: "España",
        fecha: "Agosto de 2016",
        lat: 36.8850, // Punto medio estratégico entre ambas localidades malagueñas
        lng: -4.8010,
        imagen: "imagenes/ronda2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1qKbYg29_Yn7E_t6YVHx2WLyIZI4Edt1N?usp=drive_link"
    },
    {
        destino: "UBEDA y BAEZA",
        pais: "España",
        fecha: "Noviembre de 2016",
        lat: 37.9890, // Centro de Úbeda
        lng: -3.3850,
        imagen: "imagenes/ubeda2016.jpg", // Plaza monumental renacentista
        linkDrive: "https://drive.google.com/drive/folders/178-fV5tbV-PgUeQOjgGQejjmZ4Fc-o0R?usp=drive_link"
    },
    {
        destino: "OXFORD, BATH y LONDRES",
        pais: "Reino Unido",
        fecha: "Diciembre de 2016",
        lat: 51.5800, // Punto intermedio entre Oxford, Bath y Londres
        lng: -1.3500,
        imagen: "imagenes/oxford2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/15WtxnOUQv1hu8lC2tHg2UPSU8Gn20qvr?usp=drive_link"
    },
    {
        destino: "EXTREMADURA",
        pais: "España",
        fecha: "Enero de 2017",
        lat: 39.4000, // Coordenada central de la región extremeña
        lng: -6.1500,
        imagen: "imagenes/extremadura2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1t2VfPpXNn9298DJJkqEazM68LG74TcOs?usp=drive_link"
    },
    {
        destino: "GRANADA - PASEO DE LOS TRISTES",
        pais: "España",
        fecha: "Enero de 2017",
        lat: 37.1793,
        lng: -3.5908,
        imagen: "imagenes/granada2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1dmLLxBG8mB3wKN5FpOeyzPqHFSMJzoRi?usp=drive_link"
    },
    {
        destino: "LONDRES - AMIGOS",
        pais: "Reino Unido",
        fecha: "Marzo de 2017",
        lat: 51.5074,
        lng: -0.1278,
        imagen: "imagenes/londres2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1VMt3YJzSF1DzDAUCdsxL94vkYNDYtUr_?usp=drive_link"
    },
    {
        destino: "SIERRA NEVADA - NOCHE EN BLANCO",
        pais: "España",
        fecha: "Marzo de 2017",
        lat: 37.0951,
        lng: -3.4012,
        imagen: "imagenes/sierranevada2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Bifj5eAEMJu1Wt74Ws_RnbCPU24v9sJU?usp=drive_link"
    },
    {
        destino: "ALMERIMAR Y ROQUETAS",
        pais: "España",
        fecha: "Abril de 2017",
        lat: 36.7320, // Punto intermedio entre la costa de Almerimar y Roquetas de Mar
        lng: -2.7110,
        imagen: "imagenes/roquetas04_2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1T8a6cZHmsVSotzb-sHBQeYLmJhxBfy0C?usp=drive_link"
    },
    {
        destino: "ALMERÍA - COMIDA FRANCESA",
        pais: "España",
        fecha: "Abril de 2017",
        lat: 36.8340,
        lng: -2.4637,
        imagen: "imagenes/almeria2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/176tUmU0YA1GMbidDhbkEdwWrviACjYIi?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Julio de 2017",
        lat: 36.7035, // Variación en el cuarto decimal
        lng: -2.7965,
        imagen: "imagenes/almerimar07_2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/105Ur4dcMOMQ-9oh5K_7_c_01czclmtkr?usp=drive_link"
    },
    {
        destino: "EL EJIDO",
        pais: "España",
        fecha: "Julio de 2017",
        lat: 36.7761,
        lng: -2.8136,
        imagen: "imagenes/elejido07_2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1wI341GFw0wpwrwBLeDEWPoR4KQQzz9GA?usp=drive_link"
    },
    {
        destino: "ITALIA",
        pais: "Italia",
        fecha: "Julio de 2017",
        lat: 41.8719, // Coordenada central del país (cerca de Roma)
        lng: 12.5674,
        imagen: "imagenes/italia2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1ctOVj9eXmUnCydgaN0CrVO5OVaUjvcej?usp=drive_link"
    },
    {
        destino: "GALICIA",
        pais: "España",
        fecha: "Agosto de 2017",
        lat: 42.5751, // Punto céntrico de la comunidad autónoma gallega
        lng: -8.1338,
        imagen: "imagenes/galicia2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Kf5VDfnnyJgk-UACLmFLakKJsS9_wGnn?usp=drive_link"
    },
    {
        destino: "CABO DE GATA - BAUTISMO BUCEO MANOLO",
        pais: "España",
        fecha: "Octubre de 2017",
        lat: 36.7592, // Variación para el destino de buceo específico
        lng: -2.2035,
        imagen: "imagenes/buceo2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1q7yIXqStv2VJbSXopYmAbyChPiiDW5zo?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Noviembre de 2017",
        lat: 36.7038, // Variación en el cuarto decimal
        lng: -2.7968,
        imagen: "imagenes/almerimar11_2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1xXnoMD_QqzCXHTU5NZYZ24NClrQcPtpI?usp=drive_link"
    },
    {
        destino: "BRIGHTON",
        pais: "Reino Unido",
        fecha: "Diciembre de 2017",
        lat: 50.8225,
        lng: -0.1372,
        imagen: "imagenes/brighton2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1mYa8OJxx7geB32Rm4qPRBspNOQkWLQb7?usp=drive_link"
    },
    {
        destino: "LANZAROTE",
        pais: "España",
        fecha: "Enero de 2018",
        lat: 28.9630,
        lng: -13.6064,
        imagen: "imagenes/lanzarote2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1-bXnORCmtK6yZISlUlPclmQ8mYr1TjYc?usp=drive_link"
    },
    {
        destino: "MADRID",
        pais: "España",
        fecha: "Marzo de 2018",
        lat: 40.4169, // Ajuste milimétrico para diferenciar del anterior Madrid
        lng: -3.7035,
        imagen: "imagenes/madrid2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1yd5KtoUrBcXKmaA6xHl7G_j0m94Q9Gxs?usp=drive_link"
    },
    {
        destino: "ALMERIMAR - SAN JUAN",
        pais: "España",
        fecha: "Junio de 2018",
        lat: 36.7041,
        lng: -2.7971,
        imagen: "imagenes/almerimar06_2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1NhwkslJM8Y2umhGJAdQnWiswVLnOSULX?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Julio de 2018",
        lat: 36.7044,
        lng: -2.7974,
        imagen: "imagenes/almerimar07_2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1avsn1MZd6cBUxY97dA7ObSxBcXU5is9_?usp=drive_link"
    },
    {
        destino: "NEW YORK",
        pais: "Estados Unidos",
        fecha: "Julio de 2018",
        lat: 40.7128,
        lng: -74.0060,
        imagen: "imagenes/newyork2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1KhUIuDmzc-thjmZp4giqx2D_uhCXLcef?usp=drive_link"
    },
    {
        destino: "NIÁGARA",
        pais: "Canadá / Estados Unidos",
        fecha: "Julio de 2018",
        lat: 43.0962,
        lng: -79.0377,
        imagen: "imagenes/niagara2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1KhUIuDmzc-thjmZp4giqx2D_uhCXLcef?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Agosto de 2018",
        lat: 36.7047,
        lng: -2.7977,
        imagen: "imagenes/almerimar08_2018.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1t4s59imI2MVwCUGF3qnHlW-VTeYqAz9m?usp=drive_link"
    },
    {
        destino: "FONTANAR - AMIGOS",
        pais: "España",
        fecha: "Agosto de 2018",
        lat: 37.7958, // Fontanar (Jaén)
        lng: -3.1256,
        imagen: "imagenes/fontanar2018.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1l3KjUfXPUM6PV0VRfy8LfJmrj12XrBoG?usp=drive_link"
    },
    {
        destino: "TOLEDO",
        pais: "España",
        fecha: "Octubre de 2018",
        lat: 39.8628,
        lng: -4.0273,
        imagen: "imagenes/toledo2018.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1ZVQ5zoSgD2dPyBHq6Wrxve_MmNNxLlRj?usp=drive_link"
    },
    {
        destino: "EDIMBURGO",
        pais: "Reino Unido",
        fecha: "Diciembre de 2018",
        lat: 55.9533,
        lng: -3.1883,
        imagen: "imagenes/edimburgo2018.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1Fte81PhpzSn0338pdvDE5MG13jNlZQYD?usp=drive_link"
    },
    {
        destino: "LAS PALMAS DE GRAN CANARIA",
        pais: "España",
        fecha: "Enero de 2019",
        lat: 28.1235,
        lng: -15.4363,
        imagen: "imagenes/laspalmas2019.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1XRGOfpPRgdSd4JJKzNsI55DcQl-OTG90?usp=drive_link"
    },
    {
        destino: "CÁDIZ Y SEVILLA - AMIGOS",
        pais: "España",
        fecha: "Febrero de 2019",
        lat: 36.9500, // Punto intermedio entre ambas provincias andaluzas
        lng: -6.1000,
        imagen: "imagenes/sevilla2019.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1SIvE0KO-dH8G3ePfIeEwuE5KGZPX4nSu?usp=drive_link"
    },
    {
        destino: "PARACAIDAS MANOLO",
        pais: "España",
        fecha: "Febrero de 2019",
        lat: 37.2947, // Centro de paracaidismo Skydive Spain (Aeródromo La Juliana, Sevilla)
        lng: -6.1632,
        imagen: "imagenes/paracaidas2019.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1tkmfYf2T-NXGc-WQAbnb1ORrg8JgQE_t?usp=drive_link"
    },
    {
        destino: "IBIZA",
        pais: "España",
        fecha: "Marzo de 2019",
        lat: 38.9067,
        lng: 1.4206,
        imagen: "imagenes/ibiza2019.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1AwdHEeDc0D1jMbSDM9wC_kPWFkPOasAJ?usp=drive_link"
    },
    {
        destino: "BRIGHTON",
        pais: "Reino Unido",
        fecha: "Abril de 2019",
        lat: 50.8229, // Pequeño ajuste decimal sobre el anterior viaje a Brighton
        lng: -0.1368,
        imagen: "imagenes/brighton2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1cwcBlMnwxrAyt_9y7eBa4UoIT4hncdhn?usp=drive_link"
    },
    {
        destino: "PRIEGO, CABRA Y MONTEFRÍO",
        pais: "España",
        fecha: "Junio de 2019",
        lat: 37.3500, // Coordenada central del triángulo Priego de Córdoba - Cabra - Montefrío
        lng: -4.3000,
        imagen: "imagenes/priego2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1exNcoZiXzlV-dn-ZpngspaqMQ5y1eJ8h?usp=drive_link"
    },
    {
        destino: "VENECIA Y VIENA",
        pais: "Italia / Austria",
        fecha: "Julio de 2019",
        lat: 46.5000, // Punto intermedio geográfico entre el norte de Italia y Austria
        lng: 14.3000,
        imagen: "imagenes/venecia2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/11hyMM_q_TvhVjIwBSNJ8L2aIH4KN1y2G?usp=drive_link"
    }, 
    {
        destino: "CAZORLA - AMIGOS",
        pais: "España",
        fecha: "Agosto de 2019",
        lat: 37.7958, // Fontanar (Jaén)
        lng: -3.1256,
        imagen: "imagenes/cazorla2019.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1fpqp57rsIbKS0MIe_ALqZYwPEkO_TWyV?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Agosto de 2019",
        lat: 36.7053, // Variación decimal
        lng: -2.7983,
        imagen: "imagenes/almerimar08_2019.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1kF4fdG8wCC2r5RBJ4SGbs_-hv5pZPH1p?usp=drive_link"
    },
    {
        destino: "AMSTERDAM",
        pais: "Países Bajos",
        fecha: "Octubre de 2019",
        lat: 52.3676,
        lng: 4.9041,
        imagen: "imagenes/amsterdam2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1-qb11NyFV2a7Ud3HDNSH-1CAK7L9YnNY?usp=drive_link"
    }, 
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Octubre de 2019",
        lat: 36.7050, // Variación decimal
        lng: -2.7980,
        imagen: "imagenes/almerimar10_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1qYkLt4g3I22lezQMagl4gnH58CblLrEX?usp=drive_link"
    },
    {
        destino: "GRANADA - FSO",
        pais: "España",
        fecha: "Noviembre de 2019",
        lat: 37.1755, // Variación para el concierto de la Film Symphony Orchestra en Granada
        lng: -3.5925,
        imagen: "imagenes/granada11_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1qqaRpnzXR9QltFqRat1FF5sY8aQXl4yF?usp=drive_link"
    },
    {
        destino: "ALMERIMAR Y MOJACAR",
        pais: "España",
        fecha: "Diciembre de 2019",
        lat: 36.9030, // Coordenada intermedia estratégica entre la costa de Almerimar y Mojácar
        lng: -2.3140,
        imagen: "imagenes/almerimar12_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1EOGA5WqHtQeQ_uVqFMJEEywR6afhpGo3?usp=drive_link"
    },
    {
        destino: "GRANADA - COCHES ANTIGUOS TIO ALMUDENA",
        pais: "España",
        fecha: "Diciembre de 2019",
        lat: 37.1812, // Variación decimal para este evento en Granada
        lng: -3.5995,
        imagen: "imagenes/granada12_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1IN1L-3WXZB1NioQeKy4d9GjY5uQl7CFY?usp=drive_link"
    },
    {
        destino: "MIAMI",
        pais: "Estados Unidos",
        fecha: "Enero de 2020",
        lat: 25.7617,
        lng: -80.1918,
        imagen: "imagenes/miami2020.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1TFrdNSyRlYIzyFFdiJenp6mXwtfroqSg?usp=drive_linkE"
    },
    {
        destino: "LA RIOJA - LOGROÑO",
        pais: "España",
        fecha: "Marzo de 2020",
        lat: 42.3000,
        lng: -2.5000,
        imagen: "imagenes/rioja2020.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1HxDV4NicH5M2hjAESEvm79G3Y4pcr2Kj?usp=drive_link"
    },
    {
        destino: "ALMERÍA",
        pais: "España",
        fecha: "Enero de 2021",
        lat: 36.8345, // Pequeño ajuste para diferenciar de la anterior visita
        lng: -2.4642,
        imagen: "imagenes/almeria01_2021.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1JerkPHc0U6lLBpjxfvBh3pJj6SOs9UDD?usp=drive_link"
    },
    {
        destino: "TORRES - JAÉN",
        pais: "España",
        fecha: "Abril de 2021",
        lat: 37.7856, // Torres (Jaén), en plena Sierra Mágina
        lng: -3.5104,
        imagen: "imagenes/torres2021.jpg",
        linkDrive: "https://drive.google.com/drive/folders/10-81G_QKd-GRDe_1G_dpTsgHQQEYnH2L?usp=drive_link"
    },
    {
        destino: "MENORCA",
        pais: "España",
        fecha: "Agosto de 2021",
        lat: 39.9496, // Punto céntrico de la isla de Menorca
        lng: 4.1104,
        imagen: "imagenes/menorca2021.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Ne8nNLxT-4iaEtXPxOsLhRnL-V2_HdiA?usp=drive_link"
    },
    {
        destino: "ESTEPONA",
        pais: "España",
        fecha: "Enero de 2022",
        lat: 36.4256,
        lng: -5.1458,
        imagen: "imagenes/estepona2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/17tytNrYG25ujhqJQ8ZFb3aLk3T8-31mb?usp=drive_link"
    },
    {
        destino: "FUERTEVENTURA",
        pais: "España",
        fecha: "Enero de 2022",
        lat: 28.3587,
        lng: -14.0537,
        imagen: "imagenes/fuerteventura2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1q_0xcj1LpZip7pvnGMQRX00eDD3erCv-?usp=drive_link"
    },
    {
        destino: "MIRALRÍO (JAÉN)",
        pais: "España",
        fecha: "Marzo de 2022",
        lat: 38.0069,
        lng: -3.2982,
        imagen: "imagenes/miralrio2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1OIxM3PetB29rIxDQKzxYEeLBTjghgJYm?usp=drive_link"
    },
    {
        destino: "JAÉN",
        pais: "España",
        fecha: "Mayo de 2022",
        lat: 37.7796,
        lng: -3.7849,
        imagen: "imagenes/jaen2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1R_JGI6_eoJEraFTyelSybKtd2C8HHHvo?usp=drive_link"
    },
    {
        destino: "PALOMARES (ALMERÍA) - PARAMOTOR",
        pais: "España",
        fecha: "Junio de 2022",
        lat: 37.2486,
        lng: -1.7961,
        imagen: "imagenes/palomares2022.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1VGQEot3ZfjwNGW2PjIRUHyn-SqlxIzjH?usp=drive_link"
    },
    {
        destino: "NÁPOLES - POMPEYA - AMALFI",
        pais: "Italia",
        fecha: "Julio de 2022",
        lat: 40.7500, // Punto medio estratégico en la región de Campania (Italia)
        lng: 14.4300,
        imagen: "imagenes/napoles2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/18duyOUtibbUKdi3WHI4XgN1D0O56zRSF?usp=drive_link"
    },
    {
        destino: "CAZORLA Y CONCIERTO RAPHAEL",
        pais: "España",
        fecha: "Agosto de 2022",
        lat: 37.9140, // Ligera variación para este evento musical en Cazorla
        lng: -3.0028,
        imagen: "imagenes/cazorla2022.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/18GPHe5hOxZs7PJRRNHTxFFN_dJpynvq6?usp=drive_link"
    },
    {
        destino: "GRANADA - RESTAURANTE MARIA DE LA O",
        pais: "España",
        fecha: "Enero de 2023",
        lat: 37.1741, // Ubicación aproximada en el barrio de la Carretera de la Sierra en Granada
        lng: -3.5852,
        imagen: "imagenes/granada01_2023.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1wjZ74gtECM8sAPk9jktU-5dd6YpLAMjr?usp=drive_link"
    },
    {
        destino: "REPÚBLICA DOMINICANA (PUNTA CANA)",
        pais: "República Dominicana",
        fecha: "Enero de 2023",
        lat: 18.5601,
        lng: -68.3725,
        imagen: "imagenes/puntacana2023.jpg",
        linkDrive: "https://drive.google.com/drive/folders/18PUKJcM1nHn9sWUr2_OaxDibyXPl7oHt?usp=drive_link"
    },
    {
        destino: "MADRID - BURGOS - SAN SEBASTIÁN - NAVARRA",
        pais: "España",
        fecha: "Abril de 2023",
        lat: 42.6000, // Punto intermedio de la ruta hacia el norte de España
        lng: -2.3000,
        imagen: "imagenes/sansebastian2023.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1k__mnmXGLxUU40PmDNPmzjrvcnx2viv7?usp=drive_linkE"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Julio de 2023",
        lat: 36.7053, // Variación decimal
        lng: -2.7983,
        imagen: "imagenes/almerimar07_2023.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Le0t_ncsQzISO0Z1828MM_1Vk5oItBmI?usp=drive_link"
    },
    {
        destino: "JAPÓN",
        pais: "Japón",
        fecha: "Julio de 2023",
        lat: 35.6762, // Centrado en Tokio por defecto para ubicar el país
        lng: 139.6503,
        imagen: "imagenes/japon2023.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1wCEnNDpj4F3Xk7y8SBLKayrzTyTPKuwv?usp=drive_link"
    },
    {
        destino: "MADRID - LA GRANJA",
        pais: "España",
        fecha: "Julio de 2023",
        lat: 40.8914, // Punto medio entre Madrid capital y San Ildefonso (La Granja)
        lng: -3.9850,
        imagen: "imagenes/madrid2023.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1k__mnmXGLxUU40PmDNPmzjrvcnx2viv7?usp=drive_link"
    },
    {
        destino: "CANGAS DEL NARCEA",
        pais: "España",
        fecha: "Octubre de 2023",
        lat: 40.8914, // Punto medio entre Madrid capital y San Ildefonso (La Granja)
        lng: -3.9850,
        imagen: "imagenes/cangas2023.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1d0iFp-PH_fazsXA7569IFHN8OfMleSsK?usp=drive_link"
    },
    {
        destino: "CÓRDOBA",
        pais: "España",
        fecha: "Octubre de 2023",
        lat: 37.8882,
        lng: -4.7794,
        imagen: "imagenes/cordoba2023.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1YdbyA6nKSeu-4T5juJpIe8co7Cprvtzg?usp=drive_link"
    },
    {
        destino: "LA PALMA",
        pais: "España",
        fecha: "Enero de 2024",
        lat: 28.6835,
        lng: -17.8610,
        imagen: "imagenes/lapalma2024.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1lH3VlaQuUl50jYPgd6bbE5bCUV07j8M1?usp=drive_link"
    },
    {
        destino: "MECINA BOMBARÓ (GRANADA) - AMIGOS",
        pais: "España",
        fecha: "Febrero de 2024",
        lat: 36.9535,
        lng: -3.0903,
        imagen: "imagenes/mecinabombaro2024.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1oBuYq8N7GxPjgfD7XctSzRWcEu_HLr3K?usp=drive_link"
    },
    {
        destino: "BÉLGICA",
        pais: "Bélgica",
        fecha: "Febrero de 2024",
        lat: 50.8503, // Centrado por defecto en Bruselas
        lng: 4.3517,
        imagen: "", 
        linkDrive: "https://drive.google.com/drive/folders/1F6byTPRsGvnbQuSHqzcoLbRRTnjG7FDf?usp=drive_link"
    },
    {
        destino: "GRANADA - PALACIO DE LOS PATOS",
        pais: "España",
        fecha: "Marzo de 2024",
        lat: 37.1729, // Ajuste para el emblemático hotel céntrico de Granada
        lng: -3.6015,
        imagen: "imagenes/granada03_2024.jpg",
        linkDrive: "https://drive.google.com/drive/folders/10weS51mRIyGGHt7S_S3x3Pp5TeLvXDm2?usp=drive_link"
    },
    {
        destino: "BAEZA",
        pais: "España",
        fecha: "Mayo de 2024",
        lat: 37.9944, // Pequeño ajuste decimal sobre la anterior Úbeda/Baeza
        lng: -3.4710,
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        linkDrive: "https://drive.google.com/drive/folders/1-0Kp-vT8lAi9gTLpQyPZRNxxdwKXP53b?usp=drive_link"
    },
    {
        destino: "TAILANDIA",
        pais: "Tailandia",
        fecha: "Julio de 2024",
        lat: 13.7563, // Centrado por defecto en Bangkok
        lng: 100.5018,
        imagen: "imagenes/tailandia2024.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1BrPgXfwjanZCmt7eDfVaw4PUyewey48y?usp=drive_link"
    },
    {
        destino: "CANGAS DEL NARCEA",
        pais: "España",
        fecha: "Agosto de 2024",
        lat: 43.1754,
        lng: -6.5502,
        imagen: "imagenes/cangas2024.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1-JjHj_i93Cs6HGsZYZNJbMz9VIUZzWk4?usp=drive_link"
    },
    {
        destino: "GRANADA PRIMAS MALLORCA",
        pais: "España",
        fecha: "Agosto de 2024",
        lat: 37.1765, // Variación para este encuentro familiar
        lng: -3.5895,
        imagen: "imagenes/granada2024.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1-LVeSmnavowQbzKbL-cT3imQdnc634or?usp=drive_link"
    },
    {
        destino: "ALSACIA",
        pais: "Francia",
        fecha: "Diciembre de 2024",
        lat: 48.3000, // Coordenada central de la región francesa de la Alsacia
        lng: 7.4500,
        imagen: "imagenes/alsacia2024.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1TiguB9jkRwjfftFBgQBFdPfTevqPUqWr?usp=drive_link"
    },
    {
        destino: "EL HIERRO - CANARIAS",
        pais: "España",
        fecha: "Enero de 2025",
        lat: 27.7342,
        lng: -18.0163,
        imagen: "imagenes/elhierro2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/10BOWvXtboHdQJ4LtW1bOjrhP8AyytMWJ?usp=drive_link"
    },
    {
        destino: "GRANADA - VIAJE EN GLOBO",
        pais: "España",
        fecha: "Enero de 2025",
        lat: 37.1825, // Variación decimal para situar la zona de despegue/vuelo
        lng: -3.6120,
        imagen: "imagenes/granada01_2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1yDRqNGhutLGOL-L35x2QV12X4X2yR3H4?usp=drive_link"
    },
    {
        destino: "CANTABRIA",
        pais: "España",
        fecha: "Mayo de 2025",
        lat: 43.2000, // Ajuste para diferenciar del anterior viaje Cantabria-Asturias
        lng: -4.0000,
        imagen: "imagenes/cantabria2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1An1KLGRskm3sRxXKlK0sm4vITeMl-Ihd?usp=drive_link"
    },
    {
        destino: "TREVELEZ",
        pais: "España",
        fecha: "Mayo de 2025",
        lat: 36.9257, // Trévelez, en plena Alpujarra Granadina
        lng: -3.2642,
        imagen: "imagenes/trevelez2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1NA6-8JreuRcTq1oVv6uDX0JVxEWpG68l?usp=drive_link"
    },
    {
        destino: "CANCÚN",
        pais: "México",
        fecha: "Julio de 2025",
        lat: 21.1619,
        lng: -86.8515,
        imagen: "imagenes/cancun2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1mMQ2txKCDmMeUARCT_uipa56UAnBfNYO?usp=drive_link"
    },
    {
        destino: "CANGAS DEL NARCEA",
        pais: "España",
        fecha: "Agosto de 2025",
        lat: 43.1758, // Variación de decimales sobre la visita del año anterior
        lng: -6.5495,
        imagen: "imagenes/cangas2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1plxPaVFERuHPVGzZDdjFQ723BFMI95SC?usp=drive_link"
    },
    {
        destino: "GEODA DE PULPÍ",
        pais: "España",
        fecha: "Septiembre de 2025",
        lat: 37.3615, // Ubicación específica de la geoda en el Pilar de Jaravía (Pulpí)
        lng: -1.7018,
        imagen: "imagenes/geodapulpi2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1YLjWZypA9yWiSANm1VL2DZw6wCc-B4qj?usp=drive_link"
    },
    {
        destino: "LA HERRADURA - BUCEO",
        pais: "España",
        fecha: "Septiembre de 2025",
        lat: 36.7346, // La Herradura (Granada)
        lng: -3.7383,
        imagen: "imagenes/laherradura2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1-FmCz725Qf5nj_FX97KF-AfVDDrmCrFb?usp=drive_link"
    },
    {
        destino: "CÁDIZ",
        pais: "España",
        fecha: "Noviembre de 2025",
        lat: 36.5271, // Ciudad de Cádiz capital
        lng: -6.2886,
        imagen: "imagenes/cadiz2025.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1TC3S8a7lxDbZR9j4B4zvt97d-3zh0APm?usp=drive_link"
    },
    {
        destino: "CABO VERDE",
        pais: "Cabo Verde",
        fecha: "Enero de 2026",
        lat: 16.0021, // Coordenada intermedia del archipiélago de Cabo Verde
        lng: -24.0132,
        imagen: "imagenes/caboverde2026.jpg", 
        linkDrive: "https://drive.google.com/drive/folders/1ddULrG0Uw45YVgvoF4GgOKWl9D9ARXGy?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "A lo largo de los años",
        lat: 36.7056, // Variación céntrica para el recopilatorio general histórico
        lng: -2.7986,
        imagen: "imagenes/almerimar.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1fUQgliMvZLwDpsRkt21G1Tj16dYpFqj3?usp=drive_link"
    }
];


// 2. FUNCIÓN PRINCIPAL - UBICACIÓN DE ETIQUETAS MEJORADA PARA EVITAR CORTES
function cargarViajes(viajesAMostrar = misViajes) {
    const contenedor = document.getElementById("contenedor-viajes");
    
    // 🛡️ ESCUDO DE SEGURIDAD: Si no existe el contenedor (ej: en mapa.html), 
    // detenemos la función inmediatamente y evitamos que el código se rompa.
    if (!contenedor) {
        console.log("Vista de mapa detectada: Saltando renderizado de tarjetas.");
        return; 
    }

    contenedor.innerHTML = "";
    document.getElementById("numero-viajes").innerText = viajesAMostrar.length;

    const gamaColoresArmonicos = [
        "#a98467", "#84a59d", "#bfb48f", "#557a6b", 
        "#9a7b56", "#436a5a", "#bd937d", "#2d4a43"
    ];

    viajesAMostrar.forEach((viaje, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-viaje");

        const anoText = viaje.fecha.slice(-4); 
        const anoNumero = parseInt(anoText) || 2000;
        const numeroFiltradoViaje = index + 1;
        const colorAsignado = gamaColoresArmonicos[anoNumero % gamaColoresArmonicos.length];

       // 🌟 NUEVO: Le aplicamos el marco dynamic directamente a la tarjeta con su color asignado
        // Le damos un grosor de 2px (o 1px si lo prefieres más fino) y estilo sólido
        tarjeta.style.border = `2px solid ${colorAsignado}`;

        // Calculamos un tamaño de letra inteligente según la longitud del texto
        // Si tiene más de 25 caracteres (títulos largos), bajamos la fuente a 0.9rem o 0.8rem
        let tamanoTitulo = "1.1rem";
        if (viaje.destino.length > 35) {
            tamanoTitulo = "0.8rem";
        } else if (viaje.destino.length > 20) {
            tamanoTitulo = "0.95rem";
        }

        tarjeta.innerHTML = `
            <img src="${viaje.imagen}" alt="Fotografía de ${viaje.destino}" onclick="ampliarImagen(this)" style="object-fit: cover; height: 160px; width: 150px; flex-shrink: 0;">
            
            <div class="contenido-tarjeta" style="display: flex; flex-direction: column; justify-content: space-between; height: 160px; max-height: 160px; padding: 1rem; box-sizing: border-box; width: 100%; overflow: hidden;">
                
                <div class="fila-superior-tarjeta" style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; gap: 0.5rem; height: 45px; overflow: hidden;">
                    <h3 style="margin: 0; font-size: ${tamanoTitulo}; color: #2d4a43; line-height: 1.2; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${viaje.destino}</h3>
                    <span class="etiqueta-numero" style="color: #7d7265; font-size: 0.85rem; font-weight: 700; white-space: nowrap; padding-top: 2px;">Nº ${numeroFiltradoViaje}</span>
                </div>
                
                <p class="fecha" style="margin: 0; width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; gap: 5px; box-sizing: border-box; height: 30px;">📅 ${viaje.fecha}</p>
                
                <div class="fila-botonera" style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 10px; height: 35px; padding-right: 8px; padding-bottom: 4px; box-sizing: border-box;">
                    
                    <a href="${viaje.linkDrive}" target="_blank" class="btn-detalle" style="margin: 0; flex-shrink: 0; background-color: ${colorAsignado}; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.4);">Más imágenes</a>
                    
                    <span class="etiqueta-ano" style="background-color: ${colorAsignado}; color: #ffffff; font-size: 0.9rem; font-weight: 800; font-family: Arial, sans-serif; padding: 4px 10px; border-radius: 15px; text-align: center; white-space: nowrap; display: inline-block; text-shadow: 1px 1px 2px rgba(0,0,0,0.4); min-width: 50px; box-sizing: border-box; flex-shrink: 0; margin-bottom: 2px;">
                        <strong>${anoText}</strong>
                    </span>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}
// 3. NUEVA FUNCIÓN: Genera las opciones del buscador de años automáticamente
function configurarBuscadorAnos() {
    const selector = document.getElementById("filtro-ano");
    
    // Extraemos todos los años de la lista de viajes sin repetir
    const anosUnicos = [...new Set(misViajes.map(viaje => viaje.fecha.slice(-4)))];
    
    // Los ordenamos de más reciente a más antiguo
    anosUnicos.sort((a, b) => b - a);

    // Los inyectamos en el menú desplegable del HTML
    anosUnicos.forEach(ano => {
        const opcion = document.createElement("option");
        opcion.value = ano;
        opcion.innerText = ano;
        selector.appendChild(opcion);
    });
}



// FUNCIÓN DE FILTRADO UNIFICADA (A PRUEBA DE FALLOS)
function filtrarViajes() {
    // 1. Capturamos lo que el usuario ha seleccionado/escrito
    const selectorAno = document.getElementById('filtro-ano');
    const buscadorTexto = document.getElementById('buscador-texto');

    if (!selectorAno || !buscadorTexto) return; // Seguridad

    const anoSeleccionado = selectorAno.value;
    const textoBusqueda = buscadorTexto.value.toLowerCase().trim();
    
    // 2. Buscamos todas las tarjetas. 
    // Si tus tarjetas se agrupan en elementos con una clase específica (ej: .tarjeta, .card, etc.), 
    // asegúrate de poner aquí esa clase. Si no estás seguro, 'div[style*="border"]' o '.tarjeta-viaje' funcionará.
    const tarjetas = document.querySelectorAll('#contenedor-viajes > div, .tarjeta-viaje, .tarjeta'); 
    let contadorVisibles = 0;

    tarjetas.forEach(tarjeta => {
        // --- DETECTAR EL TÍTULO DEL DESTINO ---
        // Buscamos cualquier etiqueta de título (H2, H3) o textos en mayúsculas dentro de la tarjeta
        const etiquetaTitulo = tarjeta.querySelector('h2, h3, .titulo-viaje');
        let tituloTarjeta = "";
        if (etiquetaTitulo) {
            tituloTarjeta = etiquetaTitulo.textContent.toLowerCase();
        } else {
            // Si no encuentra etiqueta, lee todo el texto superior de la tarjeta como plan B
            tituloTarjeta = tarjeta.textContent.toLowerCase();
        }

        // --- DETECTAR EL AÑO DE LA TARJETA ---
        // Buscamos el año dentro de tu píldora (.etiqueta-ano) o el atributo de la tarjeta
        const etiquetaAno = tarjeta.querySelector('.etiqueta-ano');
        let anoTarjeta = "";
        if (etiquetaAno) {
            anoTarjeta = etiquetaAno.textContent.trim(); // Lee el "2007", "2008", etc.
        } else {
            // Plan B: Intentar buscar un atributo data-ano
            anoTarjeta = tarjeta.getAttribute('data-ano') || "";
        }

        // 3. Evaluar las condiciones
        const cumpleAno = (anoSeleccionado === 'todos' || anoTarjeta === anoSeleccionado);
        const cumpleTexto = (textoBusqueda === '' || tituloTarjeta.includes(textoBusqueda));

        // 4. Mostrar u ocultar la tarjeta de forma segura
        if (cumpleAno && cumpleTexto) {
            // IMPORTANTE: En lugar de dejar vacío, restauramos el diseño original de tu rejilla
            tarjeta.style.setProperty('display', '', 'important'); 
            contadorVisibles++;
        } else {
            tarjeta.style.setProperty('display', 'none', 'important');
        }
    });

    // 5. Actualizar el contador de experiencias
    const numViajesContador = document.getElementById('numero-viajes');
    if (numViajesContador) {
        numViajesContador.textContent = contadorVisibles;
    }
}
// 5. FUNCIONES PARA LA VENTANA SUPERPUESTA (MODAL / LIGHTBOX)
function ampliarImagen(elementoImg) {
    const modal = document.getElementById("ventana-modal");
    const imagenMaximizada = document.getElementById("imagen-maximizada");
    
    modal.style.display = "flex";
    imagenMaximizada.src = elementoImg.src;
}

function cerrarImagen() {
    const modal = document.getElementById("ventana-modal");
    modal.style.display = "none";
}

// Al cargar la web, inicializamos las tarjetas y el selector de años
window.onload = function() {
    configurarBuscadorAnos();
    cargarViajes();
};

// CONTROL DEL CARRUSEL DEL ENCABEZADO (Versión Blindada)
function iniciarCarruselHeader() {
    const slides = document.querySelectorAll('.header-carrusel .slide');
    let indiceActual = 0;

    // Control de seguridad: Si no encuentra las fotos, nos avisa en la consola del navegador
    if (slides.length === 0) {
        console.warn("Alerta Carrusel: No se encontraron elementos con la clase '.slide' dentro de '.header-carrusel'. Revisa tu HTML.");
        return; 
    }

    // Forzamos a que la primera slide esté activa inmediatamente al arrancar
    slides.forEach((s, idx) => {
        if(idx === 0) s.classList.add('activa');
        else s.classList.remove('activa');
    });

    // Iniciamos el temporizador de cambio
    setInterval(() => {
        slides[indiceActual].classList.remove('activa');
        indiceActual = (indiceActual + 1) % slides.length;
        slides[indiceActual].classList.add('activa');
    }, 4000); // Cambia cada 4 segundos
}

// 🌟 TRUCO MAESTRO: Nos aseguramos de que el código se ejecute pase lo que pase
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarCarruselHeader);
} else {
    // Si la página ya se había cargado, lo arranca inmediatamente
    iniciarCarruselHeader();
}

// LÓGICA DEL BOTÓN VOLVER ARRIBA
function controlarBotonSubir() {
    const btnSubir = document.getElementById('btn-subir');
    
    if (!btnSubir) return; // Seguridad por si no encuentra el botón

    // 1. Detectar el scroll para mostrar u ocultar el botón
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnSubir.classList.add('visible');
        } else {
            btnSubir.classList.remove('visible');
        }
    });

    // 2. Darle la acción de subir suavemente al hacer clic
    btnSubir.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hace que la subida sea un deslizamiento suave, no un salto brusco
        });
    });
}

// Aseguramos que se ejecute al cargar la página (puedes meterlo en tu DOMContentLoaded actual)
document.addEventListener("DOMContentLoaded", () => {
    controlarBotonSubir();
    // Aquí dentro puedes dejar también la llamada de tu carrusel si la tenías
});

let mapaModalInstance = null;

function abrirModalMapa() {
    const modal = document.getElementById('modal-mapa');
    modal.style.display = 'flex'; // Mostramos la modal en pantalla

    // Si el mapa ya se había creado antes, solo recalculamos su tamaño por seguridad
    if (mapaModalInstance) {
        setTimeout(() => { mapaModalInstance.invalidateSize(); }, 200);
        return;
    }

    // Inicializamos el mapa por primera vez dentro del contenedor de la modal
    setTimeout(() => {
        mapaModalInstance = L.map('mapa-modal-container').setView([40.4167, -3.7037], 5);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(mapaModalInstance);

        // Estilo del marcador verde (CSS)
        const iconoVerdeHtml = `
            <div style="background-color: #2d4a43; width: 14px; height: 14px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>
        `;
        const marcadorVerde = L.divIcon({
            html: iconoVerdeHtml,
            className: 'marcador-personalizado',
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            popupAnchor: [0, -10]
        });

        // Grupo inteligente Cluster
        const grupoMarcadores = L.markerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });

        // Recorremos tu array de viajes (usa el nombre exacto de tu variable global, ej: misViajes)
        if (typeof misViajes !== 'undefined') {
            misViajes.forEach(viaje => {
                if (viaje.lat && viaje.lng) {
                    const marcador = L.marker([viaje.lat, viaje.lng], { icon: marcadorVerde });
                    const anoText = viaje.fecha ? viaje.fecha.slice(-4) : '';
                    
                    const contenido = `
                        <div class="popup-contenido">
                            <img src="${viaje.imagen || 'encabezado1.png'}" alt="${viaje.destino}">
                            <h3>${viaje.destino}</h3>
                            <p style="margin: 2px 0; font-size: 0.85rem; color: #666;">Año: ${anoText}</p>
                            <a href="${viaje.linkDrive}" target="_blank">Ver en Drive</a>
                        </div>
                    `;
                    marcador.bindPopup(contenido);
                    grupoMarcadores.addLayer(marcador);
                }
            });
            mapaModalInstance.addLayer(grupoMarcadores);
        }
        
        // Forzamos a Leaflet a reajustar los límites del mapa al contenedor ya visible
        mapaModalInstance.invalidateSize();
    }, 200); // Pequeño retraso para dejar que el navegador dibuje la modal primero
}

function cerrarModalMapa() {
    document.getElementById('modal-mapa').style.display = 'none';
}

// Opcional: Cerrar la modal si el usuario hace clic fuera del cuadro blanco
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-mapa');
    if (e.target === modal) {
        cerrarModalMapa();
    }
});

// LÓGICA DE LA VENTANA DE ESTADÍSTICAS (CORREGIDA)
function calcularEstadisticasViajes() {
    if (typeof misViajes === 'undefined') return;

    // Totales estimados por continente
    const TOTAL_MUNDO = 195;
    const TOTAL_EUROPA = 44;
    const TOTAL_AMERICA = 35;
    const TOTAL_ASIA = 48;
    const TOTAL_AFRICA = 54;

    let paisesVisitados = new Set();
    let europa = new Set();
    let america = new Set();
    let asia = new Set();
    let africa = new Set();

    misViajes.forEach(v => {
        if (!v.lat || !v.lng) return;

        const dest = v.destino.toUpperCase();

        // Lista de excepciones europeas situadas geográficamente cerca de África (Canarias, Ceuta, Melilla, Madeira, etc.)
        const esExcepcionEuropea = dest.includes("CANARIAS") || 
                                   dest.includes("TENERIFE") || 
                                   dest.includes("GRAN CANARIA") || 
                                   dest.includes("LANZAROTE") || 
                                   dest.includes("FUERTEVENTURA") || 
                                   dest.includes("LA PALMA") || 
                                   dest.includes("LA GOMERA") || 
                                   dest.includes("EL HIERRO") ||
                                   dest.includes("CEUTA") ||
                                   dest.includes("MELILLA");

        // Clasificación
        if (esExcepcionEuropea || (v.lat > 34 && v.lng > -25 && v.lng < 45)) {
            // Se fuerza Europa si es Canarias/Ceuta/Melilla o si está por coordenadas europeas
            europa.add(dest);
        } else if (v.lng < -30) {
            // América
            america.add(dest);
        } else if (v.lng > 45 || (v.lat > 0 && v.lng > 60)) {
            // Asia
            asia.add(dest);
        } else if (v.lat < 35 && v.lat > -35 && v.lng > -20 && v.lng < 50) {
            // África
            africa.add(dest);
        } else {
            // Por defecto
            europa.add(dest);
        }

        paisesVisitados.add(dest);
    });

    // Función auxiliar para actualizar números y animar barra
    function actualizarBarra(idPct, idBarra, visitados, total) {
        // Para que se sienta más representativo, calculamos el porcentaje
        let pct = Math.min(Math.round((visitados.size / total) * 100), 100);
        
        // Si tienes muchos viajes locales, aseguramos un % visible mínimo si hay visitas
        if (visitados.size > 0 && pct === 0) pct = 1; 

        document.getElementById(idPct).innerText = pct + "% (" + visitados.size + " zonas)";
        document.getElementById(idBarra).style.width = Math.max(pct, visitados.size > 0 ? 5 : 0) + "%";
    }

    // Actualizamos la interfaz
    actualizarBarra("pct-mundo", "barra-mundo", paisesVisitados, TOTAL_MUNDO);
    actualizarBarra("pct-europa", "barra-europa", europa, TOTAL_EUROPA);
    actualizarBarra("pct-america", "barra-america", america, TOTAL_AMERICA);
    actualizarBarra("pct-asia", "barra-asia", asia, TOTAL_ASIA);
    actualizarBarra("pct-africa", "barra-africa", africa, TOTAL_AFRICA);
}

function abrirModalEstadisticas() {
    const modal = document.getElementById("modal-estadisticas");
    modal.classList.add("activo"); // Muestra la ventana
    calcularEstadisticasViajes(); // Anima las barras
}

function cerrarModalEstadisticas() {
    const modal = document.getElementById("modal-estadisticas");
    modal.classList.remove("activo"); // Oculta la ventana
}

// Detección del País basado en la propiedad "pais" si existe, o en la búsqueda por nombre del Destino
function obtenerPaisDelDestino(viaje) {
    if (viaje.pais) return viaje.pais;

    const d = viaje.destino.toUpperCase();

    if (d.includes("NEW YORK") || d.includes("MIAMI") || d.includes("USA") || d.includes("EEUU")) return "Estados Unidos";
    if (d.includes("MÉXICO") || d.includes("CANCÚN")) return "México";
    if (d.includes("PUNTA CANA") || d.includes("DOMINICANA")) return "República Dominicana";
    if (d.includes("LONDRES") || d.includes("UK")) return "Reino Unido";
    if (d.includes("PARÍS") || d.includes("FRANCIA")) return "Francia";
    if (d.includes("ROMA") || d.includes("ITALIA")) return "Italia";

    // Por defecto, la mayoría de tus entradas locales pertenecen a España
    return "España";
}

// LÓGICA DEL RESUMEN GLOBAL
function calcularResumenGlobal() {
    if (typeof misViajes === 'undefined') return;

    const TOTAL_PAISES_ONU = 195;
    let paisesUnicos = new Set();

    // Contamos únicamente países únicos
    misViajes.forEach(v => {
        if (v.destino) {
            let pais = obtenerPaisDelDestino(v);
            paisesUnicos.add(pais);
        }
    });

    let totalPaises = paisesUnicos.size;
    let porcentaje = Math.round((totalPaises / TOTAL_PAISES_ONU) * 100);

    // Actualizamos los textos
    document.getElementById("total-paises-num").innerText = totalPaises;
    document.getElementById("pct-global-num").innerText = porcentaje + "%";

    // Animamos el gráfico Donut con CSS
    const donut = document.getElementById("grafico-donut");
    donut.style.background = `conic-gradient(#f2a649 ${porcentaje}%, #e6e6e6 ${porcentaje}% 100%)`;
}

// Abrir y Cerrar Modal Global
function abrirModalGlobal() {
    const modal = document.getElementById("modal-global");
    modal.classList.add("activo");
    calcularResumenGlobal();
}

function cerrarModalGlobal() {
    const modal = document.getElementById("modal-global");
    modal.classList.remove("activo");
}

// --- FUNCIONALIDAD MODAL TIMELINE ---

// Esperar a que todo el HTML esté cargado en el navegador
document.addEventListener('DOMContentLoaded', () => {

    const btnTimeline = document.getElementById('btn-timeline');
    const modalTimeline = document.getElementById('modal-timeline');
    const cerrarTimeline = document.getElementById('cerrar-timeline');
    const timelineLista = document.getElementById('timeline-lista');

    // Verificar si el botón existe en el HTML
    if (!btnTimeline) {
        console.error("Error: No se encontró el elemento con id='btn-timeline' en el HTML.");
        return;
    }

    // Abrir modal al hacer clic
    btnTimeline.addEventListener('click', () => {
        generarTimeline();
        if (modalTimeline) {
            modalTimeline.classList.add('activo');
        }
    });

    // Cerrar modal con la X
    if (cerrarTimeline) {
        cerrarTimeline.addEventListener('click', () => {
            modalTimeline.classList.remove('activo');
        });
    }

    // Cerrar al hacer clic en el fondo oscuro
    if (modalTimeline) {
        modalTimeline.addEventListener('click', (e) => {
            if (e.target === modalTimeline) {
                modalTimeline.classList.remove('activo');
            }
        });
    }

    // Función para renderizar el Timeline
function generarTimeline() {
    if (!timelineLista) return;
    timelineLista.innerHTML = ''; 

    let listaDatos = [];
    if (typeof misViajes !== 'undefined') listaDatos = misViajes;
    else if (typeof viajes !== 'undefined') listaDatos = viajes;
    else if (typeof datosViajes !== 'undefined') listaDatos = datosViajes;
    else if (typeof listaViajes !== 'undefined') listaDatos = listaViajes;

    if (!listaDatos || listaDatos.length === 0) {
        timelineLista.innerHTML = '<p style="text-align:center; color:#84a59d; padding:20px;">No se encontraron viajes para mostrar.</p>';
        return;
    }

    // Diccionario ampliado de países y destinos clave
    const mapaCodigosPais = {
        // Canadá y Destinos específicos
        'canada': 'ca', 'canadá': 'ca', 'niagara': 'ca', 'cataratas del niagara': 'ca', 'toronto': 'ca', 'montreal': 'ca', 'quebec': 'ca', 'vancouver': 'ca',

        // América
        'estados unidos': 'us', 'usa': 'us', 'eeuu': 'us', 'nueva york': 'us', 'miami': 'us',
        'república dominicana': 'do', 'republica dominicana': 'do', 'dominican republic': 'do', 'dominicana': 'do',
        'mexico': 'mx', 'méxico': 'mx', 'argentina': 'ar', 'brasil': 'br', 'brazil': 'br', 
        'colombia': 'co', 'chile': 'cl', 'peru': 'pe', 'perú': 'pe', 'cuba': 'cu', 'costa rica': 'cr',

        // África y Cabo Verde
        'cabo verde': 'cv', 'caboverde': 'cv', 'cape verde': 'cv',
        'marruecos': 'ma', 'egipto': 'eg', 'tunez': 'tn', 'senegal': 'sn', 'kenia': 'ke', 'sudafrica': 'za',

        // Europa
        'belgica': 'be', 'bélgica': 'be', 'belgium': 'be',
        'españa': 'es', 'spain': 'es',
        'francia': 'fr', 'france': 'fr', 'paris': 'fr', 'parís': 'fr',
        'italia': 'it', 'italy': 'it', 'roma': 'it',
        'alemania': 'de', 'germany': 'de',
        'reino unido': 'gb', 'uk': 'gb', 'inglaterra': 'gb', 'londres': 'gb',
        'portugal': 'pt', 'lisboa': 'pt',
        'grecia': 'gr', 'greece': 'gr', 'suiza': 'ch', 'switzerland': 'ch',
        'holanda': 'nl', 'paises bajos': 'nl', 'países bajos': 'nl', 'netherlands': 'nl', 'amsterdam': 'nl',
        'austria': 'at', 'croacia': 'hr', 'irlanda': 'ie', 'polonia': 'pl', 
        'noruega': 'no', 'suecia': 'se', 'dinamarca': 'dk', 'finlandia': 'fi',

        // Asia y Oceanía
        'japon': 'jp', 'japón': 'jp', 'japan': 'jp', 'tokio': 'jp',
        'tailandia': 'th', 'thailand': 'th', 'bangkok': 'th',
        'turquia': 'tr', 'turquía': 'tr', 'turkey': 'tr', 'estambul': 'tr',
        'australia': 'au', 'indonesia': 'id', 'bali': 'id',
        'maldivas': 'mv', 'maldives': 'mv', 'vietnam': 'vn'
    };

    function limpiarTexto(texto) {
        return (texto || '')
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function obtenerCodigoISO(viaje) {
        if (viaje.codigoPais && viaje.codigoPais.length === 2) return viaje.codigoPais.toLowerCase();
        if (viaje.iso && viaje.iso.length === 2) return viaje.iso.toLowerCase();
        if (viaje.pais && viaje.pais.length === 2) return viaje.pais.toLowerCase();

        const textoLimpio = limpiarTexto(`${viaje.pais || ''} ${viaje.destino || ''} ${viaje.titulo || ''} ${viaje.nombre || ''}`);
        
        for (const [nombrePais, codigo] of Object.entries(mapaCodigosPais)) {
            const nombrePaisLimpio = limpiarTexto(nombrePais);
            if (textoLimpio.includes(nombrePaisLimpio)) {
                return codigo;
            }
        }
        return null;
    }

    // 1. Agrupar viajes por año
    const viajesPorAno = {};
    listaDatos.forEach(viaje => {
        const ano = viaje.ano || viaje.año || (viaje.fecha ? viaje.fecha.slice(-4) : 'Otros');
        if (!viajesPorAno[ano]) viajesPorAno[ano] = [];
        viajesPorAno[ano].push(viaje);
    });

    // 2. Ordenar años descendente
    const anosOrdenados = Object.keys(viajesPorAno).sort((a, b) => b - a);

    // 3. Renderizar HTML
    anosOrdenados.forEach(ano => {
        const bloqueAno = document.createElement('div');
        bloqueAno.className = 'bloque-ano-timeline';

        let htmlBloque = `<div class="cabecera-ano">${ano}</div>`;

        viajesPorAno[ano].forEach(viaje => {
            const destino = viaje.destino || viaje.titulo || viaje.nombre || 'Destino';
            const fecha = viaje.mesAno || viaje.fecha || `${viaje.mes || ''} ${ano}`.trim();
            
            const codigoISO = obtenerCodigoISO(viaje);
            
            let htmlBandera = '';
            if (codigoISO) {
                htmlBandera = `<div class="item-timeline-bandera-mini"><img src="https://flagcdn.com/w80/${codigoISO}.png" alt="Bandera" loading="lazy"></div>`;
            } else if (viaje.bandera) {
                htmlBandera = `<span style="font-size: 1.1rem;">${viaje.bandera}</span>`;
            } else {
                htmlBandera = `<span style="font-size: 1rem;">🇨🇦</span>`; // Fallback Canadá
            }

            htmlBloque += `
                <div class="item-timeline">
                    <div class="fila-destino-timeline">
                        ${htmlBandera}
                        <span class="nombre-destino-timeline">${destino}</span>
                    </div>
                    <div class="fecha-timeline">${fecha}</div>
                </div>
            `;
        });

        bloqueAno.innerHTML = htmlBloque;
        timelineLista.appendChild(bloqueAno);
    });
}
});