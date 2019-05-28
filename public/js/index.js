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
        <td><p>课程:${course.name1}</p><p>老师:${course.teacher1}</p><p>上课地点:${course.classplace1}[1-2节]</p></td>
        <td><p>课程:${course.name4}</p><p>老师:${course.teacher4} </p><p>上课地点:${course.classplace4}[6-7节]</p></td>
      </tr>
      <tr>
        <td><p>课程:${course.name2}</p><p>老师:${course.teacher2} </p><p>上课地点:${course.classplace2}[3-4节]</td>
        <td><p>课程:${course.name5}</p><p>老师:${course.teacher5}  </p><p>上课地点:${course.classplace5}[8-9节]</p></td>
      </tr>
      <tr>
        <td><p>课程:${course.name3}</p><p>老师:${course.teacher3} </p><p>上课地点:${course.classplace3}[第5节]</p></td>
        <td><p>课程:${course.name6}</p><p>老师:${course.teacher6}  </p><p>上课地点:${course.classplace6}[第10节]</p></td>
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