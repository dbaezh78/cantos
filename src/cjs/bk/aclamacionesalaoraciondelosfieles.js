	// Titulo
	let titulo = "ACLAMACIONES A LA ORACIÓN DE LOS FIELES";
	let salmo = "";
	let dbnos = "179";	//Numero del libro

    // Definir variables con la parte de la Asamble
	
	let Asamblea1 = "TE LO PEDIMOS SEÑOR.";
	let Asamblea2 = "ESCÚCHANOS, OH SEÑOR.";
	let Asamblea3 = "ACUÉRDATE DE NOSOTROS,";
	let Asamblea4 = "AHORA QUE ESTÁS EN TU REINO. ";
	let Asamblea5 = "OYE, PADRE, EL GRITO DE TU PUEBLO ";

	// Definir variables con la parte del Solista
	let Cantor1 = "Te lo pedimos Señor.";
	let Cantor2 = "Misma música MODELO 1 ";

    // Asignando variable Tituto//
    document.getElementById("t1").textContent = titulo;
    document.getElementById("s1").textContent = salmo;
	document.getElementById("dbno").textContent = dbnos;

    // Asignando variable para Asamble//
	document.getElementById("a1").textContent = Asamblea1;
	document.getElementById("a2").textContent = Asamblea2;
	document.getElementById("a3").textContent = Asamblea3;
	document.getElementById("a4").textContent = Asamblea4;
	document.getElementById("a5").textContent = Asamblea5;
	
    // Asignando variable para Cantor o Solista//
	document.getElementById("c1").textContent = Cantor1;
	document.getElementById("c2").textContent = Cantor2;
