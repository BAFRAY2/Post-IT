/* import { ref, computed } from 'vue' */
import { defineStore } from 'pinia'
import router from '@/router'

export const usePostsIt = defineStore('postsItStore', {
    state: () => ({
        postsIt: [],
        postIt: '',
        errorInfos: false,
    }),
    actions: {
        //var resultat ;

        async getAllPostIt() {
            const apiUrl = "http://62.72.5.95:1999/notes"
            await fetch(apiUrl)
                .then((response) => response.json())
                .then((response) => { (this.postsIt = response.notes) })

        },
        removePostIt(id) {
            fetch('http://62.72.5.95:1999/notes/' + id, { method: 'DELETE' })
                .then(() => this.status = 'Delete successful')
                .then(()=>this.getAllPostIt())
            alert("Post delete");
        },
        getOnePostIt(id) {
            fetch('http://62.72.5.95:1999/notes/' + id, { method: 'GET' })
                .then((response) => response.json())
                .then((response) => this.postIt = response)
                .then((response)=>{
                    if(response.error){
                        //console.log(response.error);
                        this.errorInfos = true;
                        router.push('/:catchAll(.*)')
                    }
                })
        },
        createdPostIt(title,content) {
            const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: title, content: [content] })
          };
          fetch("http://62.72.5.95:1999/notes", requestOptions)
            .then(response => response.json())
            .then(data => (this.postId = data.id))
            .then(()=>{this.getAllPostIt()});
            alert("Post created");
        },
        editPost(id) {
            const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title:this.postIt.title, content:[this.postIt.content[0]] })
            };
            fetch("http://62.72.5.95:1999/notes/" + id, requestOptions)
              .then(response => response.json())
              .then(data => (this.updatedAt = data.updatedAt))
              .then(()=>{this.getAllPostIt()})
              //.then(() => {router.push("/")})
          }
    }
})