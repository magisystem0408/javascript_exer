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
