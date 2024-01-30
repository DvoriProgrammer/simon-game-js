/////
//   let flag = 0
//   let stop=true;
//   while (stop) {
//     num = Math.round(Math.random() * (arr_img.length - 1))
//     // playSound(arr_img[num]);
//     document.getElementById(arr_img[num]).src =
//       '../pictures/' + arr_img[num] + '_prs.png'
//     //  playMusic(num);
//     arr_pattern[i] = arr_img[num]
//     index++
//     const timer = (ms) => new Promise((res) => setTimeout(res, ms))

//     await s(num)
//     function s(num) {
//       playSound(arr_img[num])
//       return new Promise((res, req) => {
//         setTimeout(() => {
//           document.getElementById(arr_img[num]).src =
//             '../pictures/' + arr_img[num] + '_org.png'
//           res()
//         }, arr_pattern.length * 2000)

//         check(arr_pattern.length,stop);
//       })
//     }
//     pattern(i)
//     i++
//     await pat()
//     function pat() {
//       return new Promise((res) => {
//         setTimeout(() => {
//           res()
//         }, arr_pattern.length * 2000)
//       })
//     }
//   }
// }
// async function pattern(i) {
//   for (let j = 0; j <= i; j++) {
//     document.getElementById(arr_pattern[j]).src =
//       '../pictures/' + arr_pattern[j] + '_prs.png'
//     await p(j)
//     function p(j) {
//       playSound(arr_pattern[j])
//       return new Promise((res) => {
//         setTimeout(() => {
//           document.getElementById(arr_pattern[j]).src =
//             '../pictures/' + arr_pattern[j] + '_org.png'
//           res()
//         }, 2000)
//       })
//     }
//   }
// }
// // async function playMusic(num){
// //   {
// //      id(arr_img[num]).src='../music/'+ arr_pattern[num]+'.wav';
// //      await(id(arr_img[num]).play());

// //   }
//    async function init_start() {

// }
//   function check(length) {
//   let flag_1 = 0
//   let j = 0;
//   let m;
//   var user_pattern = [length];
//   const images = document.querySelectorAll('img')
//   let current=0;
//   // Add a click event listener to each image
//   images.forEach((img) => {
//     img.addEventListener('click', (event) => {
//       //for (let i = 0; i < length; i++) {
//         // Get the ID of the clicked image
//        // user_pattern[current++] = event.target.id
//         console.log(event.target.id)
//         if (event.target.id==arr_pattern[current++] ) 
//         document.querySelector('#id_score').innerHTML = score_1++

//         // console.log(`Clicked image ID: ${user_pattern[i]}`);
//       //}
//       // for(let m=0;m<length;m++){
//       //   // console.log(arr_pattern[length])
//       //   // console.log(user_pattern[length])
//       //   if  (event.target.id==arr_pattern[m] ) {
//       //     document.querySelector('#id_score').innerHTML = score_1++
//          else {
//            alert("game over");
//           document.getElementById('GAME_OVER').src = '../pictures/GAME OVER.png'
//           document.getElementById('GAME_OVER').style.display = 'cover'
//           document.getElementById('GAME_OVER').style.position = 'absolute'
//           document.getElementById('GAME_OVER').style.left = '30vw'
//           document.getElementById('GAME_OVER').style.top = '6vw'
//           document.getElementById('t').innerHTML = 'Timer: 0' + 0 + ':0' + 0;
//           t1=0;
//           t2=0;

//           return;
//         }
//       //   // m++;
//       // }
//       // user_pattern.length=0;
//     })
//   })
// }
// function  check1(){
//   var c=event.target.innerHTML;
//   console.log(c);
//   for(var i=0;i<arr_pattern.length;i++){
//     if(c==arr_pattern[i])
//     alert("good");
//     else
//     alert("bad");
// }
// }
// function gameover() {
//   document.querySelector('#GAME_OVER').innerHTML.src =
//     '../pictures/GAME OVER.png'
//   document.querySelector('#new_game').innerHTML.src =
//     '../pictures/new_game.png;'
// }