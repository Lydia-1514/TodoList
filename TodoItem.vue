<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"> <!--或@click-->
            <!-- 如下代码也能实现功能，但不太推荐，因为有点违反原则，因为修改了props，props是只读的。藏在对象里改，Vue无法发现。
             Vue只能识别到 props对象的改变，而不能识别到对象里面某个属性值的改变，Vue只是做了个浅层次的监视 -->
            <!-- <input type="checkbox" v-model="todo.completed"> -->
            <span class="list-text">{{ todo.title }}</span>
        </label>
        <!-- <button class="delete-btn" style="display: none;">删除</button> -->
        <button class="btn delete-btn" @click="deleteItem(todo.id)">删除</button>
    </li>
</template>
<script lang="js">
export default {
    name: 'TodoItem',
    data() {
        return {

        };
    },
    methods: {
        handleCheck(id) {
            //通知App.vue勾选Item
            this.checkTodo(id)
        },
        deleteItem(id) {
            //通知App.vue删除对应Item
            if (confirm('确定删除吗？')) {
                console.log(id)
                this.deleteTodo(id)
            }

        }
    },

    props: ['todo', 'checkTodo', 'deleteTodo'],
}
</script>
<style lang="scss" scoped>
li {
    list-style: none;
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
    border-bottom: 1px solid #ccc;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 8px;
    // background-color: rgb(173, 22, 22);
    color: white;
}

li::before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: rgb(162, 165, 168);
}

li:hover button {
    display: block;
    background-color: rgb(163, 102, 60);
}
</style>