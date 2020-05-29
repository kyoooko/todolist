// コンポーネント
// Vue.component('hello-component',{
//   template: '<p>Hello</p>'
// })


var app = new Vue({
  el: '#app',
  data:{
    newItem:'',
    todos:[]
  },
  methods:{
    addItem:function(event){
      // alert();
      // 未入力なら追加しない
      if(this.newItem == '') return;
      var todo={
        item: this.newItem,
        // タスクの完了未完了
        isDone:false
      };
      this.todos.push(todo);
      // タスク追加後の文字列クリア
      this.newItem= '';
    },
    
    //  リストの削除
    deliteItem:function(index){
      // alert(index);
      this.todos.splice(index,1)
    }
  }
})

