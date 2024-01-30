let score_1 = 0;
let arr_img = ['light_blue', 'purple', 'red', 'orange', 'yellow', 'green']
let num;
let i = 0;
let arr_pattern = [];
var audio;
currentIndex = 0;
var arr_name=["  "];
let stopFlag=true;
let flagSpeed=false;

 function init() {//start game
  setTimeout(function() {
  }, 5000);
  document.querySelector('#id_score').innerHTML = score_1
  timer()
  random();
  let index = 0
   const images = document.querySelectorAll('img');
 speed();//chaeck if the user didnt response after 5 seconds
  images.forEach((img) => {
    //check if the user click is correct
    img.addEventListener('click', function () {
      //  playSound("press");
      flagSpeed=true;
      if (event.target.id == arr_pattern[currentIndex]) {
        document.querySelector('#id_score').innerHTML = ++score_1
        currentIndex++;
        if (currentIndex == pattern_current_length) {
          //if this pattern end and can move to next random
          {
            var image = document.getElementById('myImage')
            image.style.display = 'block'
            image.classList.add('jump-animation')
            score_1 += 5
            image.addEventListener('animationend', function () {
              image.style.display = 'none'
              image.classList.remove('jump-animation')
            })
          }
          random()
          currentIndex = 0
          // countTime = 5
        }
      } else {
        playSound("wrong");
        gameOver()
        return
      }
    })
  })
}


let pattern_current_length = 0;
function random() { //function that random the color
  // var flag = true;
  flagSpeed=true;
  num = Math.round(Math.random() * (arr_img.length - 1))
  arr_pattern[pattern_current_length] = arr_img[num];
  let pattern_index = 0;
  turnOn(pattern_index);
  pattern_current_length++;
}
function turnOn(pattern_index) {//recursia function that turnon the spacial color and music
 const stop1 =setTimeout(() => {
    document.getElementById(arr_pattern[pattern_index]).src =
      '../pictures/' + arr_pattern[pattern_index] +'_prs.png'
    playSound(arr_pattern[pattern_index]);
    turnOff(pattern_index);
  }, 320)
}
function turnOff(pattern_index) {//recursia function  that turnOff the spacial color and music
  const stop= setTimeout(() => {
    document.getElementById(arr_pattern[pattern_index]).src =
      '../pictures/' + arr_pattern[pattern_index] + '_org.png'
      pattern_index++;
    if (pattern_index < arr_pattern.length)
      turnOn(pattern_index);
  }, 320);
}


function change_name() {//change the name of user
  // let name = document.querySelector('#in_name').value
     document.querySelector('#name').innerHTML = 'Wellcome, ' + arr_name[0]+"!"
    var audio = new Audio('project/music/mm.mp3')
    audio.play()

}


function playSound(name) {
  var audio = new Audio('../music/' + name + '.wav');
  audio.play();
}
function timer() {
  if(!stopFlag){
    t1 = setInterval(function () {
        document.getElementById('t').innerHTML =
          'Timer:' + "00:00"
    }, Infinity)
  }
  // debugger 
  //function create timer for the game
  else {
  t1 = setInterval(function () {
    if (t1 / 60 < 10 && t1 % 60 < 10) {
      document.getElementById('t').innerHTML =
        'Timer: 0' + Math.floor(t1 / 60) + ':0' + (t1 % 60)
      t1++
    } else if (t1 / 60 < 10 && !(t1 % 60 < 10)) {
      document.getElementById('t').innerHTML =
        'Timer: 0' + Math.floor(t1 / 60) + ':' + (t1 % 60)
      t1++
    } else if (t1 % 60 < 10 && !(t1 / 60 < 10)) {
      document.getElementById('t').innerHTML =
        'Timer: ' + Math.floor(t1 / 60) + ':0' + (t1 % 60)
      t1++
    } else if (!(t1 % 60 < 10) && !(t1 / 60 < 10)) {
      document.getElementById('t').innerHTML =
        'Timer: ' + Math.floor(t1 / 60) + ':' + (t1 % 60)
      t1++
    }
  }, 1000)}

}

function gameOver() {//function that end the game
  document.getElementById('GAME_OVER').src = '../pictures/GAME OVER.png';
  document.getElementById('GAME_OVER').style.display = 'cover'
  document.getElementById('GAME_OVER').style.position = 'absolute'
  document.getElementById('GAME_OVER').style.left = '28vw'
  document.getElementById('GAME_OVER').style.top = '2vw'
  document.getElementById('GAME_OVER').style.width = '45vw'
  document.getElementById('new_game').src = '../pictures/new_game.png';
  stopFlag=false;
  timer();
  document.getElementById('footer').style.display = 'block' 
}
function init_start(){//to show the popup
  setTimeout(openPopup, 1000);
}
  function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  function submitName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value;
    arr_name[0]=name;
    console.log("Submitted name:", name);
    popup.style.display = 'none';
  change_name();
  }


function speed() {
  let time=5;
      timeClock = setInterval(function () {
    if(flagSpeed==true){
 time=7;
 flagSpeed=false;
    }
          var seconds = --time;
          if (time - 1 < 0) {
              gameOver();
          }
      }, 1000);

  }
  function newGame(){
    document.getElementById('GAME_OVER').src = '../pictures/ooo.jpg';
    document.getElementById('new_game').src = '../pictures/ooo.jpg';
    window.location.href = 'game.html'//refresh the page for a new game
  }
  function rate(stars) {
    //function that can to rate
    const starsElements = document.getElementsByClassName('star')
    for (let i = 0; i < starsElements.length; i++) {
      if (i < stars) {
        starsElements[i].style.color = 'gold'
      } else {
        starsElements[i].style.color = 'gray'
      }
    }
  }
  