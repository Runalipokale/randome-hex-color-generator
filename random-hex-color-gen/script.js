const hex = document.querySelector('.hex');
const gen = document.querySelector('.gen');


gen.addEventListener('click',()=>{
   colorGenerator();
});

const colorGenerator=()=>{
const color = Math.random().toString(16).substring(2,8);
document.body.style.backgroundColor = "#" + color;
hex.innerHTML= "#"+color;
}

colorGenerator();
// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2,8);
// console.log(color);