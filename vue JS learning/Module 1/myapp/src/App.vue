<template>
  <div class="container">
      <h1>Employees</h1>
        <employee_form @add-emp="add_employee" />
      	<employee_table 
		:employees="employees" 
		@del-emp="delete_employee" 
		@edit-emp="edit_employee"
		/>
  </div>
</template>

<script>

import employee_form from './components/employee_form.vue';
import employee_table from './components/employee_table.vue';

  export default {
    name:'App',
    components:{
      employee_table,
      employee_form
    },
    data(){
      return{
        employees:[
          {
            id:1,
            name:'Gowtham G',
            email:'gowtham123@gamil.com'
                },
            {
            id:2,
            name:'Dinesh ks',
            email:'ks.dinesh005@gmail.com'
            },
            {
            id:3,
            name:'Arul raj',
            email:'arulraj07@gmail.com'
            }
              ]
            }
          },
    methods:{
      add_employee(emp){
        const last_id=this.employees.length>0?this.employees[this.employees.length-1].id:0;
        const id=last_id+1;
        const new_employee={...emp,id}
        this.employees=[...this.employees,new_employee];
      },
	  delete_employee(id){
		this.employees=this.employees.filter((emp)=>{
			return emp.id != id;
		})
	  },
	  edit_employee(id,updated_emp){
		 this.employees.map((emp)=>{
			return emp.id==id?updated_emp:emp;
		 })
	  }
    }
  }

</script>


<style >

	* {
	box-sizing: border-box;
	}

	.container {
	max-width: 680px;
	margin: 40px auto;
	padding: 30px;
	background-color: #f9fafb;
	border: 1px solid #e5e7eb;
	border-radius: 16px;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
	}

	h1 {
	margin: 0 0 25px;
	color: #111827;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	letter-spacing: -0.5px;
	}

	.container :deep(.employee-form) {
	margin-bottom: 30px;
	}

	.container :deep(.employee_table) {
	margin-top: 25px;
	}

</style>