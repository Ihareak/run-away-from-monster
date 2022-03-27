let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');
ctx.fillStyle='green';
ctx.fillRect(20,20,30,30);

ctx.strokeStyle='yellow';
ctx.strokeRect(100,200,30,131);

let icon=document.getElementById('icon');
ctx.drawImage(icon,200,100,100,100);