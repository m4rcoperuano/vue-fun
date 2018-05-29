<template>
    <div class="route-container">
        <div class="row">
            <div class="col">
                <card-component class="bg-light">
                    <div class="card-header">
                        Hi.
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">I'm Marco Ledesma</h5>
                        <p class="card-text">
                            And this is my playground. I like to code, teach, and learn...everything.
                        </p>
                    </div>
                </card-component>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <transition name="fade">
                    <card-component class="bg-primary text-white" v-if="bounce">
                        <div class="card-header">
                            This should bounce up
                            <p>
                                It doesn't though, it just slides :[
                            </p>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Bounce bounce bounce</p>
                            <button class="btn btn-info" @click="before()">
                                Remove
                            </button>
                        </div>
                    </card-component>
                    <div v-else>
                        <button class="btn btn-primary" @click="next()">
                            Next!
                        </button>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import CardComponent from '../components/CardComponent'

    export default {
        components: {
            CardComponent
        },
        name: "Home",
        data() {
            return {
                bounce: false
            }
        },
        mounted() {

        },
        methods: {
            next() {
                this.bounce = true;
            },
            before() {
                this.bounce = false;
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active {
        transition: all .35s;
        /*animation: bounce-in .5s;*/
    }

    .fade-leave-active {
        transition:none;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-leave-to {
        transition:none;
    }

    .card.fade-enter {
        margin-top:100px;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>