<template>

<div class="wrapper">
  <h1>Todo app</h1>

  <div class="input-row" >
    <input type="text" placeholder="Add task here" v-model="new_task">
    <button @click="add_tasks">Add</button>
  </div>

    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" :class="{done:task.completed, editing:editing_id === task.id }"  >
        
        <template v-if="editing_id===task.id" >
          <input type="text" v-model="editing_buffer" class="edit-input" >
        </template>

        <template v-else>
          <button class="delete" @click="remove_task(task.id)" >X</button>
          <input type="checkbox" v-model="task.completed" >
          <span @click="start_edit(task)" >{{ task.text }}</span>
        </template>

      </li>

    </ul>

</div>

</template>

<script setup>

  import { ref } from 'vue';

  const new_task=ref('')
  const tasks=ref([])
  const editing_id=ref(null);
  const editing_buffer=ref('');

  function add_tasks(){
    const text=new_task.value.trim()
    if (!text){
      return;
    }
    tasks.value.push({
      id:Date.now(),
      text:text,
      completed:false,
      favourite:false
    })
    new_task.value=''

      console.log(tasks);

  }

  function remove_task(id){
    tasks.value=tasks.value.filter((t)=>t.id!=id)
  }

  function start_edit(task){
    editing_id.value=task.id
    editing_buffer.value=task.text
  }
  
  function cancel_edit(){
    editing_id.value=null;
    editing_buffer.value=''
  }

  function finish_edit(task){
    if(editing_id.value !== task.id){
      return;
    }

      const trimmed=editing_buffer.value.trim()

      if(!trimmed){
        remove_task(task.id)
      }else{
        task.text=trimmed
      }

      cancel_edit()
  }



</script>

<style scoped> 

  /* .wrapper{
    background-color: aqua;
    max-width: 500px;
    margin: 2 rem auto;
    font-family: sans-serif;
    text-align: center;
  } */

  .app{
    display: flex;
    gap: 0.5 rem;
    margin-bottom: 1rem;
  }

  input{
    flex-grow: 1;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid black;
  }

  button{
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid black;
    cursor: pointer;
  }

  .task-list{
    list-style: none;
    padding: 0;
  }

  .task-list li{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid black;
  }

  .task-list li.done span{
    text-decoration: line-through;
    opacity: 0.6;
  }

  .delete{
    background: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  .delete:hover{
    background: red;

  }

  .editing .edit-input{
    
  }

</style>