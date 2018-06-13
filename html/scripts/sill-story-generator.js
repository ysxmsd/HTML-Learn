
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


var storytext="It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:,"+
 "they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised "+
 "— :insertx: weighs 300 pounds, and it was a hot day."

 var insertx=[
"Willy the Goblin",
"Big Daddy",
"Father Christmas"];

var inserty=[
"the soup kitchen",
"Disneyland",
"the White House"];

var insertz=[
"spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];

//randomize.value='FDF';
//randomize.textContent='fsfsfsf';
randomize.addEventListener('click', result);


function result() {

    
    var nwestore=storytext;
    var xitem=randomValueFromArray(insertx);
    var yitem=randomValueFromArray(inserty);
    var zitem=randomValueFromArray(insertz);

    nwestore=nwestore.replace('insertx',xitem);
    nwestore=nwestore.replace('insertx',xitem);
    nwestore=nwestore.replace('inserty',yitem);
    nwestore=nwestore.replace('insertz',zitem);

  if(customName.value != '') {
    var name = customName.value;

  }

  nwestore=nwestore.replace('Bob',name);


  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);

  }

  nwestore=nwestore.replace('94',weight);

  nwestore=nwestore.replace('300',temperature);

  var i='str';
  var k;

  switch(typeof(i)){
    case 'int' :nwestore='int';break;
    case 'string':nwestore='string';break;
    case 'undefined':nwestore='undefined'; break;
  //  default : 'unkonw';break;
  }


  story.textContent = nwestore;
  story.style.visibility = 'visible';
}

