console.log(1+3);
console.log(4-2);
console.log(5*3);
console.log(3/2);
console.log(5%3);

let test=document.getElementById("test");
test.textContent="Unko";
test.textContent="High Ben";

let n=1;
console.log(n);
n=n+1;
console.log(n);
n+=1;
console.log(n);
n++;
console.log(n);

input=document.getElementById("input");
console.log(input.value);

n=10;
if(n==10){
    console.log("はい。正解。");
}

n=12;
if(n==10){
    console.log("はい。正解。");
}

n=10;
if(n==10){
    console.log("はい。正解。");
}else{
    console.log("違う。");
}

n=12;
if(n==10){
    console.log("はい。正解。");
}else{
    console.log("違う。");
}

n=10;
if(n==10){
    console.log("はい。正解。");
}else if(n==12){
    console.log("うん。正解。");
}else{
    console.log("違う。")
}

n=12;
if(n==10){
    console.log("はい。正解。");
}else if(n==12){
    console.log("うん。正解。");
}else{
    console.log("違う。")
}

n=15;
if(n==10){
    console.log("はい。正解。");
}else if(n==12){
    console.log("うん。正解。");
}else{
    console.log("違う。")
}

let b=1<2;
console.log(b);
b=1>2;
console.log(b);

if(true){
    console.log("はい。正解。");
}

n=0;
while(n<10){
    console.log(n);
    n++;
}

//continue,break

for(let i=0;i<10;i++){
    console.log(i);
}

for(let i=2;i<100;i++){
    let isSosu=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isSosu=false;
            break;
        }
    }
    if(isSosu)
        console.log(i);
}