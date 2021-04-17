// コールバック関数
function hello(callback){
    // 変数にパーティションをつけると関数になる
    console.log('hello '+ callback());
}
function getName(){
    return 'Codemamushi'
}

// 関数を渡す
// パーティションをつけると実行結果が渡って来てしまうのでつけない
hello(getName);

// 他の記述方法として無名関数をコールバック関数として使う方法もある
hello(function(){
    console.log('Code') ;
});

// これをアロー関数でかくと
hello(() =>'Code');


// 関数内に引数を渡したい時
// 第二引数に入れる
function hello(callback,lastname){
    console.log(callback(lastname))
}

hello(function(name){
  return 'Code'+name;
},'mamushi');

// 実行結果
// Codemamushi

function doSomething(a,b,callback){
    const result = callback(a,b);
    console.log(result);
}

function mltiply(a,b){
    return a*b;
}

function plus(a,b){
    return a+b;
}

doSomething(2,2,mltiply)
// 実行結果
// 4
doSomething(2,3,plus)
// 実行結果
// 5


// コールバック関数
const arry = [1,2,3,4,5];

function forEach(ary,callback){
    for(let i=0; i<ary.length;i++){
       callback(ary[i]);
    }
}
function log(val){
    console.log(val);
}

function double(val){
    val =val*2;
    log(val);
}

forEach(arry,log);
forEach(arry,double);

// forEachメソッドを作る
const arry = [1,2,3,4,5];

// 第二引数にはindexが
// 第三引数には配列そのものが入ってくる
arry.forEach(function(val,i,ary){
    console.log(val,i,ary);
});

// 実行結果
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]

// 上のforeachのvalをアロー関数で書き直した場合
arry.forEach(v => console.log(v));


// reduceメソッドは配列の中身をいじるときに使う
const arry = [1,2,3,4,5];

arry.reduce(function(accu,curr){
    console.log(accu,curr);
    return accu+curr;
});

// 実行結果
// 1 2
// 3 3
// 6 4
// 10 5

// 10は1ループ目のaccuに渡ってくることになる
arry.reduce(function(accu,curr){
    console.log(accu,curr);
    return accu+curr;
},10);

const str ='animation';
const strArry =str.split('');
console.log(strArry)

// 実行結果
//     [
//     'a', 'n', 'i',
//         'm', 'a', 't',
//         'i', 'o', 'n'
//     ]


const str ='Animation';
const strArry =str.split('');

function tag(accu,curr){
    return `${accu}<${curr}>`;
}

function reduce(arry,callback,defaultValue){
    let accu =defaultValue;
    for (let i=0; i<arry.length;i++){
        let curr =arr[i];
        accu = callback(accu,curr);
    }
    result accu;
}
const result =reduce(strArry,tag,"");
console.log(result);