// 上書きできない
const name ='Tom';
// 上書きできる
let mamushi='timi';

console.log('hello'+name);

// 型を確認するには
console.log(typeof mamushi);

// 関数定義

function hello(name,age){
    console.log('hello '+ name);
    return name+age;
}

const hello =function(name,age){
    // この形でも関数を定義できる
}

// 関数を持たない関数
// 無名関数の場合関数の定義が後に来ても大丈夫
// コールバック関数で使用する
function mamushi(){
    return name +age;
}

// メソッドとプロパティ
let hello ='hello world';
// .で繋ぐことをプロパティと呼ぶ
console.log(hello.toUpperCase());
// 実行結果
// HELLO WORLD
// hello

console.log(hello.substring(0,5));
// 実行結果

let hello ='hello world';
console.log(hello.split(' '));

// 実行結果
// [ 'hello', 'world' ]


// 配列
const array =new Array(1,2,3,4,5);
console.log(array);

// 実行結果
// [ 1, 2, 3, 4, 5 ]
// 値の追加
array.push('arrayの末尾に新しく追加される')

array.unshift('先頭に代入することができる')

// 末尾を削除できる
array.pop()

const val =arry.pop();
console.log(val);
// 削除した値が変数の中に入る

// 先頭の要素を削除する
const val2 = array.shift();

// オブジェクト管理
const person ={};
person.name ='mamushi';

const person ={
    name:['Code','mamushi'],
    age:32,
    gender:'male',
    intersts:{
        sports:'soccer'
    },
    // 関数も格納できる
    getFullName:function(){
        // thisは宣言された値のオブジェクトをさす
        console.log(this.name[0]+this.name[1])
    }
};
// キーで指定するとバリューが取り出せる
person.name;
console.log(person.name)

// 実行結果
// [ 'Code', 'mamushi' ]

// 階層も深くできる
person.intersts.sports

// 値の更新
person.age =12;

person.getFullName();
// 実行結果
// Codemamushi
