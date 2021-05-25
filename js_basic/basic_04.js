// クラスの継承
class TextAnimation{
    constructor(el){
        //__init__と同様
        this.el = document.querySelector(el);
    }
    animate(){
        this.el.classList.toggle('inview');
    }
}

// extendsの後ろに継承先をかく

class TextAnimation2 extends TextAnimation {
    constructor(el){
        // superで親のコンストラクターから継承できる
    super(el);
    // 独自の変数を定義する
    this.el2 =el;
    }
    animate(){
        // ここでオーバーライド上書きができる
    }
    }



    // filter関数
const score =[10,20,30,40];
const newScores = score.filter((value)=>value >=30);
console.log(newScores)
// 実行結果
// [ 30, 40 ]
