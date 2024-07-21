<template>
            <div class="card-header border-dark">
                <h5 class="card-title"> {{ props.title }} </h5>
            </div>
            <div class="card-body text-dark">
                <h6 class="card-title"> Post Update the {{ moment(props.updatedAt).format('DD/MM/YYYY') }} </h6>
                <p class="card-text"> {{ props.content }}  </p>
                <h6 class="card-title"> Created on {{ moment(props.createdAt).format('DD/MM/YYYY') }} </h6>
            </div>
            <div class="card-footer border-dark">
                <router-link :to="`/note/${ props.id }`">
                    <i class="bi bi-eye-fill"></i> See More
                </router-link>
            </div>
</template>

<script setup>
// import OneItem from '@/views/OneItem.vue';
import moment from 'moment';
import { RouterLink } from 'vue-router';
const props = defineProps(["id","title","content","createdAt", "updatedAt"]);
</script>

<style scoped></style>