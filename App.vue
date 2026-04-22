<template>
  <div id="app">
    <TodoHeader :addTodo="addTodo" />
    <ItemList :props="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :deleteFinishedTodos="deleteFinishedTodos" />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import ItemList from './components/ItemList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    ItemList,
    TodoFooter
  },
  data() {
    return {
      item: [],
      todos: [
        { id: '001', title: '吃饭', completed: true },
        { id: '002', title: '睡觉', completed: false },
        { id: '003', title: '敲代码', completed: true }
      ],
    };
  },
  methods: {
    //添加1个 Todo
    addTodo(x) {
      console.log('我是App，我接收到了数据：', x)
      //拿到数据，将其放入todos
      this.todos.unshift(x);
    },
    //勾选，取消勾选 Todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
      })
    },
    //删除某个Todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    //勾选，取消勾选所有Todo
    checkAllTodo(completed) {
      this.todos.forEach((todo) => {
        todo.completed = completed
      })
    },
    deleteFinishedTodos() {
      if (confirm("确定删除已完成的所有任务？"))
        this.todos = this.todos.filter((todo) => {
          return !todo.completed

        })
    }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 580px;
  display: flex;
  flex-direction: column;
  border: 2px solid #deeff3;
  padding: 10px;
  ;
}
</style>
