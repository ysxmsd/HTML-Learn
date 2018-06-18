
    var x = 1;

    function a() {
      var y = 2;
    }

    function b() {
      var z = 3;
    }

    output();


    var btn=document.createElement('button');
        btn.textContent="clcik";
        
        document.body.appendChild(btn);
        //btn.addEventListener(onclick,createhtml);

        btn.onclick=function(){
          createhtml('woo','this prompt')};


    function output() {
      var para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = 'Value: ';
    }



    function createhtml(msgText,msgType)
    {
      var html=document.querySelector('html');

      var panel=document.createElement('div');
      panel.setAttribute('class','msbox');
      html.appendChild(panel);

      var msg=document.createElement('p');
      msg.textContent=msgText;
      panel.appendChild(msg);

      var closeBtn=document.createElement('button');
      closeBtn.textContent='X';
      panel.appendChild(closeBtn);

      closeBtn.onclick=function(){
        panel.parentNode.removeChild(panel);
      }




    }
