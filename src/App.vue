<template>
    <div id="wrapper">
        <navigation></navigation>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap/dist/js/bootstrap.js'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Navigation from './components/Navigation'

    export default {
        name: 'app',
        components: {
            Navigation
        }
    }
</script>

<style>
    #app {

    }
</style>
