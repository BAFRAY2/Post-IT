<template>
  <div class="row">
    <div class="col-md-3">
      <div class="row">
        <br>
        <img id="logoSite" src="../assets/logoPostIt.png" alt="Logo du site Post IT">
        <hr>
      </div>
      <div class="row">
        <h3><i class="bi bi-plus-circle-fill"></i> Add a Post It</h3>
      </div>
      <br>
      <FormAddPostComponents />
    </div>
    <div class="col-md-9">
      <h3>Welcome ! You can take inspiration from the post It already published on our platform.</h3>
      <br><br>
      <div v-if="statusLoader">
        <LoaderComponent />
        <strong>Loading in progress</strong>
      </div>
      <div v-else class="row row-cols-1 row-cols-md-3 g-4">
        <div class="card border-dark m-1 bg-light" style="width: 18rem;" v-for="donnee in store.postsIt" v-bind:key="donnee._id">
          <PostComponents :id=donnee._id :title=donnee.title.slice(0,20) :content=donnee.content[0].slice(0,100)
            :created-at=donnee.createdAt :updated-at=donnee.updatedAt />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FormAddPostComponents from '@/components/FormAddPostComponents.vue';
import PostComponents from '../components/PostComponents.vue'
import { onMounted } from 'vue';
import { usePostsIt } from '@/stores/postIt';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { ref } from 'vue';
var statusLoader = ref(true);
const store = usePostsIt();
onMounted(async() => {
  await store.getAllPostIt();
  statusLoader.value = false;
})
</script>
<style scoped>
#logoSite {
  width: 200px;
}
</style>
