
            
            
            
            var getBtn=document.getElementById("get");
            getBtn.onclick=tbadd;

            //var postBtn=document.getElementById("post");
            //postBtn.onclick=tbpost;
            
            
            
            
            function check(){
              var name = document.getElementById("name").value;
              var url = "http://how2j.cn/study/checkName.jsp?name="+name;

              var xmlhttp =new XMLHttpRequest();
              xmlhttp.onreadystatechange=checkResult; //响应函数
              xmlhttp.open("GET",url,true);   //设置访问的页面
              xmlhttp.send(null);  //执行访问
            
             
            function checkResult(){
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                document.getElementById('checkResult').innerHTML=xmlhttp.responseText;
            }}



            function tbadd(){
              var addxhr=new XMLHttpRequest();
              var url="/JasperReport2/overServerServlet";
              addxhr.open("get",url,true);//设置访问的页面
              addxhr.onreadystatechange=getResult;//获取数据函数

              function getResult(){
                if(addxhr.readyState==4 && addxhr.status==200){
                  //获取后台传递过来的字符串转换为josn
                  var responseJosn=JSON.parse(addxhr.responseText);
                  for(var i in responseJosn){
                      var tb=document.getElementById("tb");
                      var tr=document.createElement("tr");
                      var YYMMDD=document.createElement("td");
                      var empno=document.createElement("td");
                      var addWorkTime=document.createElement("td");
                      var billNo=document.createElement("td");

                      YYMMDD.innerHTML=responseJosn[i].YYMMDD;
                      empno.innerHTML=responseJosn[i].empno;
                      addWorkTime.innerHTML=responseJosn[i].addWorkTime;
                      billNo.innerHTML=responseJosn[i].billNo;

                      tb.appendChild(tr);
                      tr.appendChild(YYMMDD);
                      tr.appendChild(empno);
                      tr.appendChild(addWorkTime);
                      tr.appendChild(billNo);
                  }
                }
              }
              addxhr.send(null);
            }



            function tbpost(){
              var json = tabToJSON('tb');
              document.getElementById("textjson").innerHTML = json;
            /*   
              //前端传递JSON给Servlet
              //程序片段,请求头不能少
              var xhr=new XMLHttpRequest();
              var url="http://localhost:8080/JasperReport2/overServerServlet";
              xhr.open("post",url,true);//设置访问的页面
              xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
              var data=json;
              xhr.send(data);

              */
            }

          


            function tabToJSON(id) {
              var trs = document.getElementById(id).getElementsByTagName("tr");//获得tr数组
              var titles = trs[0].getElementsByTagName("td");    //获得表头td数组
              var json = "";
              for(var i = 1; i < trs.length; i++) {
                  var tds = trs[i].getElementsByTagName("td");    
                  json += "{"; 
                  //拼装json
                  for(var j = 0; j < tds.length; j++) 
                  json +=JSON.stringify(titles[j].innerHTML)+ ":" + JSON.stringify(tds[j].innerHTML) + ",";

                  json = json.substring(0, json.length - 1) + "},";
              }
              json = "[" + json.substring(0, json.length - 1) + "]";
              return json;

          }
      



