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