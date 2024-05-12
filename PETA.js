function dropdown(){
	document.getElementById("dropdown").classList.toggle("ddown");
}

function contacts(){
	document.getElementById("contacts").classList.toggle("show");

}

function overview(){
	document.getElementById("overview").classList.toggle("show");
}

function about(){
	document.getElementById("about").classList.toggle("show");
}

function guidemap(){
	document.getElementById("guidemap").classList.toggle("mapshow");
}

function depbutton(){
	document.getElementById("departments").style.opacity="1";
	document.getElementById("departments").style.zIndex="1";
	document.getElementById("buildings").style.opacity="0";
	document.getElementById("buildings").style.zIndex="0";
	document.getElementById("facilities").style.opacity="0";
	document.getElementById("facilities").style.zIndex="0";
}

function fbutton(){
	document.getElementById("facilities").style.opacity="1";
	document.getElementById("facilities").style.zIndex="1";
	document.getElementById("buildings").style.opacity="0";
	document.getElementById("buildings").style.zIndex="0";
	document.getElementById("departments").style.opacity="0";
	document.getElementById("departments").style.zIndex="0";
}

function builbutton(){
	document.getElementById("buildings").style.opacity="1";
	document.getElementById("buildings").style.zIndex="1";
	document.getElementById("departments").style.opacity="0";
	document.getElementById("departments").style.zIndex="0";
	document.getElementById("facilities").style.opacity="0";
	document.getElementById("facilities").style.zIndex="0";
}

function jhs(){
	document.getElementById("jhs").style.opacity="1";
	document.getElementById("jhs").style.zIndex="1";
	document.getElementById("shsbutton").style.opacity="1";
	document.getElementById("shsbutton").style.zIndex="1";
	document.getElementById("shs").style.opacity="0";
	document.getElementById("shs").style.zIndex="0";
	document.getElementById("jhsbutton").style.opacity="0";
	document.getElementById("jhsbutton").style.zIndex="0";
}

function shs(){
	document.getElementById("jhs").style.opacity="0";
	document.getElementById("jhs").style.zIndex="0";
	document.getElementById("shsbutton").style.opacity="0";
	document.getElementById("shsbutton").style.zIndex="0";
	document.getElementById("shs").style.opacity="1";
	document.getElementById("shs").style.zIndex="1";
	document.getElementById("jhsbutton").style.opacity="1";
	document.getElementById("jhsbutton").style.zIndex="1";
}

function glines(){
	document.getElementById("guidelines").style.opacity="1";
	document.getElementById("guidelines").style.zIndex="1";
	document.getElementById("gbutn").style.opacity="1";
	document.getElementById("gbutn").style.zIndex="1";
	document.getElementById("vimi").style.opacity="0";
	document.getElementById("vimi").style.zIndex="0";
	document.getElementById("vmbutn").style.opacity="0";
	document.getElementById("vmbutn").style.zIndex="0";
	document.getElementById("hym").style.opacity="0";
	document.getElementById("hym").style.zIndex="0";
	document.getElementById("hbutn").style.opacity="0";
	document.getElementById("hbutn").style.zIndex="0";
}

function vismis(){
	document.getElementById("guidelines").style.opacity="0";
	document.getElementById("guidelines").style.zIndex="0";
	document.getElementById("gbutn").style.opacity="0";
	document.getElementById("gbutn").style.zIndex="0";
	document.getElementById("vimi").style.opacity="1";
	document.getElementById("vimi").style.zIndex="1";
	document.getElementById("vmbutn").style.opacity="1";
	document.getElementById("vmbutn").style.zIndex="1";
	document.getElementById("hym").style.opacity="0";
	document.getElementById("hym").style.zIndex="0";
	document.getElementById("hbutn").style.opacity="0";
	document.getElementById("hbutn").style.zIndex="0";
}

function hymn(){
	document.getElementById("guidelines").style.opacity="0";
	document.getElementById("guidelines").style.zIndex="0";
	document.getElementById("gbutn").style.opacity="0";
	document.getElementById("gbutn").style.zIndex="0";
	document.getElementById("vimi").style.opacity="0";
	document.getElementById("vimi").style.zIndex="0";
	document.getElementById("vmbutn").style.opacity="0";
	document.getElementById("vmbutn").style.zIndex="0";
	document.getElementById("hym").style.opacity="1";
	document.getElementById("hym").style.zIndex="1";
	document.getElementById("hbutn").style.opacity="1";
	document.getElementById("hbutn").style.zIndex="1";
}

function dos(){
	document.getElementById("dos").style.opacity="1";
	document.getElementById("dos").style.zIndex="1";
	document.getElementById("donts").style.opacity="0";
	document.getElementById("donts").style.zIndex="0";
	document.getElementById("dcode").style.opacity="0";
	document.getElementById("dcode").style.zIndex="0";
	document.getElementById("guidelines").style.opacity="1";
	document.getElementById("guidelines").style.zIndex="1";
	document.getElementById("gbutn").style.opacity="1";
	document.getElementById("gbutn").style.zIndex="1";
	document.getElementById("vimi").style.opacity="0";
	document.getElementById("vimi").style.zIndex="0";
	document.getElementById("vmbutn").style.opacity="0";
	document.getElementById("vmbutn").style.zIndex="0";
	document.getElementById("hym").style.opacity="0";
	document.getElementById("hym").style.zIndex="0";
	document.getElementById("hbutn").style.opacity="0";
	document.getElementById("hbutn").style.zIndex="0";
}

function donts(){
	document.getElementById("dos").style.opacity="0";
	document.getElementById("dos").style.zIndex="0";
	document.getElementById("donts").style.opacity="1";
	document.getElementById("donts").style.zIndex="1";
	document.getElementById("dcode").style.opacity="0";
	document.getElementById("dcode").style.zIndex="0";
	document.getElementById("guidelines").style.opacity="1";
	document.getElementById("guidelines").style.zIndex="1";
	document.getElementById("gbutn").style.opacity="1";
	document.getElementById("gbutn").style.zIndex="1";
	document.getElementById("vimi").style.opacity="0";
	document.getElementById("vimi").style.zIndex="0";
	document.getElementById("vmbutn").style.opacity="0";
	document.getElementById("vmbutn").style.zIndex="0";
	document.getElementById("hym").style.opacity="0";
	document.getElementById("hym").style.zIndex="0";
	document.getElementById("hbutn").style.opacity="0";
	document.getElementById("hbutn").style.zIndex="0";
}

function dcode(){
	document.getElementById("dos").style.opacity="0";
	document.getElementById("dos").style.zIndex="0";
	document.getElementById("donts").style.opacity="0";
	document.getElementById("donts").style.zIndex="0";
	document.getElementById("dcode").style.opacity="1";
	document.getElementById("dcode").style.zIndex="1";
	document.getElementById("guidelines").style.opacity="1";
	document.getElementById("guidelines").style.zIndex="1";
	document.getElementById("gbutn").style.opacity="1";
	document.getElementById("gbutn").style.zIndex="1";
	document.getElementById("vimi").style.opacity="0";
	document.getElementById("vimi").style.zIndex="0";
	document.getElementById("vmbutn").style.opacity="0";
	document.getElementById("vmbutn").style.zIndex="0";
	document.getElementById("hym").style.opacity="0";
	document.getElementById("hym").style.zIndex="0";
	document.getElementById("hbutn").style.opacity="0";
	document.getElementById("hbutn").style.zIndex="0";
}

function vision(){
	document.getElementById("vision").style.opacity="1";
	document.getElementById("vision").style.zIndex="1";
	document.getElementById("mission").style.opacity="0";
	document.getElementById("mission").style.zIndex="0";
}

function mission(){
	document.getElementById("vision").style.opacity="0";
	document.getElementById("vision").style.zIndex="0";
	document.getElementById("mission").style.opacity="1";
	document.getElementById("mission").style.zIndex="1";
}

function lyrics(){
	document.getElementById("lyrics").style.opacity="1";
	document.getElementById("lyrics").style.zIndex="1";
	document.getElementById("vid").style.opacity="0";
	document.getElementById("vid").style.zIndex="0";
}

function vid(){
	document.getElementById("lyrics").style.opacity="0";
	document.getElementById("lyrics").style.zIndex="0";
	document.getElementById("vid").style.opacity="1";
	document.getElementById("vid").style.zIndex="1";
}