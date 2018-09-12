

$(document).ready(function(){

    

    //$("div").html("Hello");
    var p=document.getElementById("imooc2");
    p.innerHTML="js原生操作";
    p.style.color="red";

    var $j=$("#imooc2");
        $j.html("jquery操作").css("color","green");


    
    var p2=document.getElementsByClassName("aaron");
    for(var i=0;i<p2.length;i++)
        p2[i].style.border="3px solid red";

    $(".jaaron").css("border","3px solid red");

    //$("div").html("jquery操作").css("color","green");


    var elements1=document.getElementsByTagName("*");
    var elements2=$("*");

    //if (elements1===elements2)
    elements2.css("border","1px solid red");

    $('div>div').css("border","1px solid yellow")//html("层级之子级选择");
    $('div div').css("border","1px solid blue")//html("选择所有div元素里面的p元素");

    

    


}












)


