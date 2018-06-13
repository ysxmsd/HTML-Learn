
/*

var pare=document.querySelector('h1');
pare.addEventListener('click',updatenew);

function updatenew(){
    var name=prompt('enter new name');
    pare.textContent=name;
}
*/

function createParagraph(){
    var parea=document.createElement('h1');
    parea.textContent="you clicked the button!";
    document.body.appendChild(parea);
}

var buttons=document.querySelectorAll('button');

//每个按纽都点击加入函数功能
for(var i=0;i<buttons.length;i++)
    buttons[i].addEventListener('click',createParagraph);
