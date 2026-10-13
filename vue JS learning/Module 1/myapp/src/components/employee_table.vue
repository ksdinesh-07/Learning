
<template>
    <div class="employee_table">
        <p v-if="employees.length<1 " class="empty-table">No Employees</p>
        <table v-else>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="emp in employees" :key="emp.id" >

                    <!-- name edit  -->
                    <td v-if="editing==emp.id">
                        <input type="text" v-model="emp.name">
                    </td>
                    <td v-else>{{ emp.name }}</td>
                    
                    <!-- email edit  -->
                    <td v-if="editing==emp.id">
                        <input type="text" v-model="emp.email">
                    </td>
                    <td v-else>{{ emp.email }}</td>

                    <!-- save & cancel button -->
                    <td v-if="editing==emp.id" >
                        <button @click="edit_employee(emp)">Save</button>
                        <button @click="editing=null" >Cancel</button>
                    </td>

                    <td v-else>
                        <button @click="$emit('del-emp',emp.id)">Delete</button>
                        <button @click="edit_mode(emp)" >Edit</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>

    export default{
        name:'employee-table',
        props:{
            employees:Array
        },
        data(){
            return {
                editing:null,
                employee:{
                    name:'',
                    email:''
                }
            }
        },
        methods:{
            edit_mode(emp){
                this.editing=emp.id            
            },
            edit_employee(emp){
                if(emp.name=='' || emp.email==''){
                    return;
                }
                this.$emit('edit-emp',emp.id,emp.name);
                this.editing=null;

            }
            
        }
    }

</script>

<style scoped>

    .employee_table {
    width: 100%;
    margin: 25px 0;
    overflow: hidden;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    }

    thead {
    background-color: #10b981;
    color: #ffffff;
    }

    th {
    padding: 16px 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.3px;
    }

    td {
    padding: 15px 20px;
    font-size: 14px;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
    }

    tbody tr {
    transition: background-color 0.2s ease;
    }

    tbody tr:hover {
    background-color: #ecfdf5;
    }

    tbody tr:last-child td {
    border-bottom: none;
    }

    button{
        margin: 0 0.5rem 0 0;
    }

</style>