var str='';
var strarray=[1,2];
var textarea=document.getElementById("textarea");
var num=9;



for(var i=0;i<100;i++)
{
    strarray[i]=i;
}
str=strarray.toString();



textarea.textContent=str;



