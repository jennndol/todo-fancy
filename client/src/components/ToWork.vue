<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="list-group">
            <a v-on:dblclick="isDone(todo._id)" class="list-group-item" v-for="(todo, index) in todos" :key="todo._id"
              title="Double click for marking this todo as completed">
              <strike v-show=todo.isCompleted>
                <h4>{{todo.task}}
                  <small>{{ todo.createdAt.slice(0,10).split('-').join('/') }}</small>
                  <a v-on:click="remove(todo._id, index)" class='close' aria-hidden='true' title="Click for removing todo">&times;</a>
                </h4>
              </strike>
              <h4 v-show="!todo.isCompleted">{{todo.task}}
                <small>{{ todo.createdAt.slice(0,10).split('-').join('/') }}</small>
                <a v-on:click="remove(todo._id, index)" class='close' aria-hidden='true' title="Click for removing todo">&times;</a>
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>

    <footr></footr>
  </div>
</template>

<script>
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";

  export default {
    components: {
      'navbar': Navbar,
      'footr': Footer,
    },
    computed: {
      splittedDate(index) {
        this.todos[index].createdAt.slice(0, 10).split('-').join('/')
      }
    },
    data() {
      return {
        todos: null,
        wannaEdit: false,
        editedTask: {}
      }
    },
    created() {
      axios.get('http://localhost:3000/todos/towork', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(payload => {
          this.todos = payload.data.docs;
        })
        .catch(error => {
          console.log(error);
        })
    },
    mounted: function () {
      $(document).ready(function () {
        if (!localStorage.getItem('token')) {
          window.location.href = ('/#/login');
          location.reload();
        }
      })
    },
    methods: {
      isDone(id) {
        axios.put(`http://localhost:3000/todos/${id}/isdone`, {}, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(payload => {
            console.log(payload);
            location.reload();
          })
          .catch(error => {
            console.log(error);
          });
      },
      remove(id, index) {
        axios.delete(`http://localhost:3000/todos/${id}`, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(payload => {
            this.todos.splice(index, 1);
            console.log(payload);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }

</script>

<style scoped>
  .edit-form {
    margin-top: 3em;
  }

  form {
    display: inline-block;
  }

  .form-group {
    text-align: center;
    padding-bottom: 25px;
  }

  #todo {
    margin: 0 auto;
    width: 500px;
  }

  a.close {
    float: right;
  }

  .edit-btn {
    margin-top: 5px;
  }

</style>

