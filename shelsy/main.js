// Datos de todas las categorías
const categorias = {
  fritolay: {
    nombre: "LÍNEA DE FRITOLAY Y DEMÁS MEKATOS",
    productos: [
      {
        item: 1,
        producto: "BOLIQUESO DOC",
        descripcion: "X 12 UND",
        precio: "14000",
      },
      {
        item: 2,
        producto: "BOLIQUESO FLIAR",
        descripcion: "X 160 GR X 10 UNDS",
        precio: "7000",
      },
      {
        item: 3,
        producto: "BOLIQUESO MUÑEKO",
        descripcion: "X 12",
        precio: "14500",
      },
      {
        item: 4,
        producto: "CHEETOS FLAM HOT",
        descripcion: "37 GRA X 12",
        precio: "20000",
      },
      {
        item: 5,
        producto: "CHEETOS SURTIDOS",
        descripcion: "UNIDAD",
        precio: "1700",
      },
      {
        item: 6,
        producto: "CHICHARON PIN",
        descripcion: "X 10",
        precio: "18000",
      },
      {
        item: 7,
        producto: "CHICHARRIN",
        descripcion: "X 200 GR",
        precio: "4000",
      },
      {
        item: 8,
        producto: "CHICHARRIN",
        descripcion: "X 500 GR",
        precio: "7400",
      },
      {
        item: 9,
        producto: "CHISTRI",
        descripcion: "X 12 CAJA X6 DOC",
        precio: "20000",
      },
      {
        item: 10,
        producto: "CHISTRIS FAMILIAR",
        descripcion: "93G X 34",
        precio: "4000",
      },
      {
        item: 11,
        producto: "CHISTRIS MINI",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 12,
        producto: "CHITOS TOTOX PEQ",
        descripcion: "X 20 UNDS",
        precio: "3500",
      },
      {
        item: 13,
        producto: "CHOCOLITO DOC",
        descripcion: "X 12 UND",
        precio: "19000",
      },
      {
        item: 14,
        producto: "CRISPERTA DULCE",
        descripcion: "X 10",
        precio: "4000",
      },
      {
        item: 15,
        producto: "DETODOITO DOC",
        descripcion: "X 12 UND",
        precio: "29000",
      },
      {
        item: 16,
        producto: "DETODOITO EXTRA GRANDE",
        descripcion: "400 GR X 6 CAJA",
        precio: "14000",
      },
      {
        item: 17,
        producto: "DORITO PAQUETE",
        descripcion: "X 10 UND",
        precio: "17500",
      },
      {
        item: 18,
        producto: "DORITO",
        descripcion: "80 GRAMOS",
        precio: "3600",
      },
      {
        item: 19,
        producto: "DORITO DINAMITA",
        descripcion: "X12",
        precio: "32000",
      },
      {
        item: 20,
        producto: "DORITO FLAMING",
        descripcion: "HOT X 10",
        precio: "22000",
      },
      { item: 21, producto: "EXTRUCITO", descripcion: "", precio: "20000" },
      {
        item: 22,
        producto: "FESTIVAL CHOCK TUBO",
        descripcion: "X 6 UND X 24 PAQ",
        precio: "13300",
      },
      {
        item: 23,
        producto: "FESTIVAL PEQUEÑAS",
        descripcion: "X 4 UND X 24 PAQ",
        precio: "11500",
      },
      {
        item: 24,
        producto: "FESTIVAL RECREO LARGA",
        descripcion: "X 12 X 48 CJ",
        precio: "2300",
      },
      {
        item: 25,
        producto: "FESTIVAL RECREO PEQUEÑA",
        descripcion: "X 12",
        precio: "11500",
      },
      {
        item: 26,
        producto: "FIARINO CHOCOLATE SURTIDAS",
        descripcion: "",
        precio: "26500",
      },
      {
        item: 27,
        producto: "GALLETA BRINKI PEQUEÑA",
        descripcion: "X 12X 4",
        precio: "6200",
      },
      {
        item: 28,
        producto: "GALLETA COCOSETE SANDWICH",
        descripcion: "X 12 UND X 24 PAQ",
        precio: "12000",
      },
      {
        item: 29,
        producto: "GALLETA GOLOSETA",
        descripcion: "X 12 UN X 24 CJ",
        precio: "5000",
      },
      {
        item: 30,
        producto: "GALLETA MARIA",
        descripcion: "X 12",
        precio: "7000",
      },
      {
        item: 31,
        producto: "GALLETA SALADA SALTIN",
        descripcion: "X 12",
        precio: "8000",
      },
      {
        item: 32,
        producto: "GALLETA SALADA SALTIN",
        descripcion: "X 12 X 24 CJ",
        precio: "7000",
      },
      {
        item: 33,
        producto: "HELADO SALADO",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 34,
        producto: "HELADO SABORIZADO",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 35,
        producto: "HELADO SURTIDO",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 36,
        producto: "MANI KRAKS SAL",
        descripcion: "X 12",
        precio: "15300",
      },
      {
        item: 37,
        producto: "MANI LA ESPECIAL LIMON PIMIENTA",
        descripcion: "180G",
        precio: "7800",
      },
      {
        item: 38,
        producto: "MANI LA ESPECIAL LIMON PIMIENTA",
        descripcion: "DP X 12 UND",
        precio: "31000",
      },
      {
        item: 39,
        producto: "MANI MOTO DOYPACK",
        descripcion: "180G X 20 DISP",
        precio: "5500",
      },
      {
        item: 40,
        producto: "MANI MOTO NAKED SALADO",
        descripcion: "",
        precio: "5500",
      },
      {
        item: 41,
        producto: "MANI TOASTED",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 42,
        producto: "MARGARITAS",
        descripcion: "X 12",
        precio: "12000",
      },
      { item: 43, producto: "MARUCHI", descripcion: "X 12", precio: "12000" },
      {
        item: 44,
        producto: "MARUCHI SABORES",
        descripcion: "X 12",
        precio: "12000",
      },
      { item: 45, producto: "MEKATO", descripcion: "X 12", precio: "12000" },
      { item: 46, producto: "MEKATOS", descripcion: "X 12", precio: "12000" },
      {
        item: 47,
        producto: "MINI CRACKER",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 48,
        producto: "MINI DONUTS",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 49,
        producto: "MINI MARUCHI",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 50,
        producto: "MINI MEKATO",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 51,
        producto: "MINI RANCHEROS",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 52,
        producto: "MINI WAFER",
        descripcion: "X 12",
        precio: "12000",
      },
      { item: 53, producto: "NACHO", descripcion: "X 12", precio: "12000" },
      { item: 54, producto: "NACHOS", descripcion: "X 12", precio: "12000" },
      {
        item: 55,
        producto: "NACHOS SABORES",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 56,
        producto: "PAPA FRITAS",
        descripcion: "X 12",
        precio: "12000",
      },
      { item: 57, producto: "PAPAS", descripcion: "X 12", precio: "12000" },
      {
        item: 58,
        producto: "PAPAS SABORES",
        descripcion: "X 12",
        precio: "12000",
      },
      { item: 59, producto: "PEPSI", descripcion: "X 12", precio: "12000" },
      { item: 60, producto: "PIRINETAS", descripcion: "X 12", precio: "12000" },
      { item: 61, producto: "PLANTAS", descripcion: "X 12", precio: "12000" },
      { item: 62, producto: "POPA CUBO", descripcion: "X 12", precio: "12000" },
      { item: 63, producto: "POPA ECO", descripcion: "X 12", precio: "12000" },
      {
        item: 64,
        producto: "POPA GIGANTE",
        descripcion: "X 12",
        precio: "12000",
      },
      { item: 65, producto: "POPA MINI", descripcion: "X 12", precio: "12000" },
      {
        item: 66,
        producto: "POPA SABORES",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 67,
        producto: "POPA SURTIDA",
        descripcion: "X 12",
        precio: "12000",
      },
      {
        item: 68,
        producto: "PULPO O ZUNCHO COLORES",
        descripcion: "",
        precio: "5000",
      },
      { item: 69, producto: "RANCHEROS", descripcion: "X 12", precio: "12000" },
      {
        item: 70,
        producto: "RANCHEROS SABORES",
        descripcion: "X 12",
        precio: "12000",
      },
    ],
  },
  dulceria: {
    nombre: "DULCERIA",
    productos: [
      {
        item: 1,
        producto: "AGOGO ATOMICO",
        descripcion: "X 60 UNI",
        precio: "6000",
      },
      {
        item: 2,
        producto: "AGOGO GIGANTE",
        descripcion: "X 100 UND X 30 PAQ",
        precio: "7500",
      },
      {
        item: 3,
        producto: "AGOGO HUEVITOS",
        descripcion: "X 60 UND X 56PAQ",
        precio: "4400",
      },
      {
        item: 4,
        producto: "AGOGO MENTA VERDE",
        descripcion: "X 24 UND X 36 DISP",
        precio: "7200",
      },
      {
        item: 5,
        producto: "AGOGO TRONADOR",
        descripcion: "X 50 DISP",
        precio: "5500",
      },
      {
        item: 6,
        producto: "AGOGO TUTTI FRUTTI",
        descripcion: "",
        precio: "7200",
      },
      {
        item: 7,
        producto: "AGOGO",
        descripcion: "X 250 UND X 36 PAQ",
        precio: "6500",
      },
      {
        item: 8,
        producto: "AGOGO",
        descripcion: "X 500 UND X 18 PAQ",
        precio: "13500",
      },
      { item: 9, producto: "ACHA JUGUETE", descripcion: "", precio: "8000" },
      {
        item: 10,
        producto: "ALMENDRA EL TRIUNFO",
        descripcion: "X 125",
        precio: "7500",
      },
      {
        item: 11,
        producto: "ALMENDRA EL TRIUNFO",
        descripcion: "X 50",
        precio: "3000",
      },
      {
        item: 12,
        producto: "ALMENDRA FRANCESA",
        descripcion: "X 135 GRA",
        precio: "6200",
      },
      {
        item: 13,
        producto: "ALMENDRA FRANSESA",
        descripcion: "X 50 GRA",
        precio: "2800",
      },
      {
        item: 14,
        producto: "ALMENDRA TORRE GRANDE",
        descripcion: "",
        precio: "9200",
      },
      {
        item: 15,
        producto: "ALMENDRA TORRE PEQUEÑA",
        descripcion: "",
        precio: "3000",
      },
      {
        item: 16,
        producto: "ALMEDRA FRANCESA BOLSA",
        descripcion: "X 250 GRA",
        precio: "5500",
      },
      {
        item: 17,
        producto: "ALMENDRAS DULCE",
        descripcion: "KILO",
        precio: "18000",
      },
      {
        item: 18,
        producto: "ANIS BOLSA",
        descripcion: "X 40 UNID",
        precio: "2800",
      },
      {
        item: 19,
        producto: "ANIS POTE",
        descripcion: "X 40 UND",
        precio: "3000",
      },
      {
        item: 20,
        producto: "AROS TROLLI",
        descripcion: "X 100 X 8",
        precio: "10500",
      },
      {
        item: 21,
        producto: "AVIONES SORPRESA",
        descripcion: "",
        precio: "2400",
      },
      {
        item: 22,
        producto: "BALONCITO JET",
        descripcion: "X 18 UNDS 24UNDS",
        precio: "3100",
      },
      {
        item: 23,
        producto: "BALONCITO",
        descripcion: "X 100 UND X 12 PAQ",
        precio: "34500",
      },
      {
        item: 24,
        producto: "BANANAS CARAMELO DUROS SURT",
        descripcion: "X 100 X 24 PQ",
        precio: "6000",
      },
      {
        item: 25,
        producto: "BARRILETE MANCHA LENGUAS",
        descripcion: "X 50 X 18 CJ",
        precio: "9500",
      },
      {
        item: 26,
        producto: "BARRILETE",
        descripcion: "X 40 UNDS GRANDE X 18 UNDS",
        precio: "9500",
      },
      {
        item: 27,
        producto: "BARBIE ROLON STD",
        descripcion: "X 6",
        precio: "15500",
      },
      { item: 28, producto: "BATI LADO", descripcion: "", precio: "4200" },
      {
        item: 29,
        producto: "BATI CREMA",
        descripcion: "50G X 18",
        precio: "3200",
      },
      {
        item: 30,
        producto: "BB MANGOS SAL",
        descripcion: "X 48 UND X 16 PAQ",
        precio: "7500",
      },
      {
        item: 31,
        producto: "BB MAXCOCO",
        descripcion: "X 24 UNI X 20 CJ",
        precio: "7600",
      },
      {
        item: 32,
        producto: "BB PIÑA COLADA",
        descripcion: "X 48 UND X 16 PAQ",
        precio: "6800",
      },
      {
        item: 33,
        producto: "BB SUPERCOCO",
        descripcion: "X 24UND X 24 PAQ",
        precio: "11200",
      },
      {
        item: 34,
        producto: "BB TAMARINDO",
        descripcion: "X 48 UND X 16 PAQ",
        precio: "7700",
      },
      {
        item: 35,
        producto: "BBB FRESA Y SURTIDO",
        descripcion: "X 24 UND X 15 PAQ",
        precio: "8800",
      },
      {
        item: 36,
        producto: "BIANCHI AZUL",
        descripcion: "X 100 UND X 18 PAQ",
        precio: "11300",
      },
      {
        item: 37,
        producto: "BIANCHI BARRA AZUL Y BLANCO",
        descripcion: "X 12 UND X 12 DISP",
        precio: "10800",
      },
      {
        item: 38,
        producto: "BIANCHI BARA SRTD",
        descripcion: "X 18 UNI",
        precio: "15000",
      },
      {
        item: 39,
        producto: "BIANCHI BARRA GRANDE STD",
        descripcion: "X 18",
        precio: "21000",
      },
      {
        item: 40,
        producto: "BIANCHI BLANCO",
        descripcion: "X 100 UND X 18 PAQ",
        precio: "11300",
      },
      {
        item: 41,
        producto: "BIANCHI CHOCO BOMBONES SURT",
        descripcion: "X 30 UND X 18 PQ",
        precio: "7000",
      },
      {
        item: 42,
        producto: "BIANCHI CHOCOSNACK SURTIDO",
        descripcion: "48 G X 12",
        precio: "22500",
      },
      {
        item: 43,
        producto: "BIANCHI LINEA BLANCO Y AZUL CAJA",
        descripcion: "X 24 UND X 12 DSP",
        precio: "8000",
      },
      {
        item: 44,
        producto: "BIANCHI MOKA",
        descripcion: "X 100 X 18 CJ",
        precio: "8500",
      },
      {
        item: 45,
        producto: "BIANCHI PIPA STD",
        descripcion: "X 100",
        precio: "9500",
      },
      {
        item: 46,
        producto: "BIG BEN",
        descripcion: "X 100 X 18",
        precio: "14500",
      },
      {
        item: 47,
        producto: "BIG BOM POTE",
        descripcion: "X 80 UND",
        precio: "28500",
      },
      {
        item: 48,
        producto: "BIG BOM SUMMER",
        descripcion: "X 48 UND X 8 PAQ",
        precio: "14000",
      },
      {
        item: 49,
        producto: "BIG BOM SURTIDO",
        descripcion: "X 48 UND X 8 PAQ",
        precio: "16000",
      },
      {
        item: 50,
        producto: "BIG XL MANGO SAL",
        descripcion: "X 48",
        precio: "11000",
      },
      {
        item: 51,
        producto: "BIMBOLETES STD",
        descripcion: "X 24 UN",
        precio: "21000",
      },
      {
        item: 52,
        producto: "BOCADILLO TRICOLOR",
        descripcion: "X 12",
        precio: "7000",
      },
      {
        item: 53,
        producto: "BOLA CRISPI SWEET",
        descripcion: "X 150",
        precio: "9000",
      },
      {
        item: 54,
        producto: "BOLA POTE SANDIA",
        descripcion: "X 60",
        precio: "8000",
      },
      {
        item: 55,
        producto: "BOLA POTE SURTIDA",
        descripcion: "",
        precio: "8400",
      },
      {
        item: 56,
        producto: "BOLANCHO POTE MANGO BICHE",
        descripcion: "X 30 UND",
        precio: "10000",
      },
      {
        item: 57,
        producto: "BOLON MANI RELLENO CHOCOLATE",
        descripcion: "X 100",
        precio: "12300",
      },
      {
        item: 58,
        producto: "BOLONCHO POTE",
        descripcion: "X 30",
        precio: "9000",
      },
      {
        item: 59,
        producto: "BOMBONERA COCO",
        descripcion: "X 50 UND X 6 POTES",
        precio: "23600",
      },
      {
        item: 60,
        producto: "BOTELLITAS CHICLE",
        descripcion: "X 12 UNI X 24 CJ",
        precio: "7800",
      },
      {
        item: 61,
        producto: "BUBALU STD",
        descripcion: "X 47 UNIDADES",
        precio: "10000",
      },
      {
        item: 62,
        producto: "BUBALU SURTIDO",
        descripcion: "X 70 X 32 UND",
        precio: "10500",
      },
      {
        item: 63,
        producto: "CANDI TOTOY SURTIDO",
        descripcion: "",
        precio: "9000",
      },
      { item: 64, producto: "CANDY SURTIDA", descripcion: "", precio: "8000" },
      {
        item: 65,
        producto: "CANDY RELENO STD",
        descripcion: "X 100",
        precio: "8200",
      },
      {
        item: 66,
        producto: "CARAMELO BIG BON",
        descripcion: "X 50",
        precio: "6800",
      },
      {
        item: 67,
        producto: "CARAMELO LECHE AMERICANDY",
        descripcion: "X 50 UNI",
        precio: "7400",
      },
      {
        item: 68,
        producto: "CARAZON CHUPETA",
        descripcion: "X 30 UNI",
        precio: "5000",
      },
      {
        item: 69,
        producto: "CARRITOS CHICLE",
        descripcion: "X 20 UND X 50 PAQ",
        precio: "6400",
      },
      {
        item: 70,
        producto: "CARRO CHOCOLATE",
        descripcion: "X 50 UNI",
        precio: "12500",
      },
      {
        item: 71,
        producto: "CELULARES CHICLES",
        descripcion: "",
        precio: "6400",
      },
      {
        item: 72,
        producto: "CERO GRADO",
        descripcion: "X 100 UNIDADES",
        precio: "6000",
      },
      {
        item: 73,
        producto: "CHAPARRITA DE PTE",
        descripcion: "X 50 UNI",
        precio: "7500",
      },
      {
        item: 74,
        producto: "CHICLE METRO STD",
        descripcion: "",
        precio: "1500",
      },
      {
        item: 75,
        producto: "OKA LOKA CHICLE POLVO",
        descripcion: "X 12 UNI X 12 C",
        precio: "9000",
      },
      {
        item: 76,
        producto: "CHICLETS PEQ MENTA Y STDO",
        descripcion: "X 100 UND X 30 DISP",
        precio: "17500",
      },
      {
        item: 77,
        producto: "CHICLES GRANDE",
        descripcion: "X 20 UND X 50 DISP",
        precio: "28000",
      },
      { item: 78, producto: "CHIPIRRIN", descripcion: "X 30", precio: "19000" },
      {
        item: 79,
        producto: "CHIPS AHOY MINI",
        descripcion: "X 50 GRAMOS",
        precio: "2000",
      },
      {
        item: 80,
        producto: "CHOC-MELOS CORAZON",
        descripcion: "X 10 UND",
        precio: "17500",
      },
      {
        item: 81,
        producto: "CHOCMELOS PALETA",
        descripcion: "X 18",
        precio: "23000",
      },
      {
        item: 82,
        producto: "CHOCMELOS",
        descripcion: "X 60 UNDS",
        precio: "17000",
      },
      {
        item: 83,
        producto: "CHOCO BREAK CARAMELO",
        descripcion: "X 30 UNI",
        precio: "9000",
      },
      {
        item: 84,
        producto: "CHOCO BREAK",
        descripcion: "X 50 UNI",
        precio: "14400",
      },
      { item: 85, producto: "CHOCO CAR", descripcion: "X 12", precio: "1600" },
      {
        item: 86,
        producto: "CHOCOBREAK BALL",
        descripcion: "X 50 X 18",
        precio: "7000",
      },
      {
        item: 87,
        producto: "CHOCODIS MANI",
        descripcion: "X 12",
        precio: "13000",
      },
      {
        item: 88,
        producto: "CHOCODISK DANDY",
        descripcion: "X 18UND X 12 DISP",
        precio: "16500",
      },
      {
        item: 89,
        producto: "CHOCOLORES CHOCO BLANCO",
        descripcion: "X 12 UND X 12 DISP",
        precio: "19000",
      },
      {
        item: 90,
        producto: "CHOCOLORES GOMAS",
        descripcion: "X 12 UND X 12 DISP",
        precio: "19000",
      },
      {
        item: 91,
        producto: "CHOCOLORES MANI",
        descripcion: "X 12 UND X 12 DISP",
        precio: "19000",
      },
      {
        item: 92,
        producto: "CHUPETA PINK HEAR",
        descripcion: "X 50 UND X 20 PAQ",
        precio: "4800",
      },
      {
        item: 93,
        producto: "CHUPETA PINK MANCHA LENGUA",
        descripcion: "X 50",
        precio: "4600",
      },
      {
        item: 94,
        producto: "CHUPETA SURTIDA",
        descripcion: "X 30",
        precio: "7000",
      },
      {
        item: 95,
        producto: "CHUPETA TIPITIN SICODELICAS",
        descripcion: "X 25 UND X 30 BOLSAS",
        precio: "4300",
      },
      {
        item: 96,
        producto: "CHUPETA TIPITIN UNICORNIO Y LECHE",
        descripcion: "X 50 X 15PQ",
        precio: "6700",
      },
      {
        item: 97,
        producto: "CHUPETOON",
        descripcion: "X 24 X 16",
        precio: "5000",
      },
      {
        item: 98,
        producto: "CHUPI LECHE MANI",
        descripcion: "X 40 X 24 PQTES",
        precio: "5700",
      },
      { item: 99, producto: "CHUPI WOM TIRA", descripcion: "", precio: "7800" },
      {
        item: 100,
        producto: "CHUPIGOOL STD",
        descripcion: "X 30 UND X 24 DISP",
        precio: "9000",
      },
      {
        item: 101,
        producto: "CHUPO JUGUETE",
        descripcion: "X 25 UND",
        precio: "6200",
      },
      {
        item: 102,
        producto: "CHURRO BANDEJA",
        descripcion: "48 UNI",
        precio: "11000",
      },
      {
        item: 103,
        producto: "CIGARILLO POTE GRANDE",
        descripcion: "X 100 UNI",
        precio: "12500",
      },
      {
        item: 104,
        producto: "COBERTURA CHOCOLATE NEGRO",
        descripcion: "",
        precio: "32000",
      },
      {
        item: 105,
        producto: "COFE STAR",
        descripcion: "X 100 UND X 20 PAQ",
        precio: "7700",
      },
      { item: 106, producto: "COFE STAR", descripcion: "X 50", precio: "3200" },
      {
        item: 107,
        producto: "COFFEE DELIGHT DURO",
        descripcion: "X 100 X CAJA 18",
        precio: "8000",
      },
      {
        item: 108,
        producto: "COMBINADO FORTUNA",
        descripcion: "X 18 UND X 30 DISP",
        precio: "4000",
      },
      {
        item: 109,
        producto: "COMBO COMFITECA",
        descripcion: "",
        precio: "28000",
      },
      {
        item: 110,
        producto: "COMBO OFERTA AROS",
        descripcion: "",
        precio: "18500",
      },
      {
        item: 111,
        producto: "DULCE TAMARINDO",
        descripcion: "100 UND X 16 PAQ",
        precio: "7800",
      },
      {
        item: 112,
        producto: "DULCES SURTIDOS",
        descripcion: "X 16 UNIDADES",
        precio: "16500",
      },
      {
        item: 113,
        producto: "FIESTA MIX",
        descripcion: "X 3 KILOS",
        precio: "49500",
      },
      {
        item: 114,
        producto: "FINI TIRA",
        descripcion: "X 18 UND",
        precio: "19500",
      },
      {
        item: 115,
        producto: "FLIPS STD",
        descripcion: "X 14 UNI",
        precio: "4600",
      },
      {
        item: 116,
        producto: "FRUNA CUBO SURTIDA",
        descripcion: "32 UND X 18 DISP",
        precio: "9700",
      },
      {
        item: 117,
        producto: "FRUTA RELLENA",
        descripcion: "X 100 UND X 20 PAQ",
        precio: "6400",
      },
      {
        item: 118,
        producto: "FRUTI AROS",
        descripcion: "X 250",
        precio: "4000",
      },
      {
        item: 119,
        producto: "FRUTIAROS CAJA",
        descripcion: "500GRS",
        precio: "7500",
      },
      {
        item: 120,
        producto: "FRUTICA CRUJI",
        descripcion: "X 100 UND 16 UNDS",
        precio: "8800",
      },
      {
        item: 121,
        producto: "FRUTICA LOVE",
        descripcion: "X 100 UND X 16 PAQ",
        precio: "8800",
      },
      {
        item: 122,
        producto: "FRUTICANDY",
        descripcion: "X 100 UND X 28 PAQ",
        precio: "4500",
      },
      {
        item: 123,
        producto: "GOMA RETRO BOLSA",
        descripcion: "X 100 UND X 24 PAQ",
        precio: "6800",
      },
      {
        item: 124,
        producto: "GOMMY POTE SURTIDA",
        descripcion: "X 30 UNI",
        precio: "13000",
      },
      {
        item: 125,
        producto: "GRAGEA TROPICO",
        descripcion: "DE 110GR",
        precio: "2200",
      },
      { item: 126, producto: "GRAGEAS", descripcion: "200G", precio: "3000" },
      {
        item: 127,
        producto: "GRAJEA FINA",
        descripcion: "500G",
        precio: "6000",
      },
      {
        item: 128,
        producto: "GRISLI POTE",
        descripcion: "X 270 UNI X 8 CJ",
        precio: "23000",
      },
      {
        item: 129,
        producto: "GUSANO TROLLY",
        descripcion: "X 12 39 GRAMOS",
        precio: "15000",
      },
      {
        item: 130,
        producto: "GUSANOS POTE",
        descripcion: "X 200 UNI X 6 CJ",
        precio: "17500",
      },
      {
        item: 131,
        producto: "HALLS BARRA SURTIDO",
        descripcion: "",
        precio: "17500",
      },
      {
        item: 132,
        producto: "HALLS PEPA NEGRO",
        descripcion: "X 100 UND X 30 PAQ",
        precio: "15000",
      },
      {
        item: 133,
        producto: "HIPER SURTIDA",
        descripcion: "X 8 UND X 28 PAQ",
        precio: "3600",
      },
      {
        item: 134,
        producto: "HUEVO EGGS YOLIS",
        descripcion: "",
        precio: "22000",
      },
      {
        item: 135,
        producto: "HUEVO YOLIS SORPRESA",
        descripcion: "X 12 UNDS X 24 DISP",
        precio: "27000",
      },
      {
        item: 136,
        producto: "JALEAS",
        descripcion: "X 10 UND",
        precio: "9000",
      },
      {
        item: 137,
        producto: "KICK MANI BARRA",
        descripcion: "X 12 X 12",
        precio: "15000",
      },
      {
        item: 138,
        producto: "KICK MANI MINI",
        descripcion: "X 12",
        precio: "7500",
      },
      {
        item: 139,
        producto: "LOKIÑO CARAMELO",
        descripcion: "X 100 UND X 24 PAQ",
        precio: "8000",
      },
      {
        item: 140,
        producto: "LOKIÑO CHICLES",
        descripcion: "X 50UND X 24 PAQ",
        precio: "6700",
      },
      {
        item: 141,
        producto: "MAMUT CAJA SURT",
        descripcion: "X 42 UND",
        precio: "18500",
      },
      {
        item: 142,
        producto: "MASMELO BANDEJA",
        descripcion: "X 24",
        precio: "11000",
      },
      {
        item: 143,
        producto: "MASMELO CREAM",
        descripcion: "X 50 UND X 8 PAQ",
        precio: "7700",
      },
      {
        item: 144,
        producto: "MASMELO MINI BOLSON",
        descripcion: "X 30 X 5PQ",
        precio: "22000",
      },
      {
        item: 145,
        producto: "MASMELO STD RELLENO",
        descripcion: "X 6 UNIDADES",
        precio: "10000",
      },
      { item: 146, producto: "MECHAS LOKAS", descripcion: "", precio: "19500" },
      {
        item: 147,
        producto: "MEGA TUMIX MENTA",
        descripcion: "X 300 UND X 12 DISP",
        precio: "29500",
      },
      {
        item: 148,
        producto: "MENTA CHAO LINEA SURT",
        descripcion: "X 24 UND X 12 DISP",
        precio: "9300",
      },
      {
        item: 149,
        producto: "MENTA CHAO SURTI",
        descripcion: "X 100 X 24 PAQ",
        precio: "8000",
      },
      {
        item: 150,
        producto: "MENTA CHAO X2 SURTD",
        descripcion: "X 100 UNID X 18 PAQ",
        precio: "10500",
      },
      {
        item: 151,
        producto: "MENTA CLASICA",
        descripcion: "X 100",
        precio: "7200",
      },
      {
        item: 152,
        producto: "MENTA ICE SURTIDA",
        descripcion: "X 100",
        precio: "7000",
      },
      {
        item: 153,
        producto: "MENTA HELADA COLOMBINA",
        descripcion: "X 100 X 18 PQ",
        precio: "7000",
      },
      {
        item: 154,
        producto: "MENTA PASTILLA CHAO",
        descripcion: "X 16 UNI",
        precio: "12000",
      },
      {
        item: 155,
        producto: "MIST SURTIDO",
        descripcion: "X 100 UND X 18 PQT",
        precio: "7600",
      },
      {
        item: 156,
        producto: "MOLOTOP ASIDO",
        descripcion: "X 100 X 24 PQ",
        precio: "8400",
      },
      {
        item: 157,
        producto: "ESENCIA LA PRADERA LECHE COND",
        descripcion: "X 24 UND",
        precio: "2200",
      },
      {
        item: 158,
        producto: "ESENCIA LA PRADERA VAINILLA CARAM",
        descripcion: "",
        precio: "3200",
      },
      {
        item: 159,
        producto: "EXTRAFINO AGUILA",
        descripcion: "X 18 UND X 32 DISP",
        precio: "4800",
      },
      {
        item: 160,
        producto: "LONJA AGUILA PEQ",
        descripcion: "X 300 GR X 30 UND",
        precio: "2300",
      },
      {
        item: 161,
        producto: "LONJA LECHE",
        descripcion: "X 500 GR X 27 UND",
        precio: "3800",
      },
      {
        item: 162,
        producto: "LONJA TRICOLOR EL PRINCIPE",
        descripcion: "X UND",
        precio: "4000",
      },
      {
        item: 163,
        producto: "MORDISQUETA RON PASAS",
        descripcion: "X 24 UND X 16 PAQ",
        precio: "8300",
      },
      {
        item: 164,
        producto: "MONEDAS CHOCOLATE BOLSA",
        descripcion: "X 50 UND X 72",
        precio: "9800",
      },
      {
        item: 165,
        producto: "MORITA RELLENA",
        descripcion: "",
        precio: "6000",
      },
      {
        item: 166,
        producto: "NUTELLA DISPLEY",
        descripcion: "X 12 UNDS X 28 DISP",
        precio: "12500",
      },
      {
        item: 167,
        producto: "NUTELLA DE 200 GR",
        descripcion: "",
        precio: "16000",
      },
      {
        item: 168,
        producto: "NUTELLA X 140",
        descripcion: "X UNDS",
        precio: "11500",
      },
      {
        item: 169,
        producto: "NUTELLA X 350 GR",
        descripcion: "X 15 UND",
        precio: "19500",
      },
      {
        item: 170,
        producto: "NUTELLA X 750 GR",
        descripcion: "X 12 UND",
        precio: "32000",
      },
      {
        item: 171,
        producto: "OJITOS LOCOS ACIDOS BOLSA",
        descripcion: "X 100 X 24 PQ",
        precio: "8300",
      },
      {
        item: 172,
        producto: "OKA LOKA CARAMELO ACIDO BOLSA",
        descripcion: "X 50 X 12",
        precio: "7800",
      },
      {
        item: 173,
        producto: "OKA LOKA FUSION",
        descripcion: "X 12 UND X 12 DISP",
        precio: "10000",
      },
      {
        item: 174,
        producto: "OKA LOKA GRANDE",
        descripcion: "X 12 UND X 12 DISP",
        precio: "20500",
      },
      {
        item: 175,
        producto: "OKA LOKA NANO BOLSA",
        descripcion: "X 24 UND X 12 PAQ",
        precio: "13000",
      },
      {
        item: 176,
        producto: "OKALOKA ATOMOS REVOLCON",
        descripcion: "X 48 UNDS X 24 DISP",
        precio: "8500",
      },
      { item: 177, producto: "ALOKA2 MENTA", descripcion: "", precio: "6200" },
      {
        item: 178,
        producto: "ALOKA2 SABORES",
        descripcion: "X 100 X 20 PQ",
        precio: "8200",
      },
      {
        item: 179,
        producto: "PANELITA LECHE LA SABRO",
        descripcion: "X 40 UND X 48 POTES",
        precio: "5500",
      },
      {
        item: 180,
        producto: "PIN POP EN POLVO ACIDO",
        descripcion: "X 12 UNDS X 12 DISPLEY",
        precio: "8500",
      },
      {
        item: 181,
        producto: "PIN PON FRESA PEQUE",
        descripcion: "X 24 UN X 16 CJ",
        precio: "7200",
      },
      {
        item: 182,
        producto: "PIN POP GIGANTE",
        descripcion: "X 24 X 16 PQ ST",
        precio: "9500",
      },
      {
        item: 183,
        producto: "PIRULIN",
        descripcion: "155 GRAMOS X 24 CJ",
        precio: "14500",
      },
      {
        item: 184,
        producto: "PIRULITO SURTIDO",
        descripcion: "X 24 UND X 25 PAQ",
        precio: "4100",
      },
      {
        item: 185,
        producto: "QUIPITOS",
        descripcion: "X 24 UND X 24 DISP",
        precio: "12000",
      },
      {
        item: 186,
        producto: "REY AGUILA",
        descripcion: "18 UND X 24 DISPLAY",
        precio: "6400",
      },
      {
        item: 187,
        producto: "SNOW MINT FRESA",
        descripcion: "X 100",
        precio: "7800",
      },
      {
        item: 188,
        producto: "SPLOT ACIDO EN LINEA",
        descripcion: "X 24 UND X 18 DISP",
        precio: "8600",
      },
      {
        item: 189,
        producto: "SPLOT CHICLE BOLSA ST",
        descripcion: "X 100 X 16",
        precio: "8400",
      },
      {
        item: 190,
        producto: "SPLOT ESPANTA OJOS",
        descripcion: "X 60 UND X 18 DISP",
        precio: "4700",
      },
      {
        item: 191,
        producto: "SPLOT TATU SURTIDO",
        descripcion: "X 120 UND X 18 DISP",
        precio: "14000",
      },
      {
        item: 192,
        producto: "SUPER ACIDO POLVO ACIDO",
        descripcion: "X 80 UND X 36 DISPLAY",
        precio: "8900",
      },
      {
        item: 193,
        producto: "SUPER ACIDO",
        descripcion: "X 70 UND NAR TOR X 16 DISP",
        precio: "8200",
      },
      {
        item: 194,
        producto: "SUPER COCO BARRA",
        descripcion: "X 12 UND X 12 DISP",
        precio: "10800",
      },
      {
        item: 195,
        producto: "SUPER COCO PIPA",
        descripcion: "X 100 UND X 18 PAQ",
        precio: "15500",
      },
      {
        item: 196,
        producto: "SUPER ACIDO METRO",
        descripcion: "X 15 UN X 24 CJ",
        precio: "11500",
      },
      {
        item: 197,
        producto: "TRULULU AROS",
        descripcion: "X 100 UND X 18 PAQ",
        precio: "15000",
      },
      {
        item: 198,
        producto: "TRULULU AROS",
        descripcion: "X 50 UND X 36 PAQ",
        precio: "7800",
      },
      {
        item: 199,
        producto: "TRULULU CHOCMELOS",
        descripcion: "X 12 STD",
        precio: "22000",
      },
      {
        item: 200,
        producto: "TRULULU RECARGA 90GR",
        descripcion: "X 24",
        precio: "41000",
      },
      {
        item: 201,
        producto: "TUMIX BANDEJA",
        descripcion: "X 400 UNI X 10 CJ",
        precio: "39000",
      },
      {
        item: 202,
        producto: "TUMIX SURTIDOS",
        descripcion: "X 100 UND X 36 DISP",
        precio: "9700",
      },
      {
        item: 203,
        producto: "VELEÑON FORTUNA",
        descripcion: "X 12 UND X 30 DISP",
        precio: "5000",
      },
      {
        item: 204,
        producto: "ACETAFO CORAZONES",
        descripcion: "",
        precio: "7500",
      },
      {
        item: 205,
        producto: "AZUCAR MANUELITA TUBITO",
        descripcion: "X 200 UNDS",
        precio: "6500",
      },
      { item: 206, producto: "BOKA SURTIDO", descripcion: "", precio: "7000" },
      {
        item: 207,
        producto: "CREMA CHANTILLY",
        descripcion: "80GR X 12 UND",
        precio: "6000",
      },
      {
        item: 208,
        producto: "CREMA CHANTILLY KILO",
        descripcion: "",
        precio: "51000",
      },
      {
        item: 209,
        producto: "CREMA DE ALMENDRAS",
        descripcion: "X 140",
        precio: "14000",
      },
      {
        item: 210,
        producto: "BONICE SURTIDO CAJITA",
        descripcion: "X 10",
        precio: "6800",
      },
      { item: 211, producto: "OBLEAS", descripcion: "X 100", precio: "12000" },
      {
        item: 212,
        producto: "BONICE SURTIDO",
        descripcion: "X 12",
        precio: "8000",
      },
      {
        item: 213,
        producto: "GELATINA BOMBONERA",
        descripcion: "X 90 UNI",
        precio: "26500",
      },
      {
        item: 214,
        producto: "GELATINA FRUTIÑO KIT",
        descripcion: "X 4",
        precio: "5600",
      },
      {
        item: 215,
        producto: "GELATINA FRUTIÑO LONCHERA",
        descripcion: "X 4 X 12",
        precio: "6200",
      },
      {
        item: 216,
        producto: "GELATINA JUMGLA BOLSA",
        descripcion: "X 20 UNI X 12 CJ",
        precio: "9000",
      },
      {
        item: 217,
        producto: "GELATINA PARA PREPARAR",
        descripcion: "250GR",
        precio: "5000",
      },
      {
        item: 218,
        producto: "GELATINA POTE JUMGLA",
        descripcion: "X 40 UNI",
        precio: "22000",
      },
      {
        item: 219,
        producto: "GELAINA POTE",
        descripcion: "X 48 X UNI",
        precio: "26500",
      },
      {
        item: 220,
        producto: "GELATINA SIN SABOR",
        descripcion: "250 GRS",
        precio: "1000",
      },
      {
        item: 221,
        producto: "GELATINA",
        descripcion: "X 500 GRAMOS",
        precio: "9400",
      },
      {
        item: 222,
        producto: "ROLON BARBIE",
        descripcion: "X 10 UND",
        precio: "24000",
      },
      {
        item: 223,
        producto: "BARBIE ROLON STD",
        descripcion: "X 6",
        precio: "15500",
      },
      {
        item: 224,
        producto: "SHA CHICLE BARBI METRO",
        descripcion: "X 15 X 24",
        precio: "11500",
      },
      {
        item: 225,
        producto: "SHA MOLECULAS",
        descripcion: "X 40 UNI",
        precio: "8700",
      },
      {
        item: 226,
        producto: "PITILLOS JUGETES",
        descripcion: "X 15 UND",
        precio: "6500",
      },
      {
        item: 227,
        producto: "CHICLE TATTOO",
        descripcion: "X 100",
        precio: "21000",
      },
      {
        item: 228,
        producto: "CIGARILLO POTE GRANDE",
        descripcion: "X 100 UNI",
        precio: "12500",
      },
    ],
  },
  licores: {
    nombre: "LICORES",
    productos: [
      {
        item: 1,
        producto: "AGUARDIENTE AMARILLIO",
        descripcion: "750 MI X 12 CJ",
        precio: "65000",
      },
      {
        item: 2,
        producto: "AGUARDIENTE AMARILLO 1/2",
        descripcion: "375ML",
        precio: "40000",
      },
      {
        item: 3,
        producto: "AMARILLO GARRAFA",
        descripcion: "X 1500",
        precio: "120000",
      },
      {
        item: 4,
        producto: "AGUARDIENTE REAL",
        descripcion: "750",
        precio: "67000",
      },
      {
        item: 5,
        producto: "AMARILLO TETRAPAK",
        descripcion: "X 1050",
        precio: "66000",
      },
      {
        item: 6,
        producto: "ANTIOQUEÑO LIGHT GARRAFA",
        descripcion: "X 6 UND",
        precio: "142000",
      },
      {
        item: 7,
        producto: "ANTIOQUEÑO LIGHT LITRO",
        descripcion: "X 20 UND",
        precio: "62000",
      },
      {
        item: 8,
        producto: "ANTIOQUEÑO LIGHT MEDIA",
        descripcion: "X 30 UND",
        precio: "35000",
      },
      {
        item: 9,
        producto: "ANTIOQUEÑO REAL",
        descripcion: "750",
        precio: "67000",
      },
      {
        item: 10,
        producto: "ANTIOQUEÑO TAPA VERDE",
        descripcion: "750 ML",
        precio: "53000",
      },
      {
        item: 11,
        producto: "ANTIOQUEÑO TAPA VERDE MEDIA",
        descripcion: "",
        precio: "32000",
      },
      {
        item: 12,
        producto: "ANTIOQUEÑO TETRAPA",
        descripcion: "1050 ML",
        precio: "64000",
      },
      {
        item: 13,
        producto: "ANTIOQUEÑO TETRAPA",
        descripcion: "260 ML",
        precio: "15000",
      },
      {
        item: 14,
        producto: "APERITIVO GARRAFA",
        descripcion: "X 6",
        precio: "35000",
      },
      {
        item: 15,
        producto: "APERITIVO LITRO",
        descripcion: "X 12 750ML",
        precio: "17000",
      },
      {
        item: 16,
        producto: "APERITIVO MEDIA",
        descripcion: "X 24 UND",
        precio: "11000",
      },
      {
        item: 17,
        producto: "BAILEYS CREMA WHISKY",
        descripcion: "X 375 ML X 12 UND",
        precio: "54000",
      },
      {
        item: 18,
        producto: "BAILEYS CREMA WHISKY",
        descripcion: "X 700 ML X 12 UND",
        precio: "84000",
      },
      {
        item: 19,
        producto: "BAILEYS MONBLA BONBONES",
        descripcion: "X 8",
        precio: "7400",
      },
      {
        item: 20,
        producto: "BUCANA TWO SOULS",
        descripcion: "X 750",
        precio: "205000",
      },
      {
        item: 21,
        producto: "CHAMPAÑA J.P. CHENET",
        descripcion: "X 750 ML X 6 UND",
        precio: "75000",
      },
      {
        item: 22,
        producto: "CHAMPAÑA PRESIDENCIAL",
        descripcion: "X 750 ML X 12 UND",
        precio: "14000",
      },
      {
        item: 23,
        producto: "CHAMPAÑA SULIME",
        descripcion: "",
        precio: "15000",
      },
      {
        item: 24,
        producto: "CREMA DE WHISKI ORO",
        descripcion: "",
        precio: "15000",
      },
      { item: 25, producto: "JP LATA", descripcion: "X 24", precio: "11000" },
      {
        item: 26,
        producto: "RON CALDAS DE GARRAFA",
        descripcion: "X 6 UND",
        precio: "130000",
      },
      {
        item: 27,
        producto: "RON CALDAS DE LITRO",
        descripcion: "X 12 UND",
        precio: "65000",
      },
      {
        item: 28,
        producto: "RON CALDAS DE MEDIA",
        descripcion: "X 24 UND",
        precio: "35000",
      },
      {
        item: 29,
        producto: "RON MEDELLIN 5 AÑOS",
        descripcion: "750ML",
        precio: "62000",
      },
      {
        item: 30,
        producto: "RON MEDELLIN DORADO",
        descripcion: "750 ML X 20",
        precio: "40000",
      },
      {
        item: 31,
        producto: "RON MEDELLIN DORADO",
        descripcion: "X 375 ML X 30",
        precio: "21000",
      },
      {
        item: 32,
        producto: "RON VIEJO CALDAS 15 AÑOS",
        descripcion: "750 ML",
        precio: "120000",
      },
      {
        item: 33,
        producto: "RON VIEJO CALDAS 8 AÑOS",
        descripcion: "750 ML",
        precio: "115000",
      },
      {
        item: 34,
        producto: "SABAJON APOLO",
        descripcion: "X 12 UND",
        precio: "32000",
      },
      {
        item: 35,
        producto: "TEQUILA 1800 REPOSADO",
        descripcion: "",
        precio: "290000",
      },
      {
        item: 36,
        producto: "TEQUILA CENTENARIO",
        descripcion: "700 ML",
        precio: "98000",
      },
      {
        item: 37,
        producto: "TEQUILA REPOSADO MILAGROS",
        descripcion: "",
        precio: "280000",
      },
      {
        item: 38,
        producto: "TEQUILA DON JULIO REPOSADO",
        descripcion: "",
        precio: "282000",
      },
      {
        item: 39,
        producto: "TEQUILA JOSE CUERVO",
        descripcion: "375ML",
        precio: "60000",
      },
      {
        item: 40,
        producto: "TEQUILA JOSE CUERVO",
        descripcion: "750 ML",
        precio: "95000",
      },
      {
        item: 41,
        producto: "VINO BLANCO DE MISA GRAJALES",
        descripcion: "X 12 UND",
        precio: "25000",
      },
      {
        item: 42,
        producto: "VINO BLANCO GOURMET",
        descripcion: "X 12 UNDS",
        precio: "23500",
      },
      {
        item: 43,
        producto: "VINO CELEBRACION MOSCATEL",
        descripcion: "",
        precio: "13000",
      },
      {
        item: 44,
        producto: "VINO DULCE CONSAGRAR",
        descripcion: "",
        precio: "28500",
      },
      { item: 45, producto: "VINO ECONOMICO", descripcion: "", precio: "4000" },
      {
        item: 46,
        producto: "VINO ESPUMOSO RIVELINO ROSADO",
        descripcion: "750ML",
        precio: "16000",
      },
      {
        item: 47,
        producto: "VINO GOURMET COCINA TINTO GRAJALES",
        descripcion: "750ML",
        precio: "23500",
      },
      {
        item: 48,
        producto: "VINO LAMBRUSCO",
        descripcion: "",
        precio: "25000",
      },
      {
        item: 49,
        producto: "VINO MAIPO STD",
        descripcion: "",
        precio: "34000",
      },
      {
        item: 50,
        producto: "VINO MANISCHEWITZ",
        descripcion: "750ML",
        precio: "50000",
      },
      {
        item: 51,
        producto: "VINO SANSON",
        descripcion: "750 ML",
        precio: "23000",
      },
      {
        item: 52,
        producto: "WHISKY BUCANAS 12 AÑOS",
        descripcion: "750ML",
        precio: "180000",
      },
      {
        item: 53,
        producto: "WHISKY BUCHANA MASTER",
        descripcion: "X 750 ML X 12 UND",
        precio: "206000",
      },
      {
        item: 54,
        producto: "WHISKY BUCHANAS 12 AÑOS",
        descripcion: "X 375 ML X 12 UND",
        precio: "97000",
      },
      {
        item: 55,
        producto: "WHISKY BUCHANAS 18 AÑOS",
        descripcion: "X 750 ML X6 UND",
        precio: "390000",
      },
      {
        item: 56,
        producto: "WHISKY OLD PARR 12 AÑOS",
        descripcion: "X 750 ML X 12 UND",
        precio: "160000",
      },
      {
        item: 57,
        producto: "BRANDY 5 ESTRELLAS",
        descripcion: "375ML X 24 UNDS",
        precio: "34000",
      },
      {
        item: 58,
        producto: "BRANDY 5 ESTRELLAS",
        descripcion: "X 750ML X 12 UNDS",
        precio: "53000",
      },
      {
        item: 59,
        producto: "CRISTAL XS DE MEDIA",
        descripcion: "X 24 UND",
        precio: "29000",
      },
      {
        item: 60,
        producto: "CRISTAL XS GARRAFA",
        descripcion: "1750ML",
        precio: "90000",
      },
      {
        item: 61,
        producto: "CRISTAL XS LITRO",
        descripcion: "X 12 UND",
        precio: "42000",
      },
      {
        item: 62,
        producto: "J P PEQUEÑA",
        descripcion: "X 200 MILI",
        precio: "32000",
      },
    ],
  },

  cerveza: {
    nombre: "CERVEZA",
    productos: [
      { item: 1, producto: "POKER", descripcion: "750 X 16", precio: "105000" },
      { item: 2, producto: "LIGTH", descripcion: "750 X 16", precio: "105000" },
      {
        item: 3,
        producto: "COSTEÑA",
        descripcion: "750 X 16",
        precio: "85000",
      },
      { item: 4, producto: "AGUILITA", descripcion: "X 38", precio: "105000" },
      { item: 6, producto: "COSTEÑITA", descripcion: "X 38", precio: "105000" },
      {
        item: 7,
        producto: "CORONITA BOTELLA",
        descripcion: "",
        precio: "105000",
      },
      {
        item: 8,
        producto: "CLUB COLOMBIA BOTELLA",
        descripcion: "X 30",
        precio: "130000",
      },
      {
        item: 9,
        producto: "CLUB LAT",
        descripcion: "269 CM X 24",
        precio: "70000",
      },
      {
        item: 10,
        producto: "CLUB LATA GORDA",
        descripcion: "330 CM X 24",
        precio: "115000",
      },
      {
        item: 11,
        producto: "CORONITA BOTELLA",
        descripcion: "X 24",
        precio: "105000",
      },
      {
        item: 12,
        producto: "CORONITA LATA",
        descripcion: "X 24 UND",
        precio: "105000",
      },
      {
        item: 13,
        producto: "COSTEÑA BOTELLON",
        descripcion: "CANASTA X 16",
        precio: "85000",
      },
      {
        item: 14,
        producto: "COSTEÑITA CANASTA",
        descripcion: "CANASTA X 38",
        precio: "105000",
      },
      {
        item: 15,
        producto: "HEINEKEN",
        descripcion: "250 ML DISP X6 CJ X24",
        precio: "65000",
      },
      {
        item: 16,
        producto: "HEINEKEN LATA",
        descripcion: "DISP X6 BANDX24",
        precio: "85000",
      },
      {
        item: 17,
        producto: "LATA AGUILA DELGADA",
        descripcion: "X 24",
        precio: "85000",
      },
      {
        item: 18,
        producto: "LATA BUDWEISR",
        descripcion: "PQ X 24",
        precio: "80000",
      },
      {
        item: 19,
        producto: "LATA COSTEÑA GRANDE",
        descripcion: "LATA GRANDE",
        precio: "97000",
      },
      {
        item: 20,
        producto: "LATA AGUILA GRANDE",
        descripcion: "LATA GRANDE",
        precio: "110000",
      },
      {
        item: 21,
        producto: "LATA LIGHT DELGADA",
        descripcion: "PQ X 24",
        precio: "80000",
      },
      {
        item: 22,
        producto: "LATA LIGHT GORDA",
        descripcion: "X 24",
        precio: "110000",
      },
      {
        item: 23,
        producto: "LIGHT BOTELLON",
        descripcion: "CANASTA",
        precio: "105000",
      },
      { item: 24, producto: "LIGHT", descripcion: "X 30", precio: "105000" },
      {
        item: 25,
        producto: "LIKE STD",
        descripcion: "X 4 SIXPA X 6",
        precio: "15500",
      },
      {
        item: 26,
        producto: "LIKE LATA",
        descripcion: "X 24 UNI",
        precio: "70000",
      },
      { item: 27, producto: "POK PILS", descripcion: "X 30", precio: "105000" },
      {
        item: 28,
        producto: "POKER BOTELLON",
        descripcion: "CANASTA",
        precio: "105000",
      },
      {
        item: 29,
        producto: "POKER LATA GORDA",
        descripcion: "X 24",
        precio: "110000",
      },
      {
        item: 30,
        producto: "POKER LATA PEQUEÑA",
        descripcion: "X 24",
        precio: "85000",
      },
      {
        item: 31,
        producto: "SMIRNOFF BOKA LULU",
        descripcion: "750 ML",
        precio: "50000",
      },
      {
        item: 32,
        producto: "SMIRNOFF LEMON ORIGINAL",
        descripcion: "X 275ML X 24 UND",
        precio: "260000",
      },
      {
        item: 33,
        producto: "BOTELLON TECATE",
        descripcion: "X 16",
        precio: "75000",
      },
      {
        item: 34,
        producto: "REDS LATA",
        descripcion: "269CM X 24",
        precio: "100000",
      },
      {
        item: 35,
        producto: "REFAJO ANDINA",
        descripcion: "X 24 X 310",
        precio: "45000",
      },
      { item: 36, producto: "FOUR LOKO", descripcion: "UND", precio: "15000" },
      {
        item: 37,
        producto: "LOS CUATES STD",
        descripcion: "X 269 MIL X 24 UNI",
        precio: "4000",
      },
    ],
  },

  galleteria: {
    nombre: "GALLETERIA",
    productos: [
      {
        item: 1,
        producto: "BRINKY SURTIDA",
        descripcion: "X 10 UND X 24 PAQ",
        precio: "9100",
      },
      {
        item: 2,
        producto: "CHOCO MUU",
        descripcion: "X 10 X 24 CJ",
        precio: "9500",
      },
      {
        item: 3,
        producto: "CHOKIS CHOCOLATE",
        descripcion: "X 16 UNI X 12 CJ",
        precio: "17200",
      },
      {
        item: 4,
        producto: "CHOKIS CHISPAS",
        descripcion: "X 6 UND X 15 PQ",
        precio: "8500",
      },
      {
        item: 5,
        producto: "CLUB SOCIAL ORIGINAL",
        descripcion: "X 9 UND X 24 PAQ",
        precio: "6200",
      },
      {
        item: 6,
        producto: "COCOSETE",
        descripcion: "DISPX21 UNIDADES",
        precio: "34000",
      },
      {
        item: 7,
        producto: "COCOSETE",
        descripcion: "X 8 UNI X 12 CJ",
        precio: "12000",
      },
      { item: 8, producto: "COMBO OBLEA", descripcion: "", precio: "9000" },
      { item: 9, producto: "COMBO WUAFER", descripcion: "", precio: "5000" },
      {
        item: 10,
        producto: "CONO GALLETA",
        descripcion: "PQ X 360 UNI",
        precio: "92000",
      },
      {
        item: 11,
        producto: "CRAKEÑAS SALTIN",
        descripcion: "X 4 X 18",
        precio: "6400",
      },
      {
        item: 12,
        producto: "CROKANTICAS",
        descripcion: "X 12 UNI",
        precio: "8000",
      },
      {
        item: 13,
        producto: "DORADITA MULTIPACK",
        descripcion: "X 4 UND X 24 UNDS",
        precio: "9900",
      },
      {
        item: 14,
        producto: "DUCALES MINI",
        descripcion: "X 10 X 12 CJ",
        precio: "19000",
      },
      {
        item: 15,
        producto: "DUCALES 3 TACOS",
        descripcion: "X 24 UND",
        precio: "8700",
      },
      {
        item: 16,
        producto: "DUCALES INDIVIDUAL",
        descripcion: "X 9 UND X 24 PAQ",
        precio: "7000",
      },
      {
        item: 17,
        producto: "DUCALES TACO DIA",
        descripcion: "X 6 UNI X 8 CAJA",
        precio: "15600",
      },
      {
        item: 18,
        producto: "DUX INTEGRAL INDV.",
        descripcion: "X 14 UND X 16PQ",
        precio: "5800",
      },
      {
        item: 19,
        producto: "DUX ORIGINAL",
        descripcion: "X 9 X 24 CAJA",
        precio: "6800",
      },
      {
        item: 20,
        producto: "FESTIVAL CHOCK TUBO",
        descripcion: "",
        precio: "2800",
      },
      {
        item: 21,
        producto: "FESTIVAL GRAN SURTIDAS",
        descripcion: "X 6 UND X 24 PAQ",
        precio: "13300",
      },
      {
        item: 22,
        producto: "FESTIVAL PEQ SURTIDAS",
        descripcion: "X 4 UND X 24 PAQ",
        precio: "11500",
      },
      {
        item: 23,
        producto: "FESTIVAL RECREO LARGA",
        descripcion: "X 12 X 48 CJ",
        precio: "2300",
      },
      {
        item: 24,
        producto: "FESTIVAL RECREO PEQUEÑA",
        descripcion: "X 12",
        precio: "11500",
      },
      {
        item: 25,
        producto: "FIARINO CHOCOLATE SURTIDAS",
        descripcion: "",
        precio: "26500",
      },
      {
        item: 26,
        producto: "GALLE CASERITA",
        descripcion: "X 120 UNI",
        precio: "16000",
      },
      {
        item: 27,
        producto: "GALLETA 77 PEQUEÑA",
        descripcion: "X 6 CAJA",
        precio: "15300",
      },
      {
        item: 28,
        producto: "GALLETA BRINKI PEQUEÑA",
        descripcion: "X 12 X 4",
        precio: "6200",
      },
      {
        item: 29,
        producto: "GALLETA COCOSETE SANDWICH",
        descripcion: "X 12 UND X 24 PAQ",
        precio: "12000",
      },
      {
        item: 30,
        producto: "GALLETA MARIA",
        descripcion: "X 24 CJ",
        precio: "6000",
      },
      {
        item: 31,
        producto: "GALLETA MILO ANILLOS PEQ",
        descripcion: "X 12 X 24",
        precio: "12300",
      },
      {
        item: 32,
        producto: "GALLETA NAVICHEF",
        descripcion: "150 GRAMOS X 30 UNI",
        precio: "4300",
      },
      {
        item: 33,
        producto: "GALLETA REDONDITA SURTIDA",
        descripcion: "X 12",
        precio: "6300",
      },
      {
        item: 34,
        producto: "GALLETA RIZADA",
        descripcion: "X 20",
        precio: "3900",
      },
      {
        item: 35,
        producto: "GOL AREQUIPE",
        descripcion: "X 8 UNIDADES",
        precio: "19500",
      },
      {
        item: 36,
        producto: "GOL CHOCOLATE",
        descripcion: "X 24 UND X 12 DISP",
        precio: "31000",
      },
      {
        item: 37,
        producto: "GOL COCO",
        descripcion: "X 18 UND X 12 DISP",
        precio: "24000",
      },
      {
        item: 38,
        producto: "GOL MEGA ARANDANOS",
        descripcion: "X 8 X 53G X 12 DISP",
        precio: "17000",
      },
      {
        item: 39,
        producto: "GOL MINI",
        descripcion: "X 24 UNDS X 12 DISP",
        precio: "21500",
      },
      {
        item: 40,
        producto: "MIINICHIPS",
        descripcion: "X 8 UNIDADES",
        precio: "12500",
      },
      {
        item: 41,
        producto: "MAXCOCO",
        descripcion: "X 10 UND X 12 DSP",
        precio: "13500",
      },
      {
        item: 42,
        producto: "MU MANTEQUILLA",
        descripcion: "X 18 UND X 12 DISP",
        precio: "7600",
      },
      {
        item: 43,
        producto: "MUU MAX CHOCOLATE",
        descripcion: "X 12 X 24 PQ",
        precio: "10300",
      },
      {
        item: 44,
        producto: "MUU WAFER ACHOCOLATADA",
        descripcion: "X 15 X 24 PQ",
        precio: "7500",
      },
      {
        item: 45,
        producto: "MUU WAFER VAINILLA",
        descripcion: "X 15 UND X 24 PQ",
        precio: "7500",
      },
      {
        item: 46,
        producto: "OREO ROLLO",
        descripcion: "X 125 GR X 30 UND",
        precio: "2800",
      },
      {
        item: 47,
        producto: "OREO COCACOLA",
        descripcion: "X 12 UNI",
        precio: "12200",
      },
      {
        item: 48,
        producto: "OREO VAINILLA",
        descripcion: "X 12 UND X 12 PAQ",
        precio: "12500",
      },
      {
        item: 49,
        producto: "PIAZA NUCITA",
        descripcion: "X 12 UNDS X 18 G",
        precio: "7500",
      },
      {
        item: 50,
        producto: "PIAZA JIRAFA SURTIDA",
        descripcion: "X 24 UND X 12 DISP",
        precio: "9500",
      },
      {
        item: 51,
        producto: "QUAKER SURTIDA",
        descripcion: "X 6 X 18G",
        precio: "8000",
      },
      {
        item: 52,
        producto: "SALTIN 10 TACOS",
        descripcion: "X 6 CAJA",
        precio: "13200",
      },
      {
        item: 53,
        producto: "SALTIN 4 TACOS",
        descripcion: "X 24",
        precio: "3500",
      },
      {
        item: 54,
        producto: "SALTIN 8 TACOS",
        descripcion: "X 12 CJ",
        precio: "10800",
      },
      {
        item: 55,
        producto: "SALTIN INDIVIDUAL",
        descripcion: "X 9 UND X 24 PAQ",
        precio: "6300",
      },
      {
        item: 56,
        producto: "SALTIN NOEL 3 TACOS",
        descripcion: "X 24 PAQ",
        precio: "6300",
      },
      {
        item: 57,
        producto: "SALTIN NOEL 5 TACOS",
        descripcion: "X 24 PAQ",
        precio: "7700",
      },
      {
        item: 58,
        producto: "SALTIN TACO DIA",
        descripcion: "X 6 UND X 8 PAQ",
        precio: "10800",
      },
      {
        item: 59,
        producto: "SALTIN X6 TACOS",
        descripcion: "X 24",
        precio: "9300",
      },
      {
        item: 60,
        producto: "TIPO LECHE MUU COLOM",
        descripcion: "18 UND X 30 PAQ",
        precio: "4600",
      },
      {
        item: 61,
        producto: "TIPO LECHE NOEL",
        descripcion: "X 21 UND X 24 PAQ",
        precio: "5000",
      },
      {
        item: 62,
        producto: "TIPO LECHE ECONOMICA",
        descripcion: "X 18 X 28 LA VICTORIA",
        precio: "3400",
      },
      {
        item: 63,
        producto: "TOSH AJONJOLI",
        descripcion: "X 9 X 24",
        precio: "8000",
      },
      {
        item: 64,
        producto: "TOSH MIEL",
        descripcion: "X 9 UND X 24 PAQ",
        precio: "8000",
      },
      {
        item: 65,
        producto: "WAFER BRIDGE SURTIDA",
        descripcion: "10 UND X 24 PAQ",
        precio: "6400",
      },
      {
        item: 66,
        producto: "WAFER CAPRI",
        descripcion: "X 24 UND X 24 PAQ",
        precio: "6200",
      },
      {
        item: 67,
        producto: "WAFER ITALO SURTIDA",
        descripcion: "X 24 UND X 36 PAQ",
        precio: "5800",
      },
      {
        item: 68,
        producto: "WAFER NUCITA",
        descripcion: "X 8 UND X 24 PAQ",
        precio: "4800",
      },
      {
        item: 69,
        producto: "WAFER TACO AREQUIPE",
        descripcion: "X 117 GR X 48 PAQ",
        precio: "2800",
      },
      {
        item: 70,
        producto: "TOSH FUSION CEREALES",
        descripcion: "X 9 UND X 24 PAQ",
        precio: "8000",
      },
      {
        item: 71,
        producto: "TOSTADA BIMBO MANTEQUILLA",
        descripcion: "150 G",
        precio: "4200",
      },
    ],
  },

  lacteos: {
    nombre: "LÁCTEOS Y CÁRNICOS",
    productos: [
      {
        item: 1,
        producto: "AVENA BOLSA",
        descripcion: "X6 X 6",
        precio: "8000",
      },
      {
        item: 2,
        producto: "BOMYUR",
        descripcion: "X 3 UND X 3 UND",
        precio: "6300",
      },
      {
        item: 6,
        producto: "LECHE COLANTA",
        descripcion: "400 ML X 28",
        precio: "57400",
      },
      {
        item: 7,
        producto: "LECHE COLANTA",
        descripcion: "900 ML CJ X 12",
        precio: "51600",
      },
      {
        item: 8,
        producto: "LECHE COLANTA",
        descripcion: "200 ML CJ X 60",
        precio: "72000",
      },
      {
        item: 9,
        producto: "LECHE LA MEJOR",
        descripcion: "400 ML UNIDAD",
        precio: "2000",
      },
      {
        item: 10,
        producto: "LECHE LA MEJOR",
        descripcion: "900 ML UNIDAD",
        precio: "4000",
      },
      {
        item: 11,
        producto: "QUESO TAJADO",
        descripcion: "X 500",
        precio: "9200",
      },
      {
        item: 12,
        producto: "SALCHICHA MAGUERA",
        descripcion: "KILO",
        precio: "7000",
      },
      {
        item: 13,
        producto: "SALCHICHA MIXTA",
        descripcion: "25 UNIDADES",
        precio: "8500",
      },
      {
        item: 14,
        producto: "SALCHICHA MIXTA",
        descripcion: "X 32 UNIDADES",
        precio: "8500",
      },
      {
        item: 15,
        producto: "SALCHICHONES CARNE Y POLLO",
        descripcion: "UNIDAD",
        precio: "5800",
      },
      {
        item: 16,
        producto: "GELATINA VASO",
        descripcion: "X 4 X 4",
        precio: "5000",
      },
      {
        item: 17,
        producto: "YOGUR BOLSA",
        descripcion: "X 12",
        precio: "11000",
      },
      {
        item: 18,
        producto: "YOGUR PROBIOTICO",
        descripcion: "X 4",
        precio: "7400",
      },
      {
        item: 19,
        producto: "CREMA DE LECHE COMBO",
        descripcion: "180 GR",
        precio: "6600",
      },
      {
        item: 20,
        producto: "CREMA DE LECHE NESTLE",
        descripcion: "X 90 GRS",
        precio: "2800",
      },
      {
        item: 21,
        producto: "YOGUR DE BOLSA",
        descripcion: "X 6 UNIDADES",
        precio: "5600",
      },
      {
        item: 22,
        producto: "YOGUR VASO ECO",
        descripcion: "X 4",
        precio: "6000",
      },
      {
        item: 23,
        producto: "AVENA CEMA DE CAJA",
        descripcion: "X 200 ML",
        precio: "1700",
      },
      {
        item: 24,
        producto: "LECHE SABORIZADA CEMA",
        descripcion: "CAJA X 200",
        precio: "1600",
      },
      {
        item: 25,
        producto: "LECHE DESLACTOSADA CEMA",
        descripcion: "X 900",
        precio: "4000",
      },
      {
        item: 26,
        producto: "LECHE ENTERA CEMA",
        descripcion: "X 900",
        precio: "4300",
      },
    ],
  },

  gaseosas: {
    nombre: "GASEOSAS Y JUGOS",
    productos: [
      {
        item: 1,
        producto: "AGUA 6 LITROS",
        descripcion: "UNIDAD",
        precio: "3500",
      },
      {
        item: 2,
        producto: "AGUA 7 VIDAS CON GAS",
        descripcion: "X 24",
        precio: "40000",
      },
      {
        item: 3,
        producto: "AGUA 7 VIDAS DE LITRO",
        descripcion: "X 12 X 12",
        precio: "28000",
      },
      {
        item: 4,
        producto: "AGUA 7 VIDAS",
        descripcion: "X 24 UNIX 600",
        precio: "24500",
      },
      {
        item: 5,
        producto: "AGUA BOLSA ECONOMICA",
        descripcion: "X 20 UNIDADES",
        precio: "5000",
      },
      {
        item: 6,
        producto: "AGUA BOTELLON",
        descripcion: "20 LITROS",
        precio: "10000",
      },
      {
        item: 7,
        producto: "AGUA BRISA SABORES",
        descripcion: "X 6 X 600",
        precio: "13500",
      },
      {
        item: 8,
        producto: "AGUA CHUPO CRISTAL",
        descripcion: "12",
        precio: "25000",
      },
      {
        item: 9,
        producto: "AGUA CIELO CON GAS",
        descripcion: "X 15 UND",
        precio: "16000",
      },
      {
        item: 10,
        producto: "AGUA COCO TWO",
        descripcion: "500ML X 12",
        precio: "18000",
      },
      {
        item: 11,
        producto: "AGUA CORDILLERA",
        descripcion: "600 ML X 24",
        precio: "14000",
      },
      {
        item: 12,
        producto: "AGUA CORDILLERA",
        descripcion: "X 300 24 UNI",
        precio: "12000",
      },
      {
        item: 13,
        producto: "AGUA CRISTAL",
        descripcion: "600 ML X 24",
        precio: "29000",
      },
      {
        item: 14,
        producto: "AGUA CRISTAL PET",
        descripcion: "300 X 24",
        precio: "14000",
      },
      {
        item: 15,
        producto: "AGUA CRISTALINA",
        descripcion: "600ML X 24",
        precio: "21000",
      },
      {
        item: 16,
        producto: "AGUA GAS CRISTAL",
        descripcion: "X 24",
        precio: "33000",
      },
      {
        item: 17,
        producto: "AGUA H2O",
        descripcion: "X 15 UND",
        precio: "37800",
      },
      {
        item: 18,
        producto: "AGUA POOL CON GAS",
        descripcion: "600ML",
        precio: "17000",
      },
      {
        item: 19,
        producto: "AGUA POOL H2O SABORES",
        descripcion: "X 12",
        precio: "17000",
      },
      {
        item: 20,
        producto: "AGUA POOL NATURAL",
        descripcion: "600ML X 20",
        precio: "15000",
      },
      {
        item: 21,
        producto: "AGUA VIDA",
        descripcion: "X 20 UND",
        precio: "17000",
      },
      {
        item: 22,
        producto: "AGUA REFRES",
        descripcion: "620",
        precio: "15000",
      },
      {
        item: 23,
        producto: "AGUA ZEN",
        descripcion: "540 ML X 6 UNDS",
        precio: "12500",
      },
      {
        item: 24,
        producto: "AGUA ZEN",
        descripcion: "250ML X 6",
        precio: "7000",
      },
      {
        item: 25,
        producto: "AGUA ZEN",
        descripcion: "370 ML X 6",
        precio: "9000",
      },
      {
        item: 26,
        producto: "AMPER ENERGY",
        descripcion: "X 24",
        precio: "15500",
      },
      {
        item: 27,
        producto: "BRETAÑA SABORES",
        descripcion: "X 6",
        precio: "26500",
      },
      {
        item: 28,
        producto: "CALIFORNIA GRAN",
        descripcion: "X 900 ML X 12 UND",
        precio: "68000",
      },
      {
        item: 29,
        producto: "CALIFORNIA TETRAPA",
        descripcion: "200 ML X 6 UNI",
        precio: "11500",
      },
      {
        item: 30,
        producto: "CIFRUT",
        descripcion: "250 ML X 15",
        precio: "12000",
      },
      {
        item: 31,
        producto: "COCA COLA",
        descripcion: "LATA BANDEJA",
        precio: "37500",
      },
      {
        item: 32,
        producto: "COCA COLA",
        descripcion: "X 3 LITROS X 6 UND",
        precio: "57000",
      },
      {
        item: 33,
        producto: "COCACOLA CANASTA SURTIDA",
        descripcion: "350ML",
        precio: "65500",
      },
      {
        item: 34,
        producto: "COCACOLA PLASTICA",
        descripcion: "400ML X 12",
        precio: "32000",
      },
      {
        item: 35,
        producto: "COCA-COLA",
        descripcion: "X 1.5 ML X 12 UND",
        precio: "67000",
      },
      {
        item: 36,
        producto: "COLA Y POLA",
        descripcion: "LATA X24",
        precio: "60000",
      },
      {
        item: 37,
        producto: "CUATRO",
        descripcion: "1.5 BANDEJA",
        precio: "48000",
      },
      {
        item: 38,
        producto: "CUATRO",
        descripcion: "3L BANDEJA",
        precio: "40500",
      },
      {
        item: 39,
        producto: "CUATRO",
        descripcion: "400 BANDEJA",
        precio: "27500",
      },
      {
        item: 40,
        producto: "HIT",
        descripcion: "1.5 SABORES X 6 UND",
        precio: "28000",
      },
      { item: 41, producto: "HIT", descripcion: "500 X 12", precio: "28000" },
      { item: 42, producto: "HIT", descripcion: "LITRON", precio: "36000" },
      {
        item: 43,
        producto: "HIT",
        descripcion: "CAJA 200ML X 24 UND",
        precio: "28000",
      },
      {
        item: 44,
        producto: "HIT",
        descripcion: "OCHO ONZAS X 24",
        precio: "35000",
      },
      { item: 45, producto: "HIT VITAL", descripcion: "X 24", precio: "40000" },
      {
        item: 46,
        producto: "JUGO CAJA ECONOMICO",
        descripcion: "",
        precio: "18000",
      },
      {
        item: 47,
        producto: "JUGO CALIFORNIA",
        descripcion: "215 ML X 30 UND",
        precio: "66000",
      },
      {
        item: 48,
        producto: "JUGO CALIFORNIA PET",
        descripcion: "300 X 24",
        precio: "60000",
      },
      {
        item: 49,
        producto: "JUGO DE VALLE",
        descripcion: "1.5 BANDEJA",
        precio: "38000",
      },
      {
        item: 50,
        producto: "JUGO FRESKY TIRA",
        descripcion: "X 30 UND",
        precio: "25000",
      },
      {
        item: 51,
        producto: "JUGO DEL VALLE",
        descripcion: "400 BANDEJA",
        precio: "19500",
      },
      {
        item: 52,
        producto: "JUGO FRUTTSI ST",
        descripcion: "X 24 250ML",
        precio: "24000",
      },
      {
        item: 53,
        producto: "JUGO KUMBIA PET",
        descripcion: "500 X 12",
        precio: "21000",
      },
      {
        item: 54,
        producto: "LITRON POSTOBOM",
        descripcion: "X 12",
        precio: "34000",
      },
      {
        item: 55,
        producto: "MIKES LATA",
        descripcion: "UNIDAD",
        precio: "7000",
      },
      {
        item: 56,
        producto: "MISTER TEA PLASTICO",
        descripcion: "500 X 12 UND",
        precio: "27000",
      },
      {
        item: 57,
        producto: "PEPSI",
        descripcion: "1.5 X 12 UNIDAD",
        precio: "49000",
      },
      {
        item: 58,
        producto: "PEPSI",
        descripcion: "2.5 X 8 UNIDAD",
        precio: "39000",
      },
      {
        item: 59,
        producto: "PEPSI",
        descripcion: "3 LITROS X 6 UNIDAD",
        precio: "44000",
      },
      {
        item: 60,
        producto: "PEPSI PET",
        descripcion: "400 X 15 UNI",
        precio: "32000",
      },
      {
        item: 61,
        producto: "PONI",
        descripcion: "330 TIRA X 24",
        precio: "50000",
      },
      {
        item: 62,
        producto: "PONY",
        descripcion: "1.5 X 6 UNIDAD",
        precio: "32000",
      },
      {
        item: 63,
        producto: "PONY CANASTA",
        descripcion: "X30",
        precio: "58000",
      },
      { item: 64, producto: "PONY LATA", descripcion: "X24", precio: "48000" },
      { item: 65, producto: "PONY LITRO", descripcion: "X15", precio: "51000" },
      {
        item: 66,
        producto: "PONY MALTA CANASTA",
        descripcion: "X38",
        precio: "50000",
      },
      {
        item: 67,
        producto: "PONY MINI BADJ",
        descripcion: "X 30 UND",
        precio: "41000",
      },
      { item: 68, producto: "POOL", descripcion: "1.7 X 8", precio: "25000" },
      { item: 69, producto: "POOL", descripcion: "3LT X6", precio: "32500" },
      { item: 70, producto: "POOL", descripcion: "400ML", precio: "26000" },
      { item: 71, producto: "POOL", descripcion: "LITRO", precio: "25000" },
      {
        item: 72,
        producto: "POSTOBOM P 400",
        descripcion: "X 15",
        precio: "32000",
      },
      {
        item: 73,
        producto: "POSTOBOM PET",
        descripcion: "250 X 12 UND",
        precio: "17000",
      },
      {
        item: 74,
        producto: "POSTOBOM SABORES",
        descripcion: "2.5 X 8",
        precio: "39000",
      },
      {
        item: 75,
        producto: "POSTOBON",
        descripcion: "3L SABORES X 6",
        precio: "44000",
      },
      {
        item: 76,
        producto: "POSTOBON",
        descripcion: "1.5 SABORES",
        precio: "49000",
      },
      {
        item: 77,
        producto: "POSTOBON",
        descripcion: "350 X30",
        precio: "49000",
      },
      {
        item: 78,
        producto: "POSTOBON BEBE",
        descripcion: "X30",
        precio: "29500",
      },
      {
        item: 79,
        producto: "PULP NECTAR",
        descripcion: "X1.5",
        precio: "34000",
      },
      {
        item: 80,
        producto: "PULP NECTAR",
        descripcion: "400ML X 12 UNDS",
        precio: "25000",
      },
      { item: 81, producto: "RESPIN", descripcion: "", precio: "47000" },
      {
        item: 82,
        producto: "SODA HATSU",
        descripcion: "X 6 SABORES",
        precio: "17000",
      },
      { item: 83, producto: "SODA POOL", descripcion: "X 24", precio: "26000" },
      {
        item: 84,
        producto: "SPARTAN LATA",
        descripcion: "SISPACK X 6 UNDS",
        precio: "6800",
      },
      {
        item: 85,
        producto: "SPARTAN POTE",
        descripcion: "240 X 12 UNIDADES",
        precio: "15200",
      },
      {
        item: 86,
        producto: "SPIK LATA GRANDE",
        descripcion: "X 6",
        precio: "12000",
      },
      {
        item: 87,
        producto: "SPIK MAX",
        descripcion: "PQ TIRA X24",
        precio: "40000",
      },
      { item: 88, producto: "SPORADE", descripcion: "500ML", precio: "23000" },
      {
        item: 89,
        producto: "SUERO ELECTROLIT SRTD",
        descripcion: "X 625 ML",
        precio: "7000",
      },
      {
        item: 90,
        producto: "SUERO PEDALITE MAX",
        descripcion: "UNIDAD",
        precio: "8800",
      },
      {
        item: 91,
        producto: "VIVE 100 GRAN VERDE",
        descripcion: "X 6 UND X 4 PAQ",
        precio: "11000",
      },
      {
        item: 92,
        producto: "VIVE 100 LATA",
        descripcion: "X 24",
        precio: "27500",
      },
      {
        item: 93,
        producto: "VIVE 100 LITRO",
        descripcion: "X 6 UNIDADES",
        precio: "18000",
      },
      {
        item: 94,
        producto: "VIVE 100 PEQ VERDE",
        descripcion: "X 6 UND X 8 PAQ",
        precio: "9000",
      },
      {
        item: 95,
        producto: "FRIOPACK BRETAÑA",
        descripcion: "X24",
        precio: "51000",
      },
      { item: 96, producto: "SPORADE", descripcion: "LITRO", precio: "19000" },
      {
        item: 97,
        producto: "GATORADE ROJO Y AZUL",
        descripcion: "X 12",
        precio: "37000",
      },
      {
        item: 98,
        producto: "KALUA BOLI",
        descripcion: "120ML X 30",
        precio: "11500",
      },
      { item: 99, producto: "KALUA DISP", descripcion: "X6", precio: "6500" },
      {
        item: 100,
        producto: "PULPI NECTAR DE CAJA",
        descripcion: "X 6 UNIDADES",
        precio: "7800",
      },
    ],
  },

  aseo: {
    nombre: "ASEO",
    productos: [
      {
        item: 1,
        producto: "PAPEL HIGIENICO FAMILIA",
        descripcion: "X 12 UND",
        precio: "15600",
      },
      {
        item: 2,
        producto: "ACONDICIONADOR NUTRIBELA",
        descripcion: "POTE X 370 M",
        precio: "19000",
      },
      {
        item: 3,
        producto: "ACONDICIONADOR NUTRIBELA",
        descripcion: "X 12 UNI",
        precio: "10200",
      },
      {
        item: 4,
        producto: "ACONDICIONADOR SAVITAL",
        descripcion: "X 20 UNI",
        precio: "17300",
      },
      {
        item: 5,
        producto: "AROMATEL DOYPA",
        descripcion: "X 180 X36",
        precio: "1500",
      },
      {
        item: 6,
        producto: "AROMATEL DOYPA",
        descripcion: "X 400",
        precio: "2800",
      },
      {
        item: 7,
        producto: "AROMAX SOBRE",
        descripcion: "X 24 UNIDADES",
        precio: "14500",
      },
      {
        item: 8,
        producto: "AXION DISCO",
        descripcion: "130 GRAMOS",
        precio: "1400",
      },
      { item: 9, producto: "AXION CREMA", descripcion: "450", precio: "6000" },
      { item: 10, producto: "AXION CREMA", descripcion: "235", precio: "3000" },
      {
        item: 11,
        producto: "AXION LIQUIDO",
        descripcion: "X 180",
        precio: "2300",
      },
      {
        item: 12,
        producto: "BALANCE PRACTITUBO",
        descripcion: "",
        precio: "4000",
      },
      {
        item: 13,
        producto: "BELON",
        descripcion: "X 6 UNIDADES",
        precio: "15500",
      },
      {
        item: 14,
        producto: "BETUN CHERRY",
        descripcion: "PEQUEÑO",
        precio: "3500",
      },
      {
        item: 15,
        producto: "BLANQUADOR WILL",
        descripcion: "3800 GARRAFA",
        precio: "7000",
      },
      {
        item: 16,
        producto: "BLANQUEADOR WIL",
        descripcion: "1000",
        precio: "2600",
      },
      {
        item: 17,
        producto: "BLANQUEDOR WIL",
        descripcion: "X 180",
        precio: "3300",
      },
      { item: 18, producto: "BOMBILLO", descripcion: "30 WT", precio: "16000" },
      {
        item: 19,
        producto: "BOMBILLO LED",
        descripcion: "24 W LUZ BLANCA",
        precio: "13500",
      },
      {
        item: 20,
        producto: "BOMBILLO LED PQ",
        descripcion: "7W X 60 UNDS",
        precio: "3500",
      },
      {
        item: 21,
        producto: "CHAMPO HYS",
        descripcion: "TIRA X 12",
        precio: "9000",
      },
      {
        item: 22,
        producto: "CHAMPOO DOVE",
        descripcion: "TIRA X 12 UN",
        precio: "10500",
      },
      {
        item: 23,
        producto: "CHAMPOO NUTRIBELA DE SOBRE",
        descripcion: "X 12 UNI",
        precio: "10200",
      },
      {
        item: 24,
        producto: "TOALLAS ANGELAS",
        descripcion: "PAQUETE",
        precio: "4500",
      },
      {
        item: 25,
        producto: "CHAMPOO NUTRIBELA POTE",
        descripcion: "X 400",
        precio: "19000",
      },
      {
        item: 26,
        producto: "CHAMPO PANTENE",
        descripcion: "TIRA X 12",
        precio: "9200",
      },
      {
        item: 27,
        producto: "COCO VARELA LIQUIDO",
        descripcion: "X 300",
        precio: "5600",
      },
      {
        item: 28,
        producto: "CREMA SAVITAL SOBRE",
        descripcion: "X 20 UNIDADES",
        precio: "17500",
      },
      {
        item: 29,
        producto: "DERSA BARRA",
        descripcion: "X 350",
        precio: "3800",
      },
      {
        item: 30,
        producto: "DERSA EN POLBO",
        descripcion: "KILO X 20",
        precio: "8500",
      },
      {
        item: 31,
        producto: "DESEDORANTE REXONA ROLON",
        descripcion: "UNIDAD",
        precio: "3500",
      },
      {
        item: 32,
        producto: "DESODORANTE BALAN DUOS",
        descripcion: "X 16",
        precio: "19500",
      },
      {
        item: 33,
        producto: "DESODORANTE BALANCE STD",
        descripcion: "X 18 UNI",
        precio: "19000",
      },
      {
        item: 34,
        producto: "DETERJENTE 3D",
        descripcion: "LIBRA",
        precio: "4600",
      },
      {
        item: 35,
        producto: "DETERJENTE POLBO 3 D",
        descripcion: "KILO",
        precio: "8000",
      },
      {
        item: 36,
        producto: "FABULOSO DOYPA STD",
        descripcion: "X 180",
        precio: "1700",
      },
      {
        item: 37,
        producto: "GLADE AEROSOL",
        descripcion: "CAMPOS DE LAVANDA",
        precio: "11500",
      },
      {
        item: 38,
        producto: "GLADE AEROSOL",
        descripcion: "HAWAIIAN BREEZE",
        precio: "11500",
      },
      {
        item: 39,
        producto: "GLADE AEROSOL",
        descripcion: "VAINILLA ABRAZOS",
        precio: "11500",
      },
      {
        item: 40,
        producto: "GLADE AROSOL STD",
        descripcion: "X 275",
        precio: "8000",
      },
      {
        item: 41,
        producto: "GLADE REPUESTO STDIDO",
        descripcion: "UND",
        precio: "23500",
      },
      {
        item: 42,
        producto: "GLADE VARITAS AROMATIZANTE",
        descripcion: "X 6 UNI",
        precio: "17500",
      },
      {
        item: 43,
        producto: "JABON CAREY",
        descripcion: "X 6 UNIDADES",
        precio: "15500",
      },
      {
        item: 44,
        producto: "JABON DISCO TRAS",
        descripcion: "X 130 GRA",
        precio: "1200",
      },
      { item: 45, producto: "JABON DOVE", descripcion: "UND", precio: "3800" },
      {
        item: 46,
        producto: "JABON LAK",
        descripcion: "X 4 UNIDADES",
        precio: "8000",
      },
      {
        item: 47,
        producto: "JABON LEFRAGAN",
        descripcion: "X UNI X 72 UNI",
        precio: "1700",
      },
      {
        item: 48,
        producto: "JABON LEFRAGAN",
        descripcion: "X 3 UNI X 16 CJ",
        precio: "5000",
      },
      {
        item: 49,
        producto: "JABON LEMON",
        descripcion: "X 115 GRAMOS 36 UNID",
        precio: "2000",
      },
      {
        item: 50,
        producto: "JABON LIQUIDO",
        descripcion: "X 500 STD",
        precio: "3600",
      },
      {
        item: 51,
        producto: "JABON PROTES",
        descripcion: "X 6 UNI",
        precio: "19200",
      },
      {
        item: 52,
        producto: "JABON REXONA",
        descripcion: "X UNI X 6",
        precio: "17300",
      },
      {
        item: 53,
        producto: "JABON VELROSITA LIQUIDO",
        descripcion: "X 300",
        precio: "5000",
      },
      {
        item: 54,
        producto: "LADY SPEED SURTD CREMA COJIN",
        descripcion: "X 18 UNDS",
        precio: "16000",
      },
      {
        item: 55,
        producto: "LAVALOSA LIQUIDO",
        descripcion: "500 GRAMOS",
        precio: "3700",
      },
      {
        item: 56,
        producto: "LAVALOZA WLL",
        descripcion: "X 450 GRAMOS",
        precio: "3800",
      },
      {
        item: 57,
        producto: "LIMPIAPISOS WILL",
        descripcion: "X 1000",
        precio: "3200",
      },
      {
        item: 58,
        producto: "LIMPIAPISOS WILL",
        descripcion: "X 2000",
        precio: "6000",
      },
      {
        item: 59,
        producto: "NOSOTRAS CLASICAS",
        descripcion: "X 10 UNI",
        precio: "3700",
      },
      {
        item: 60,
        producto: "NOSOTRAS INVISIBLE RAPIGEL",
        descripcion: "X 10",
        precio: "5000",
      },
      {
        item: 61,
        producto: "PAÑAL BABYSEC ETA 2",
        descripcion: "X 30",
        precio: "25000",
      },
      {
        item: 62,
        producto: "PAÑAL BABYSEC ETA 5",
        descripcion: "X 30",
        precio: "43000",
      },
      {
        item: 63,
        producto: "PAÑITOS HUGGIES",
        descripcion: "X 80 UNI",
        precio: "7500",
      },
      {
        item: 64,
        producto: "PAÑITOS PEQUEÑIN",
        descripcion: "X 24 UNI",
        precio: "3200",
      },
      {
        item: 65,
        producto: "PAPEL FAMILIA MEGA ROLLO",
        descripcion: "X 12",
        precio: "25000",
      },
      {
        item: 66,
        producto: "PAPEL HIGIENICO FAMILIA",
        descripcion: "X 12",
        precio: "15600",
      },
      {
        item: 67,
        producto: "PAPEL HIGIENICO NUBE",
        descripcion: "X 18 ROLLOS",
        precio: "14000",
      },
      {
        item: 68,
        producto: "PAPEL HIJENICO ELITE",
        descripcion: "X 24 UNI",
        precio: "18000",
      },
      {
        item: 69,
        producto: "PAPEL ROSAL MEGA ROLLO",
        descripcion: "X 12",
        precio: "21000",
      },
      {
        item: 70,
        producto: "PAPEL ROSAL",
        descripcion: "X 18 UNIDADES",
        precio: "20000",
      },
      {
        item: 71,
        producto: "PRACTI TUBO REXONA STD",
        descripcion: "UND",
        precio: "3300",
      },
      {
        item: 72,
        producto: "PRESTOBARBA BIC",
        descripcion: "X 12",
        precio: "29000",
      },
      {
        item: 73,
        producto: "PRESTOBARBA GILLET SURT",
        descripcion: "12 X 12",
        precio: "46000",
      },
      {
        item: 74,
        producto: "PRESTOBARBA XTREME",
        descripcion: "X 12",
        precio: "36000",
      },
      {
        item: 75,
        producto: "PROCTECTOR DIARIO",
        descripcion: "X 150 UNI",
        precio: "15300",
      },
      {
        item: 76,
        producto: "RAID MAX MATA CUCARACHAS",
        descripcion: "X 285 CM",
        precio: "11500",
      },
      {
        item: 77,
        producto: "RAID ZANCUDOS Y MOSCAS",
        descripcion: "285 C",
        precio: "10200",
      },
      {
        item: 78,
        producto: "SERVILLETA SKAAP",
        descripcion: "X 180 UNI",
        precio: "1800",
      },
      {
        item: 79,
        producto: "SERVILLETA SKAAP",
        descripcion: "X 300",
        precio: "3400",
      },
      {
        item: 80,
        producto: "SERVILLETA",
        descripcion: "X 450 UND X 3 TACOS",
        precio: "6600",
      },
      {
        item: 81,
        producto: "SERVILLETAS FAMILIA",
        descripcion: "X 300 UNI X 15 CJ",
        precio: "4300",
      },
      {
        item: 82,
        producto: "SERVILLRTA NUBE",
        descripcion: "X 300 X 15 CJ",
        precio: "3800",
      },
      {
        item: 83,
        producto: "SERVILLTA TACO FAMILIA",
        descripcion: "X 150 UND",
        precio: "2500",
      },
      {
        item: 84,
        producto: "SPEED STICK CREMA STD",
        descripcion: "X 20 UNI",
        precio: "18000",
      },
      {
        item: 85,
        producto: "SPEED STICK PRACTI GEL MEN TUBO",
        descripcion: "X 6 30G",
        precio: "19000",
      },
      {
        item: 86,
        producto: "TAMPONES MAS PROCTORES DIARIOS",
        descripcion: "",
        precio: "10000",
      },
      {
        item: 87,
        producto: "TOALLA STAYFREE",
        descripcion: "X 12 UNI",
        precio: "3600",
      },
      {
        item: 88,
        producto: "TOALLA INVISIBLE CLASICA",
        descripcion: "X 30",
        precio: "12500",
      },
      {
        item: 89,
        producto: "TOALLA INVISIBLE RAPIGEL",
        descripcion: "X 30",
        precio: "13500",
      },
      {
        item: 90,
        producto: "TOALLA NOVA DE COCINA",
        descripcion: "X 120 HOJAS",
        precio: "8000",
      },
      {
        item: 91,
        producto: "TOALLAS ANGELA NOCHE",
        descripcion: "PAQUETE",
        precio: "4400",
      },
      {
        item: 92,
        producto: "TOALLAS ANGELAS",
        descripcion: "PAQUETE",
        precio: "4500",
      },
      {
        item: 93,
        producto: "TOALLAS NOSOTRAS NOCHE",
        descripcion: "",
        precio: "3500",
      },
      {
        item: 94,
        producto: "TOALLIN ABSORVENTE DECORADO",
        descripcion: "120 TOALLAS",
        precio: "11200",
      },
      {
        item: 95,
        producto: "TOALLLAS FAMILIA",
        descripcion: "50 HOJAS",
        precio: "2500",
      },
      {
        item: 96,
        producto: "YODORA POTE GRANDE Y PQ",
        descripcion: "",
        precio: "23500",
      },
      {
        item: 97,
        producto: "YODORA PEQUEÑA",
        descripcion: "X 32 GR X 2 UND X 40 POTES",
        precio: "16500",
      },
      {
        item: 98,
        producto: "YODORA TUBO",
        descripcion: "X 4 UNI",
        precio: "12500",
      },
      {
        item: 99,
        producto: "KATORI ESPIRAL",
        descripcion: "X 50 UNIDADES",
        precio: "22000",
      },
      {
        item: 100,
        producto: "KATORY",
        descripcion: "X 10 UNIDADES",
        precio: "4200",
      },
      {
        item: 101,
        producto: "PAPEL FAMILIA ECOLOGICO",
        descripcion: "X 12 X 12",
        precio: "20000",
      },
      {
        item: 102,
        producto: "ACIDO CITRICO",
        descripcion: "",
        precio: "15000",
      },
      {
        item: 103,
        producto: "ALUMINIO GOLDENWRAD",
        descripcion: "7 MTRS",
        precio: "3500",
      },
      {
        item: 104,
        producto: "ALUMINIO GOLDENWRAP",
        descripcion: "16 METROS",
        precio: "21000",
      },
      {
        item: 105,
        producto: "ALUMINIO GOLDENWRAP",
        descripcion: "X 100 MTRS",
        precio: "30000",
      },
      {
        item: 106,
        producto: "CEPILLO COLGATE",
        descripcion: "X 12 UNI",
        precio: "26000",
      },
      {
        item: 107,
        producto: "GEL EGO POTE",
        descripcion: "110 X 24",
        precio: "3000",
      },
      {
        item: 109,
        producto: "GEL EGO RISTRA PEQUEÑA",
        descripcion: "X 15 UNI",
        precio: "15000",
      },
      {
        item: 110,
        producto: "CREMA DENTAL ANTICARIES",
        descripcion: "X 12",
        precio: "38000",
      },
      {
        item: 111,
        producto: "CREMA DENTAL CON CEPILLO",
        descripcion: "X 12",
        precio: "47500",
      },
      {
        item: 112,
        producto: "CREMA DENTAL PEQUEÑA",
        descripcion: "X 12",
        precio: "24500",
      },
      {
        item: 113,
        producto: "CREMA DENTAL TRIPLE ACCIÓN",
        descripcion: "X 60 X 12 UNI",
        precio: "40000",
      },
      {
        item: 114,
        producto: "JAVON POLBO RINDES",
        descripcion: "DE KILO",
        precio: "8200",
      },
      {
        item: 115,
        producto: "KIT NUTRIBELA",
        descripcion: "X2",
        precio: "29000",
      },
      {
        item: 116,
        producto: "SUPER KIT NUTRIBELA",
        descripcion: "X 3",
        precio: "45000",
      },
      {
        item: 117,
        producto: "LIMPIDO YES",
        descripcion: "PEQUEÑO",
        precio: "1400",
      },
      {
        item: 118,
        producto: "LISTERINE",
        descripcion: "X 180 MILI",
        precio: "5800",
      },
      {
        item: 119,
        producto: "NUTRIBELA",
        descripcion: "X 12 UND X 24 DISP",
        precio: "13600",
      },
      {
        item: 120,
        producto: "NUTRIBELA",
        descripcion: "X 70 X 14 SOBRES",
        precio: "60000",
      },
    ],
  },

  enlatados: {
    nombre: "ENLATADOS",
    productos: [
      {
        item: 1,
        producto: "ACEITUNAS RELLENAS",
        descripcion: "125 GRAMOS",
        precio: "3800",
      },
      {
        item: 2,
        producto: "ACEITUNAS RELLENAS",
        descripcion: "X 250",
        precio: "5800",
      },
      {
        item: 3,
        producto: "ALCAPARRA",
        descripcion: "X 125 GRAMOS",
        precio: "4000",
      },
      {
        item: 4,
        producto: "ALCAPARRAS",
        descripcion: "X 250 GRA",
        precio: "6300",
      },
      {
        item: 5,
        producto: "ALVERJA POTE",
        descripcion: "300 GR",
        precio: "4300",
      },
      {
        item: 6,
        producto: "ALVERJA RESPIN",
        descripcion: "X 300 GRAMOS",
        precio: "3800",
      },
      {
        item: 7,
        producto: "ALVERJA ZANAHORIA",
        descripcion: "POTE300GR",
        precio: "5000",
      },
      { item: 8, producto: "ATUN ALAMAR", descripcion: "X140", precio: "5400" },
      {
        item: 9,
        producto: "ATUN RALLADO VIKINGO",
        descripcion: "X 16O GRA X 48 CJ",
        precio: "4000",
      },
      {
        item: 10,
        producto: "ATUN SABEL",
        descripcion: "142 GRAMOS",
        precio: "6000",
      },
      {
        item: 15,
        producto: "CHAMPINON TAJADOS",
        descripcion: "125G",
        precio: "3200",
      },
      {
        item: 16,
        producto: "CHAMPINON ZENU",
        descripcion: "X130G",
        precio: "3200",
      },
      {
        item: 17,
        producto: "CHANPINONES LA PRADERA",
        descripcion: "X265",
        precio: "6800",
      },
      {
        item: 18,
        producto: "CREMA DE LECHE NESTLE",
        descripcion: "X90GRS",
        precio: "2800",
      },
      {
        item: 19,
        producto: "DIABLITO PEQUENO",
        descripcion: "",
        precio: "5300",
      },
      {
        item: 21,
        producto: "DURAZNO DOS MITADES",
        descripcion: "820G",
        precio: "11500",
      },
      {
        item: 22,
        producto: "DURAZNO LA PRADERA BOMBILLO",
        descripcion: "250GR X 24",
        precio: "4500",
      },
      {
        item: 23,
        producto: "DURAZNO LA PRADERA KILO",
        descripcion: "X12",
        precio: "11000",
      },
      {
        item: 24,
        producto: "DURAZNO SELECTO",
        descripcion: "X 410 GRAMOS",
        precio: "6000",
      },
      {
        item: 25,
        producto: "DURAZNOS LA PRADERA",
        descripcion: "525GR",
        precio: "6600",
      },
      {
        item: 38,
        producto: "PEPITONA",
        descripcion: "X 140 GRAMOS",
        precio: "7500",
      },
      {
        item: 39,
        producto: "MAIZ TIERNO SAN JORGE",
        descripcion: "X 300 GRAMOS",
        precio: "9000",
      },
      {
        item: 40,
        producto: "MAIZ DULCE ZENU",
        descripcion: "X241G",
        precio: "6000",
      },
      {
        item: 41,
        producto: "ATUN ZENU AGUA",
        descripcion: "160 GR X 24",
        precio: "5000",
      },
      {
        item: 42,
        producto: "ATUN ZENU",
        descripcion: "X 120 GRAMOS",
        precio: "4200",
      },
    ],
  },
  salsas: {
    nombre: "SALSAS Y MERMELADAS",
    productos: [
      {
        item: 1,
        producto: "AJI BARY",
        descripcion: "165 GR X 24 CJ",
        precio: "3200",
      },
      {
        item: 2,
        producto: "AJI CALIFORNIA",
        descripcion: "X 165 GR X 24 POTES",
        precio: "2200",
      },
      {
        item: 3,
        producto: "AJI CONTANCIA POTE",
        descripcion: "100 GRAMOS",
        precio: "3400",
      },
      {
        item: 4,
        producto: "MAYONESA BARI",
        descripcion: "X160 GRA X26 UNI CJ",
        precio: "2500",
      },
      {
        item: 5,
        producto: "MAYONESA CONSTANCIA",
        descripcion: "X 150 GRAMOS",
        precio: "2200",
      },
      {
        item: 6,
        producto: "MAYONESA COSTANCIA",
        descripcion: "X80GRAX12",
        precio: "15500",
      },
      {
        item: 7,
        producto: "MAYONESA MAVESA",
        descripcion: "",
        precio: "13500",
      },
      {
        item: 8,
        producto: "MERMELADA PRADERA",
        descripcion: "200G ST",
        precio: "3000",
      },
      {
        item: 9,
        producto: "MERMELADA RESPIN",
        descripcion: "X 200 GRAMOS",
        precio: "3600",
      },
      {
        item: 10,
        producto: "MIEL COJIN",
        descripcion: "140 MIL",
        precio: "2500",
      },
      {
        item: 11,
        producto: "MIEL TROPICO",
        descripcion: "X125",
        precio: "4500",
      },
      {
        item: 12,
        producto: "SALSA BBB BARY",
        descripcion: "170 GRA X 26 CJ",
        precio: "3200",
      },
      {
        item: 13,
        producto: "SALSA CHINA",
        descripcion: "165MIX24CJ",
        precio: "2800",
      },
      {
        item: 14,
        producto: "SALSA DE AJO BARY",
        descripcion: "165 GRA X 24",
        precio: "3200",
      },
      {
        item: 15,
        producto: "SALSA DE CANES BARY",
        descripcion: "X 175 GR X 24",
        precio: "3500",
      },
      {
        item: 16,
        producto: "SALSA DE HUMO BARI",
        descripcion: "",
        precio: "3000",
      },
      {
        item: 17,
        producto: "SALSA NEGRA POTE",
        descripcion: "155 GRA X 24CJ",
        precio: "3000",
      },
      {
        item: 18,
        producto: "SALSA POMPELLA DE GALON",
        descripcion: "X4CJ",
        precio: "26000",
      },
      {
        item: 19,
        producto: "SALSA ROSADA BARI",
        descripcion: "X 140 GRAMOS X 26 CJ",
        precio: "2700",
      },
      {
        item: 20,
        producto: "SALSA ROSADA LA CONSTANCIA",
        descripcion: "X80 GRX12 UNI",
        precio: "18400",
      },
      {
        item: 21,
        producto: "SALSA SOYA POTE",
        descripcion: "155 GRAX 24",
        precio: "3000",
      },
      {
        item: 22,
        producto: "SALSA TARTARA",
        descripcion: "X80X6UNI",
        precio: "10500",
      },
      {
        item: 23,
        producto: "SALSA TOMATE",
        descripcion: "150 GRAMOS X 48 UNI",
        precio: "2000",
      },
      {
        item: 24,
        producto: "SALSA TOMATE BARI",
        descripcion: "170 GRA",
        precio: "2800",
      },
      {
        item: 25,
        producto: "SALSA INGLESA BARY",
        descripcion: "X 155 GR X 24",
        precio: "3200",
      },
      {
        item: 26,
        producto: "MOSTAZA BARI",
        descripcion: "X140 GRAX26",
        precio: "2400",
      },
      {
        item: 27,
        producto: "SALSA TOMATE",
        descripcion: "X80GRAX12 UNI",
        precio: "15500",
      },
    ],
  },

  medicamentos: {
    nombre: "LINEA DE MEDICAMENTOS",
    productos: [
      {
        item: 1,
        producto: "ACETAMENOFEN ECONOMICO",
        descripcion: "X 100 UNI",
        precio: 6000,
      },
      {
        item: 2,
        producto: "ACETAMINOFEN FORTE",
        descripcion: "X 12",
        precio: 9400,
      },
      {
        item: 3,
        producto: "ACETAMINOFEN JARABE",
        descripcion: "X 90 ML",
        precio: 4500,
      },
      {
        item: 4,
        producto: "ACETAMINOFEN MK",
        descripcion: "X 100TAB X 9 DISP",
        precio: 4800,
      },
      {
        item: 5,
        producto: "ACETAMINOFEN",
        descripcion: "X 300 TABLETAS DIS",
        precio: 20000,
      },
      {
        item: 6,
        producto: "ADVIL MAX",
        descripcion: "X 40 CAP X 30 DISP",
        precio: 20000,
      },
      { item: 7, producto: "ADVIL MAX", descripcion: "X 5 UND", precio: 6500 },
      {
        item: 8,
        producto: "ADVIL GRIPA MULTISINTOMAS",
        descripcion: "X 4 UNI",
        precio: 6000,
      },
      {
        item: 9,
        producto: "ADVIL FASTGEL",
        descripcion: "X 10 UNDS",
        precio: 7200,
      },
      { item: 10, producto: "ADVIL FEM", descripcion: "X 10", precio: 13500 },
      {
        item: 11,
        producto: "ADVIL ULTRA",
        descripcion: "X 10 UND",
        precio: 18000,
      },
      {
        item: 12,
        producto: "ALCOHOL ANTISEPTICO AL",
        descripcion: "70% 375 ML",
        precio: 2000,
      },
      {
        item: 13,
        producto: "ALCOHOL ANTISEPTICO AL",
        descripcion: "70% 600ML",
        precio: 5500,
      },
      {
        item: 14,
        producto: "ALCOHOL ANTISEPTICO FUNDA",
        descripcion: "X 300 MIL",
        precio: 2000,
      },
      {
        item: 15,
        producto: "ALCOHOL",
        descripcion: "MK 120 ML X 20 UND",
        precio: 2700,
      },
      {
        item: 16,
        producto: "ALCOHOL",
        descripcion: "MK 350 ML X 12 UND",
        precio: 4800,
      },
      { item: 17, producto: "ALCOHOL", descripcion: "MK 700ML", precio: 7800 },
      { item: 18, producto: "AGUA OXIGENADA", descripcion: "", precio: 2800 },
      { item: 19, producto: "ALGODON JGB", descripcion: "X 50", precio: 3000 },
      {
        item: 20,
        producto: "ALGODON",
        descripcion: "X25 GRAMOS",
        precio: 2100,
      },
      {
        item: 21,
        producto: "ALKASELIZER",
        descripcion: "60 UND X 36 DISP",
        precio: 900,
      },
      {
        item: 22,
        producto: "AMBRAMICINA",
        descripcion: "250MG X12 UND",
        precio: 7500,
      },
      {
        item: 23,
        producto: "AMOXICILINA",
        descripcion: "TIRAX 10 UND",
        precio: 3500,
      },
      {
        item: 24,
        producto: "AMPICILINA",
        descripcion: "X 10 UND DISP X 100",
        precio: 3500,
      },
      {
        item: 25,
        producto: "APRONAX",
        descripcion: "GEL X 10 UNIDADES",
        precio: 14000,
      },
      {
        item: 26,
        producto: "ASPIRINA EFERVECENTE",
        descripcion: "X 50 UND X 36 DISP",
        precio: 1200,
      },
      {
        item: 27,
        producto: "ASPIRINA NIÑO",
        descripcion: "DISP X 28 UND",
        precio: 14000,
      },
      { item: 28, producto: "BOMBAZO", descripcion: "X 50 UND", precio: 5000 },
      {
        item: 29,
        producto: "BONFIEST PLUS",
        descripcion: "DISPX20 UND",
        precio: 3300,
      },
      {
        item: 30,
        producto: "BUSCAPINA COMPUES",
        descripcion: "10 UND CAJA X 72 DISP",
        precio: 13500,
      },
      {
        item: 31,
        producto: "BUSCAPINA FEM",
        descripcion: "X 24 UND TIRA X 6",
        precio: 9000,
      },
      {
        item: 32,
        producto: "CALMIDOL COMPUESTO",
        descripcion: "CAPS X 12 X TIRA",
        precio: 10800,
      },
      {
        item: 33,
        producto: "COMBO SALDEFRUTA",
        descripcion: "",
        precio: 42000,
      },
      {
        item: 34,
        producto: "CURITAS MK",
        descripcion: "X 100 UND X 100 DISP",
        precio: 8500,
      },
      {
        item: 35,
        producto: "CONDONES HAWAI",
        descripcion: "X 36",
        precio: 26000,
      },
      {
        item: 36,
        producto: "CONDONES TE AMO",
        descripcion: "X 48 PIEZAS SABORES",
        precio: 31000,
      },
      {
        item: 37,
        producto: "DIOXOGEN ANTISECTICO",
        descripcion: "X 120",
        precio: 3900,
      },
      {
        item: 38,
        producto: "DICLOFENACO ECONOMICO",
        descripcion: "X 20 UNI",
        precio: 4000,
      },
      {
        item: 39,
        producto: "DICLOFENACO",
        descripcion: "X 400 UNIDADES",
        precio: 37000,
      },
      {
        item: 40,
        producto: "DOLEX FORTE",
        descripcion: "X 8UND TIRA X 6 TIRAS",
        precio: 14000,
      },
      {
        item: 41,
        producto: "DOLEX GRIPA",
        descripcion: "X 100 UND X 50 DISP",
        precio: 3400,
      },
      {
        item: 42,
        producto: "DOLEX JARA",
        descripcion: "1 24 60 ML",
        precio: 14000,
      },
      {
        item: 43,
        producto: "DURAFEX MUSCULAR AVANCE",
        descripcion: "X 6",
        precio: 14000,
      },
      {
        item: 44,
        producto: "EMUSION SCOTT STD",
        descripcion: "X 180 MI",
        precio: 14000,
      },
      {
        item: 45,
        producto: "GASTRUM PLUS SACHE",
        descripcion: "X 10 UND",
        precio: 22000,
      },
      {
        item: 46,
        producto: "IBUFLAS MIGRAN MK",
        descripcion: "X 2 CAPSULAS",
        precio: 4000,
      },
      {
        item: 47,
        producto: "IBUPROFENO A.G.",
        descripcion: "DE 800 ML X 50 UNIDADES",
        precio: 10000,
      },
      {
        item: 48,
        producto: "IBUPROFENO LIKIDO",
        descripcion: "X 5 UNI",
        precio: 6500,
      },
      {
        item: 49,
        producto: "IBUPROFENO",
        descripcion: "MK X 50 UND",
        precio: 16000,
      },
      { item: 50, producto: "LUMBAL FORTE", descripcion: "X6", precio: 9500 },
      {
        item: 51,
        producto: "MAREOL",
        descripcion: "6 TIRAS X 12 UND/ 72 TBL",
        precio: 8500,
      },
      { item: 52, producto: "MEJORAL", descripcion: "X 10 UNI", precio: 5000 },
      {
        item: 53,
        producto: "NAPROXENO LA SANTE",
        descripcion: "X 10 UND",
        precio: 5300,
      },
      {
        item: 54,
        producto: "NEX GEL GRIPA",
        descripcion: "X8 UNIDADES",
        precio: 10500,
      },
      {
        item: 55,
        producto: "NORAVER GARGANTA MENTA",
        descripcion: "X 12 UND CAJA",
        precio: 9600,
      },
      {
        item: 56,
        producto: "NORAVER SOBRE SUTD",
        descripcion: "DISPXGUND",
        precio: 2600,
      },
      {
        item: 57,
        producto: "NOXPIRIN SOBRE GRANULADO NOCHE",
        descripcion: "X 1 X 24 CAJA",
        precio: 1800,
      },
      {
        item: 58,
        producto: "NOXPIRIN TIRA",
        descripcion: "X 4 UND DISP X 48 CAPS",
        precio: 3900,
      },
      {
        item: 59,
        producto: "PASTILLA VICK",
        descripcion: "SOBRE X 5 UNI",
        precio: 2000,
      },
      {
        item: 60,
        producto: "SALDERUTAS DIS PLAY",
        descripcion: "X 20 UNID",
        precio: 2800,
      },
      {
        item: 61,
        producto: "SEVEDOL EXTRA FUERTE",
        descripcion: "X 2 UNIDADES",
        precio: 1800,
      },
      {
        item: 62,
        producto: "TARRITO ROJO",
        descripcion: "SOB DIPSX6",
        precio: 5300,
      },
      {
        item: 63,
        producto: "VICK VAPORURUB",
        descripcion: "20GR X 12",
        precio: 37000,
      },
      {
        item: 64,
        producto: "VICK FORT X 9 X 6 UNI",
        descripcion: "",
        precio: 12000,
      },
      {
        item: 65,
        producto: "SEVEDOL EXTRA FUERTE",
        descripcion: "X 8 UNIDADES",
        precio: 7000,
      },
      {
        item: 66,
        producto: "CEREBRI POTE",
        descripcion: "330 X 12",
        precio: 16000,
      },
      {
        item: 67,
        producto: "CEREBRIT POTE",
        descripcion: "X 135 GRAMOS",
        precio: 8200,
      },
      {
        item: 68,
        producto: "CEREBRIT",
        descripcion: "120 GR X 8",
        precio: 8000,
      },
      {
        item: 69,
        producto: "GASTRUM PLUS SACHE",
        descripcion: "X 10 UNIDADES",
        precio: 22000,
      },
      {
        item: 70,
        producto: "OMEPRASOL",
        descripcion: "X 15 UNI",
        precio: 2200,
      },
      {
        item: 71,
        producto: "KOLA GRANULADA JGB",
        descripcion: "SOBRE X 8 UNIDADES",
        precio: 15000,
      },
      {
        item: 72,
        producto: "LOSARTAN",
        descripcion: "X 300 UNI",
        precio: 34000,
      },
      { item: 73, producto: "LOMOTIL", descripcion: "X 4 UNI", precio: 6000 },
      {
        item: 74,
        producto: "LOPERAMINA",
        descripcion: "X 6 UNIDADES",
        precio: 1500,
      },
      {
        item: 75,
        producto: "LORATAINA",
        descripcion: "X 400 UNIDADES",
        precio: 40000,
      },
      {
        item: 76,
        producto: "LORATAINA ECONOMICA",
        descripcion: "X 10",
        precio: 2000,
      },
      {
        item: 77,
        producto: "LORATAINA",
        descripcion: "X10 UNI TIRA",
        precio: 4000,
      },
      {
        item: 78,
        producto: "MAREOL",
        descripcion: "6 TIRAS X 12 UND = 72 TABLETAS",
        precio: 8500,
      },
      {
        item: 79,
        producto: "PASTILLAS VICK",
        descripcion: "SOBRE X 5 UNI",
        precio: 2000,
      },
    ],
  },

  cigarros: {
    nombre: "CIGARROS",
    productos: [
      {
        item: -1,
        producto: "CIGARRO AMPIRE",
        descripcion: "X10",
        precio: "38000",
      },
      { item: 2, producto: "CIGARRO JJ", descripcion: "", precio: "25000" },
      {
        item: -3,
        producto: "CIGARRO RUMBA",
        descripcion: "X10",
        precio: "35000",
      },
      {
        item: 4,
        producto: "CIGARRO RUMBA ROJO",
        descripcion: "",
        precio: "25000",
      },
      {
        item: 5,
        producto: "LUCKY DAIQUIRI PEQ",
        descripcion: "X 20 CAJEX 10 UN X 50 TIRAS",
        precio: "132000",
      },
      {
        item: 6,
        producto: "TABACO COMANDANTE",
        descripcion: "CAJA X 25 UNI",
        precio: "11500",
      },
      {
        item: 7,
        producto: "TABACO EL NORTENO",
        descripcion: "X 25 UND",
        precio: "7600",
      },
      {
        item: 8,
        producto: "CHIMU APURENO",
        descripcion: "PAQUETE",
        precio: "15000",
      },
      {
        item: 9,
        producto: "ROTHMANS PEQ",
        descripcion: "X 20 CAJET X 10 UND",
        precio: "113000",
      },
    ],
  },
  chocolatinas: {
    nombre: " CHOCOLATINAS ",
    productos: [
      {
        item: 1,
        producto: "AREQUIPE GALON",
        descripcion: "X5KL",
        precio: "54000",
      },
      {
        item: 2,
        producto: "AREQUIPE ALPINA",
        descripcion: "220 GR",
        precio: "7000",
      },
      {
        item: 3,
        producto: "AREQUIPE GARRAFA",
        descripcion: "",
        precio: "14500",
      },
      {
        item: 4,
        producto: "AREQUIPE KILO TAZA",
        descripcion: "",
        precio: "11500",
      },
      {
        item: 5,
        producto: "AREQUIPE LA MEJOR",
        descripcion: "250G",
        precio: "4000",
      },
      {
        item: 6,
        producto: "AREQUIPE LA MEJOR",
        descripcion: "X6UND",
        precio: "10000",
      },
      { item: 7, producto: "AREQUIPE", descripcion: "LIBRA", precio: "5000" },
      {
        item: 8,
        producto: "AREQUIPE LIBRA ALPINA",
        descripcion: "",
        precio: "8000",
      },
      {
        item: 9,
        producto: "AREQUIPE TETERO",
        descripcion: "400GR",
        precio: "6800",
      },
      {
        item: 10,
        producto: "AREQUIPE TETERO KILO",
        descripcion: "",
        precio: "13000",
      },
      {
        item: 11,
        producto: "AREQUIPE PROLECHE",
        descripcion: "X 150 GRAMOS",
        precio: "5300",
      },
      {
        item: 12,
        producto: "BURBU JET CRUJI",
        descripcion: "X12",
        precio: "28000",
      },
      {
        item: 13,
        producto: "BURBU JET CRUJI",
        descripcion: "X6",
        precio: "30000",
      },
      {
        item: 14,
        producto: "CHOCOLATE LIQUIDO",
        descripcion: "KILO",
        precio: "36000",
      },
      {
        item: 15,
        producto: "CHOCOLATE LIQUIDO",
        descripcion: "LIBRA",
        precio: "19500",
      },
      {
        item: 16,
        producto: "CHOCOLATE LIQUIDO",
        descripcion: "MEDIA",
        precio: "10500",
      },
      {
        item: 17,
        producto: "CHOCOLATE M Y",
        descripcion: "49 GRAMOS",
        precio: "4800",
      },
      {
        item: 18,
        producto: "CHOCOLATE MAIAMI",
        descripcion: "BOLSA KILO",
        precio: "22500",
      },
      {
        item: 19,
        producto: "CHOCOLATE MIS",
        descripcion: "X100",
        precio: "22000",
      },
      {
        item: 20,
        producto: "CHOCOLATINA MUU CON LECHE",
        descripcion: "X 24 X 18 DISP",
        precio: "20500",
      },
      {
        item: 21,
        producto: "COPA CHOCOLATE",
        descripcion: "X100X8",
        precio: "28000",
      },
      {
        item: 22,
        producto: "JET BLANCA CRUJI",
        descripcion: "X18 432 GRS",
        precio: "57000",
      },
      {
        item: 23,
        producto: "JET BURBUJAS BOLSA",
        descripcion: "X 12 UND X 24 PAQ",
        precio: "12800",
      },
      {
        item: 24,
        producto: "JET BURBUJAS COOKIES CREMA",
        descripcion: "X BOLSA X 10 UNI",
        precio: "8500",
      },
      {
        item: 25,
        producto: "JET CHOCO VETEADA 6",
        descripcion: "",
        precio: "7000",
      },
      {
        item: 26,
        producto: "JET CHOCOLATINA CRUJI",
        descripcion: "X24 12CJ",
        precio: "28500",
      },
      {
        item: 27,
        producto: "JET COKIES & CREAM GRANDE",
        descripcion: "X 6 UND X 18 DISP 50 GR",
        precio: "28000",
      },
      {
        item: -28,
        producto: "JET COOKIES & CREAM",
        descripcion: "X 10 CAJA",
        precio: "29000",
      },
      {
        item: 29,
        producto: "JET CREMA",
        descripcion: "X 350 GR X 8 POTES",
        precio: "22800",
      },
      {
        item: 30,
        producto: "JET CREMA FRESAS",
        descripcion: "DISPLEY X 12",
        precio: "22500",
      },
      {
        item: 31,
        producto: "JET CREMA MINI",
        descripcion: "140GX12",
        precio: "11500",
      },
      {
        item: 32,
        producto: "JET CREMA SOBRE",
        descripcion: "18GR X 12 DISP",
        precio: "22000",
      },
      {
        item: 33,
        producto: "JET MINI SURTIDA BOLSA",
        descripcion: "X 24 UND X 24 PAQ",
        precio: "16800",
      },
      {
        item: 34,
        producto: "JET X 22 GRS",
        descripcion: "X 12 UND",
        precio: "100000",
      },
      {
        item: 35,
        producto: "JET X 24 UND",
        descripcion: "X 12 DISP",
        precio: "25500",
      },
      {
        item: 36,
        producto: "JET X 35 UND",
        descripcion: "X 24 DISP",
        precio: "115000",
      },
      {
        item: 37,
        producto: "JET X 50 UND",
        descripcion: "X 30 DISP",
        precio: "53000",
      },
      {
        item: 38,
        producto: "JUMBO MIX",
        descripcion: "X12 60GRS X 12 DIPS",
        precio: "54000",
      },
      {
        item: 39,
        producto: "JUMBO CHOCO AREQUIPE",
        descripcion: "X 170 GRAMOS",
        precio: "9500",
      },
      {
        item: 40,
        producto: "JUMBO FEST",
        descripcion: "170 GRA",
        precio: "8000",
      },
      {
        item: 41,
        producto: "JUMBO FLOW BLANCA",
        descripcion: "X12UNDX12 DISP",
        precio: "39700",
      },
      {
        item: 42,
        producto: "JUMBO FLOW MINI BLANCA",
        descripcion: "",
        precio: "12200",
      },
      {
        item: 43,
        producto: "JUMBO FLOW MINI BOLSA",
        descripcion: "X14 UNI",
        precio: "7000",
      },
      {
        item: 44,
        producto: "JUMBO FLOW MINI NEGRO",
        descripcion: "",
        precio: "10300",
      },
      {
        item: -45,
        producto: "JUMBO FLOW NEGRA",
        descripcion: "X12UNDX12 DISP",
        precio: "33000",
      },
      {
        item: 46,
        producto: "JUMBO MANI",
        descripcion: "X 35 GRAMOS X 24",
        precio: "81000",
      },
      {
        item: 47,
        producto: "JUMBO MANI MINI",
        descripcion: "X24 18G",
        precio: "31000",
      },
      {
        item: 48,
        producto: "JUMBO MANI",
        descripcion: "X 35 GRAMOS X 12 UNI",
        precio: "34000",
      },
      {
        item: 49,
        producto: "JUMBO MANI",
        descripcion: "X 90 GRAMOS X 12 UNI",
        precio: "90000",
      },
      {
        item: 50,
        producto: "JUMBO MANI",
        descripcion: "X 90 GRAMOS X 6 UNI",
        precio: "37000",
      },
      { item: 51, producto: "JUMBO TURBO", descripcion: "X6", precio: "7800" },
      {
        item: 52,
        producto: "MONBLAC ELMENDRA",
        descripcion: "X 10 UNI",
        precio: "12500",
      },
      {
        item: 53,
        producto: "MONBLANC BAILEYS BLANCO",
        descripcion: "X6",
        precio: "17000",
      },
      {
        item: 54,
        producto: "MONT BLACN",
        descripcion: "X7UNI",
        precio: "13500",
      },
      {
        item: 55,
        producto: "MONT BLANC CHOCOLITINA",
        descripcion: "X6",
        precio: "23200",
      },
      {
        item: 56,
        producto: "MONT BLANC",
        descripcion: "X 12 UNI",
        precio: "22000",
      },
      {
        item: 57,
        producto: "MONT BLANC",
        descripcion: "X 15 UNIDADES",
        precio: "25600",
      },
      {
        item: 58,
        producto: "MONT BLANC SURTIDA",
        descripcion: "80 GRAMOS",
        precio: "8800",
      },
      {
        item: 59,
        producto: "LLUVIA CHOCOLATE MC",
        descripcion: "X1000GR",
        precio: "28000",
      },
      {
        item: 60,
        producto: "NUCITA",
        descripcion: "X18UNDX16 DSP",
        precio: "11000",
      },
      {
        item: 61,
        producto: "FLIPS CREMA CHOCOLATE",
        descripcion: "X 12 UND",
        precio: "21600",
      },
      { item: 61, producto: "MYM", descripcion: "DE 100 GR", precio: "4500" },
    ],
  },
  tortasponques: {
    nombre: "LINEA DE TORTAS Y PONQUES",
    productos: [
      {
        item: 1,
        producto: "BROWN AREQUIPE BIMBO",
        descripcion: "X 75 GR",
        precio: "3100",
      },
      {
        item: 2,
        producto: "BROWNIE RAMO GRANDE",
        descripcion: "X 6 UNDS 390G",
        precio: "16000",
      },
      {
        item: 3,
        producto: "BROWNIE MINI",
        descripcion: "X 12 UNDS",
        precio: "11800",
      },
      {
        item: 4,
        producto: "CHOCORRAMO BARRITA",
        descripcion: "X 5",
        precio: "8900",
      },
      { item: 5, producto: "CHOCORRAMO", descripcion: "X5", precio: "11300" },
      {
        item: 6,
        producto: "CHOCORRAMO MINI",
        descripcion: "X 5",
        precio: "6000",
      },
      {
        item: 7,
        producto: "CHOCOSO BIMBO",
        descripcion: "X 5 UNIDADES",
        precio: "10500",
      },
      {
        item: 8,
        producto: "CHOCOSO MINI",
        descripcion: "X 20 UNDS",
        precio: "14000",
      },
      { item: 9, producto: "GANCITO", descripcion: "X 6 UNDS", precio: "9200" },
      {
        item: 10,
        producto: "PAN TAJADO MANTEQUILLA",
        descripcion: "",
        precio: "6200",
      },
      { item: 11, producto: "PASTA GALAX5", descripcion: "", precio: "9300" },
      {
        item: 12,
        producto: "PONQUE CASERO BIMBO",
        descripcion: "X 230 GR",
        precio: "5800",
      },
      {
        item: 13,
        producto: "PONQUE RAMO TRADICIONAL",
        descripcion: "",
        precio: "5900",
      },
      { item: 14, producto: "PUDIN SURTIDO", descripcion: "", precio: "4500" },
      {
        item: 15,
        producto: "RAMITO",
        descripcion: "X 8 UNI X 200 GRA",
        precio: "7500",
      },
      {
        item: 16,
        producto: "MINI BROWN BIMBO",
        descripcion: "X 10",
        precio: "14300",
      },
      {
        item: 17,
        producto: "MINI CHOCORRAMO",
        descripcion: "X 20 UND",
        precio: "15800",
      },
      {
        item: 18,
        producto: "TORTA RAMO",
        descripcion: "X 16 UND",
        precio: "25000",
      },
    ],
  },
  cafechocolate: {
    nombre: "CAFE Y CHOCOLATE",
    productos: [
      {
        item: 1,
        producto: "CAFE AROMA",
        descripcion: "X 125 GRAMOS",
        precio: "5700",
      },
      {
        item: 2,
        producto: "CAFE AROMA",
        descripcion: "X 250 GRAMOS",
        precio: "12200",
      },
      {
        item: 3,
        producto: "CAFE AROMA",
        descripcion: "X50GRAX12",
        precio: "21200",
      },
      {
        item: 4,
        producto: "CAFE AROMA",
        descripcion: "X 500 GRAMOS",
        precio: "22000",
      },
      {
        item: 6,
        producto: "CAFE GURMET",
        descripcion: "X100X18",
        precio: "7000",
      },
      {
        item: 7,
        producto: "CAFE SELLO ROJO",
        descripcion: "125 GR X 48 UNIDAD CAJA",
        precio: "6000",
      },
      {
        item: 8,
        producto: "CAFE SELLO ROJO",
        descripcion: "250 GRAMOS",
        precio: "13500",
      },
      {
        item: -9,
        producto: "CAFE SELLO ROJO",
        descripcion: "425 GRAMOS",
        precio: "21500",
      },
      {
        item: -10,
        producto: "CAFE SELLO ROJO PAPELETA",
        descripcion: "X 50 GRAM X 10 UNI",
        precio: "22600",
      },
      {
        item: 11,
        producto: "CAFE TROPICO",
        descripcion: "X 500 GRAMOS",
        precio: "11500",
      },
      {
        item: 12,
        producto: "CAFE COTIDIANO",
        descripcion: "X 500 GRAMOS",
        precio: "19000",
      },
      {
        item: 13,
        producto: "CHOCOLATE CORONA PASTILLA",
        descripcion: "X 40 UN",
        precio: "35000",
      },
      {
        item: 14,
        producto: "CHOCOLISTO POTE",
        descripcion: "1000 GX12 UNIDADES",
        precio: "33000",
      },
      {
        item: 15,
        producto: "CHOCOLISTO POTE",
        descripcion: "300 G",
        precio: "12800",
      },
      {
        item: 16,
        producto: "CHOCOLISTO RISTRA",
        descripcion: "X18UND X24 TIRAS",
        precio: "13400",
      },
      {
        item: 17,
        producto: "CHOCOLISTO",
        descripcion: "X 200 GRAMOS X 44 CJ",
        precio: "8000",
      },
      {
        item: 18,
        producto: "COLCAFE CLASICO",
        descripcion: "1.5 G CAJA X 48",
        precio: "11000",
      },
      {
        item: 19,
        producto: "COLCAFE RISTRA",
        descripcion: "X10 UNDX12 TIRAS",
        precio: "12700",
      },
      {
        item: 20,
        producto: "COLCAFE RISTRA GRANULADO",
        descripcion: "X 10 UNI",
        precio: "10500",
      },
      {
        item: 21,
        producto: "JUAN VALDES DE VIDRIO",
        descripcion: "X 95 GRAMOS",
        precio: "24000",
      },
      {
        item: 22,
        producto: "JUAN VALDES",
        descripcion: "RISTRA X 10 UNIDAD X 14 TIRAS CJ",
        precio: "16500",
      },
      {
        item: 23,
        producto: "JUAN VALDES",
        descripcion: "DISPLEY X 30 UNI",
        precio: "10500",
      },
      {
        item: 24,
        producto: "MILO RISTRA",
        descripcion: "X18UNIX25 GR",
        precio: "15200",
      },
      {
        item: 25,
        producto: "NESCAFE CAJITA",
        descripcion: "X48UNDX24 DISP",
        precio: "11500",
      },
      {
        item: 26,
        producto: "NESCAFE RISTRA",
        descripcion: "10 GRA X 12 UNI",
        precio: "17500",
      },
      {
        item: 27,
        producto: "NESCAFE RISTRA",
        descripcion: "X 25 GRAMOS X 12 UNIDADES",
        precio: "29500",
      },
    ],
  },
  galletasnavidenas: {
    nombre: "LINEA NAVIDEÑA",
    productos: [
      {
        item: 1,
        producto: "FIESTA NAVIDEÑA",
        descripcion: "200 GRAMOS",
        precio: "5600",
      },
      {
        item: 2,
        producto: "GALLETA NAVIDEÑA",
        descripcion: "X 180 GR X 12 UND",
        precio: "3000",
      },
      {
        item: 3,
        producto: "GALLETA NAVIDEÑA",
        descripcion: "X 300 GR X 12 UND",
        precio: "4500",
      },
      {
        item: 4,
        producto: "GALLETA NAVIDEÑA AMARILLA",
        descripcion: "",
        precio: "4000",
      },
      {
        item: 5,
        producto: "CARAVANA NAVIDEÑA",
        descripcion: "",
        precio: "8500",
      },
      {
        item: 6,
        producto: "NAVIDEÑAS COLOMBINA",
        descripcion: "X 200",
        precio: "6800",
      },
      {
        item: 7,
        producto: "DURAZNO DOS MITADES",
        descripcion: "820G",
        precio: "11500",
      },
      {
        item: 8,
        producto: "DURAZNO LA CURULLA 240",
        descripcion: "",
        precio: "9500",
      },
      {
        item: 9,
        producto: "DURAZNO LA PRADERA BOMBILLO",
        descripcion: "250GR X 24",
        precio: "4200",
      },
      {
        item: 10,
        producto: "DURAZNO LA PRADERA",
        descripcion: "KILO X12",
        precio: "11000",
      },
      {
        item: 11,
        producto: "DURAZNO SELECTO",
        descripcion: "X 410 GRAMOS",
        precio: "6000",
      },
      {
        item: 12,
        producto: "DURAZNOS LA PRADERA",
        descripcion: "525GR",
        precio: "6000",
      },
      { item: 13, producto: "VINO ECONOMICO", descripcion: "", precio: "4000" },
      {
        item: 14,
        producto: "VINO CELEBRACION MOSCATEL",
        descripcion: "X 12 UNDS",
        precio: "13000",
      },
    ],
  },
  vasos: {
    nombre: "VASOS",
    productos: [
      {
        item: 1,
        producto: "VASO 1 ONZA SUPER",
        descripcion: "",
        precio: "1800",
      },
      {
        item: 2,
        producto: "VASO 1/2 ONZA",
        descripcion: "X 100 UND",
        precio: "3000",
      },
      {
        item: 3,
        producto: "VASO 10 ONZ",
        descripcion: "CAJAX40",
        precio: "1900",
      },
      {
        item: 4,
        producto: "VASO 12 ONZAS TAMI",
        descripcion: "X 25 UND",
        precio: "2900",
      },
      {
        item: 5,
        producto: "VASO 3.0 ONZ",
        descripcion: "CAJAX60",
        precio: "1300",
      },
      {
        item: 6,
        producto: "VASO 3.3 ONZ",
        descripcion: "CAJAX60",
        precio: "1500",
      },
      {
        item: 7,
        producto: "VASO 5.5 ONZAS",
        descripcion: "X 60",
        precio: "2000",
      },
      {
        item: 8,
        producto: "VASO 7 ONZ",
        descripcion: "CAJAX50",
        precio: "1900",
      },
      {
        item: 9,
        producto: "VASO 9 ONZAS",
        descripcion: "CAJAX40",
        precio: "2700",
      },
      {
        item: 10,
        producto: "VASO CARTON CAFE 4 ONZAS",
        descripcion: "X 50 UND",
        precio: "3600",
      },
      {
        item: 11,
        producto: "VASO ICOPOR 16 ONZAS CON TAPA",
        descripcion: "X 25 DISP",
        precio: "6000",
      },
      {
        item: 12,
        producto: "VASO TAMI 16 ONZAS",
        descripcion: "X 25 UND",
        precio: "4200",
      },
      {
        item: 13,
        producto: "VASO TAMI 3.5 ONZAS",
        descripcion: "",
        precio: "2500",
      },
      {
        item: 14,
        producto: "VASO TAMI PLASTICO 12OZ",
        descripcion: "",
        precio: "2600",
      },
      {
        item: 15,
        producto: "VASO TOSCANO 3.5 ONZAS CAFE",
        descripcion: "",
        precio: "3000",
      },
    ],
  },
  bolsas: {
    nombre: "BOLSAS",
    productos: [
      {
        item: 2,
        producto: "BOLSA",
        descripcion: "2 KL TRAP DELGADA",
        precio: "2500",
      },
      { item: 3, producto: "BOLSA 1/2", descripcion: "", precio: "1600" },
      { item: 4, producto: "BOLSA", descripcion: "10 KILOS", precio: "5500" },
      { item: 5, producto: "BOLSA", descripcion: "15 KILOS", precio: "5800" },
      { item: 6, producto: "BOLSA", descripcion: "2KILOS", precio: "2000" },
      {
        item: 7,
        producto: "BOLSA",
        descripcion: "25 KILOS BLANCA",
        precio: "12000",
      },
      {
        item: 8,
        producto: "BOLSA",
        descripcion: "25 KILOS NEGRA",
        precio: "8500",
      },
      { item: 9, producto: "BOLSA", descripcion: "3 KILOS", precio: "2500" },
      { item: 10, producto: "BOLSA", descripcion: "5 KILOS", precio: "3900" },
      {
        item: 11,
        producto: "BOLSA ASEO",
        descripcion: "DELGADA X 10 UNI",
        precio: "5500",
      },
      {
        item: 12,
        producto: "BOLSA ASEO",
        descripcion: "GRANDE",
        precio: "7000",
      },
      {
        item: 13,
        producto: "BOLSA DE PAPEL",
        descripcion: "X 100 UNIDADES",
        precio: "4000",
      },
      {
        item: 14,
        producto: "BOLSA HIELO",
        descripcion: "GRANDE",
        precio: "3200",
      },
      {
        item: 15,
        producto: "BOLSA HIELO",
        descripcion: "PEQUEÑA",
        precio: "2800",
      },
      { item: 16, producto: "BOLSA", descripcion: "KILO TRAS", precio: "3200" },
      { item: 17, producto: "BOLSA", descripcion: "LIBRA", precio: "2000" },
      {
        item: 18,
        producto: "BOLSA TRANSPARENTE GRUESA",
        descripcion: "2 KILOS",
        precio: "8500",
      },
      {
        item: 19,
        producto: "BRILLANTE BOLSA",
        descripcion: "X40G",
        precio: "5300",
      },
      {
        item: 20,
        producto: "BOLSA VIKINGO",
        descripcion: "GRANDE",
        precio: "900",
      },
    ],
  },
  varios: {
    nombre: "VARIOS",
    productos: [
      {
        item: 2,
        producto: "BUNUELOS",
        descripcion: "X 200 GRAMOS X 20",
        precio: "3400",
      },
      { item: 3, producto: "CABUYA", descripcion: "375 CM", precio: "1200" },
      { item: 4, producto: "CINTA GRANDE", descripcion: "", precio: "11000" },
      {
        item: 5,
        producto: "CINTA PIEL PEQUENA",
        descripcion: "",
        precio: "1800",
      },
      { item: 6, producto: "CMC", descripcion: "KILO", precio: "36000" },
      {
        item: 7,
        producto: "COMPLETICIMO DESMENUSADO",
        descripcion: "",
        precio: "4100",
      },
      {
        item: 8,
        producto: "COMPOTA",
        descripcion: "113 GR X 24 UNIDADES CAJA",
        precio: "58000",
      },
      {
        item: 9,
        producto: "COMPOTA DOYPA",
        descripcion: "X 24 UNIDADES",
        precio: "51000",
      },
      { item: 10, producto: "COSTALES", descripcion: "", precio: "800" },
      {
        item: 11,
        producto: "DON GUSTICO",
        descripcion: "X 50 SOBRES",
        precio: "3800",
      },
      {
        item: 12,
        producto: "DONA GALLINA DESMENUCADO",
        descripcion: "X 12 SOBRES",
        precio: "3600",
      },
      {
        item: 13,
        producto: "DONA GALLINA",
        descripcion: "X48",
        precio: "18200",
      },
      {
        item: 14,
        producto: "EMBOPLAS CHEVERE",
        descripcion: "X 200 METROS",
        precio: "12000",
      },
      {
        item: 15,
        producto: "ESPARADRAPO PEQUENO",
        descripcion: "",
        precio: "2800",
      },
      { item: 16, producto: "ESPUMA", descripcion: "", precio: "10000" },
      {
        item: 17,
        producto: "FLAN",
        descripcion: "X 250 GRAMOS",
        precio: "4500",
      },
      {
        item: 18,
        producto: "FOSFOROS REFUEGO",
        descripcion: "X 20 CAJETILLAS",
        precio: "3500",
      },
      { item: 19, producto: "BOKA", descripcion: "", precio: "7000" },
      {
        item: 20,
        producto: "FRUTINO",
        descripcion: "DISPLEY X 20",
        precio: "17000",
      },
      { item: 21, producto: "GRANOLA", descripcion: "1000G", precio: "12800" },
      { item: 22, producto: "GRANOLA", descripcion: "250 GRS", precio: "4700" },
      {
        item: 23,
        producto: "GRANOLA",
        descripcion: "DE 500 GR",
        precio: "7200",
      },
      {
        item: 24,
        producto: "GUISAMAC",
        descripcion: "X 12 UNIDADES",
        precio: "8500",
      },
      {
        item: 25,
        producto: "HOLA DIA",
        descripcion: "1000 GR",
        precio: "12200",
      },
      { item: 26, producto: "HOLA DIA", descripcion: "500GRS", precio: "7200" },
      {
        item: 27,
        producto: "HOLA DIA",
        descripcion: "250 GRS",
        precio: "4000",
      },
      {
        item: 28,
        producto: "INDULECHE",
        descripcion: "360 GRAMOS X 30 CJ",
        precio: "11200",
      },
      {
        item: 29,
        producto: "INDULECHE",
        descripcion: "X 125 GRAMOS X 90 CJ",
        precio: "4900",
      },
      {
        item: 30,
        producto: "INDULECHE",
        descripcion: "X 200 GRA X 60 CJ",
        precio: "7200",
      },
      {
        item: 31,
        producto: "INDULECHE",
        descripcion: "X 800 GRA X 16 CJ",
        precio: "25200",
      },
      {
        item: 32,
        producto: "KELLOS GRANDE OFERTA",
        descripcion: "X 15 UNIDADES",
        precio: "150000",
      },
      { item: 33, producto: "KLIM TIRA", descripcion: "X16", precio: "22000" },
      {
        item: 34,
        producto: "LA SOPERA 3 PORCIONES",
        descripcion: "",
        precio: "1400",
      },
      {
        item: 35,
        producto: "LAPICEROS BIC",
        descripcion: "X12",
        precio: "6000",
      },
      {
        item: 36,
        producto: "LECHE COLOMBINA",
        descripcion: "DOYPAX 300",
        precio: "7500",
      },
      {
        item: 37,
        producto: "LECHE COND",
        descripcion: "GALON 5 KL",
        precio: "55000",
      },
      {
        item: 38,
        producto: "LECHE COND KILO ANDINI",
        descripcion: "",
        precio: "11500",
      },
      {
        item: 39,
        producto: "LECHE CONDENSADA COLOMBINA",
        descripcion: "100 GR X 12 UNID",
        precio: "29500",
      },
      {
        item: 40,
        producto: "LECHE CONDENSADA",
        descripcion: "GARRAFA 5000G",
        precio: "28000",
      },
      {
        item: 41,
        producto: "LECHE CONDENSADA RISTRA",
        descripcion: "X26 UNDX12 TIRAS",
        precio: "22500",
      },
      {
        item: 42,
        producto: "LECHE DOYPA NESTLE",
        descripcion: "X504",
        precio: "12300",
      },
      {
        item: 43,
        producto: "LECHE DOYPA",
        descripcion: "X 90 DOYPA",
        precio: "3000",
      },
      {
        item: 44,
        producto: "LECHE EN POLVO CAMPECINA",
        descripcion: "X 380 GRAMOS",
        precio: "10800",
      },
      {
        item: 45,
        producto: "LECHE EN POLVO CAMPESINA",
        descripcion: "X900",
        precio: "21500",
      },
      {
        item: 46,
        producto: "LECHE NUTRIRINDE",
        descripcion: "108GX8",
        precio: "39000",
      },
      {
        item: 47,
        producto: "LECHE TETERO ANDINO",
        descripcion: "400 GR",
        precio: "6800",
      },
      {
        item: 48,
        producto: "LECHE TETERO",
        descripcion: "KILO",
        precio: "13500",
      },
      {
        item: 49,
        producto: "LECHE TIRA CASA LUKER",
        descripcion: "25 GR X 12 UND",
        precio: "10500",
      },
      {
        item: 50,
        producto: "LECHE TUBITO LUKER",
        descripcion: "45GX12x12 DISP",
        precio: "21500",
      },
      {
        item: 51,
        producto: "LLAVERO ECONOMICO",
        descripcion: "",
        precio: "10000",
      },
      { item: 52, producto: "LLAVERO PUPIS", descripcion: "", precio: "15000" },
      { item: 53, producto: "MASCARA MONJA", descripcion: "", precio: "40000" },
      {
        item: 54,
        producto: "MASCARA SANGRE MUERTE",
        descripcion: "",
        precio: "35000",
      },
      {
        item: 55,
        producto: "MASCARAS CONEJA",
        descripcion: "",
        precio: "35000",
      },
      {
        item: 56,
        producto: "MASCARAS HUMANAS",
        descripcion: "",
        precio: "28000",
      },
      {
        item: 57,
        producto: "MASCARAS LUCES",
        descripcion: "",
        precio: "40000",
      },
      {
        item: 58,
        producto: "MASCARAS NORMALES",
        descripcion: "",
        precio: "25000",
      },
      {
        item: 59,
        producto: "MASCARAS SCARYMOBY",
        descripcion: "",
        precio: "10000",
      },
      {
        item: 60,
        producto: "MECHERA LINTERNA",
        descripcion: "X 25 UNI",
        precio: "16000",
      },
      {
        item: 61,
        producto: "MECHERA PIEDRA",
        descripcion: "X 25 UNIDADES",
        precio: "12000",
      },
      {
        item: 62,
        producto: "MECHERAS BIC",
        descripcion: "X 15 UNIDADES",
        precio: "27500",
      },
      { item: 63, producto: "METRAS BLANCAS", descripcion: "", precio: "6000" },
      { item: 64, producto: "METRAS COLORES", descripcion: "", precio: "5000" },
      {
        item: 65,
        producto: "MEZCLDOR DE CAFE",
        descripcion: "X 100 UND",
        precio: "1800",
      },
      {
        item: 66,
        producto: "NATILLA",
        descripcion: "200 GRAMOS X 20 UNI",
        precio: "3400",
      },
      {
        item: 67,
        producto: "NESTUM TRIGO MIEL",
        descripcion: "RISTRA X 10 UND X 12 TIRAS",
        precio: "11300",
      },
      {
        item: 68,
        producto: "NUTRIRINDE EL RODEO",
        descripcion: "810 GRAMOS",
        precio: "34000",
      },
      { item: 69, producto: "PABILO", descripcion: "", precio: "1500" },
      {
        item: 70,
        producto: "PULPO O ZUNCHO COLORES",
        descripcion: "",
        precio: "5000",
      },
      {
        item: 71,
        producto: "PANELADA 1.5",
        descripcion: "DISPLEY X 16",
        precio: "21000",
      },
      {
        item: 72,
        producto: "PAPAGALLO GRANDE",
        descripcion: "",
        precio: "10000",
      },
      {
        item: 73,
        producto: "PAPAGALLO PEQUENO",
        descripcion: "",
        precio: "7000",
      },
      {
        item: 74,
        producto: "PILA TRONEX AA",
        descripcion: "X20UND",
        precio: "18500",
      },
      {
        item: 75,
        producto: "PILA TRONEX AAA 1.5V",
        descripcion: "",
        precio: "18500",
      },
      {
        item: 76,
        producto: "PILA TRONEX GRANDE 1.5V",
        descripcion: "TIRAX12 UND",
        precio: "29000",
      },
      {
        item: 77,
        producto: "PINAS RODAJAS LA CORUNA",
        descripcion: "X 565 GR X 24 UND",
        precio: "11000",
      },
      {
        item: 78,
        producto: "RODEO ESENCIA RISTRA",
        descripcion: "X 32 UNIDADES",
        precio: "24500",
      },
      {
        item: 79,
        producto: "HOJUELAS TONY",
        descripcion: "X 360 GRAMOS",
        precio: "7000",
      },
      {
        item: 80,
        producto: "ZUCARITA CAJA",
        descripcion: "X 260 GRAMOS",
        precio: "10500",
      },
    ],
  },
  contenedores: {
    nombre: "LINEA DE CONTENEDORES",
    productos: [
      {
        item: 1,
        producto: "CONTENEDOR 12 ONZAS TAPA ALTA",
        descripcion: "",
        precio: "400",
      },
      {
        item: 2,
        producto: "CONTENEDOR 12 ONZAS TAPA PLANA SELLO PLUS",
        descripcion: "",
        precio: "400",
      },
      {
        item: 3,
        producto: "CONTENEDOR 16 HONSAS X 20 UNI",
        descripcion: "",
        precio: "8800",
      },
      {
        item: 4,
        producto: "CONTENEDOR 24 HONSAS X 20 UNI",
        descripcion: "",
        precio: "9000",
      },
      { item: 5, producto: "J1", descripcion: "X 20 UNIDADES", precio: "7000" },
    ],
  },
  pitillospalillos: {
    nombre: "PITILLOS, PALILLOS Y PLATOS",
    productos: [
      {
        item: 1,
        producto: "PALILLO DIENTE CHEVERE",
        descripcion: "X 180 UND",
        precio: "800",
      },
      {
        item: 2,
        producto: "PALO PALETA PQ CHEVERE",
        descripcion: "X 1000 UNDS",
        precio: "14500",
      },
      {
        item: 3,
        producto: "PALO CHUZO 30CM CHEVERE GRUESO",
        descripcion: "X 100 UNDS",
        precio: "3200",
      },
      {
        item: 4,
        producto: "PALO CHUZO CHEVERE DELGADO",
        descripcion: "X 100 UND",
        precio: "3300",
      },
      {
        item: 5,
        producto: "PALO PINCHUZO 30CM",
        descripcion: "",
        precio: "2800",
      },
      {
        item: 6,
        producto: "PITILLO FORADO",
        descripcion: "X 200 UNI",
        precio: "5000",
      },
      {
        item: 7,
        producto: "PITILLO FRAPE",
        descripcion: "X 300 UNI",
        precio: "4600",
      },
      {
        item: 8,
        producto: "PITILLOS COLORES",
        descripcion: "X 100 UNIDADES",
        precio: "1700",
      },
      {
        item: 9,
        producto: "PITILLOS JUGETES",
        descripcion: "X 15UND",
        precio: "6500",
      },
      {
        item: 10,
        producto: "PLATO 5 ONZAS",
        descripcion: "X 24",
        precio: "1200",
      },
      { item: 11, producto: "PLATO ONDO", descripcion: "25CM", precio: "5000" },
      {
        item: 12,
        producto: "PLATO ONDO",
        descripcion: "30 ONZAS",
        precio: "6000",
      },
      {
        item: 13,
        producto: "PLATO PLANO 15.5CM",
        descripcion: "X 20UND",
        precio: "2300",
      },
      {
        item: 14,
        producto: "PLATO PLANO 23CM",
        descripcion: "",
        precio: "4500",
      },
    ],
  },
};

// Variables globales
let currentCategory = "fritolay";
let editMode = false;
let orderMode = false;
let currentMes = "JUNIO 2025";
let logoImageData = null;
let orderList = []; // Lista de productos en el pedido

// Cargar el logo como imagen base64 para el PDF
function loadLogoImage() {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    logoImageData = canvas.toDataURL("image/png");
  };
  img.src =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UlwXu5exLWtCN5ygPxClO74gy5uGxG.png";
}

function formatPrice(price) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(parseInt(price));
}

function changeCategory(categoryKey) {
  currentCategory = categoryKey;

  // Actualizar título
  document.getElementById("categoria-titulo").textContent =
    categorias[categoryKey].nombre;

  // Si estaba en modo edición, desactivarlo
  if (editMode) {
    toggleEdit();
  } else {
    renderTable();
  }
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // Configurar colores
  const orangeColor = [255, 107, 53];
  const yellowColor = [255, 213, 79];
  const blueColor = [25, 118, 210];

  // HEADER - Fondo naranja
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(0, 0, 210, 25, "F");

  // Logo circular "F"
  doc.setFillColor(255, 215, 0);
  doc.circle(20, 12.5, 8, "F");
  doc.setTextColor(255, 107, 53);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("F", 20, 15, { align: "center" });

  // Texto del header
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text("Confitería Fritolay", 35, 10);
  doc.setFontSize(10);
  doc.text("Sistema de Gestión de Productos", 35, 17);

  // SECCIÓN AMARILLA
  doc.setFillColor(yellowColor[0], yellowColor[1], yellowColor[2]);
  doc.rect(10, 35, 190, 25, "F");

  // Logo de confitería (imagen real)
  if (logoImageData) {
    try {
      doc.addImage(logoImageData, "PNG", 15, 40, 15, 15);
    } catch (error) {
      // Fallback si hay error con la imagen
      doc.setFillColor(76, 175, 80);
      doc.circle(22.5, 47.5, 7.5, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(6);
      doc.text("LOGO", 22.5, 49, { align: "center" });
    }
  } else {
    // Fallback si no se cargó la imagen
    doc.setFillColor(76, 175, 80);
    doc.circle(22.5, 47.5, 7.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(6);
    doc.text("LOGO", 22.5, 49, { align: "center" });
  }

  // Título principal
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(categorias[currentCategory].nombre, 40, 45);
  doc.setFontSize(9);
  doc.text("Gestión de inventario y precios", 40, 52);

  // Badge del mes
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(150, 42, 35, 12, 6, 6, "F");
  doc.setTextColor(255, 107, 53);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(currentMes, 167.5, 49, { align: "center" });

  // TABLA DE PRODUCTOS usando autoTable
  const tableData = categorias[currentCategory].productos.map((prod) => [
    prod.item.toString(),
    prod.producto,
    prod.descripcion,
    formatPrice(prod.precio),
  ]);

  doc.autoTable({
    head: [["ITEM", "PRODUCTO", "DESCRIPCIÓN", "PRECIO"]],
    body: tableData,
    startY: 70,
    styles: {
      fontSize: 8,
      cellPadding: 3,
      lineColor: [224, 224, 224],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: blueColor,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9,
      halign: "center",
    },
    columnStyles: {
      0: {
        halign: "center",
        cellWidth: 20,
        fillColor: [248, 249, 250],
      },
      1: {
        cellWidth: 70,
        fontSize: 8,
      },
      2: {
        cellWidth: 60,
        fontSize: 8,
      },
      3: {
        halign: "right",
        cellWidth: 40,
        textColor: [46, 125, 50],
        fontStyle: "bold",
      },
    },
    alternateRowStyles: {
      fillColor: [248, 249, 250],
    },
    margin: { top: 70, left: 10, right: 10 },
    tableLineColor: [224, 224, 224],
    tableLineWidth: 0.1,
  });

  // FOOTER en todas las páginas
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Fondo del footer
    doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
    doc.rect(0, 285, 210, 12, "F");

    // Texto del footer
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    const footerText = `© 2025 Confitería La Gran Fortuna - Página ${i} de ${totalPages} - Generado el ${new Date().toLocaleDateString("es-CO")} ${new Date().toLocaleTimeString("es-CO")}`;
    doc.text(footerText, 105, 292, { align: "center" });
  }

  // Información adicional en la última página
  const finalY = doc.lastAutoTable.finalY || 70;
  if (finalY < 250) {
    doc.setTextColor(102, 102, 102);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(
      `Total de productos: ${categorias[currentCategory].productos.length}`,
      15,
      finalY + 15,
    );
    doc.text(
      `Fecha de generación: ${new Date().toLocaleDateString("es-CO")} a las ${new Date().toLocaleTimeString("es-CO")}`,
      15,
      finalY + 22,
    );
  }

  // Descargar con nombre personalizado
  const fileName = `${categorias[currentCategory].nombre.replace(/\s+/g, "_")}_${currentMes.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);
}

function downloadOrderPDF() {
  if (orderList.length === 0) {
    alert("No hay productos en el pedido para generar el PDF.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // Configurar colores
  const orangeColor = [255, 107, 53];
  const yellowColor = [255, 213, 79];
  const blueColor = [25, 118, 210];

  // HEADER - Fondo naranja
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(0, 0, 210, 25, "F");

  // Logo circular "F"
  doc.setFillColor(255, 215, 0);
  doc.circle(20, 12.5, 8, "F");
  doc.setTextColor(255, 107, 53);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("F", 20, 15, { align: "center" });

  // Texto del header
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text("Confitería La Gran Fortuna", 35, 10);
  doc.setFontSize(10);
  doc.text("Sistema de Pedidos", 35, 17);

  // SECCIÓN AMARILLA
  doc.setFillColor(yellowColor[0], yellowColor[1], yellowColor[2]);
  doc.rect(10, 35, 190, 25, "F");

  // Logo de confitería (imagen real)
  if (logoImageData) {
    try {
      doc.addImage(logoImageData, "PNG", 15, 40, 15, 15);
    } catch (error) {
      // Fallback si hay error con la imagen
      doc.setFillColor(76, 175, 80);
      doc.circle(22.5, 47.5, 7.5, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(6);
      doc.text("LOGO", 22.5, 49, { align: "center" });
    }
  } else {
    // Fallback si no se cargó la imagen
    doc.setFillColor(76, 175, 80);
    doc.circle(22.5, 47.5, 7.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(6);
    doc.text("LOGO", 22.5, 49, { align: "center" });
  }

  // Título principal
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("PEDIDO DE PRODUCTOS", 40, 45);
  doc.setFontSize(9);
  doc.text("Lista de productos seleccionados", 40, 52);

  // Badge del mes
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(150, 42, 35, 12, 6, 6, "F");
  doc.setTextColor(255, 107, 53);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(currentMes, 167.5, 49, { align: "center" });

  // TABLA DE PEDIDO usando autoTable
  const tableData = orderList.map((item, index) => [
    (index + 1).toString(),
    item.producto,
    item.descripcion,
    item.cantidad.toString(),
    formatPrice(item.precio),
    formatPrice(item.precio * item.cantidad),
  ]);

  // Calcular total
  const total = orderList.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0,
  );

  doc.autoTable({
    head: [
      ["#", "PRODUCTO", "DESCRIPCIÓN", "CANT.", "PRECIO UNIT.", "SUBTOTAL"],
    ],
    body: tableData,
    startY: 70,
    styles: {
      fontSize: 10,
      cellPadding: 1.5,
      lineColor: [224, 224, 224],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: blueColor,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9,
      halign: "center",
    },
    columnStyles: {
      0: {
        halign: "center",
        cellWidth: 30,
        fillColor: [248, 249, 250],
      },
      1: {
        halign: "left",
        cellWidth: 40,
        fontSize: 8,
      },
      2: {
        halign: "left",
        cellWidth: 30,
        fontSize: 8,
      },
      3: {
        halign: "center",
        cellWidth: 25,
        fontStyle: "bold",
      },
      4: {
        halign: "right",
        cellWidth: 30,
        textColor: [46, 125, 50],
      },
      5: {
        halign: "right",
        cellWidth: 35,
        textColor: [46, 125, 50],
        fontStyle: "bold",
      },
    },
    alternateRowStyles: {
      fillColor: [248, 249, 250],
    },
    margin: { top: 70, left: 10, right: 10 },
    tableLineColor: [224, 224, 224],
    tableLineWidth: 0.1,
  });

  // Agregar total
  const finalY = doc.lastAutoTable.finalY || 70;
  doc.setFillColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.rect(140, finalY + 5, 60, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(`TOTAL: ${formatPrice(total)}`, 170, finalY + 13, {
    align: "center",
  });

  // FOOTER en todas las páginas
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Fondo del footer
    doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
    doc.rect(0, 285, 210, 12, "F");

    // Texto del footer
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    const footerText = `© 2025 Confitería La Gran Fortuna - Pedido - Página ${i} de ${totalPages} - Generado el ${new Date().toLocaleDateString("es-CO")} ${new Date().toLocaleTimeString("es-CO")}`;
    doc.text(footerText, 105, 292, { align: "center" });
  }

  // Información adicional
  if (finalY < 240) {
    doc.setTextColor(102, 102, 102);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(
      `Total de productos en pedido: ${orderList.length}`,
      15,
      finalY + 25,
    );
    doc.text(
      `Cantidad total de unidades: ${orderList.reduce((sum, item) => sum + item.cantidad, 0)}`,
      15,
      finalY + 32,
    );
    doc.text(
      `Fecha de generación: ${new Date().toLocaleDateString("es-CO")} a las ${new Date().toLocaleTimeString("es-CO")}`,
      15,
      finalY + 39,
    );
  }

  // Descargar con nombre personalizado
  const fileName = `Pedido_${currentMes.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.pdf`;
  doc.save(fileName);
}

function renderTable() {
  const tbody = document.querySelector("#productTable tbody");
  const accionesHeader = document.getElementById("accionesHeader");
  const cantidadHeader = document.getElementById("cantidadHeader");

  tbody.innerHTML = "";

  // Mostrar/ocultar columnas según el modo
  accionesHeader.style.display = editMode ? "table-cell" : "none";
  cantidadHeader.style.display = orderMode ? "table-cell" : "none";

  categorias[currentCategory].productos.forEach((prod, index) => {
    const row = document.createElement("tr");

    let cantidadCell = "";
    if (orderMode) {
      cantidadCell = `<td><input type="number" min="0" value="0" onchange="updateOrderQuantity(${index}, this.value)" class="quantity-input"></td>`;
    }

    let accionesCell = "";
    if (editMode) {
      accionesCell = `<td><button class="delete-btn" onclick="deleteProduct(${index})">🗑️ Eliminar</button></td>`;
    }

    row.innerHTML = `
      <td>${prod.item}</td>
      <td>${editMode ? `<input type="text" value="${prod.producto}" onchange="updateProduct(${index}, 'producto', this.value)">` : prod.producto}</td>
      <td>${editMode ? `<input type="text" value="${prod.descripcion}" onchange="updateProduct(${index}, 'descripcion', this.value)">` : prod.descripcion}</td>
      <td>${editMode ? `<input type="number" value="${prod.precio}" onchange="updateProduct(${index}, 'precio', this.value)">` : formatPrice(prod.precio)}</td>
      ${cantidadCell}
      ${accionesCell}
    `;

    tbody.appendChild(row);
  });

  // Mostrar/ocultar botones según el modo
  document.getElementById("addBtn").style.display = editMode
    ? "inline-flex"
    : "none";
  document.getElementById("downloadBtn").style.display = editMode
    ? "inline-flex"
    : "none";
  document.getElementById("saveBtn").style.display = editMode
    ? "inline-flex"
    : "none";
  document.getElementById("finalizarPedidoBtn").style.display = orderMode
    ? "inline-flex"
    : "none";
  document.getElementById("verPedidoBtn").style.display = orderMode
    ? "inline-flex"
    : "none";
}

function updateOrderQuantity(productIndex, quantity) {
  const prod = categorias[currentCategory].productos[productIndex];
  const qty = parseInt(quantity) || 0;

  if (qty > 0) {
    // Buscar si el producto ya está en el pedido
    const existingIndex = orderList.findIndex(
      (item) =>
        item.categoria === currentCategory &&
        item.producto === prod.producto &&
        item.descripcion === prod.descripcion,
    );

    if (existingIndex >= 0) {
      // Actualizar cantidad existente
      orderList[existingIndex].cantidad = qty;
    } else {
      // Agregar nuevo producto al pedido
      orderList.push({
        categoria: currentCategory,
        producto: prod.producto,
        descripcion: prod.descripcion,
        precio: parseInt(prod.precio),
        cantidad: qty,
      });
    }
  } else {
    // Remover del pedido si cantidad es 0
    const existingIndex = orderList.findIndex(
      (item) =>
        item.categoria === currentCategory &&
        item.producto === prod.producto &&
        item.descripcion === prod.descripcion,
    );

    if (existingIndex >= 0) {
      orderList.splice(existingIndex, 1);
    }
  }

  updateOrderCounter();
}

function updateOrderCounter() {
  const counter = document.getElementById("orderCounter");
  if (counter) {
    const totalItems = orderList.reduce((sum, item) => sum + item.cantidad, 0);
    counter.textContent = totalItems;
    counter.style.display = totalItems > 0 ? "inline" : "none";
  }
}

function updateProduct(index, field, value) {
  categorias[currentCategory].productos[index][field] = value;
}

function deleteProduct(index) {
  if (confirm("¿Está seguro de que desea eliminar este producto?")) {
    categorias[currentCategory].productos.splice(index, 1);
    // Reordenar los items
    categorias[currentCategory].productos.forEach((prod, i) => {
      prod.item = i + 1;
    });
    renderTable();
  }
}

function addRow() {
  const newItem = categorias[currentCategory].productos.length + 1;
  categorias[currentCategory].productos.push({
    item: newItem,
    producto: `Producto ${newItem}`,
    descripcion: "",
    precio: "0",
  });
  renderTable();
}

// Funciones de persistencia de datos
function saveData() {
  try {
    const dataToSave = {
      categorias: categorias,
      currentMes: currentMes,
    };
    localStorage.setItem("confiteria_data", JSON.stringify(dataToSave));
    showSaveIndicator();
    alert("¡Cambios guardados exitosamente!");
  } catch (error) {
    console.error("Error al guardar datos:", error);
    alert("Error al guardar los cambios. Por favor, inténtelo de nuevo.");
  }
}

function showSaveIndicator() {
  // Crear indicador visual de guardado
  const indicator = document.createElement("div");
  indicator.textContent = "✅ Cambios guardados";
  indicator.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease-out;
  `;

  // Agregar animación CSS si no existe
  if (!document.getElementById("saveIndicatorStyle")) {
    const style = document.createElement("style");
    style.id = "saveIndicatorStyle";
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(indicator);

  // Remover después de 2 segundos
  setTimeout(() => {
    indicator.remove();
  }, 2000);
}

function loadData() {
  try {
    const savedData = localStorage.getItem("confiteria_data");
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Cargar categorías guardadas si existen
      if (parsedData.categorias) {
        // Mantener la estructura original pero actualizar con datos guardados
        Object.keys(parsedData.categorias).forEach((categoryKey) => {
          if (categorias[categoryKey]) {
            categorias[categoryKey] = parsedData.categorias[categoryKey];
          }
        });
      }

      // Cargar mes guardado si existe
      if (parsedData.currentMes) {
        currentMes = parsedData.currentMes;
        document.getElementById("mesBadge").textContent = currentMes;
      }

      return true;
    }
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
  return false;
}

function editMes() {
  if (editMode) {
    const nuevoMes = prompt("Ingrese el nuevo mes:", currentMes);
    if (nuevoMes && nuevoMes.trim() !== "") {
      currentMes = nuevoMes.trim().toUpperCase();
      document.getElementById("mesBadge").textContent = currentMes;
    }
  }
}

function toggleEdit() {
  if (!editMode) {
    const pass = prompt("Ingrese contraseña para activar edición:");
    if (pass !== "@shelsdria.x") {
      alert("Contraseña incorrecta.");
      return;
    }
  }

  // Si está en modo pedido, desactivarlo
  if (orderMode) {
    toggleOrder();
  }

  editMode = !editMode;
  const toggleBtn = document.querySelector(".edit-toggle");

  if (editMode) {
    toggleBtn.innerHTML =
      '<span class="edit-icon">❌</span> Desactivar Edición';
    toggleBtn.style.background = "#f44336";
    document.getElementById("mesBadge").style.cursor = "pointer";
    document.getElementById("mesBadge").title = "Click para editar el mes";
  } else {
    toggleBtn.innerHTML = '<span class="edit-icon">✏️</span> Activar Edición';
    toggleBtn.style.background = "#333";
    document.getElementById("mesBadge").style.cursor = "default";
    document.getElementById("mesBadge").title = "";
  }

  renderTable();
}

function toggleOrder() {
  // Si está en modo edición, desactivarlo
  if (editMode) {
    toggleEdit();
  }

  orderMode = !orderMode;
  const toggleBtn = document.querySelector(".order-toggle");

  if (orderMode) {
    toggleBtn.innerHTML = '<span class="order-icon">❌</span> Cancelar Pedido';
    toggleBtn.style.background = "#f44336";
  } else {
    toggleBtn.innerHTML = '<span class="order-icon">🛒</span> Agregar Pedido';
    toggleBtn.style.background = "#2e7d32";
    // Limpiar cantidades al salir del modo pedido
    clearOrderQuantities();
  }

  renderTable();
}

function clearOrderQuantities() {
  const quantityInputs = document.querySelectorAll(".quantity-input");
  quantityInputs.forEach((input) => {
    input.value = 0;
  });
}

function finalizarPedido() {
  if (orderList.length === 0) {
    alert("No hay productos en el pedido.");
    return;
  }

  const total = orderList.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0,
  );
  const totalItems = orderList.reduce((sum, item) => sum + item.cantidad, 0);

  const confirmMessage = `¿Finalizar pedido?\n\nTotal de productos: ${orderList.length}\nCantidad total: ${totalItems} unidades\nTotal: ${formatPrice(total)}`;

  if (confirm(confirmMessage)) {
    downloadOrderPDF();
    // Limpiar pedido después de generar PDF
    orderList = [];
    updateOrderCounter();
    clearOrderQuantities();
    alert("Pedido finalizado y PDF generado exitosamente.");
  }
}

// NUEVA FUNCIÓN: Ver Pedido
function verPedido() {
  if (orderList.length === 0) {
    alert("No hay productos en el pedido para mostrar.");
    return;
  }

  // Crear modal para mostrar el pedido
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  `;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
    background: white;
    border-radius: 15px;
    padding: 30px;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    width: 100%;
  `;

  // Calcular totales
  const total = orderList.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0,
  );
  const totalItems = orderList.reduce((sum, item) => sum + item.cantidad, 0);

  // Crear contenido del modal
  modalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #ff6b35; padding-bottom: 15px;">
      <h2 style="color: #ff6b35; margin: 0; font-size: 1.8rem;">📋 Resumen del Pedido</h2>
      <button onclick="this.closest('.modal').remove()" style="background: #f44336; color: white; border: none; border-radius: 50%; width: 35px; height: 35px; cursor: pointer; font-size: 18px;">✕</button>
    </div>

    <div style="margin-bottom: 20px; background: linear-gradient(135deg, #ffd54f, #ffb300); padding: 15px; border-radius: 10px; color: white;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 1.1rem;">Total de productos: ${orderList.length}</strong><br>
          <span>Cantidad total: ${totalItems} unidades</span>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.5rem; font-weight: bold;">${formatPrice(total)}</div>
        </div>
      </div>
    </div>

    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <thead>
          <tr style="background: linear-gradient(135deg, #1976d2, #1565c0); color: white;">
            <th style="padding: 12px; text-align: center; border-radius: 8px 0 0 0;">#</th>
            <th style="padding: 12px; text-align: left;">Producto</th>
            <th style="padding: 12px; text-align: left;">Descripción</th>
            <th style="padding: 12px; text-align: center;">Cant.</th>
            <th style="padding: 12px; text-align: right;">Precio Unit.</th>
            <th style="padding: 12px; text-align: right; border-radius: 0 8px 0 0;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${orderList
            .map(
              (item, index) => `
            <tr style="border-bottom: 1px solid #e0e0e0; ${index % 2 === 0 ? "background: #f8f9fa;" : ""}">
              <td style="padding: 10px; text-align: center; font-weight: bold; color: #666;">${index + 1}</td>
              <td style="padding: 10px; font-weight: 600;">${item.producto}</td>
              <td style="padding: 10px; color: #666;">${item.descripcion}</td>
              <td style="padding: 10px; text-align: center; font-weight: bold; color: #2e7d32;">${item.cantidad}</td>
              <td style="padding: 10px; text-align: right; color: #2e7d32;">${formatPrice(item.precio)}</td>
              <td style="padding: 10px; text-align: right; font-weight: bold; color: #2e7d32;">${formatPrice(item.precio * item.cantidad)}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>

    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
      <button onclick="downloadOrderPDF()" style="background: #2e7d32; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px;">
        📄 Descargar PDF
      </button>
      <button onclick="this.closest('.modal').remove()" style="background: #666; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold;">
        Cerrar
      </button>
    </div>
  `;

  modal.className = "modal";
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("visible");
}

// Función para cambiar categoría
function changeCategory(categoryKey) {
  currentCategory = categoryKey;
  document.getElementById("categoria-titulo").textContent =
    categorias[currentCategory].nombre;

  // Si está en modo edición, desactivarlo al cambiar categoría
  if (editMode) {
    toggleEdit();
  }

  // Si está en modo pedido, desactivarlo al cambiar categoría
  if (orderMode) {
    toggleOrder();
  }

  renderTable();
}

// Inicializar la aplicación
window.onload = function () {
  loadData(); // Cargar datos guardados
  loadLogoImage(); // Cargar el logo para el PDF
  renderTable();
  updateOrderCounter();
};
