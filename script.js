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
        imagen: "imagenes/segovia2012.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1D1ZJx_0i6SptvipDUXBgrBHAp9jHDHAB?usp=drive_link"
    },
    {
        destino: "ALMERIMAR - SEMANA SANTA",
        pais: "España",
        fecha: "Marzo de 2013",
        lat: 36.7025,
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
        imagen: "imagenes/banosencina2014.jpg",
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
        lat: 36.7029,
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
        imagen: "imagenes/setenil2016.jpg",
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
        lat: 42.3000,
        lng: 11.5000,
        imagen: "imagenes/cruceroitalia2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1p6mbMPrl2p9uFsSSqfoSfqUWwOTCqL0_?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Julio de 2016",
        lat: 36.7032,
        lng: -2.7962,
        imagen: "imagenes/almerimar07_2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1wC7_d-7myaOlhN5ACB1Eq5kEPbVtXdLY?usp=drive_link"
    },
    {
        destino: "RONDA Y ANTEQUERA",
        pais: "España",
        fecha: "Agosto de 2016",
        lat: 36.8850,
        lng: -4.8010,
        imagen: "imagenes/ronda2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1qKbYg29_Yn7E_t6YVHx2WLyIZI4Edt1N?usp=drive_link"
    },
    {
        destino: "UBEDA y BAEZA",
        pais: "España",
        fecha: "Noviembre de 2016",
        lat: 37.9890,
        lng: -3.3850,
        imagen: "imagenes/ubeda2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/178-fV5tbV-PgUeQOjgGQejjmZ4Fc-o0R?usp=drive_link"
    },
    {
        destino: "OXFORD, BATH y LONDRES",
        pais: "Reino Unido",
        fecha: "Diciembre de 2016",
        lat: 51.5800,
        lng: -1.3500,
        imagen: "imagenes/oxford2016.jpg",
        linkDrive: "https://drive.google.com/drive/folders/15WtxnOUQv1hu8lC2tHg2UPSU8Gn20qvr?usp=drive_link"
    },
    {
        destino: "EXTREMADURA",
        pais: "España",
        fecha: "Enero de 2017",
        lat: 39.4000,
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
        lat: 36.7320,
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
        lat: 36.7035,
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
        lat: 41.8719,
        lng: 12.5674,
        imagen: "imagenes/italia2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1ctOVj9eXmUnCydgaN0CrVO5OVaUjvcej?usp=drive_link"
    },
    {
        destino: "GALICIA",
        pais: "España",
        fecha: "Agosto de 2017",
        lat: 42.5751,
        lng: -8.1338,
        imagen: "imagenes/galicia2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Kf5VDfnnyJgk-UACLmFLakKJsS9_wGnn?usp=drive_link"
    },
    {
        destino: "CABO DE GATA - BAUTISMO BUCEO MANOLO",
        pais: "España",
        fecha: "Octubre de 2017",
        lat: 36.7592,
        lng: -2.2035,
        imagen: "imagenes/buceo2017.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1q7yIXqStv2VJbSXopYmAbyChPiiDW5zo?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Noviembre de 2017",
        lat: 36.7038,
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
        lat: 40.4169,
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
        lat: 37.7958,
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
        lat: 36.9500,
        lng: -6.1000,
        imagen: "imagenes/sevilla2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1SIvE0KO-dH8G3ePfIeEwuE5KGZPX4nSu?usp=drive_link"
    },
    {
        destino: "PARACAIDAS MANOLO",
        pais: "España",
        fecha: "Febrero de 2019",
        lat: 37.2947,
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
        lat: 50.8229,
        lng: -0.1368,
        imagen: "imagenes/brighton2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1cwcBlMnwxrAyt_9y7eBa4UoIT4hncdhn?usp=drive_link"
    },
    {
        destino: "PRIEGO, CABRA Y MONTEFRÍO",
        pais: "España",
        fecha: "Junio de 2019",
        lat: 37.3500,
        lng: -4.3000,
        imagen: "imagenes/priego2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1exNcoZiXzlV-dn-ZpngspaqMQ5y1eJ8h?usp=drive_link"
    },
    {
        destino: "VENECIA Y VIENA",
        pais: "Italia / Austria",
        fecha: "Julio de 2019",
        lat: 46.5000,
        lng: 14.3000,
        imagen: "imagenes/venecia2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/11hyMM_q_TvhVjIwBSNJ8L2aIH4KN1y2G?usp=drive_link"
    },
    {
        destino: "CAZORLA - AMIGOS",
        pais: "España",
        fecha: "Agosto de 2019",
        lat: 37.7958,
        lng: -3.1256,
        imagen: "imagenes/cazorla2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1fpqp57rsIbKS0MIe_ALqZYwPEkO_TWyV?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Agosto de 2019",
        lat: 36.7053,
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
        lat: 36.7050,
        lng: -2.7980,
        imagen: "imagenes/almerimar10_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1qYkLt4g3I22lezQMagl4gnH58CblLrEX?usp=drive_link"
    },
    {
        destino: "GRANADA - FSO",
        pais: "España",
        fecha: "Noviembre de 2019",
        lat: 37.1755,
        lng: -3.5925,
        imagen: "imagenes/granada11_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1qqaRpnzXR9QltFqRat1FF5sY8aQXl4yF?usp=drive_link"
    },
    {
        destino: "ALMERIMAR Y MOJACAR",
        pais: "España",
        fecha: "Diciembre de 2019",
        lat: 36.9030,
        lng: -2.3140,
        imagen: "imagenes/almerimar12_2019.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1EOGA5WqHtQeQ_uVqFMJEEywR6afhpGo3?usp=drive_link"
    },
    {
        destino: "GRANADA - COCHES ANTIGUOS TIO ALMUDENA",
        pais: "España",
        fecha: "Diciembre de 2019",
        lat: 37.1812,
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
        linkDrive: "https://drive.google.com/drive/folders/1TFrdNSyRlYIzyFFdiJenp6mXwtfroqSg?usp=drive_link"
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
        lat: 36.8345,
        lng: -2.4642,
        imagen: "imagenes/almeria01_2021.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1JerkPHc0U6lLBpjxfvBh3pJj6SOs9UDD?usp=drive_link"
    },
    {
        destino: "TORRES - JAÉN",
        pais: "España",
        fecha: "Abril de 2021",
        lat: 37.7856,
        lng: -3.5104,
        imagen: "imagenes/torres2021.jpg",
        linkDrive: "https://drive.google.com/drive/folders/10-81G_QKd-GRDe_1G_dpTsgHQQEYnH2L?usp=drive_link"
    },
    {
        destino: "MENORCA",
        pais: "España",
        fecha: "Agosto de 2021",
        lat: 39.9496,
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
        lat: 40.7500,
        lng: 14.4300,
        imagen: "imagenes/napoles2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/18duyOUtibbUKdi3WHI4XgN1D0O56zRSF?usp=drive_link"
    },
    {
        destino: "CAZORLA Y CONCIERTO RAPHAEL",
        pais: "España",
        fecha: "Agosto de 2022",
        lat: 37.9140,
        lng: -3.0028,
        imagen: "imagenes/cazorla2022.jpg",
        linkDrive: "https://drive.google.com/drive/folders/18GPHe5hOxZs7PJRRNHTxFFN_dJpynvq6?usp=drive_link"
    },
    {
        destino: "GRANADA - RESTAURANTE MARIA DE LA O",
        pais: "España",
        fecha: "Enero de 2023",
        lat: 37.1741,
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
        lat: 42.6000,
        lng: -2.3000,
        imagen: "imagenes/sansebastian2023.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1k__mnmXGLxUU40PmDNPmzjrvcnx2viv7?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "Julio de 2023",
        lat: 36.7053,
        lng: -2.7983,
        imagen: "imagenes/almerimar07_2023.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1Le0t_ncsQzISO0Z1828MM_1Vk5oItBmI?usp=drive_link"
    },
    {
        destino: "JAPÓN",
        pais: "Japón",
        fecha: "Julio de 2023",
        lat: 35.6762,
        lng: 139.6503,
        imagen: "imagenes/japon2023.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1wCEnNDpj4F3Xk7y8SBLKayrzTyTPKuwv?usp=drive_link"
    },
    {
        destino: "MADRID - LA GRANJA",
        pais: "España",
        fecha: "Julio de 2023",
        lat: 40.8914,
        lng: -3.9850,
        imagen: "imagenes/madrid2023.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1k__mnmXGLxUU40PmDNPmzjrvcnx2viv7?usp=drive_link"
    },
    {
        destino: "CANGAS DEL NARCEA",
        pais: "España",
        fecha: "Octubre de 2023",
        lat: 43.1754,
        lng: -6.5502,
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
        lat: 50.8503,
        lng: 4.3517,
        imagen: "",
        linkDrive: "https://drive.google.com/drive/folders/1F6byTPRsGvnbQuSHqzcoLbRRTnjG7FDf?usp=drive_link"
    },
    {
        destino: "GRANADA - PALACIO DE LOS PATOS",
        pais: "España",
        fecha: "Marzo de 2024",
        lat: 37.1729,
        lng: -3.6015,
        imagen: "imagenes/granada03_2024.jpg",
        linkDrive: "https://drive.google.com/drive/folders/10weS51mRIyGGHt7S_S3x3Pp5TeLvXDm2?usp=drive_link"
    },
    {
        destino: "BAEZA",
        pais: "España",
        fecha: "Mayo de 2024",
        lat: 37.9944,
        lng: -3.4710,
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        linkDrive: "https://drive.google.com/drive/folders/1-0Kp-vT8lAi9gTLpQyPZRNxxdwKXP53b?usp=drive_link"
    },
    {
        destino: "TAILANDIA",
        pais: "Tailandia",
        fecha: "Julio de 2024",
        lat: 13.7563,
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
        lat: 37.1765,
        lng: -3.5895,
        imagen: "imagenes/granada2024.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1-LVeSmnavowQbzKbL-cT3imQdnc634or?usp=drive_link"
    },
    {
        destino: "ALSACIA",
        pais: "Francia",
        fecha: "Diciembre de 2024",
        lat: 48.3000,
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
        lat: 37.1825,
        lng: -3.6120,
        imagen: "imagenes/granada01_2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1yDRqNGhutLGOL-L35x2QV12X4X2yR3H4?usp=drive_link"
    },
    {
        destino: "CANTABRIA",
        pais: "España",
        fecha: "Mayo de 2025",
        lat: 43.2000,
        lng: -4.0000,
        imagen: "imagenes/cantabria2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1An1KLGRskm3sRxXKlK0sm4vITeMl-Ihd?usp=drive_link"
    },
    {
        destino: "TREVELEZ",
        pais: "España",
        fecha: "Mayo de 2025",
        lat: 36.9257,
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
        lat: 43.1758,
        lng: -6.5495,
        imagen: "imagenes/cangas2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1plxPaVFERuHPVGzZDdjFQ723BFMI95SC?usp=drive_link"
    },
    {
        destino: "GEODA DE PULPÍ",
        pais: "España",
        fecha: "Septiembre de 2025",
        lat: 37.3615,
        lng: -1.7018,
        imagen: "imagenes/geodapulpi2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1YLjWZypA9yWiSANm1VL2DZw6wCc-B4qj?usp=drive_link"
    },
    {
        destino: "LA HERRADURA - BUCEO",
        pais: "España",
        fecha: "Septiembre de 2025",
        lat: 36.7346,
        lng: -3.7383,
        imagen: "imagenes/laherradura2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1-FmCz725Qf5nj_FX97KF-AfVDDrmCrFb?usp=drive_link"
    },
    {
        destino: "CÁDIZ",
        pais: "España",
        fecha: "Noviembre de 2025",
        lat: 36.5271,
        lng: -6.2886,
        imagen: "imagenes/cadiz2025.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1TC3S8a7lxDbZR9j4B4zvt97d-3zh0APm?usp=drive_link"
    },
    {
        destino: "CABO VERDE",
        pais: "Cabo Verde",
        fecha: "Enero de 2026",
        lat: 16.0021,
        lng: -24.0132,
        imagen: "imagenes/caboverde2026.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1ddULrG0Uw45YVgvoF4GgOKWl9D9ARXGy?usp=drive_link"
    },
    {
        destino: "ALMERIMAR",
        pais: "España",
        fecha: "A lo largo de los años",
        lat: 36.7056,
        lng: -2.7986,
        imagen: "imagenes/almerimar.jpg",
        linkDrive: "https://drive.google.com/drive/folders/1fUQgliMvZLwDpsRkt21G1Tj16dYpFqj3?usp=drive_link"
    }
];

// 2. FUNCIÓN PRINCIPAL - UBICACIÓN DE ETIQUETAS MEJORADA PARA EVITAR CORTES
function cargarViajes(viajesAMostrar = misViajes) {
    const contenedor = document.getElementById("contenedor-viajes");
    
    if (!contenedor) {
        console.log("Vista de mapa detectada: Saltando renderizado de tarjetas.");
        return; 
    }

    contenedor.innerHTML = "";
    const numViajesElem = document.getElementById("numero-viajes");
    if (numViajesElem) {
        numViajesElem.innerText = viajesAMostrar.length;
    }

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

        tarjeta.style.border = `2px solid ${colorAsignado}`;

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
    if (!selector) return;
    
    const anosUnicos = [...new Set(misViajes.map(viaje => viaje.fecha.slice(-4)))];
    anosUnicos.sort((a, b) => b - a);

    anosUnicos.forEach(ano => {
        const opcion = document.createElement("option");
        opcion.value = ano;
        opcion.innerText = ano;
        selector.appendChild(opcion);
    });
}

// 4. FUNCIÓN DE FILTRADO UNIFICADA
function filtrarViajes() {
    const selectorAno = document.getElementById('filtro-ano');
    const buscadorTexto = document.getElementById('buscador-texto');

    if (!selectorAno || !buscadorTexto) return;

    const anoSeleccionado = selectorAno.value;
    const textoBusqueda = buscadorTexto.value.toLowerCase().trim();
    
    const tarjetas = document.querySelectorAll('#contenedor-viajes > div, .tarjeta-viaje, .tarjeta'); 
    let contadorVisibles = 0;

    tarjetas.forEach(tarjeta => {
        const etiquetaTitulo = tarjeta.querySelector('h2, h3, .titulo-viaje');
        let tituloTarjeta = etiquetaTitulo ? etiquetaTitulo.textContent.toLowerCase() : tarjeta.textContent.toLowerCase();

        const etiquetaAno = tarjeta.querySelector('.etiqueta-ano');
        let anoTarjeta = etiquetaAno ? etiquetaAno.textContent.trim() : (tarjeta.getAttribute('data-ano') || "");

        const cumpleAno = (anoSeleccionado === 'todos' || anoTarjeta === anoSeleccionado);
        const cumpleTexto = (textoBusqueda === '' || tituloTarjeta.includes(textoBusqueda));

        if (cumpleAno && cumpleTexto) {
            tarjeta.style.setProperty('display', '', 'important'); 
            contadorVisibles++;
        } else {
            tarjeta.style.setProperty('display', 'none', 'important');
        }
    });

    const numViajesContador = document.getElementById('numero-viajes');
    if (numViajesContador) {
        numViajesContador.textContent = contadorVisibles;
    }
}

// 5. FUNCIONES PARA LA VENTANA SUPERPUESTA (MODAL / LIGHTBOX)
function ampliarImagen(elementoImg) {
    const modal = document.getElementById("ventana-modal");
    const imagenMaximizada = document.getElementById("imagen-maximizada");
    if (modal && imagenMaximizada) {
        modal.style.display = "flex";
        imagenMaximizada.src = elementoImg.src;
    }
}

function cerrarImagen() {
    const modal = document.getElementById("ventana-modal");
    if (modal) modal.style.display = "none";
}

// Al cargar la web, inicializamos las tarjetas y el selector de años
window.onload = function() {
    configurarBuscadorAnos();
    cargarViajes();
};

// CONTROL DEL CARRUSEL DEL ENCABEZADO
function iniciarCarruselHeader() {
    const slides = document.querySelectorAll('.header-carrusel .slide');
    let indiceActual = 0;

    if (slides.length === 0) {
        console.warn("Alerta Carrusel: No se encontraron elementos con la clase '.slide' dentro de '.header-carrusel'.");
        return; 
    }

    slides.forEach((s, idx) => {
        if (idx === 0) s.classList.add('activa');
        else s.classList.remove('activa');
    });

    setInterval(() => {
        slides[indiceActual].classList.remove('activa');
        indiceActual = (indiceActual + 1) % slides.length;
        slides[indiceActual].classList.add('activa');
    }, 4000);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarCarruselHeader);
} else {
    iniciarCarruselHeader();
}

// LÓGICA DEL BOTÓN VOLVER ARRIBA
function controlarBotonSubir() {
    const btnSubir = document.getElementById('btn-subir');
    if (!btnSubir) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnSubir.classList.add('visible');
        } else {
            btnSubir.classList.remove('visible');
        }
    });

    btnSubir.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    controlarBotonSubir();
});

let mapaModalInstance = null;

function abrirModalMapa() {
    const modal = document.getElementById('modal-mapa');
    if (!modal) return;
    modal.style.display = 'flex';

    if (mapaModalInstance) {
        setTimeout(() => { mapaModalInstance.invalidateSize(); }, 200);
        return;
    }

    setTimeout(() => {
        mapaModalInstance = L.map('mapa-modal-container').setView([40.4167, -3.7037], 5);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(mapaModalInstance);

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

        const grupoMarcadores = L.markerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });

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
        
        mapaModalInstance.invalidateSize();
    }, 200);
}

function cerrarModalMapa() {
    const modal = document.getElementById('modal-mapa');
    if (modal) modal.style.display = 'none';
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-mapa');
    if (e.target === modal) {
        cerrarModalMapa();
    }
});

// LÓGICA DE LA VENTANA DE ESTADÍSTICAS
function calcularEstadisticasViajes() {
    if (typeof misViajes === 'undefined') return;

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

        if (esExcepcionEuropea || (v.lat > 34 && v.lng > -25 && v.lng < 45)) {
            europa.add(dest);
        } else if (v.lng < -30) {
            america.add(dest);
        } else if (v.lng > 45 || (v.lat > 0 && v.lng > 60)) {
            asia.add(dest);
        } else if (v.lat < 35 && v.lat > -35 && v.lng > -20 && v.lng < 50) {
            africa.add(dest);
        } else {
            europa.add(dest);
        }

        paisesVisitados.add(dest);
    });

    function actualizarBarra(idPct, idBarra, visitados, total) {
        let pct = Math.min(Math.round((visitados.size / total) * 100), 100);
        if (visitados.size > 0 && pct === 0) pct = 1; 

        const elemPct = document.getElementById(idPct);
        const elemBarra = document.getElementById(idBarra);
        if (elemPct) elemPct.innerText = pct + "% (" + visitados.size + " zonas)";
        if (elemBarra) elemBarra.style.width = Math.max(pct, visitados.size > 0 ? 5 : 0) + "%";
    }

    actualizarBarra("pct-mundo", "barra-mundo", paisesVisitados, TOTAL_MUNDO);
    actualizarBarra("pct-europa", "barra-europa", europa, TOTAL_EUROPA);
    actualizarBarra("pct-america", "barra-america", america, TOTAL_AMERICA);
    actualizarBarra("pct-asia", "barra-asia", asia, TOTAL_ASIA);
    actualizarBarra("pct-africa", "barra-africa", africa, TOTAL_AFRICA);
}

function abrirModalEstadisticas() {
    const modal = document.getElementById("modal-estadisticas");
    if (modal) {
        modal.classList.add("activo");
        calcularEstadisticasViajes();
    }
}

function cerrarModalEstadisticas() {
    const modal = document.getElementById("modal-estadisticas");
    if (modal) modal.classList.remove("activo");
}

function obtenerPaisDelDestino(viaje) {
    if (viaje.pais) return viaje.pais;

    const d = viaje.destino.toUpperCase();

    if (d.includes("NEW YORK") || d.includes("MIAMI") || d.includes("USA") || d.includes("EEUU")) return "Estados Unidos";
    if (d.includes("MÉXICO") || d.includes("CANCÚN")) return "México";
    if (d.includes("PUNTA CANA") || d.includes("DOMINICANA")) return "República Dominicana";
    if (d.includes("LONDRES") || d.includes("UK")) return "Reino Unido";
    if (d.includes("PARÍS") || d.includes("FRANCIA")) return "Francia";
    if (d.includes("ROMA") || d.includes("ITALIA")) return "Italia";

    return "España";
}

// LÓGICA DEL RESUMEN GLOBAL
function calcularResumenGlobal() {
    if (typeof misViajes === 'undefined') return;

    const TOTAL_PAISES_ONU = 195;
    let paisesUnicos = new Set();

    misViajes.forEach(v => {
        if (v.destino) {
            let pais = obtenerPaisDelDestino(v);
            paisesUnicos.add(pais);
        }
    });

    let totalPaises = paisesUnicos.size;
    let porcentaje = Math.round((totalPaises / TOTAL_PAISES_ONU) * 100);

    const elemTotalPaises = document.getElementById("total-paises-num");
    const elemPctGlobal = document.getElementById("pct-global-num");
    if (elemTotalPaises) elemTotalPaises.innerText = totalPaises;
    if (elemPctGlobal) elemPctGlobal.innerText = porcentaje + "%";

    const donut = document.getElementById("grafico-donut");
    if (donut) donut.style.background = `conic-gradient(#f2a649 ${porcentaje}%, #e6e6e6 ${porcentaje}% 100%)`;
}

function abrirModalGlobal() {
    const modal = document.getElementById("modal-global");
    if (modal) {
        modal.classList.add("activo");
        calcularResumenGlobal();
    }
}

function cerrarModalGlobal() {
    const modal = document.getElementById("modal-global");
    if (modal) modal.classList.remove("activo");
}

// --- FUNCIONALIDAD MODAL TIMELINE ---
document.addEventListener('DOMContentLoaded', () => {
    const btnTimeline = document.getElementById('btn-timeline');
    const modalTimeline = document.getElementById('modal-timeline');
    const cerrarTimeline = document.getElementById('cerrar-timeline');
    const timelineLista = document.getElementById('timeline-lista');

    if (btnTimeline) {
        btnTimeline.addEventListener('click', () => {
            generarTimeline();
            if (modalTimeline) modalTimeline.classList.add('activo');
        });
    }

    if (cerrarTimeline) {
        cerrarTimeline.addEventListener('click', () => {
            if (modalTimeline) modalTimeline.classList.remove('activo');
        });
    }

    if (modalTimeline) {
        modalTimeline.addEventListener('click', (e) => {
            if (e.target === modalTimeline) {
                modalTimeline.classList.remove('activo');
            }
        });
    }

    function generarTimeline() {
        if (!timelineLista) return;
        timelineLista.innerHTML = ''; 

        let listaDatos = [];
        if (typeof misViajes !== 'undefined') listaDatos = misViajes;

        if (!listaDatos || listaDatos.length === 0) {
            timelineLista.innerHTML = '<p style="text-align:center; color:#84a59d; padding:20px;">No se encontraron viajes para mostrar.</p>';
            return;
        }

        const mapaCodigosPais = {
            'canada': 'ca', 'canadá': 'ca', 'niagara': 'ca', 'cataratas del niagara': 'ca', 'toronto': 'ca', 'montreal': 'ca', 'quebec': 'ca', 'vancouver': 'ca',
            'estados unidos': 'us', 'usa': 'us', 'eeuu': 'us', 'nueva york': 'us', 'miami': 'us',
            'república dominicana': 'do', 'republica dominicana': 'do', 'dominican republic': 'do', 'dominicana': 'do',
            'mexico': 'mx', 'méxico': 'mx', 'argentina': 'ar', 'brasil': 'br', 'brazil': 'br', 
            'colombia': 'co', 'chile': 'cl', 'peru': 'pe', 'perú': 'pe', 'cuba': 'cu', 'costa rica': 'cr',
            'cabo verde': 'cv', 'caboverde': 'cv', 'cape verde': 'cv',
            'marruecos': 'ma', 'egipto': 'eg', 'tunez': 'tn', 'senegal': 'sn', 'kenia': 'ke', 'sudafrica': 'za',
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

        const viajesPorAno = {};
        listaDatos.forEach(viaje => {
            const ano = viaje.ano || viaje.año || (viaje.fecha ? viaje.fecha.slice(-4) : 'Otros');
            if (!viajesPorAno[ano]) viajesPorAno[ano] = [];
            viajesPorAno[ano].push(viaje);
        });

        const anosOrdenados = Object.keys(viajesPorAno).sort((a, b) => b - a);

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
                    htmlBandera = `<span style="font-size: 1rem;">🚩</span>`;
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


// ==========================================
// FUNCIÓN DE EXPORTACIÓN (AFUERA Y GLOBAL)
// ==========================================
// ==========================================
// FUNCIÓN DE EXPORTACIÓN COMPATIBLE CON GITHUB
// ==========================================
window.exportarAJSON = function() {
    try {
        // 1. Validar que la variable de viajes existe y tiene datos
        if (typeof misViajes === 'undefined' || !misViajes || misViajes.length === 0) {
            alert('No hay información de viajes disponible para exportar.');
            return;
        }

        // 2. Convertir el objeto a texto JSON
        const jsonString = JSON.stringify(misViajes, null, 2);

        // 3. Crear un Blob (un archivo binario en memoria)
        const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });

        // 4. Crear la URL temporal para descargar el Blob
        const url = URL.createObjectURL(blob);

        // 5. Crear el enlace invisible de descarga
        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = url;
        downloadAnchor.download = "mis_viajes.json";

        // 6. Ejecutar descarga y limpiar recursos
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        
        // Limpieza del DOM y liberación de memoria
        document.body.removeChild(downloadAnchor);
        URL.revokeObjectURL(url);

    } catch (error) {
        console.error("Error al exportar el JSON:", error);
        alert("Hubo un error al intentar generar la descarga del archivo.");
    }
};
