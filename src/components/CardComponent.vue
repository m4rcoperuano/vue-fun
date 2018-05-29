<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CardComponent"
    }
</script>

<style scoped>
    .card {
        margin-bottom:20px;
    }
</style>