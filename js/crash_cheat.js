<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '( ꒪⌓꒪)！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = 'Destiny 2 ~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });