//今まで普通に使ってきたconsole.log()など、()がついてて、使うとなんかやってくれるやつらを関数と呼びます。
//これらは自分で作れます。これを関数を定義するといいます。
function manji(){
    console.log('maji');
    console.log('manji');
}

manji();

function manji2(moji){
    console.log('maji');
    console.log(moji);
    console.log('manji');
}

manji2('moji');

manji2('monji');

//このように、かっこの中に値を入れることで、関数内でその値を扱うことができます。このとき、mojiを引数と呼びます。

function manji3(moji1,moji2){
    console.log('maji');
    console.log(moji1);
    console.log(moji2);
    console.log('manji');
}

//複数の引数をとることも可能です。

manji3('moji','monji');

let manji4=function(){
    console.log('majimanji!!');
}

manji4();

//このように、関数は変数にぶち込める。これはfunction manji4...とやってること同じ。

function manji5(){
    console.log('maji');
    return 'manji!!';
}

let majimanji=manji5();

console.log(majimanji);

//このように、returnを使うと、値を返すことができます。だから、こんなこともできます。

console.log(manji5());

function manji6(){
    console.log('maji');
    return 'manji';
    console.log('!!');
}

manji6();

//このように、returnを使うとその時点で関数は終わるので、注意が必要です。

function manji7(){
    console.log('maji');
    return;
    console.log('manji');
}

//このように、returnは何も返さなくてもいいです。普通に、関数を強制終了したいときに使えます。例えば

function manji8(manji){
    console.log('maji');
    if(manji!='manji')
        return;
    console.log(manji);
}

manji8('manji');

manji8('monji');

//次に、ていきじっこうをやってみましょう。
setInterval(manji,1000);

//ここでは()をつけないことをいう。()をつけるとmanjiを使うという意味、つけないとmanjiそのものを指定する。

//reload

let timer=setInterval(manji,1000);

clearInterval(timer);

console.log(timer);

//setIntervalはタイマーを識別するための数字を返し、それを使ってタイマーを止めることができるって感じ。面白いね。

let testButton=document.getElementById('testButton');

testButton.onclick=manji;

//click

//reload
let testButton=document.getElementById('testButton');

testButton.addEventListener('click',manji);

//addとの違い。addは何個も同じイベントを追加できる。