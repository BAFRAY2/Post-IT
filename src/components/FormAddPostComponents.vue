<template>
    <div>
        <form @submit.prevent="">
            <label for="title"><strong>Title of Post IT</strong></label>
            <br><br>
            <input type="text" name="title" v-model="titlePostIt" id="" required>
            <br><br>
            <label for="content"><strong>Content :</strong></label>
            <br><br>
            <textarea name="content" id="" cols="30" rows="10" v-model="contentPostIt" required></textarea>
            <br><br>
            <input type="submit" class="btn btn-success" value="Save Post It" v-on:click="createdPostIt()">
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { usePostsIt } from '@/stores/postIt';
//import { trim } from 'cypress/types/jquery';
const store = usePostsIt();
var titlePostIt = ref("");
var contentPostIt = ref("");
//const apiUrl="http://62.72.5.95:1999/notes"
function createdPostIt() {
    if (titlePostIt.value.trim() === "" || contentPostIt.value.trim() === "") {
        alert("Title or content invalid. You must not leave any fields blank.");
    } else {
        store.createdPostIt(titlePostIt.value, contentPostIt.value);
        router.push("/");
    }
}
</script>

<style scoped></style>