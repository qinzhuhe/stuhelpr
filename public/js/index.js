$(function(){

 $.ajax({
    url: '/courseData',
    type: 'get',
    dataType: 'json',
    success:function(data){
     var course=JSON.parse(data.course);
     switch(parseInt(course.week)){
      case 1 :course.week="一";
      break;
      case 2 :course.week="二";
      break;
      case 3 :course.week="三";
      break;
      case 4 :course.week="四";
      break;
      case 5 :course.week="五";
      break;
     };
     var str=`
     <table border="1" id="course">
     <tr>
          <td colspan='2' class="sh_size">星期${course.week}课程表</td>
        </tr>
      <tr height="50px" class="after">
        <!-- <td rowspan="4" class="sh_size">课<br><br>程<br><br>表</p></td> -->
        <td id="sw">上午</td>
        <td id="sw">下午</td>
      </tr>
      <tr>
        <td><p><font color="#7B7B7B">课程:</font><strong>${course.name1}</strong></p><p><font color="#7B7B7B">老师:</font><strong>${course.teacher1}</strong></p><p><font color="#7B7B7B">上课地点:</font><strong>${course.classplace1}[1-2节]</strong></p></td>
        <td><p><font color="#7B7B7B">课程:</font><strong>${course.name1}</strong></p><p><font color="#7B7B7B">老师:</font><strong>${course.teacher1}</strong></p><p><font color="#7B7B7B">上课地点:</font><strong>${course.classplace1}[6-7节]</strong></p></td>
      </tr>
      <tr>
        <td><p><font color="#7B7B7B">课程:</font><strong>${course.name1}</strong></p><p><font color="#7B7B7B">老师:</font><strong>${course.teacher1}</strong></p><p><font color="#7B7B7B">上课地点:</font><strong>${course.classplace1}[3-4节]</strong></p></td>
        <td><p><font color="#7B7B7B">课程:</font><strong>${course.name1}</strong></p><p><font color="#7B7B7B">老师:</font><strong>${course.teacher1}</strong></p><p><font color="#7B7B7B">上课地点:</font><strong>${course.classplace1}[8-9节]</strong></p></td>
      </tr>
      <tr>
        <td><p><font color="#7B7B7B">课程:</font><strong>${course.name1}</strong></p><p><font color="#7B7B7B">老师:</font><strong>${course.teacher1}</strong></p><p><font color="#7B7B7B">上课地点:</font><strong>${course.classplace1}[第5节]</strong></p></td>
        <td><p><font color="#7B7B7B">课程:</font><strong>${course.name1}</strong></p><p><font color="#7B7B7B">老师:</font><strong>${course.teacher1}</strong></p><p><font color="#7B7B7B">上课地点:</font><strong>${course.classplace1}[第十节]</strong></p></td>
      </tr>
      </table>`;
      $('.timetable').html(str);
      //只有请求了才注册点击事件
      $('#tap').on("click",function(){
     $(".timetable").stop().slideToggle("slow");
  })
    }
  })







  mui.toast("欢迎来到学生小助手!");


  setTimeout(function(){
    var gallery = mui('.mui-slider');
    gallery.slider({
         interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
    });
},300)



})