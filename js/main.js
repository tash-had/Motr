var _0x887e=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x72\x65\x64\x64\x69\x74\x2E\x63\x6F\x6D\x2F\x72\x2F\x6D\x6F\x74\x72\x4D\x6F\x74\x69\x76\x61\x74\x69\x6F\x6E\x2F\x6E\x65\x77\x2F\x2E\x6A\x73\x6F\x6E\x3F\x6C\x69\x6D\x69\x74\x3D\x39\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2D\x73\x73\x6C\x2E\x62\x69\x74\x6C\x79\x2E\x63\x6F\x6D\x2F\x76\x33\x2F\x73\x68\x6F\x72\x74\x65\x6E\x3F\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D\x39\x37\x30\x38\x35\x35\x38\x34\x38\x62\x65\x32\x33\x63\x63\x39\x63\x62\x62\x36\x62\x35\x37\x37\x62\x36\x31\x63\x37\x62\x39\x63\x62\x33\x38\x30\x34\x38\x33\x30\x26"];var redditUrl=_0x887e[0];var bitlyUrl=_0x887e[1];var imagesRec=[];var shortImageLink;var currentIndex;$(document).ready(function(){getImages();checkCookie();});function getImages(){if(useApi()){try{$.ajax({url:redditUrl,dataType:'json',type:'GET',cache:false,success:function(data){$(data.data.children).each(function(index,value){var imgLink=value.data.url;imagesRec.push(imgLink)});var json_str_imgLinks=JSON.stringify(imagesRec);setCookie('motrImageLinks',json_str_imgLinks,0.5);nextPic()}})}catch(err){console.log("err")}}else{var img_json_cookie_response=getCookie("motrImageLinks");imagesRec=JSON.parse(img_json_cookie_response);nextPic()}}
function useApi(){var motrImageLinksCookie=getCookie("motrImageLinks");if(motrImageLinksCookie==""){return true}else{return false}}
function nextPic(){currentIndex=Math.floor(Math.random()*imagesRec.length);shortenLink(imagesRec[currentIndex]);$(".htmlClassFull").css("background-image","url("+imagesRec[currentIndex]+")");var linkBtn=document.getElementById("dLink");linkBtn.setAttribute('href',imagesRec[currentIndex])}
function getCookie(cookieName){var name=cookieName+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length)}
return""}
function setCookie(cookieName,cookieValue,expireDays){if(cookieName=="firstVisit"){vex.dialog.alert({message:'Welcome to Motr! You can click/tap anywhere on the screen for more motivation.'+'<br><br>If you\'re on a computer, you can also just hit the right arrow key.<br><br>Thanks for stopping by!',className:'vex-theme-wireframe'})}
var d=new Date();d.setTime(d.getTime()+(expireDays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cookieName+"="+cookieValue+"; "+expires}
function checkCookie(){var firstVisit=getCookie("firstVisit");if(firstVisit==""){setCookie('firstVisit',"visited",30)}}
$("body").keydown(function(e){if(e.keyCode==39){location.reload()}});function sharekitInitFxn(){SocialShareKit.init({'url':"http://bit.ly/"+shortImageLink,'twitter':{'title':'Motivated. (via http://motr.ml)',}})}
function shortenLink(imageLink){var finalLink=bitlyUrl+"longUrl="+encodeURIComponent(imageLink)+"&format=json";try{$.ajax({url:finalLink,dataType:'json',type:'GET',cache:false,success:function(data){$(data.data).each(function(index,value){shortImageLink=value.hash;sharekitInitFxn()})}})}catch(err){console.log("err")}}
function aboutClick(){vex.dialog.alert({message:'<div id="logoImg"><img src="img/favicon.png" height="100" width="101"></div><br>There are plenty of places for you to find motivation on the internet. So what makes Motr so special?'+'<br><br>Motr features quality motivational quotes, which are <b>handpicked</b> and aim mainly at <b>motivating productivity.</b>'+'<br><br>The images update automatically, and are almost guaranteed to be meaningful.',className:'vex-theme-wireframe'})}
function msieversion(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){vex.dialog.alert({message:'<div id="logoImg"><img src="img/favicon.png" height="100" width="101"></div><br>Uh oh! This webpage doesn\'t always work well with Internet Explorer. '+'Please try launching this page in any other browser. (ie. Google Chrome, Mozilla Firefox, Opera, Safari, etc.)',className:'vex-theme-wireframe'})}else{return false}}
