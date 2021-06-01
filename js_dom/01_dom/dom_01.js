// dom操作の基本

const btn =document.querySelector('#btn');
const h1 =document.querySelector('h1');

 // イベント要素
// btn.addEventListener('click',function(){
//     alert('hello');
// });

// ベターな書き方は
const hello =  function(){
    alert('hello');
}
btn.addEventListener('click',hello);

// 登録したイベントを解除するには
btn.removeEventListener(' click',hello);




// 関数定義してコールバックで呼び出してあげる

function hello() {
    this.style.color='red';
}

function changeColor(){
    h1.style.color='red';
};

function changeBgColor(){
    h1.style.background='green';
}


btn.addEventListener('click',changeColor);
btn.addEventListener('click',changeBgColor);





//ロードが始まったら動き出す設定
document.addEventListener("DOMContentLoaded",function(){
    dcl.classList.add('done');
     });

// こっちは全てダウンロードがし終わった状態で読み込まれる
// ※windowで登録する。基本非推奨
window.addEventListener("load",function(){
    load.classList.add('done');
})



// DOMの要素を変更する操作の種類
// 実用例
// アップロードされた画像のプレビュー
// ユーザーも投稿をタイムラインに表示
// 送信されたコメントを表示


// DOM要素の取得・変更ができる
// innerText
const element = document.getElementById('hoge');
console.log(element.innerText);

element.innerHTML ='ここで書き換えられる';

//DOM内のHTMLを変更する
// 中身全体を設定できる
// innerHTML/outerHTML

const element2 = document.getElementById('parent');

const literal ='書き換えられたよ！'
// テンプレートリテラル
//中にhtmlの要素を調べる

element2.innerHTML =`<p id ="child>"HTMLのダグごと書き換えられる${literal}</p>`



// DOM要素の属性を変えるもの
// setAttribute()
//画像を入れ替えたい時よく使う

const element3 = document.getElementById(id);
// 第一引数で変更対象の属性名
// 第二引数で変更する値
element3.setAttribute('src','変更する値');


//タイムラインに投稿したら表示させる
// insertAdjacentHTML()
// 指定したDOM要素の相対的な位置にHTMLを挿入する

// beforebegin：自身の直前
// afterbegin：子要素の先頭
// beforeend：子要素の末尾
// afterend：自身の直後

// 実用例
// リストの子要素をどんどん追加していく


let counter =1;

const element4 = document.getElementById(id);

element4.insertAdjacentHTML(
    'beforeend',
    `<div>${counter}つ目の子要素だよ</div>`
)
counter ++;

// 応用例
// https://codepen.io/Torahack/pen/eYpLVLR