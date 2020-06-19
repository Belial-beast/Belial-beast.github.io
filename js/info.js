function intervalTime(startTime,endTime){
    var date1 = new Date(startTime);
    var date2 = new Date(endTime);  
    var date3 = date2.getTime() - date1.getTime(); 
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    return days;
}
function format(Date){
var Y = Date.getFullYear();
var M = Date.getMonth() + 1;
M = M < 10 ? '0' + M : M;
var D = Date.getDate();
D = D < 10 ? '0' + D : D;
var H = Date.getHours();
H = H < 10 ? '0' + H : H;
var Mi = Date.getMinutes();
Mi = Mi < 10 ? '0' + Mi : Mi;
var S = Date.getSeconds();
S = S < 10 ? '0' + S : S;
return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' + S;
}
var pdate = new Date("<%- post.date %>");
var update = new Date("<%- post.updated %>");
var now = new Date();
now=format(now);
pdate=format(pdate);
update=format(update);
var days=intervalTime(pdate,now),udays=intervalTime(update,now);
var mid=parseInt(days,10);
var mi=parseInt("30",10);
if(mid > mi){
document.getElementById("point").innerHTML="<div class=\"tip share\">请注意，本文编写于"+days+"天前，最后修改于"+udays+"天前，其中某些信息可能已经过时。<img src=\"https://cdn.jsdelivr.net/gh/drew233/cdn/kawayi.webp\"><\img> </div>";
}