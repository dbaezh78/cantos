var notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

var lat2sax = {};
lat2sax['DO'] = 'C';
lat2sax['RE'] = 'D';
lat2sax['MI'] = 'E';
lat2sax['FA'] = 'F';
lat2sax['SOL'] = 'G';
lat2sax['LA'] = 'A';
lat2sax['SI'] = 'B';

var sax2lat = {};
sax2lat['C'] = 'DO';
sax2lat['D'] = 'RE';
sax2lat['E'] = 'MI';
sax2lat['F'] = 'FA';
sax2lat['G'] = 'SOL';
sax2lat['A'] = 'LA';
sax2lat['B'] = 'SI';

var bem2sus = {};
bem2sus['Db'] = 'C#';
bem2sus['Eb'] = 'D#';
bem2sus['Gb'] = 'F#';
bem2sus['Ab'] = 'G#';
bem2sus['Bb'] = 'A#';


function hextodec(n) {
	if (n == 'X') return -1;
	c = n.charCodeAt(0);
	if (c >= 48 && c <= 57) return parseInt(n);
	return (c - 65) + 10;
}

function chordIsLatin(s) { return (s.match(/^(DO|RE|MI|FA|SOL|LA|SI)/) != null) ? true : false; }
function chordIsBemol(s) { return (s.match(/^(Db|Eb|Gb|Ab|Bb)/) != null) ? true : false; }


function trans2Lat(s) {
	var sax = "C|D|E|F|G|A|B";
	var pat = new RegExp('('+sax+')([^'+sax+']*)', "g");
	var out = "";
	while (tokens = pat.exec(s))
		out += sax2lat[tokens[1]]+tokens[2];
	return out;
}


function trans2Sus(s) {
	var sax = "Db|Eb|Gb|Ab|Bb";
	var pat = new RegExp('('+sax+')([^ ]*)', "g");
	var out = "";
	while (tokens = pat.exec(s)) {
		out += bem2sus[tokens[1]]+tokens[2];
	}
	return out;
}


function trans2Sax(s) {
	var lat = "DO|RE|MI|FA|SOL|LA|SI";
	var pat = new RegExp('('+lat+')([^'+lat+']*)', "g");
	var out = "";
	while (tokens = pat.exec(s)) {
		out += (lat2sax[tokens[1]]) ? lat2sax[tokens[1]] : tokens[1];
		out += tokens[2];
	}

	return (out != '') ? out : s;
}

var toolDiag = {'chordBase':{}};
var chordList = toolDiag['chordBase'];
function chordFillList(retFn) {
	if (typeof(retFn) == "undefined") retFn = function() {};
	var s = acoList;
  s = (chordIsLatin(s)) ? trans2Sax(s) : s;
  if (s.indexOf('b') != -1) s = trans2Sus(s);

	if (typeof(toolDiag['chordBase'][s]) != "undefined") { chordVers = toolDiag['chordBase'][s]; console.log('chordVers:'+chordVers); retFn(); return; }
	HTML('chordname', "<font color=#d0d0d0><i>cargando...</i></font>");
	chordVers = ['XXXXXX'];
	chordDraw();
	ADS('//acordes.lacuerda.net/TRAN/procDiag.php?desc='+s.replace('#','@')+'&guitarOnly=1',
	function() {
		w.chordVers = toolDiag['chordBase'][toolDiag.chordName];
		console.log('retFn:'+toolDiag.chordName+' => '+w.chordVers);
		retFn();
		return;
	} );
}


function chordDraw() {
	console.log('chordDraw:'+chordVers);
	var acolen = chordVers.length;
	if (acolen == 0) { chordVers[0] = '000000'; acolen = 1; }

//	scale = (LS.zoomOff == 0) ? 1 : w.innerWidth / iniWidth;
	scale = 1;
	liwidth = (bigScreen == 0) ? Math.round(140*scale) : 720;
	var out="", cls= (bigScreen == 0) ? 'fretVer' : 'fret';
	var addBg = "";
	for (i=0; i<acolen;i++) out+="<div class='slide' style='width:"+liwidth+"px'><div class='"+cls+"' id='fret"+i+"'"+addBg+"></div></div>";

	GS('verwrap').width=liwidth+'px';
	GS('verdiv').width=(acolen*liwidth)+'px';
	HTML('verdiv', out);
	if (HTML('verdiv') == "") return;

	for (vc = 0; vc < acolen; vc++) {
		aco = chordVers[vc];
		out = (LS.fcf != 2) ? guitarFill(aco) : pianoFill(aco);
		HTML('fret'+vc, out);

	}

	indiRef = (bigScreen == 0) ? acolen : maxVer;
	GS('myIndi').width = ((indiRef*10) + ((indiRef-1)*5))+'px';
}




piaPos= [[18,2],[0,7],[18,12],[0,17],[18,21],[0,26],[18,30],[18,40],[0,45],[18,50],[0,54],[18,59]];

function pianoFill(aco) {
	out = "";
	if (aco == '000000') { out = "<div class=desco>?</div>"; return out; }
//	unit = (LS.zoomOff == 0 || chordFullWidth == true) ? "px" : "em";
//	factor = (LS.zoomOff == 0 || chordFullWidth == true) ? 1 : 10;
	unit = "px"; factor = 1;

	for (j=0; j < aco.length; j++) {
		i = aco.charCodeAt(j) - 65;
		posY = (i<12) ? piaPos[i][0] : piaPos[i-12][0];
		posX = (i<12) ? piaPos[i][1] : piaPos[i-12][1]+66;
		out += '<img src="img/bola.png" style="margin:'+((posY+33)/factor)+unit+' 0 0 '+(posX/factor)+unit+'">';
	}
	return out;
}

function guitarFill(aco) {
	if (bigScreen == 1) { return guitarFullFill(aco); }
	var min = 100, max = 0, hayCero = false, ss = [], thisShow = 0;
	if (aco == '000000') {
		out = "<div class=desco>?<br></div>";
		return out;
	}
	if (aco == 'XXXXXX') {
		out = "<div style='position:absolute; height:140px; width:110px'><div id=t_loader></div></div>";
		return out;
	}

	var nCuerdas = (thisShow == 3) ? 5 : 6;

	for (i=0; i < nCuerdas; i++){
		var s = this.hextodec(aco[i]);
		if(s!=-1 && s<min && s!=0) min=s;
		if(s!=-1 && s>max && s!=0) max=s;
		if(s==0) hayCero = true;
		ss[i] = s;
	}

	var inCej = [0,0,0,0,0,0]; dedos = [0,0,0,0,0,0], cejCnt = 0, act=1, mmin = 100, mmax = 0, mminCnt = 0;
	var origMin = min;
	if (hayCero) min = 0;

	for (i=(nCuerdas-1); i>=0; i--) {
		if (ss[i] <= min) { cejCnt++;  inCej[i] = 1; }
		else {
			switch (true) {
				case (ss[i] < mmin):
					mmin = ss[i];
					dedos[i] = 1;
					act = 1;
					for (j = i+1; j < nCuerdas; j++) if (ss[j] >= mmin) { dedos[j]++; act++; }
					mminCnt = 1;
					break;

					case (ss[i] == mmin):
						act = mminCnt;
						dedos[i] = ++mminCnt;
						for (j = i+1; j < nCuerdas; j++) if (ss[j] > mmin) { dedos[j]++; act++; }
						break;

						case (ss[i] > mmin):
							dedos[i] = ++act;
							if (ss[i] > mmax) mmax = ss[i];
							break;
			}
		}
	}
	min = origMin;

	if (min!=0 && max>4) offset=true;
	else { offset=false; min = 1;}
	unit = "px"; factor = 1;


	var hayCejilla = (cejCnt > 2 && !hayCero) ? 1 : 0;
	var dir = "top", out = '', add = 0;
	if (thisShow == 3) {
		var ver = "C"; var ofs = [1,1];
	}
	else {
		var ver = "V"; var ofs = [0,0.1];
	}

	if (hayCejilla == 1) {
		var cejPos = (offset == true) ? 1 : origMin ;
		out += "<div class='cejillaV' style='margin-"+dir+":"+(1.571*cejPos)+"em'></div>";
		if (mmin > origMin + 1 && act == 3) add = 1;
	}
	if (min == 1) {
		out += "<div class='poste"+ver+"'></div>";
	}
	var dedo = 1 + (hayCejilla ? 1 : 0);

	out += "<span class=span"+ver+">"+((min==1)?"&nbsp;":(min < 10) ? min : "<em style='font-size:60%; font-weight:900; line-height:2'>"+min+"</em>")+"</span>";

	for (j=0; j<6; j++) {
    i = (zurdoOn == 0) ? 5-j : j;
		if(ss[i]!=-1 && ss[i]!=0 && offset) fp=ss[i]-min+1;
		else fp=ss[i];

		switch (fp) {
			case -1:
				out += "<div class='cruz"+ver+"'>&times;</div>";
				break;
			case 0:
				out += "<div class='alaire"+ver+"'>&nbsp;</div>";
				break;
			default:
				if (hayCejilla == 0 || inCej[i] == 0) {
					fingerNum = (thisShow == 3) ? "&nbsp;" : (dedos[i]+hayCejilla+add);
					out += "<div class=dedo"+ver+" style='margin-"+dir+":"+PI((0.1+(2.75*fp))*1000)/1000+"em'>"+fingerNum+"</div>";
				}
				else
					out += "<div class='alaire"+ver+"'>&nbsp;</div>";
				break;
		}

	}
	return out;
}


function guitarFullFill(aco) {
	var min = 100, max = 0, hayCero = false, ss = [];

console.log('entra fullfill');
	if (aco == '000000') {
		out = "<div class=desco>?</div>";
		return out;
	}

	for (i=0; i<6; i++){
		var s = hextodec(aco[i]);
		if(s!=-1 && s<min && s!=0) min=s;
		if(s!=-1 && s>max && s!=0) max=s;
		if(s==0) hayCero = true;
		ss[i] = s;
	}

	var nCuerdas = 6;
	var inCej = [0,0,0,0,0,0]; dedos = [0,0,0,0,0,0], cejCnt = 0, act=1, mmin = 100, mmax = 0, mminCnt = 0;
	var origMin = min;
	if (hayCero) min = 0;

	for (i=(nCuerdas-1); i>=0; i--) {
		if (ss[i] <= min) { cejCnt++;  inCej[i] = 1; }
		else {
			switch (true) {
				case (ss[i] < mmin):
					mmin = ss[i];
					dedos[i] = 1;
					act = 1;
					for (j = i+1; j < nCuerdas; j++) if (ss[j] >= mmin) { dedos[j]++; act++; }
					mminCnt = 1;
					break;

					case (ss[i] == mmin):
						act = mminCnt;
						dedos[i] = ++mminCnt;
						for (j = i+1; j < nCuerdas; j++) if (ss[j] > mmin) { dedos[j]++; act++; }
						break;

						case (ss[i] > mmin):
							dedos[i] = ++act;
							if (ss[i] > mmax) mmax = ss[i];
							break;
			}
		}
	}
	min = origMin;

	if (min!=0 && max>4) offset=true;
	else { offset=false; min = 1;}

//	unit = (LS.zoomOff == 0 || chordFullWidth == true) ? "px" : "em";
//	factor = (LS.zoomOff == 0 || chordFullWidth == true) ? 1 : 10;
	unit = "px"; factor = 1;


	var hayCejilla = (cejCnt > 2 && !hayCero) ? 1 : 0;
	var out = '', add = 0;
	if (hayCejilla == 1) {
		var cejPos = origMin ;
		actPos = (15+(36*cejPos));
		actPos += Math.floor( cejPos / 4) * 2;
		out += "<div class='cejilla' style='margin-left:"+actPos+"px'></div>\n";
//		if (mmin > origMin + 1 && act == 3) add = 1;
	}

	out += "<div class='poste'></div>\n";

	var dedo = 1 + (hayCejilla ? 1 : 0);

	for (j=0; j<6; j++) {
		i = (zurdoOn == 1) ? 5-j : j;
		if(ss[i]!=-1 && ss[i]!=0 && offset) fp=ss[i]-min+1;
		else fp=ss[i];

		switch (fp) {
			case -1:
				out += "<div class='cruz'><div style='position:absolute'>&times;</div></div>";
				break;
			case 0:
				out += "<div class='alaire'></div>\n";
				break;
			default:
				if (inCej[i] == 0) {
					actualPos = (fp + min - 1);
					fingerPos = 35/factor * actualPos;
					fingerPos += Math.floor( actualPos / 4) * 4;
					if (actualPos >= 8) fingerPos += 4;
					out += "<div class=dedo style='margin-left:"+(15+fingerPos)+unit+"'>"+(dedos[i]+hayCejilla+add)+"</div>\n";
				}
				else
					out += "<div class='alaire'></div>\n";
				break;
		}

	}

	if (cejPos > 0)
		out += "<div class='fretnum' style='padding-top:2px; width:15px; text-align:center; margin-left:"+(actPos)+"px'>"+cejPos+"</div>";
	return out;
}