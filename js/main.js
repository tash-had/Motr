var _0x887e=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x72\x65\x64\x64\x69\x74\x2E\x63\x6F\x6D\x2F\x72\x2F\x6D\x6F\x74\x72\x4D\x6F\x74\x69\x76\x61\x74\x69\x6F\x6E\x2F\x6E\x65\x77\x2F\x2E\x6A\x73\x6F\x6E\x3F\x6C\x69\x6D\x69\x74\x3D\x39\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2D\x73\x73\x6C\x2E\x62\x69\x74\x6C\x79\x2E\x63\x6F\x6D\x2F\x76\x33\x2F\x73\x68\x6F\x72\x74\x65\x6E\x3F\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D\x39\x37\x30\x38\x35\x35\x38\x34\x38\x62\x65\x32\x33\x63\x63\x39\x63\x62\x62\x36\x62\x35\x37\x37\x62\x36\x31\x63\x37\x62\x39\x63\x62\x33\x38\x30\x34\x38\x33\x30\x26"];var redditUrl=_0x887e[0];var bitlyUrl=_0x887e[1];var imagesRec=[];var shortImageLink;var currentIndex;$(document).ready(function(){getImages();checkCookie();});function getImages(){if(useApi()){try{$.ajax({url:redditUrl,dataType:'json',type:'GET',cache:false,success:function(data){$(data.data.children).each(function(index,value){var imgLink=value.data.url;imagesRec.push(imgLink)});var json_str_imgLinks=JSON.stringify(imagesRec);setCookie('motrImageLinks',json_str_imgLinks,0.5);nextPic()}})}catch(err){console.log("err")}}else{var img_json_cookie_response=getCookie("motrImageLinks");imagesRec=JSON.parse(img_json_cookie_response);nextPic()}}
function useApi(){var motrImageLinksCookie=getCookie("motrImageLinks");if(motrImageLinksCookie==""){return true}else{return false}}
function nextPic(){currentIndex=Math.floor(Math.random()*imagesRec.length);shortenLink(imagesRec[currentIndex]);$(".htmlClassFull").css("background-image","url("+imagesRec[currentIndex]+")");var linkBtn=document.getElementById("dLink");linkBtn.setAttribute('href',imagesRec[currentIndex])}
function getCookie(cookieName){var name=cookieName+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length)}
return""}
window.mobileAndTabletcheck=function(){var check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check;}
function setCookie(cookieName,cookieValue,expireDays){if(cookieName=="firstVisit"){vex.dialog.alert({message:'Welcome to Motr! You can click/tap anywhere on the screen for more motivation.'+'<br><br>If you\'re on a computer, you can also just hit the right arrow key.<br><br><b>Note: </b>If you have a poor internet connection, you may experience a blank screen.<br><br>Thanks for stopping by!',className:'vex-theme-wireframe'})}if(cookieName=="firstVisit"&&window.mobileAndTabletcheck()){vex.dialog.alert({message:'<b>Note For Android Devices: </b><br><br>This webpage may not work properly on Chrome for Android Devices.'+'<br><br>If you are using Chrome on an Android, and are experiencing troubles, please install another browser through the Play Store, and open this webpage again. Thank You!',className:'vex-theme-wireframe'})}
var d=new Date();d.setTime(d.getTime()+(expireDays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cookieName+"="+cookieValue+"; "+expires}
function checkCookie(){var firstVisit=getCookie("firstVisit");if(firstVisit==""){setCookie('firstVisit',"visited",30)}}
$("body").keydown(function(e){if(e.keyCode==39){location.reload()}});function sharekitInitFxn(){SocialShareKit.init({'url':"http://bit.ly/"+shortImageLink,'twitter':{'title':'Motivated. (via http://motr.ml)',}})}
function shortenLink(imageLink){var finalLink=bitlyUrl+"longUrl="+encodeURIComponent(imageLink)+"&format=json";try{$.ajax({url:finalLink,dataType:'json',type:'GET',cache:false,success:function(data){$(data.data).each(function(index,value){shortImageLink=value.hash;sharekitInitFxn()})}})}catch(err){console.log("err")}}
function aboutClick(){vex.dialog.alert({message:'<div id="logoImg"><img src="img/favicon.png" height="100" width="101"></div><br>There are plenty of places for you to find motivation on the internet. So what makes Motr so special?'+'<br><br>Motr features quality motivational quotes, which are <b>handpicked</b> and aim mainly at <b>motivating productivity.</b>'+'<br><br>The images are frequently updated, and since they\'re handpicked, all of them are almost guaranteed to be meaningful.',className:'vex-theme-wireframe'})}
function msieversion(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){vex.dialog.alert({message:'<div id="logoImg"><img src="img/favicon.png" height="100" width="101"></div><br>Uh oh! This webpage doesn\'t always work well with Internet Explorer. '+'Please try launching this page in any other browser. (ie. Google Chrome, Mozilla Firefox, Opera, Safari, etc.)',className:'vex-theme-wireframe'})}else{return false}}
