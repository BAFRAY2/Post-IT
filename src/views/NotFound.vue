<template>
    <div>
        <button v-on:click="router.push('/')" type="button" class="btn btn-dark"><i class="bi bi-arrow-left-square"></i>
            Back to home page
        </button>
    </div>
    <div>
        <img id="img" src="../assets/404-status-code.png" alt="Page 404 Not Found">
    </div>
</template>

<script setup>
    import router from '@/router';
</script>

<style>
img {
    width: 2000px;
}
</style>