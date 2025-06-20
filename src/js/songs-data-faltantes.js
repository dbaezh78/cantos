
// Datos de los cantos
const songs = [
        {id:176,title: "Quién es ésta que sube del desierto", subtitle: "Cantar de los Cantares 8,5-7",                     category: "Precatecumenado", moments: ["Pascua"], url: "/cantos/resucito/q/quienesestaquesubedeldesierto.html"},
        {id:177,title: "Quién nos separará", subtitle: "Romanos 8,34-39",                                                   category: "Precatecumenado", moments: ["Pascua"], url: "/cantos/resucito/q/quiennosseparara.html"},
        {id:178,title: "Quiero andar, madre, a Jerusalén", subtitle: "Canto sefardí",                                       category: "Precatecumenado", moments: ["Pascua"], url: "/cantos/resucito/q/quieroandarmadreajerusalen.html"},
        {id:179,title: "Quiero cantar", subtitle: "Sal 57 (56)",                                                            category: "Precatecumenado", moments: ["Entrada", "Antiguo Testamento"], url: "/cantos/resucito/q/quierocantar.html"},
        {id:180,title: "Resucitó", subtitle: "(Kiko Argüello)",                                                             category: "Precatecumenado", moments: ["Paz", "Antiguo Testamento"], url: "/cantos/resucito/r/resucito.html"},
        {id:181,title: "Resurrexit", subtitle: "Juan 11,25s",                                                               category: "Precatecumenado", moments: ["Comunión", "Final", "Antiguo Testamento"], url: "/cantos/resucito/r/resurrexit.html"},
        {id:187,title: "Salve, reina de los cielos", subtitle: "Himno lat. «Ave, Regina Caelorum»",                         category: "Precatecumenado", moments: [""], url: "/cantos/resucito/s/salvereinadeloscielos.html"},
        {id:194,title: "Se encontraron dos ángeles", subtitle: "Melodía hebraica",                                          category: "Precatecumenado", moments: [""], url: "/cantos/resucito/s/seencontrarondosangeles.html"},
        {id:195,title: "Señor, ayúdame a no dudar de ti", subtitle: "(Kiko Argüello)",                                      category: "Precatecumenado", moments: ["Ordinario"], url: "/cantos/resucito/s/senorayudameanodudardeti.html"},
        {id:196,title: "Señor, no me corrijas en tu cólera", subtitle: "Salmo 6",                                           category: "Precatecumenado", moments: ["Niños", "Paz"], url: "/cantos/resucito/s/senornomecorrijasentucolera.html"},
        {id:198,title: "Sermón de la montaña", subtitle: "Lucas 6,20-38",                                                   category: "Precatecumenado", moments: [""], url: "/cantos/resucito/s/sermondelamontana.html"},
        {id:200,title: "Shlom lej Mariam", subtitle: "Ave María en arameo antiguo",                                         category: "Precatecumenado", moments: ["Laudes/Visperas", "Antiguo Testamento"], url: "/cantos/resucito/s/shlomlejmariam.html"},
        {id:201,title: "Si el Señor no construye la casa", subtitle: "Sal 127 (126)",                                       category: "Precatecumenado", moments: ["Antiguo Testamento"], url: "/cantos/resucito/s/sielsenornoconstruyelacasa.html"},
        {id:202,title: "Si habéis resucitado con Cristo", subtitle: "Colosense 3,1-4",                                      category: "Precatecumenado", moments: ["Comunión", "Nuevo Testamento"], url: "/cantos/resucito/s/sihabeisresucitadoconcristo.html"},
        {id:203,title: "Si hoy escucháis su voz", subtitle: "Sal 95 (94)",                                                  category: "Precatecumenado", moments: ["Pentecostés", "Antiguo Testamento"], url: "/cantos/resucito/s/sihoyescuchaissuvoz.html"},
        {id:204,title: "Si me he refugiado en el Señor", subtitle: "Sal 11(10)",                                            category: "Precatecumenado", moments: ["Virgen", "Final"], url: "/cantos/resucito/s/simeherefugiadoenelsenor.html"},
        {id:206,title: "Sión, madre de todos los pueblos", subtitle: "Sal 87 (86)",                                         category: "Precatecumenado", moments: ["Adviento", "Pascua"], url: "/cantos/resucito/s/sionmadredetodoslospueblos.html"},
        {id:207,title: "Sola a Solo", subtitle: "(Kiko Argüello)",                                                          category: "Precatecumenado", moments: ["Antiguo Testamento"], url: "/cantos/resucito/s/solaasolo.html"},
        {id:208,title: "Stabat Mater dolorosa", subtitle: "Himno latin",                                                    category: "Precatecumenado", moments: ["Cuaresma", "Antiguo Testamento"], url: "/cantos/resucito/s/stabatmaterdolorosa.html"},
        {id:210,title: "Sube Dios entre aclamaciones", subtitle: "Sal 47 (46)",                                             category: "Precatecumenado", moments: ["Final", "Antiguo Testamento"], url: "/cantos/resucito/s/subediosentreaclamaciones.html"},
        {id:212,title: "Te estoy llamando, Señor", subtitle: "Sal 141 (140)",                                               category: "Precatecumenado", moments: ["Cuaresma", "Virgen"], url: "/cantos/resucito/t/teestoyllamandosenor.html"},
        {id:213,title: "Te he manifestado mi pecado", subtitle: "Sal 32 (31)",                                              category: "Precatecumenado", moments: ["Pascua"], url: "/cantos/resucito/t/tehemanifestadomipecado.html"},
        {id:215,title: "Tú has cubierto de vergüenza la muerte", subtitle: "Homilía Pascual (Melltón de Sardes)",           category: "Precatecumenado", moments: ["Laudes/Visperas"], url: "/cantos/resucito/t/tuhascubiertodevergüenzalamuerte.html"},
        {id:216,title: "Tú que eres fiel", subtitle: "Sal 143 (142)",                                                       category: "Precatecumenado", moments: ["Antiguo Testamento"], url: "/cantos/resucito/t/tuqueeresfiel.html"},
        {id:217,title: "Un retoño brota del tronco de Jesé", subtitle: "Isaías 11,1-11",                                    category: "Precatecumenado", moments: ["Cuaresma", "Antiguo Testamento"], url: "/cantos/resucito/u/unretonobrotadeltroncodejese.html"},
        {id:218,title: "Una gran señal", subtitle: "Apocalipsis 12",                                                        category: "Precatecumenado", moments: ["Adviento", "Cuaresma"], url: "/cantos/resucito/u/unagransenal.html"},
        {id:219,title: "Urí, urí, urá", subtitle: "Villancico (Kiko Argüello)",                                             category: "Precatecumenado", moments: ["Pascua", "Virgen", "Fracción del Pan"], url: "/cantos/resucito/u/uriuriura.html"},
        {id:220,title: "Vamos ya, pastores", subtitle: "Villancico (Kiko Argüello)",                                        category: "Precatecumenado", moments: ["Cuaresma", "Entrada", "Antiguo Testamento"], url: "/cantos/resucito/v/vamosyapastores.html"},
        {id:221,title: "Ven del Líbano", subtitle: "Cantar de los cantares 4,8ss",                                          category: "Precatecumenado", moments: ["Navidad", "Pentecostés", "Comunión", "Antiguo Testamento"], url: "/cantos/resucito/v/vendellibano.html"},
        {id:222,title: "Ven, Espíritu Santo", subtitle: "Secuencia de Pentecostés - Himno latin. «Veni, Sancte Spiritus»",  category: "Precatecumenado", moments: ["Adviento", "Pentecostés", "Virgen", "Nuevo Testamento"], url: "/cantos/resucito/v/venespiritusanto.html"},
        {id:223,title: "Ven, Hijo del Hombre", subtitle: "Apocalipsis 21,17ss",                                             category: "Precatecumenado", moments: ["Navidad", "Niños"], url: "/cantos/resucito/v/venhijodelhombre.html"},
        {id:224,title: "Veni Creator", subtitle: "Himno latin",                                                             category: "Precatecumenado", moments: ["Navidad", "Niños"], url: "/cantos/resucito/v/venicreator.html"},
        {id:225,title: "Viene el Señor", subtitle: "Salmo 93 (92) - Apocalipsis 1,5-7",                                     category: "Precatecumenado", moments: ["Entrada", "Antiguo Testamento"], url: "/cantos/resucito/v/vieneelsenor.html"},
        {id:226,title: "Virgen de la maravilla", subtitle: "(Dante Allghlerl)",                                             category: "Precatecumenado", moments: ["Pentecostés"], url: "/cantos/resucito/v/virgendelamaravilla.html"},
        {id:227,title: "Vivid alegres", subtitle: "Filipenses 4,4ss",                                                       category: "Precatecumenado", moments: ["Adviento", "Final", "Nuevo Testamento"], url: "/cantos/resucito/v/vividalegres.html"},
        {id:228,title: "Vosotros sois la luz del mundo", subtitle: "Mateo 5,14ss ",                                         category: "Precatecumenado", moments: ["Pentecostés"], url: "/cantos/resucito/v/vosotrossoislaluzdelmundo.html"},
        {id:229,title: "Ya viene mi Dios", subtitle: "Villancico (Kiko Argüello)",                                          category: "Precatecumenado", moments: ["Adviento", "Pentecostés", "Antiguo Testamento", "Nuevo Testamento"], url: "/cantos/resucito/y/yavienemidios.html"},
        {id:230,title: "Yahveh, tú eres mi Dios", subtitle: "Isaías 25,1-8",                                                category: "Precatecumenado", moments: ["Virgen"], url: "/cantos/resucito/y/yahvehtueresmidios.html"},
        {id:231,title: "Yo te amo, Señor", subtitle: "Sal 18 (17)",                                                         category: "Precatecumenado", moments: ["Adviento", "Niños", "Nuevo Testamento"], url: "/cantos/resucito/y/yoteamosenor.html"},
        {id:232,title: "Yo vengo a reunir", subtitle: "Isaías 66,18-21",                                                    category: "Precatecumenado", moments: ["Nuevo Testamento"], url: "/cantos/resucito/y/yovengoareunir.html"},
        {id:233,title: "Zaqueo", subtitle: "Lucas 19,1-10",                                                                 category: "Precatecumenado", moments: ["Navidad", "Niños"], url: "/cantos/resucito/z/zaqueo.html"},


        {id:72,title: "El mismo Dios", subtitle: "2 Corintios 4,6-12",                                                      category: "Catecumenado", moments: ["Navidad", "Antiguo Testamento"], url: "/cantos/resucito/e/elmismodios.html"},
        {id:75,title: "El sembrador", subtitle: "Marcos 4,3ss",                                                             category: "Catecumenado", moments: ["Comunión", "Antiguo Testamento"], url: "/cantos/resucito/e/elsembrador.html"},
        {id:99,title: "He aquí que nuestro espejo es el Señor", subtitle: "Oda XIII de Salomón",                            category: "Catecumenado", moments: ["Adviento", "Cuaresma", "Antiguo Testamento"], url: "/cantos/resucito/h/heaquiquenuestroespejoeselsenor.html"},
        {id:106,title: "Himno a la cruz gloriosa", subtitle: "Homilía La Santa Pascua (Anónimo s. II)",                     category: "Catecumenado", moments: ["Adviento"], url: "/cantos/resucito/h/himnoalacruzgloriosa.html"},
        {id:114,title: "Jacob", subtitle: "Genesis 32,23-29 ",                                                              category: "Catecumenado", moments: ["Nuevo Testamento"], url: "/cantos/resucito/j/jacob.html"},
        {id:146,title: "Ninguno puede servir a dos señores", subtitle: "Mateo 6,24-33 ",                                    category: "Catecumenado", moments: ["Comunión", "Nuevo Testamento"], url: "/cantos/resucito/n/ningunopuedeserviradossenores.html"},
        {id:149,title: "No resistáis al mal", subtitle: "Mateo 5,38ss",                                                     category: "Catecumenado", moments: ["Adviento"], url: "/cantos/resucito/n/noresistaisalmal.html"},
        {id:150,title: "No sufras por los malvados", subtitle: "Sal 37 (36)",                                               category: "Catecumenado", moments: ["Antiguo Testamento"], url: "/cantos/resucito/n/nosufrasporlosmalvados.html"},
        {id:157,title: "Oh Señor, mi corazón ya no es ambicioso", subtitle: "Sal 131 (130)",                                category: "Catecumenado", moments: [""], url: "/cantos/resucito/o/ohsenormicorazonyanoesambicioso.html"},
        {id:197,title: "Señor, tú me escrutas y conoces", subtitle: "Sal 139 (138)",                                        category: "Catecumenado", moments: ["Pentecostés", "Entrada"], url: "/cantos/resucito/s/senortumeescrutasyconoces.html"},
        {id:199,title: "Shemá Israel", subtitle: "Dt 6,4-9",                                                                category: "Catecumenado", moments: ["Cuaresma", "Laudes", "Comunión"], url: "/cantos/resucito/s/shemaisrael.html"},               
        {id:205,title: "Siéntate solitario y silencioso", subtitle: "Lamentaciones 3",                                      category: "Catecumenado", moments: ["Entrada", "Antiguo Testamento"], url: "/cantos/resucito/s/sientatesolitarioysilencioso.html"},
        {id:214,title: "Tú eres mi esperanza, Señor", subtitle: "Oda XXIX de Salomón",                                      category: "Catecumenado", moments: ["Pascua", "Pentecostés", "Paz"], url: "/cantos/resucito/t/tueresmiesperanzasenor.html"},



        {id:102,title: "Hermosa eres, amiga mía", subtitle: "Cantar de los cantares 6-7",                                   category: "Eleccion", moments: ["Pascua"], url: "/cantos/resucito/h/hermosaeresamigamia.html"},
        {id:120,title: "La paloma voló", subtitle: "Oda XXIV de Salomón",                                                   category: "Eleccion", moments: ["Comunión", "Antiguo Testamento"], url: "/cantos/resucito/l/lapalomavolo.html"},
        {id:141,title: "Me robaste el corazón", subtitle: "Cantar de los cantares 4,9 - 5,1",                               category: "Eleccion", moments: ["Cuaresma", "Laudes", "Antiguo Testamento"], url: "/cantos/resucito/m/merobasteelcorazon.html"},
        {id:209,title: "Suba el Esposo al leño de su tálamo", subtitle: "Himno (San Quodvultdeus)",                         category: "Eleccion", moments: ["Cuaresma", "Antiguo Testamento"], url: "/cantos/resucito/s/subaelesposoallenodesutalamo.html"},


        {id:93,title: "Gloria a Dios en lo alto del cielo", subtitle: "Himno Litúrgico",                                    category: "Liturgia", moments: ["Entrada", "Antiguo Testamento"], url: "/cantos/resucito/liturgia/gloriaadiosenloaltodelcielo.html"},
        {id:126,title: "Letanías de los santos", subtitle: "De la liturgia bautismal de la Vigilia pascual",                category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/letaniasdelossantos.html"},
        {id:127,title: "Letanías penitenciales I", subtitle: "Letanía para la Celebración Penitencial – modelo abreviado",  category: "Liturgia", moments: ["Cuaresma", "Laudes", "Entrada", "Antiguo Testamento"], url: "/cantos/resucito/liturgia/letaniaspenitencialesi.html"},
        {id:128,title: "Letanías penitenciales II", subtitle: "Letanía para la Celebración Penitencial",                    category: "Liturgia", moments: ["Cuaresma", "Laudes", "Entrada"], url: "/cantos/resucito/liturgia/letaniaspenitencialesii.html"},
        {id:163,title: "Plegaria Eucarística II Modelo I", subtitle: "Modelo I",                                            category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/plegariaeucaristicaiimodeloip1.html"},
        {id:160,title: "Padre nuestro", subtitle: "Tiempo de la Elección",                                                  category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/padrenuestro.html"},
        {id:164,title: "Plegaria Eucarística II Modelo II", subtitle: "Modelo II (1987)",                                   category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/plegariaeucaristicaiimodeloii.html"},
        {id:165,title: "Plegaria Eucarística IV  1988", subtitle: "(1988)",                                                 category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/plegariaeucaristicaiv1988.html"},
        {id:170,title: "Prefacio para Adviento y Navidad", subtitle: "Prefacio IV de Adviento*",                            category: "Liturgia", moments: ["Paz", "Antiguo Testamento"], url: "/cantos/resucito/liturgia/prefacioparaadvientoynavidad.html"},
        {id:171,title: "Prefacio para el tiempo Pascual", subtitle: "Prefacio I de Pascua*",                                category: "Liturgia", moments: ["Pascua", "Niños", "Paz"], url: "/cantos/resucito/liturgia/prefacioparaeltiempopascual.html"},
        {id:172,title: "Pregón Pascual", subtitle: "«Exsultet»",                                                            category: "Liturgia", moments: ["Cuaresma", "Laudes", "Antiguo Testamento"], url: "/cantos/resucito/liturgia/pregonpascual.html"},
        {id:182,title: "Salmodia para el evangelio", subtitle: "Juan 3,11-20 ",                                             category: "Liturgia", moments: ["Laudes/Visperas", "Comunión", "Nuevo Testamento"], url: "/cantos/resucito/liturgia/salmodiaparaelevangelio.html"},
        {id:183,title: "Salmodia para el rosario", subtitle: "Santo Rosario",                                               category: "Liturgia", moments: ["Final"], url: "/cantos/resucito/liturgia/salmodiaparaelrosario.html"},
        {id:184,title: "Salmodia para el Salmo responsorial", subtitle: "Modelo I, II, III",                                category: "Liturgia", moments: ["Cuaresma", "Antiguo Testamento"], url: "/cantos/resucito/liturgia/salmodiaparaelsalmoresponsorial.html"},
        {id:185,title: "Salmodias para la oración de los fieles", subtitle: "Para las solemnidades",                        category: "Liturgia", moments: ["Pascua", "Comunión"], url: "/cantos/resucito/liturgia/salmodiasparalaoraciondelosfieles.html"},
        {id:186,title: "Salmodias para laudes", subtitle: "Modelo I, II, III, IV, V",                                       category: "Liturgia", moments: ["Pascua"], url: "/cantos/resucito/liturgia/salmodiasparalaudes.html"},
        {id:188,title: "Santo Palomeras 65", subtitle: "Palomeras 65",                                                      category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/santopalomeras65.html"},
        {id:189,title: "Santo Melodía hebraica ", subtitle: "Melodía hebraica ",                                            category: "Liturgia", moments: ["Ordinario"], url: "/cantos/resucito/liturgia/santomelodiahebraica.html"},
        {id:190,title: "Santo Palestina 74", subtitle: "Palestina 74",                                                      category: "Liturgia", moments: ["Ordinario"], url: "/cantos/resucito/liturgia/santopalestina74.html"},
        {id:191,title: "Santo Roma 77", subtitle: "Roma 77",                                                                category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/santoroma77.html"},
        {id:192,title: "Santo 1982", subtitle: "1982",                                                                      category: "Liturgia", moments: [""], url: "/cantos/resucito/liturgia/santo1982.html"},
        {id:193,title: "Santo 1988", subtitle: "1988",                                                                      category: "Liturgia", moments: ["Virgen", "Final"], url: "/cantos/resucito/liturgia/santo1988.html"},
        {id:211,title: "Te Deum", subtitle: "Himno",                                                                        category: "Liturgia", moments: ["Virgen"], url: "/cantos/resucito/liturgia/tedeum.html"},


        
        






        {id:234,title: "Prountuario de Acordes", subtitle: "Notas", category: "Precatecumenado", moments: ["Cuaresma", "Laudes", "Antiguo Testamento"], url: "/cantos/resucito/p/prountuariodeacordes.html"},
        {id:235,title: "Libro de Canto en PDF", subtitle: "Libro de Canto del Camino Neo Catecumenal", category: "Precatecumenado", moments: [""], url: "/cantos/src/doc/resucito.pdf", targetBlank: true }
  
    ];