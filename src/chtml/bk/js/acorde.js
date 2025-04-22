var LC = 'https://lacuerda.net/'; var LC_ACO = 'https://acordes.lacuerda.net/'; var LC_USER='', LC_LANG='ES';
var w=window; var DO=document; var mLoginAct=null; var MSIE = (navigator.userAgent.indexOf('MSIE')!=-1) ? true:false;
ck=DO.cookie; i=ck.indexOf('lc_user'); if (i!=-1) { e=ck.indexOf(';',i+8); LC_USER=(e!=-1)?ck.substr(i+8,e-i-8):ck.substr(i+8); }

var TIPOS = ['R','T','B','K','D','H'];
var tTypes = {'R': 'Letra y Acordes', 'T':'Tablatura', 'B':'Tab p/Bajo', 'K':'Teclados', 'H':'Armónica', 'D':'Batería'};
var tmTypes = { 'R': '', 'T':'[tab]', 'B':'[bajo]', 'K':'[piano]', 'H':'[armónica]', 'D':'[batería]'};
var tmmTypes = { 'R': '', 'T':'[tab]', 'B':'[bajo]', 'K':'[pia]', 'H':'[armo]', 'D':'[bat]'};

function GE(elm) { return DO.getElementById(elm); }
function GS(elm) { return DO.getElementById(elm).style; }
function PI(elm) { return parseInt(elm,10) }
function show(elm) { GS(elm).display = ''; }
function hide(elm) { GS(elm).display = 'none'; }
function HTML(elm, newdata) { if (typeof(newdata)!="undefined") GE(elm).innerHTML=newdata; else return GE(elm).innerHTML; }
function ADS(u,o) { s=DO.createElement('script'); s.type='text/javascript'; s.charset='UTF-8'; s.async=true; s.src=u; if (typeof(o)!="undefined") s.onload=o; DO.getElementsByTagName("head")[0].appendChild(s); }

var LS = localStorage;
function lsGet(key) { return localStorage.getItem(key); }
function lsSet(key,val) { localStorage.removeItem(key); localStorage.setItem(key,val); } // <-- esta era lsChange
function lsDel(key) { localStorage.removeItem(key); }

function mShTop() {
	cont = "<div id='mTop'>";
	cont += (typeof(mMini)!="undefined") ? "" : "<div id='mtMenuBut' onclick='toogleMenu()'><div></div></div>";
	cont += "<div id='mtLogo'"+((typeof(mMini)!="undefined") ? " style='width:100%; text-align:center'" : "")+">";
	cont += "<a href='"+LC+"' title='Tablaturas y Acordes de Guitarra'><img src='"+LC+"IMG/newlogo.png' ></a></div>";
	cont += "<div class=mtSecs>";
	cont += "<a href='"+LC_ACO+"tabs/' title='Canciones en Guitarra'>canciones</a> &nbsp;&nbsp;&nbsp;&nbsp;";
	cont += "<a href='https://lacuerda.net/Recursos/acordes/' title='Acordes Guitarra'>acordes</a> &nbsp;&nbsp;&nbsp;&nbsp;";
	cont += "<a href='https://lacuerda.net/Recursos/afinador/' title='Afinador de Guitarra'>afinador</a> &nbsp;&nbsp;&nbsp;&nbsp;";
	cont += "<a href='javascript:goFavs()'>favoritos</a> &nbsp;&nbsp;&nbsp;&nbsp;";
	cont += "<a href='//guitarra.lacuerda.net'>guitarra</a> &nbsp;&nbsp;&nbsp;&nbsp;";
	cont += "<a href='//piano.lacuerda.net'>piano</a> &nbsp;&nbsp;&nbsp;&nbsp;";
	cont += "<a href='//videos.lacuerda.net'>videos</a></div>";
	if (typeof(mMini)=="undefined") {
		cont += "<div id='mtBusc'><form name='mForm' action='"+LC_ACO+"busca.php' method='get'><input type=hidden name=canc value=0>";
		cont += "<em onclick='mEnvio()' class='mtBuscImg'><span class='lupa'></span></em>";
		cont += "<input id='mtBuscExp' type='text' name='exp' autocorrect='off' autocapitalize='off' placeholder='Buscar Artista y/o Canción' onfocus='mExpF()' onblur='mExpB()'>";
		cont += "</form></div><div id='mtBuscBut' onclick='toogleBusca()'><div></div></div>";
	}
	cont += "</div>";
	HTML('mTopCont',cont);

if (LC_USER!='') {
	out = "<div id='mUsr' style='padding-right:0'><a href='"+LC+"Favoritos/'>Mis favoritos</a> &nbsp;<a href='"+LC+"Usuarios/perfil.php?dest="+LC_USER+"&s=80'>Mi perfil</a> &nbsp;<a href='"+LC+"Usuarios/login.php?action=logout'>Salir</a> &nbsp;&nbsp;"
	out += "&#8592;&nbsp;&nbsp;"+LC_USER;
	out += "<img src='"+LC+"Usuarios/avatar.php?a="+LC_USER+"&s=80'></div>";
//	out += "</div>";
	HTML('mHead',HTML('mHead')+out);
}
else {
	out =  "<div id='mSel'></div>";
  out += "<div id='mLan' class='lanES' onclick='langChange()'></div>";
	out += "<div id='mLgn' onclick='mLogin()'>Conexión</div>";
	out += "<div id='mReg' onclick='w.location=\"/Usuarios/registro.php\"'>Inscripción</div>";
	HTML('mHead',HTML('mHead') + out);
}
}

function langChange(lg) {
	chk = LC_LANG;

	if (typeof(lg) != "undefined") {
		if (lg == chk) {
			GS('mSel').display = "";
			show('mLgn');
			show('mReg');
			show('mLan');
			return;
		}

		if (w.location.hostname == 'acordes.lacuerda.net') {
			var wl = w.location.href;
			if (wl.indexOf("/busca.php") != -1)
				w.location = wl+'&lang='+lg;
			else {
				pn = w.location.pathname;
				if (pn.match(/^\/[A-Z][A-Z]\//)) pn = pn.substr(3);
				w.location = ((lg == 'ES') ? '' : '/'+lg)+pn;
			}
		}
		else {
			//			w.location = LC+((lg == "ES") ? "ES" : "?lang="+lg);
						w.location = LC+"?lang="+lg; 
		}
		return;
	}

	var langList = ['PT', 'EN', 'ES'];
	out = "<div class='mLan lan"+chk+"' style='text-decoration:underline; color:#000' onclick='langChange(\""+chk+"\")'></div>";
	for (i = 0; i < langList.length; i++) {
		l = langList[i];
		if (l == chk) continue;
		out += "<div class='mLan lan"+l+"' onclick='langChange(\""+l+"\")'></div>";
	}

	HTML('mSel', out);
	hide('mLgn');
	hide('mReg');
	hide('mLan');
	GS('mSel').display = "block";
//	setTimeout(function() {GS('mSel').marginTop = 0},50);
}


function mExpF() { expFocus = true; }
function mExpB() { expFocus = false; }


function mEnvio() { DO.forms.mForm.submit(); }

function mLogin() { popData = {url:'/Usuarios/login.php',w:300,h:300}; ADS("/TRAN/utilPop.js"); }

function goFavs() {
if (document.cookie.indexOf('lc_user')==-1) { mLoginAct=function() {w.location=LC+'Favoritos/';}; mLogin(); } else w.location=LC+'Favoritos/'; }

function calImg(d) { img=Math.floor(d[1]/0.5)*5; if (img>90) img=90; if(img<55) img=55;
	if (d[2]==0) { img='00';txt='N/A (0 opiniones)'; dsc='N/A <em>(0)</em>';}
	else { txt=d[1]+' ('+d[2]+' opiniones)'; dsc = d[1]+"<em>/10 ("+d[2]+")</em>"; }
	return ['cal'+img, txt, dsc];
}

// NUEVO 2020
var menuShow = 0;
function toogleMenu() {
	if (menuShow == 0) {
		show('mMask');
		GE('mLeft').style.setProperty("-webkit-transition", "none");
		GS('mLeft').top = (44 - PI(w.innerHeight))+'px';

		GS('mLeft').display='block';
		GE('mLeft').style.setProperty("-webkit-transition", "top 0.15s linear");
		setTimeout('GS("mLeft").top = "44px"',5);
		menuShow = 1;
	}
	else {
		hide('mMask');
		GS('mLeft').top = (44 - PI(w.innerHeight))+'px';
		setTimeout(function() { GS('mLeft').display=''; GS('mLeft').top = ''; },200);
		menuShow = 0;
		console.log('hideMenu:['+GS('mLeft').display+']');
	}
}

var buscaShow = 0;
function toogleBusca() {
	if (buscaShow == 0) {
		hide("mtLogo");
		GS('mtBusc').display = "block";
		GS('mtMenuBut').paddingTop = '3px';
		GS('mtBuscBut').paddingTop = '3px';
		buscaShow = 1;
	}
	else {
		GS('mtBusc').display = "";
		GS('mtMenuBut').paddingTop = '';
		GS('mtBuscBut').paddingTop = '';
		show("mtLogo");
		buscaShow = 0;
//		console.log('hideMenu:['+GS('lMenu').display+']');
	}
}


function showLoader() {
	HTML('mMask', '<div><img src="/IMG/loader2.gif"></div>');
	show('mMask');
}
function hideLoader() { HTML('mMask', ''); hide('mMask'); }


function fixBot() {
	var ww = w.innerWidth, wh = w.innerHeight;
	if (ww < 600 && ww < wh && ww != 320) {
		fScale = PI(ww/320 * 100) / 100;
		GS('ban320').webkitTransform = "scale("+fScale+","+fScale+")";
		GS('ban320').height = PI(50*fScale)+'px';
		GS('mBot').marginBottom = PI(50*fScale)+'px';
	}
}

function lc_gotMessage(e) {
	var cmd = e.data;
	if (e.data == null || typeof(e.data) != "string") return;
	switch (true) {
		case (cmd == "loader"): showLoader(); break;
		case (cmd == 'popclose'): try { popCtl.stop(); } catch(err) {} break;

		case (cmd.substr(0,8) == 'lc_hind:'): lsSet('lc_hind', cmd.substr(8)); break;
		case (cmd.substr(0,8) == 'lc_hdat:'): lsSet('lc_hdat', cmd.substr(8)); break;
		case (cmd == 'listHist'): doListHist(); break;
	}
}
w.addEventListener("message", lc_gotMessage, false);