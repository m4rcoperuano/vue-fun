<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="https://vuejs.org/images/logo.png"/>
            <span>
                Vue Fun
            </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class='nav-link' to="/">
                        Home
                    </router-link>
                </li>
                <li class="nav-item active">
                    <router-link class='nav-link' to="/popanim">
                        Pop Animations
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "Navigation",
        mounted() {
            $(".navbar-collapse a").click(function () {
                $(".navbar-collapse").collapse("hide");
            });
        }
    }
</script>

<style scoped>
    .navbar-brand img {
        width: 35px;
    }
    .navbar {
        margin-bottom:20px;
    }
</style>