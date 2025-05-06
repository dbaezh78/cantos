/***********************
 * FUNCIÓN AUXILIAR
 ***********************/
function ac(nota, posicion, extension = "") {
    return { acorde: nota, posicion, base: nota, extension };
  }
  
  /***********************
   * DATOS DEL CANTO
   ***********************/
  const NOMBREDELCANTO = "AMO AL SEÑOR";
  
  const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 116 (114-115)",
      dbnos: "18",
      
      // Estructura para Cantor (texto)
      cantor: [
/* 1 */     "Amo al Señor, porque escucha",
/* 2 */     "mi voz suplicante;",
/* 3 */     "inclina hacia mí su oído",
/* 4 */     "el día en que lo invoco.",
/* 5 */     "Me envolvían redes de muerte,",
/* 6 */     "me alcanzaron los lazos del infierno;",
/* 7 */     "me rodeaban tristeza y angustia,",
/* 8 */     "invoqué el nombre del Señor:",
/* 9 */     "«¡Te ruego, Señor, sálvame!»",
/* 10 */    "¡Tenía fe, aun cuando dije:",
/* 11 */    "«Yo soy un desgraciado»!,",
/* 12 */    "y pensaba lleno de angustia:",
/* 13 */    "todo hombre es falso».",
/* 14 */    "¿Cómo pagaré al Señor",
/* 15 */    "todo el bien que me ha hecho?",
/* 16 */    "Alzaré la copa de la bendición",
/* 17 */    "e invocaré el nombre del Señor.",
      ],
                    
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
/* 1 */     [ac("Re", "cp1"), ac("Fa#", "cp55", "m")],
/* 2 */     [ac("Sol", "cp27")],
/* 3 */     [ac("Mi", "cp6", "m6"), ac("La", "cp42", "7")],
/* 4 */     [ac("Re", "cp40")],
/* 5 */     [ac("Re", "cp0")],
/* 6 */     [ac("Fa#", "cp66", "m")],
/* 7 */     [ac("Sol", "cp18", ""), ac("Mi", "cp57", "m6")], // Nota: Aquí base ≠ acorde
/* 8 */     [ac("La", "cp13", "7")],
/* 9 */     [ac("Re", "cp43", "")],
/* 10 */    [ac("Re", "cp1", ""),   ac("Fa#", "cp50", "m")],
/* 11 */    [ac("", "cp500", "")],
/* 12 */    [ac("Sol", "cp48", "")],
/* 13 */    [ac("Mi", "cp1", "m6"), ac("La", "cp35", "7")],
/* 14 */    [ac("Re", "cp1", "")],
/* 15 */    [ac("Fa#", "cp54", "m")],
/* 16 */    [ac("Sol", "cp10", ""), ac("Mi", "cp56", "m6")],
/* 17 */    [ac("La", "cp17", "7")]
      ],
  
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1    */  "RECOBRA, ALMA MÍA, TU REPOSO,",
/* 2    */  "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
/* 3    */  "ÉL TE HA SALVADO DE LA MUERTE,",
/* 4    */  "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 5    */  "ÉL TE HA SALVADO DE LA MUERTE,",
/* 6    */  "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 7    */  "RECOBRA, ALMA MÍA, TU REPOSO,",
/* 8    */  "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
/* 9    */  "ÉL TE HA SALVADO DE LA MUERTE,",
/* 10   */  "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 11   */  "ÉL TE HA SALVADO DE LA MUERTE,",
/* 12   */  "HA PRESERVADO TUS PIES DE LA CAÍDA."
      ],
          
      // Estructura para Asamblea (acordes) - CON FUNCIÓN ac()
                /*// 3-12 (patrón repetido)
            [ac("La", "cp20", "m6"),  ac("Re", "cp50", "7")],   */

      asambleaAcordes: [
/* 1 */     [ac("Re", "cp1"),           ac("Fa#", "cp65", "m")],
/* 2 */     [ac("Sol", "cp1"),          ac("Mi", "cp45", "m6"),     ac("La", "cp79", "7")],
/* 3*/      [ac("Sol", "cp1"),          ac("Re", "cp62")],
/* 4*/      [ac("La", "cp52", "7"),     ac("Re", "cp78")],
/* 5*/      [ac("Sol", "cp1"),          ac("Re", "cp62")],
/* 6*/      [ac("La", "cp52", "7"),     ac("Re", "cp78")],
/* 7*/      [ac("Re", "cp1"),           ac("Fa#", "cp65", "m")],
/* 8*/      [ac("Sol", "cp1"),          ac("Mi", "cp45", "m6"),     ac("La", "cp79", "7")],
/* 9*/      [ac("Sol", "cp1"),          ac("Re", "cp62")],
/* 10*/     [ac("La", "cp52", "7"),     ac("Re", "cp78")],
/* 11*/     [ac("Sol", "cp1"),          ac("Re", "cp62")],
/* 12*/     [ac("La", "cp52", "7"),     ac("Re", "cp78")],
      ]
  };
  
  // Iniciar carga del canto
  document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));