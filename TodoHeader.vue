<template>
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" class="todo-header" v-fbind v-model="title"
        @keyup.enter="addItem">
</template>

<script lang="js">
import { nanoid } from 'nanoid';
export default {
    name: 'TodoHeader',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addItem() {
            //校验数据
            // if (!e.target.value)
            //     return alert('传入内容不能为空！')
            if (!this.title.trim()) return alert("传入内容不能为空！")
            //将用户的输入包装成一个todo对象；由于没有服务器，所以要自己传id
            //const todoObj = { id: nanoid(), title: e.target.value, completed: false }
            const todoObj = { id: nanoid(), title: this.title, completed: false }
            //调用App.vue传过来的函数，并传入用户输入的todo对象让其添加
            this.addTodo(todoObj)
            //e.target.value = ''
            this.title = ''
        }
    },
    props: ['addTodo']

}
</script>

<style lang="scss" scoped>
.todo-header {
    width: 560px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.search-input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #20a1ec;
    border: 1px solid black;
}

.todo-header:focus {
    outline: none;
    border-color: #20a1ec;
    box-shadow: inset 0 1px 1px #5b72d6;
}
</style>