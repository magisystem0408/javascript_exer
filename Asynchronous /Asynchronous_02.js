// 非同期処理を伴う関数定義にasync
// 非同期処理を伴う関数実行時にawaitをつける

const asyncAwaitFunc = async() =>{
    const hoge =await someAsynchronousFunc(()=>{
        // 何かしらの非同期処理
    }).then(() => {
        // 成功した時
        return '成功！'
    }).catch(() =>{
        // 失敗した時
        return '失敗！'
    })
}

// 実際の応用例
const getGitUsername =async () =>{
    const message ='GItのユーザーIDは';
    const url ='https://api.github.com/users/magisystem0408'
    const json = await fetch(url)
        .then(res =>{
            console.log('これは非同期処理成功時のメッセージです。')
            return res.json()
        }).catch(error =>{
            console.error('これは非同期処理失敗時のメッセージです',error)
            return null
        });
    console.log(message +json.login)
}

getGitUsername()