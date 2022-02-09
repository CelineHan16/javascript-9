let example2Button = document.getElementById('example2');
// With this method we can do only once
example2Button.onclick = function() {
  alert("My name is Han!");
}
// example2Button.onclick = function() {
//   alert("Nice to Meet You!");
// }

let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function() {
  alert("Nice to Meet You!");
});
example3Button.addEventListener('click', function() {
  alert("Bye!");
});

let example4Button = document.getElementById('example4');
example4Button.addEventListener('click', function() {
  example4Button.textContent = "Nice to meet you!";
});

let example5Div = document.getElementById('example5');
example5Div.addEventListener('click', function() {
  alert(example5Div.textContent.length);
});

let num = 0;
let h1 = document.querySelector('h1');
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  h1.textContent = 0;
});
let increaseButton = document.querySelector('#increase');
increaseButton.addEventListener('click', function() {
  h1.textContent = num++;
  // num = num + 1;
  // h1.textContent = num;
  // num += 1;
  // num++;
});
let decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener('click', function() {
  h1.textContent = num--;
  // num = num - 1;
  // h1.textContent = num;
  // num -= 1;
  // num--;
});

let example6Button = document.getElementById('example6');
example6Button.addEventListener('click', function() {
  example6Button.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

let example7Button = document.getElementById('example7');
example7Button.addEventListener('click', function() {
  example7Button.remove();
});

let countdown = 3;
let example8Button = document.querySelector('#example8');
function example8Action() {
  // for (let i = 0; i < 3; i++) {

  //   alert("hi");
  //   if(i === 3){
  //     example8Button.removeEventListener('click', example8Action);
  //   }
  // }
  countdown = countdown - 1;
  alert(`hello ${countdown}`);
  if (countdown === 0) {
    example8Button.removeEventListener('click', example8Action); 
  }
}
example8Button.addEventListener('click', example8Action);


document.getElementById('level3').addEventListener('click', function() {
  alert("Level 3 clicked!");
});
document.getElementById('level2').addEventListener('click', function() {
  alert("Level 2 clicked!");
});
document.getElementById('level1').addEventListener('click', function() {
  alert("Level 1 clicked!");
});












