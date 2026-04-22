<template>
    <ul class="todo-list">
        <TodoItem v-for="todoObj in props" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo"
            :deleteTodo="deleteTodo" />
    </ul>
</template>
<script lang="js">
import TodoItem from './TodoItem.vue';

export default {
    name: 'ItemList',
    components: {
        TodoItem
    },

    methods: {

    },
    //声明接收:props='todos'
    props: ['props', 'checkTodo', 'deleteTodo']
}
</script>
<style lang="scss" scoped>
.todo-list {
    margin-left: 0px;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 0px;
}
</style>