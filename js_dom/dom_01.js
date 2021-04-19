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


document.addEventListener("DOMContentLoaded",function(){
    dcl.classList.add('done');
     });

// こっちは全てダウンロードがし終わった状態で読み込まれる
// windowで登録する
// loadは遅い
window.addEventListener("load",function(){
    load.classList.add('done');
})
