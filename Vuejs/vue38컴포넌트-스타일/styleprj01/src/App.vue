<template>
    <div id="app">
        <h2>{{ msg }}</h2>
        <child1 />
        <child2 />
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import Child1 from './components/Comp_Child1.vue';
import Child2 from './components/Comp_Child2.vue';

export default {
    props: [],
    data: function () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    components: {
        child1: Child1,
        child2: Child2
    }
};
</script>

<style>
</style>
