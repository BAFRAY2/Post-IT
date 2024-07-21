<template>
  <div class="row">
    <div class="col-md-3">
      <div class="row">
        <br>
        <img id="logoSite" src="../assets/logoPostIt.png" alt="Logo du site Post IT">
        <hr>
      </div>
      <div class="row">
        <h3><i class="bi bi-plus-circle-fill"></i> Add Post</h3>
        <FormAddPostComponents />
        <hr>
      </div>
    </div>
    <div class="col-md-9">
      <h3>All Post information</h3>
      <br>
      <button v-on:click="router.push('/')" type="button" class="btn btn-dark"><i class="bi bi-arrow-left-square"></i>
        Back</button>
      <br> <br>
      <table>
        <tr>
          <td><strong>ID :</strong> </td>
          <td>{{ store.postIt._id }}</td>
        </tr>
        <tr>
          <td><strong>Title :</strong></td>
          <td>{{ store.postIt.title }} </td>
        </tr>
        <tr>
          <td><strong>Created at :</strong></td>
          <td>{{ moment(store.postIt.createdAt).format('DD/MM/YYYY') + ' at ' +
            moment(store.postIt.createdAt).format('hh:mm:ss') }}</td>
        </tr>
        <tr>
          <td><strong>Updated at : </strong></td>
          <td>{{ moment(store.postIt.updatedAt).format('DD/MM/YYYY') + ' at ' +
            moment(store.postIt.updatedAt).format('hh:mm:ss') }}</td>
        </tr>
        <tr>
          <td><strong>Content : </strong></td>
          <td>{{ store.postIt.content[0] }}</td>
        </tr>
        <br>
        <tr>
          <td><button type="button" class="btn btn-primary" data-bs-toggle="modal"
              data-bs-target="#myModal">Edit</button>
          </td>
          <td><button v-on:click="store.removePostIt(store.postIt._id);router.push('/')" type="button"
              class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </table>
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Post It</h4>
            </div>
            <div class="modal-body">
              <form @submit.prevent="">
                <label for="title"><strong>Title of Post IT</strong></label>
                <br><br>
                <input type="text" name="title" v-model="store.postIt.title" id="" required>
                <br><br>
                <label for="content"><strong>Content :</strong></label>
                <br><br>
                <textarea name="content" id="" cols="30" rows="10" v-model="store.postIt.content[0]" required></textarea>
                <br><br>
                <input type="submit" class="btn btn-success" value="Save Post It" v-on:click="editPost()">
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormAddPostComponents from '@/components/FormAddPostComponents.vue';
import { useRoute } from 'vue-router';
import moment from 'moment';
import { usePostsIt } from '@/stores/postIt';
import router from '@/router';
const store = usePostsIt();
const route = useRoute()
const ID = route.params.id;
store.getOnePostIt(ID);
function editPost() {
  store.editPost(ID);
  alert("Post Update");
}
</script>
<style scoped>
#logoSite {
  width: 200px;
}
</style>