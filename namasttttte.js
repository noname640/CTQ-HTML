<script>
  function linkssetcolor(color){
    var alist = document.querySelectorAll('h2,h1');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
  function bodysetcolor(color){
    document.querySelector('body').style.bodycolor = color;
}
function bodysetbackgroundcolor(color){
  document.querySelector('body').style.backgroundcolor = color;
}
   function nightDayHandler(ㅇ){
     var target = document.querySelector('body');
     if(ㅇ.value === '수록카드'){
       bodysetbackgroundcolor('yellow');
       bodysetcolor('white');
       ㅇ.value = '카드목록';
       linkssetcolor('blue');
     }
   else {
       bodysetbackgroundcolor('white');
       bodysetcolor('yellow');
       ㅇ.value = '수록카드';
       linkssetcolor('white');
     }
   }
 </script>
 <li><input id="카드목록" type="button" value="수록카드" onclick="
    nightDayHandler(this);"></li>
    <h1><script>
        var coworkers = ['티씨지샵'];
      </script></h1>

      <script>
        var i = 0;
          while(i < coworkers.length){
            document.write('<li><a href="http://www.tcgshop.co.kr/'+coworkers[i]+'">'
              +coworkers[i]+'</a></li>');
            i = i + 1;
          }
        </script>
  <li><input id="카드목록" type="button" value="수록카드" onclick="
   nightDayHandler(this);"></li>
