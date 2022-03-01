var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');

for(var i=0;i<slike.length;i++){
    slike[i].addEventListener('click',display);
}

function display(){
    var sl= this.getAttribute('src');
    current.setAttribute('src',sl);
}

var change = document.getElementById('kontakt');
change.addEventListener('onmouseover',changeBackground);

function changeBackground(){
change.style.background = 'rgba(203, 76, 21, 0.9)';

 
}
// scroll

function makeText(){
    var text = 'BTS KERAMIKA';
    var text1 = 'BTS KERAMIKA';
    var text2 = 'BTS KERAMIKA'; 
    
   
    var stext = text.split('');
    var stext1 = text1.split('');
    var stext2 = text2.split('');
  
  
    var nasArray = [stext,stext1,stext2];
    return nasArray;  
  }
 
  var ar = makeText();
    var scroll = document.getElementById('scroll');
  
    scroll.style.color = 'rgba(203, 76, 21, 0.9)';
   var loop;
   
    var i = 0;
      
    function start(){
      if(ar[i].length > 0){
        scroll.innerHTML += ar[i].shift(); 
        loop = setTimeout(start,400);
       
      } else{
        i++;
        if(i > 2){
          i = 0;
          ar= makeText();
        }
        scroll.innerHTML = '';
        start();
      }
 
    }
     
start();


// buttons za video

var btn = document.getElementById('btn');

var vid = document.getElementById('vid');
var btn2 = document.getElementById('btn2');
btn.addEventListener('click',function(){
 
  vid.play();
});

btn2.addEventListener('click',function(){
 
  vid.pause();
});


// forma 

var email1 = document.getElementById('email');
var msg = document.getElementById('textArea');
var send = document.getElementById('sendBtn');

send.addEventListener('click',validacija);


function validacija(){
  // email

  if(email1.value == ""){
email1.value = "Ovo polje je obavezno";
email1.style.color = 'red';

  };
  // message
 
  if(msg.value == ""){
    msg.value = "Ovo polje je obavezno";
    msg.style.color = 'red';
   
  };
  
}

// function clear (){
//   this.value = "";
//   this.style.color = "white";
// }