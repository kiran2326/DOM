let first = document.getElementById("text")
 console.log(first.innerHTML = 'hello')
console.log(first.innerText)
 console.log(first.textContent)

  let second = document.getElementsByTagName('h1')
console.log(second [2].innerHTML)

let third = document.getElementsByClassName('box')
console.log(third)
//Q4
 let change =document.getElementsByClassName('change')
 console.log(change)
let count = 2;
change[0].addEventListener('click' , () =>{
    // change[0].innerHTML='HELLO WORLD'
    if(count % 2 === 0){
        change[0].innerHTML = 'HELLO WORLD';
        change[0].style.color= 'red';
        count++;
    }
    else{
        change[0].innerHTML='HELLO';
        change[0].style.color='black';
        count--;
    }
})
//Q5
let Replace = document.getElementsByClassName('replace')
console.log(Replace[0].innerHTML)
function trans(){
    Replace[0].innerHTML="Welcome to Elevation Academy"
}
//Q6
let six = document.getElementById('heading')
console.log(six)
six.style.color="red"
//Q7
let seven = document.getElementsByClassName('parent')
console.log(seven)
let counts = true
function changeDirection(){
    if(counts)
    {
        seven[0].style. display = 'block'
        counts = false
    }
    else{
        seven[0]. style. display = 'flex'
        counts = true
    }
}
//Q9
// let display=document.getElementsByClassName('startclock')
// console.log(display)
// display[0].addEventListener('click',()=>{
    
//         let time = new Date()
//         let hrs = time.getHours()
//         let mins = time.getMinutes()
//         let sec = time.getSeconds()
//         // console.log(`${hrs}:${mins}:${sec}`)
//  })
setInterval(function () {
    const timer = document.getElementById("timer");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTime = hours + ":" + minutes + ":" + seconds;
    timer.innerText = currentTime;
  }, 1000);
//Q10
// let inputvalue = document.querySelectorAll('input');
// let randomnumber = parseInt(Math.random()*100+1);
// console.log(randomnumber);
// function checkNumber(){
//     console.log(inputvalue.value)
//     if(randomnumber > inputvalue.value){
//         console.log("your guess is low");
//     }
//     else if(randomnumber < inputvalue.value){
//         console.log("your guess is high")
//     }
//     else{
//         console.log("your guess is right")
//     }
// }

