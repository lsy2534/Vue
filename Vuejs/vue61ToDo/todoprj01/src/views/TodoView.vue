<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>

        <!-- TodoInput -->
        <TodoInput v-on:addTodo="addTodo"></TodoInput>

        <!-- TodoList -->
        <TodoList
            v-bind:todoItems="todoItems"
            v-on:doneToggle="doneToggle"
            v-on:removeTodo="removeTodo"
        ></TodoList>
        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';
import TodoInput from '../components/todo/TodoInput.vue';
import TodoList from '../components/todo/TodoList.vue';

export default {
    props: [],
    data: function () {
        return {
            todoItems: [
                { id: 1, todo: '영화보기', done: false },
                { id: 2, todo: '주말 산책', done: true },
                { id: 3, todo: 'ES6 학습', done: false },
                { id: 4, todo: '잠실 야구장', done: false }
            ]
        };
    },
    methods: {
        clearAll() {
            this.$set(this.$data, 'todoItems', []);
        },
        addTodo(newTodoItem) {
            if (!(newTodoItem === null)) {
                const maxid = this.$data.todoItems
                    .map((itme) => {
                        return itme.id;
                    })
                    .reduce((pValue, cValue) => {
                        return pValue > cValue ? pValue : cValue;
                    }, 0);
                //const maxid_1 = Math.max(...maxid);
                console.log(maxid);

                const newTodoList = {
                    id: maxid + 1,
                    todo: newTodoItem,
                    done: false
                };
                //this.$data.todoItems.push(newTodoList);
                this.$set(
                    this.$data.todoItems,
                    this.$data.todoItems.length,
                    newTodoList
                );
            }
        },
        doneToggle(id) {
            const newTodoItems = this.$data.todoItems.map((item) => {
                if (item.id === id) {
                    item.done = !item.done;
                }
                return item;
            });
            //thist.$data.todoItems = newTodoItems;
            this.$set(this.$data, 'todoItems', newTodoItems);
        },
        removeTodo(id) {
            const newTodoItems = this.$data.todoItems.filter((item) => {
                return item.id !== id;
            });
            this.$set(this.$data, 'todoItems', newTodoItems);
        }
    },
    components: {
        TodoHeader: TodoHeader,
        TodoFooter: TodoFooter,
        TodoInput: TodoInput,
        TodoList: TodoList
    }
};
</script>
