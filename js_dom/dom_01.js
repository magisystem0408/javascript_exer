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
