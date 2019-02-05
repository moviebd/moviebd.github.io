
var ancplayer = {
	load: {
		'width': '100%',
		'height': '100%',
		'player': '',
		'proxy': '/',
		'skin': '/',
		'getlink': '',
		'imgload': '',
		'autoplay': 'false',
		'embedplay': '0',
		'site': 'Moives71HD'
	},
	sv: {
		'list_sv': 
'drive.google.com,anc.mp4,youtube.com,facebook.com,anc.em,bd-xyz,movierulz.pro',
       'ten_sv':
      'Drive-HD:,MP4:,Ytube:,FB:,EM:,VIP-HD:,Mpro:',}
}



function ancMedia() {
  url = window.location.href,
  home = ancplayer.load.site, 
  server_i = [0];
    part = new Array; 
  sv = ancplayer.sv.list_sv.split(",");
  tensv = ancplayer.sv.ten_sv.split(",");
  width = ancplayer.load.width;
  height = ancplayer.load.height;
  player = ancplayer.load.player;
  proxy = ancplayer.load.proxy;
  skin = ancplayer.load.skin;
  imgload = ancplayer.load.imgload; 
  tmget = ancplayer.load.getlink; 
  auto = ancplayer.load.autoplay;
  eauto = ancplayer.load.embedplay;

	var $_  = function(x){return document.getElementById(x);}
    this.fu  = function (x, y, z) {
		if (y == null && z == null) {
			return document.getElementById(x).innerHTML;
		} else { if (y != null && z == null) 
		       { document.getElementById(x).innerHTML = y }
		  else { document.getElementById(x).style[z] = y }
		}
	};

	this.read = function () {
		b = this.fu("anc_data"),
		c = '<div id="b_data" style="display:none !important;">',
		d = '</div>',
		b = b.replace(/\<id\>/gi, c),
		b = b.replace(/\<\/id\>/gi, d);
		b = b.replace(/\[id\]/gi, c),
		b = b.replace(/\[\/id\]/gi, d),
		this.fu("anc_data", b);
		if(b.indexOf("anc*") != -1){
		b = this.fu("b_data");
		b = b.replace("anc*","");
		b = b.substring(0,b.length);
	    b = decodeanc(b);
		if(b.indexOf("|") <= 0) {b = ";" + b + "|" };
	}	else{b = this.fu("b_data"); if(b.indexOf("|") <= 0) {b = ";" + b + "|" };}
		return  b
	};
	
data = this.read();
  
l_spi = data.split("|").length; 
l_spk = function(x) {return data.split("|")[x].split(";").length;};
d_spi = function(x) {return data.split("|")[x];};
d_spk = function(x, y) {return data.split("|")[x].split(";")[y];};
pc = ["0","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s"];

  svt = "";
  svx = 0;


this.setCookie = function(c_name,value,exdays) {
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
};
this.getCookie = function(c_name) {
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++){
x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
x=x.replace(/^\s+|\s+$/g,"");
if (x==c_name){return unescape(y);}}
};
  
this.Play = function() {
for(var s = 0;s < tensv.length ;s++) {var svr = tensv[s].split(".")[0];if(svr == ""){svr = home;}part[s] = '<li id="sev_'+s+'" class="sev" style="font-size: 15px;margin-bottom: 15px;">'+svr+' <li><li class="clear"></li>' }
for (var i = 0; i < l_spi -1; i++) {
for (var j = 0; j < l_spk(i); j++) 
{ name = d_spk(i, 0); link = d_spk(i, j);
name = 2 == l_spk(i) ? d_spk(i, 0) : name == d_spk(i + 1, 0) || !Number(name) ? name + pc[j] : name + pc[j];

for(var s = 0;s < sv.length; s++) {
//if(d_spk(0, 1).indexOf(sv[s]) != -1) { this.setCookie("ancplayer", s , 365); }
if (d_spk(0, 1).indexOf(sv[s]) != -1) {this.setCookie("_ancServer", s, 365); }
if(link.indexOf(sv[s]) != -1) { 
if(sv[s]) {data_out = '<li class="ep"><a class="a_tap" id="ep_'+i+'" href="?xem='+s+'-'+i+'-'+j+'" title="'+name+' - '+home+'" >'+name+'</a></li>' } 
part[s] += data_out } } } }

for(var s = 0;s < sv.length; s++) {
if(part[s].indexOf(home) != -1) {
svt += '<ul id="server_'+svx+'" > '+part[s]+' <div class="clear"></div></ul>';		
server_i[s] = svx.toString();
svx++
}}

svt = '<div id="list_tap"> '+svt+' <div class="clear"></div></div><div class="clear"></div>';

this.fu("anc_tp", svt);
this.getUrl()
};


this.getUrl = function() {
  String.prototype.GetPart = function(dcmm) {
    var vltn = new RegExp("(^|&)" + dcmm + "=([^&]*)(&|$)");
    var clgt = this.substr(this.indexOf("?") + 1).match(vltn);
    if (clgt != null) {
      return unescape(clgt[2]);
    }
    return null;
  };
  


	//if(part_Url == null) { part_Url = ""+laylinksv+"-0-1" }
    part_Url = url.GetPart("xem");
    if(part_Url == null) { part_Url = this.getCookie("_ancServer") + "-0-1" }	
    part_Url = part_Url.split("-");
    pserver = part_Url[0];
    pepisode = part_Url[1];
    pelink = part_Url[2];
	
    var bh = this.fu("server_0");
    var bj = this.fu("server_" + server_i[pserver]);
    this.fu("server_" + server_i[pserver], bh);
    this.fu("server_0", bj);
	document.getElementById("ep_" + pepisode).className = "tap_active";
	document.getElementById("sev_" + pserver).className = "sv_active";

	if (!d_spk(pepisode, pelink)) {window.location.href = url.split("?")[0];} 
	else {this.load(d_spk(pepisode, pelink));}
		
  };
  
this.load = function(x) {	

if(x.indexOf(sv[0]) != -1){x = x.replace(/\#sub=/gi,"&sub=");x = x.replace(/\#subtitle=/gi,"&subtitle="); obj = DBOj(x)[0];} //G-DRIVE

if(x.indexOf(sv[1]) != -1){x = x.replace(/anc\.mp4\/http/gi,"http");x = x.replace(/\#subtitle=/gi,"&subtitle=");obj = DBOj(x)[0];}	 //mp4

if(x.indexOf(sv[2]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[0]} //utube
if(x.indexOf(sv[3]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[4]} //fb
if(x.indexOf(sv[4]) != -1){x = x.replace(/anc\.em\/http/gi,"http");x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2];} //embed
if(x.indexOf(sv[5]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[2]} //BD-XYZ
if(x.indexOf(sv[6]) != -1){x = x.replace(/\#sub=/gi,"&sub=");x = x.replace(/\#subtitle=/gi,"&subtitle="); obj = DBOj(x)[1];} //mpro



this.fu("anc_pl", obj)
}; 
   
var DBOj = function(x){	
rut = '<iframe width="100%" height="'+height+'" src="';
qua = '<div id="logoplayer"></div><';
	return obj = [
	// 0 -.GDRIVE

    '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src=http://gdriveplayer.us/embed2.php?link='+x+'  scrolling="no" frameborder="0" allowfullscreen="true"></iframe></div></div>',

//1 MP4

'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src='+x+'  scrolling="no" frameborder="0" allowfullscreen="true"></iframe></div></div>',


//2em

     '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src='+x+'  scrolling="no" frameborder="0" allowfullscreen="true" id="bigframe"></iframe></div></div>',


//3

 '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><video class="js-player" controls="download" playsinline="" poster="https://e.top4top.net/p_1020f9dem1.jpg"><source src="'+x+'" type="video/mp4"></source><track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"/><a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a></video></div></div>',


//4 fb

  '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"> <div class="fb-video" data-href="'+x+'" data-width="auto" data-height="auto"  data-show-text="false"/> </div></div>',

//5

'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><IFRAME SRC="'+x+' " FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>',
         


];
}}
var M = new ancMedia; M.Play();
