<template>
    <div>
        <form 
        class="d-flex formTodoItem" 
        ref="form"
        @submit.stop.prevent="handleSubmit">
            <b-form-group
            label="Título"
            label-for="title-input"
            class="mb-2"
            invalid-feedback="El título es requerido"
            :state="titleState"
            >
                <b-form-input
                    id="title-input"
                    v-model="todoItem.title"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group
            label="Descrición"
            label-for="description-input"
            class="mb-2"
            >
                <b-form-input
                    id="description-input"
                    v-model="todoItem.description"
                    required
                ></b-form-input>
            </b-form-group> 
            <b-button 
                type="submit" 
                class="d-flex justify-content-center customButton"
                > 
                {{id? 'Editar ToDo' : 'Agregar ToDo'}}
             </b-button>
        </form>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid';
import { format } from 'date-fns';
export default {
    name: 'todoItem',
    props: {
        id: {
            type: String
        }
    },
    data: () => ({
        todoItem: {
            id: uuid.v4(),
            title: "",
            description: "",
        },
        itemsFromLocalStorage: [],
        findTodoItem: {},
        titleState: null
    }),
    methods: {
        handleSubmit() {
            if(this.id) {
                const updateItemsFromLocalStorage = this.itemsFromLocalStorage.map(item => {
                    const formatDate = format(new Date(), 'dd-MM-yyyy');
                    if(item.id === this.findTodoItem.id) {
                        return {...this.findTodoItem, date: formatDate};
                    }
                    return item;
                })
                localStorage.setItem('todoItem', JSON.stringify(updateItemsFromLocalStorage));
                this.$router.push({name:'home'});
            } else {
                const formatDate = format(new Date(), 'dd-MM-yyyy');
                this.$emit('onAddNewTask', {...this.todoItem, date: formatDate});
            }
            this.todoItem = {
                id: uuid.v1(),
                title: "",
                description: "",
            }
        },
        edit() {
            this.itemsFromLocalStorage = JSON.parse(localStorage.getItem('todoItem'));
            this.findTodoItem = this.itemsFromLocalStorage.find(item => item.id === this.id);
                              console.log('AFADSFSADFSDFSDFSADF', this.itemsFromLocalStorage, parseInt(this.id))
            if(this.findTodoItem) {
                this.todoItem = this.findTodoItem;
                this.formatDate = this.findTodoItem.date
            }
        },
    },
    mounted(){
        if(this.$route.params.id) {
            this.edit();
        }
    }
}
</script>


<style lang="less">
.formTodoItem {
    flex-direction: column;
    .input-group.mb-2 {
        .dateInput {
            ~ .input-group-append {
                label {
                    display: none!important;
                }
            }  
        }
    }
    
}

</style>