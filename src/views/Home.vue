<template>
  <div class="home mt-4 pe-5 ps-5">
    <div class="d-flex justify-content-between">
      <b-button 
        class="customButton" 
        pill 
        v-b-modal.todoItemModal> Agregar ToDo</b-button>
      <b-form-group>
        <b-input-group size="sm">
          <b-form-input
            v-model="filter"
            type="search"
            placeholder="Type to Search"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
    </div>
    <b-table 
      striped hover 
      :items="items" 
      :fields="fields"
      :filter="filter"
      :responsive="true">
    <template #cell(options)="options">
      <b-dropdown 
        size="lg"  
        variant="link" 
        toggle-class="text-decoration-none"
        no-caret
        class="buttonContent">
        <template #button-content >
          <b-icon icon="three-dots"></b-icon>
        </template>
        <b-dropdown-item @click="editItem(options.item.id)">Editar</b-dropdown-item>
        <b-dropdown-item @click="deleteItem(options.item.id)">Eliminar</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-table>
  <b-modal 
  id="todoItemModal" 
  title="Agregar ToDo"
  hide-footer>
    <task-form @onAddNewTask="addNewTask" />
  </b-modal >
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm"
export default {
  name: 'Home',
  components: {
    TaskForm
  },
  data: () => ({
    fields: [
          { key: 'id', label: 'ID'},
          { key: 'title', label: 'Título' },
          { key: 'description', label: 'Descripción' },
          { key: 'date', label: 'Fecha' },
          { key: 'options', label: 'Opciones' },
        ],
    items: [],
    filter: null,

  }),
  methods: {
    addNewTask(event) {
      this.items.unshift(event);
      localStorage.setItem('todoItem', JSON.stringify(this.items));
      this.$bvModal.hide('todoItemModal');
    },
    editItem(id) {
      this.$router.push({name:'editTask', params:{id}});
    },
    deleteItem(id) {
      this.$swal({
        icon: 'error',
        title: `¿Estás segura/o de eliminar el item con el id ${id}?`,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#0dcaf0',
        cancelButtonColor: '#db3545',
      }).then(result => {
        if(result.value) {
          this.items = this.items.filter(item => item.id !== id);
          localStorage.setItem('todoItem', JSON.stringify(this.items));
        }
      })
    }
  },
  mounted() {
    const getItemFromStorage = JSON.parse(localStorage.getItem('todoItem'));
    getItemFromStorage ? this.items = getItemFromStorage : null;
  }
}
</script>

<style lang="less">
h2#swal2-title {
    font-size: 18px;
}
.home {
  table {
    tbody tr td {
      .buttonContent {
        button {
          padding: 0px;
          color: #00718C;
        }
      }
    }
  }
}
#todoItemModal {
  .modal-dialog .modal-content .modal-header .close {
    background: white;
    border: none;
    font-size:20px;

  }
}
@media (max-width: 600px) {
  .home {
    padding: 0px 12px !important;
  }
}
</style>