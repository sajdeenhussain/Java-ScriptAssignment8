// var left = 0;

// function akuma(){
//     var character = document.getElementById('character');
//     if(event.keyCode===68 && left< 914 ){
//         left = left + 10;
//         character.style.left = left + 'px';
//         character.src = 'akuma-wkf.gif'

//     }
//     if(event.keyCode===65 && left > 0){
//         left = left - 10;
//         character.style.left = left + 'px';
//         character.src = 'akuma-walkb.gif'

//     }
//     if(event.keyCode===70){
//         character.src  = 'akuma-ts-w3.gif'
//         setTimeout(function(){
//             character.src = 'akuma-ts-stance.gif'
//         },1000)
       
//     }
//     if(event.keyCode===32){
//         character.style.width = '350px';
//         character.style.height = '350px';
//         character.src  = 'akuma-ts-taunt1.gif'
//         setTimeout(function(){
//             character.style.width = '250px';
//             character.style.height = '250px';
//             character.src  = 'akuma-ts-stance.gif'
//         }, 1500);
//     }
// }


// var right = 0;
// function kyos(){
//    var kyos = document.getElementById('character-two')
//    if(event.keyCode===37 && right < 910){
//     right = right + 10;
//     character-two.style.right = right + 'px';
//    }
// }

// window.addEventListener('keydown', akuma);
// window.addEventListener('keydown', kyos);


var left = 0;

function akuma(event) {
  var character = document.getElementById('character');
  if (event.keyCode === 68 && left < 914) {
    left = left + 10;
    character.style.left = left + 'px';
    character.src = 'akuma-wkf.gif';
  }
  if (event.keyCode === 65 && left > 0) {
    left = left - 10;
    character.style.left = left + 'px';
    character.src = 'akuma-walkb.gif';
  }
  if (event.keyCode === 70) {
    character.src = 'akuma-ts-w3.gif';
    setTimeout(function () {
      character.src = 'akuma-ts-stance.gif';
    }, 1000);
  }
  if (event.keyCode === 32) {
    character.style.width = '350px';
    character.style.height = '350px';
    character.src = 'akuma-ts-taunt1.gif';
    setTimeout(function () {
      character.style.width = '250px';
      character.style.height = '250px';
      character.src = 'akuma-ts-stance.gif';
    }, 1500);
  }
}

var right = 0;

function kyos(event) {
  var kyos = document.getElementById('character-two');
  if (event.keyCode === 37 && right < 910) {
    right = right + 10;
    kyos.style.right = right + 'px';
    kyos.src = 'kyos-walk.gif'
  }
  if(event.keyCode===39 && right > 0){
    right = right - 10;
    kyos.style.left = right + 'px';
    kyos.src = 'kyos-walkb.gif';
  }
}

window.addEventListener('keydown', akuma);
window.addEventListener('keydown', kyos);
