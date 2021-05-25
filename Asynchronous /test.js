const fetch =require("node-fetch")

const getGitUsername =async () =>{
    const message ='GItのユーザーIDは';
    const url ='https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=5af0c18a67084bde7ce6404876745581&id=a123142133131'
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
