// クラスの継承
class TextAnimation{
    constructor(el){
        //__init__と同様
        this.el = document.querySelector(el);
        this.product =[el]
    }
    // functionは不要で描ける
    animate(){
        this.el.classList.toggle('inview');
    }
    addProduct(item){
        // 配列の場合はpushになる
        this.product.push(item)
    }
}

const text_animation =new TextAnimation('test');
console.log(text_animation.animate);


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



