// ループの記載

const arry =[1,2,3,4,5]

for (let i =0; i<arry.length;i++){
    console.log(i)
}

// for in と for ofについて

for(let i in arry){
    console.log(i);
}

// 実行結果
// 0
// 1
// 2
// 3
// 4

// ofとした時は値が渡ってくる
for(let v of arry){
    console.log(v);
}

// 実行結果
// 1
// 2
// 3
// 4
// 5
const todos =[
    {
        id:1,
        title:'gotmamushi',
        completed:true
    },
    {
        id:2,
        title:'gotmamushi',
        completed:true
    },
    {
        id:3,
        title:'gotmamushi',
        completed:true
    },
]

for(let i =0 ; i<todos.length; i++){
    // それぞれのタイトルが取得できる
    let todo =todos[i];
    console.log(i,todos[i].title);

    // completedが trueの物だけを取得する
    if(todo.completed===true){
        console.log(i,todo.completed);
    }
}

for(let i in todos){
    let todo =todos[i];
    if(todo.completed ===true){
        console.log(i,todo.title);
    }
}

for(let todo in todos){
    console.log(todo);
}
// 実行結果
// { id: 1, title: 'gotmamushi', completed: true }
// { id: 2, title: 'gotmamushi', completed: true }
// { id: 3, title: 'gotmamushi', completed: true }

// if文

if(false){
    console.log('this is true')
}else if(true){
    console.log('this is false')
}

// 関数定義
function hello(){
    console.log('hello');
}

hello('code mafia');

function hello(name ='Tom'){
    console.log('hello'+name)
}
hello();

// アロー関数での記述方法
const hello = (name ='Tom') => console.log('hello' +name )

// これは戻り値が40という意味
const hello =(name,age) => 40;



// 通常で書いた場合
const arry =[1,2,3,4,5];
arry.forEach(function(value){
    console.log(value);
})

// アロー関数で書いた場合
arry.forEach(value => console.log(value));

