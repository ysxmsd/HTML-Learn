

    var btn=document.createElement('button');
    btn.textContent="clcik";
  	document.body.appendChild(btn);
    //btn.addEventListener(onclick,createhtml);
    //btn.onclick=function(){createhtml('woo','warning')};

    var btnArray=document.querySelectorAll('button');

    for(var index=0;index<btnArray.length;index++)
      {
        switch (index) {
          case 0:
              btnArray[index].onclick=function(){
              createhtml('ERROR','warning')
            }
            break;

          case 1:
            btnArray[index].onclick=function(){
            createhtml('ok','chat')}
            break;
        
          default:
            btnArray[index].onclick=createhtml('ok','x')
            break;
        }

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

      if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(../icons/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(../icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }

      closeBtn.onclick=function(){
        panel.parentNode.removeChild(panel);
      }
    }
