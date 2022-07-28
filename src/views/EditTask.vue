<template>
    <div class="d-flex justify-content-center align-items-center h-100 w-100">
        <b-card
        title="Editar ToDo"
        class="mb-2"
        style="max-width: 40rem; width:100%"
        
        >
            <b-card-text>
                <task-form title="Add ToDo" :id="$route.params.id" />
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import TaskForm from "../components/TaskForm";
export default {
    name: 'editTodoItem',
    components: {
        TaskForm
    }
}
</script>
