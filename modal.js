/** Vue アプリケーションの生成 **/
function createApp() {
  new Vue({
    el: "#app",
    data:{
      //フラグを追加する
      isOpenModal: false,
    },
    methods: {
      //モーダルを開く
      openModal(){
        this.isOpenModal = true
      },
      //モーダルを閉じる
      closeModal(){
        this.isOpenModal = false
      }
    },
    mounted(){
      //クリックイベント内でVueの関数やプロパティを呼び出すために、thisを変数に代入しておく
      const _this = this
      //Vueアプリ内のHTMLが表示されたあとに呼ばれる
      //ページ内のすべてのクリックイベントを取得
      document.addEventListener("click",function (event){
        //クリックした要素の親要素に#modalの要素があるか調べる
        const isClickOverlay = event.target.closest("#modal")
        //モーダルが開いているかつモーダル外のクリックなら、モーダルを閉じる
        if (_this.isOpenModal && isClickOverlay === null){
          _this.closeModal()
        }
      })
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
