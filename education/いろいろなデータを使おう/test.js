//配列について説明します。
let arr=['maji','manji'];

console.log(arr[0]);
console.log(arr[1]);

//こんな感じで、複数のデータを順番で保存できるやつです。

arr.push('moji');

console.log(arr);

//こんな感じで追加できます。

let arr2=[['maji','manji'],['moji'],['monji']];
console.log(arr[0][1]);

//こんな感じで配列の中に配列をぶち込めます。

let arr3=[[[[[[[1]]]]]]];
console.log(arr[0][0][0][0][0][0][0]);
//一応こんなこともできます。

//次にオブジェクトの説明します。
let obj={hp:100,power:10,speed:10};

console.log(obj.hp);

console.log(obj['hp']);

//こういう感じです。キャラクターの状態を管理したりするのに使ったり、いろいろできます。