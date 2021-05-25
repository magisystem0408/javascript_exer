// 非推奨
const promiseFunc = () =>{
    return new Promise((resolve,reject) =>{
        someAsynchronousFunc(() =>{
        // 何かしらの非同期処理
        }).then(() => {
            // 非同期処理が成功した場合
            return resolve('成功')
        }).catch(() =>{
            //非同期処理が失敗した場合
            return reject('失败')
        })
    })
}

// 実用例
// まずはpromiseを使用しなかった場合

const getGitUsername = () =>{
    const url = 'https://api.github.com/users/magisystem0408'

    // APIを叩くときにfetchメソッドで呼び出し
    fetch(url).then(res => res.json())
        .then(json =>{
            console.log('これは非同期処理成功のメッセージです。')
            return json.login
        }).catch(error => {
            console.log('これは同期処理失敗時のメッセージです',error)
            return null
    })
}

const  message ='GitのユーザーIDは';
const  username= getGitUsername();
console.log(message+username);

// 実行結果
// これは非同期処理の結果を待たずに表示させてるのでundefinedが検出されてしまっている
"GitのユーザーIDはundefined"


// promise型を使用した場合
const getGitUsername = () =>{
    return new Promise((resolve, reject) =>{
        const url ='https://api.github.com/users/magisystem0408'

            fetch(url).then(res => res.json())
            .then(json =>{
                console.log('これは非同期処理成功時のメッセージ')
                return resolve(json.login)
            }).catch(error => {
                console.error('これは非同期処理失敗例のメッセージ',error)
                return  reject(null)
        })
    })
}

const messages ='GitのユーザーIDは'
    // .thenでチェインしてあげる
    //　thenには関数の実行した結果が帰ってくる
getGitUsername().then(username =>{
    console.log(message +username)
})