<template>
    <div class="todo-footer" v-show="totalCount">
        <label>
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>已完成{{ completedCount }}/全部{{ totalCount }}</span>
        <button class="btn" @click="deleteFinishedItem()">清除已完成任务</button>
    </div>
</template>

<script lang="js">
export default {
    name: 'TodoFooter',
    data() {
        return {

        };
    },
    methods: {
        deleteFinishedItem() {
            //检查是否有已完成的任务
            if (this.completedCount === 0) {
                alert('暂时没有已完成的任务');
                return;
            }
            //通知App.vue删除已完成任务
            this.deleteFinishedTodos()
        }
    },
    props: ['todos', 'checkAllTodo', 'deleteFinishedTodos'],
    computed: {
        totalCount() {
            return this.todos.length
        },
        completedCount() {
            let i = 0
            this.todos.forEach((todo) => {
                if (todo.completed)
                    i++;
            })
            return i
        },
        // completedCount() {
        //     return this.todos.reduce((pre, current) => pre + (current.completed ? 1 : 0), 0)
        // }
        isAll: {
            get() {
                return this.completedCount === this.totalCount && this.totalCount > 0
            },
            set(value) {
                //通知App勾选所有，取消勾选
                console.log('@', value)
                this.checkAllTodo(value)
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.btn {
    float: right;
    //display: none;
    margin-top: 3px;
    background-color: rgb(173, 22, 22);
    color: white;
}
</style>