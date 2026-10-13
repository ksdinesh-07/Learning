<template>
  <div class="employee-form">
    <!-- <form v-on:submit.prevent="handle_submit"> -->
    <form @submit.prevent="handle_submit">

      <label>Employee Name</label>
      <input type="text" 
      v-model="employee.name" 
      :class="{'has-error':submittig && invalid_name}" 
      @focus="clear_status"
      @keypress="clear_status"
      ref="first_input"
      />

      <label>Employee Email</label>
      <input type="text" 
      v-model="employee.email" 
      :class="{'has-error' :submittig && invalid_email}"
      @focus="clear_status"
      @keypress="clear_status"
      />

      <p v-if="submittig && error" class="error-message">Please fill out all the required fields!</p>
      <p v-if="success" class="success-message">Employee successfully added!</p>

      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>

  export default {
    name: "employee-form",
    emits: ["add-emp"],
    data(){
      return{
        submittig:false,
        success:false,
        error:false,
        employee:{
          name:'',
          email:''
        }
      }
    },
    methods:{
        handle_submit(){
            //    alert('Form submitted!')
            this.submittig=true;
            this.clear_status();

            if (this.invalid_name || this.invalid_email){
                this.error=true;
                return;
            }
            
            this.$emit('add-emp',this.employee);

            this.$refs.first_input.focus();
            
            this.employee= {          
                name:'',
                email:''
            };
            this.error=false;
            this.success=true;
            this.submittig=false;

        },
        clear_status(){
            this.error=false;
            this.success=false;
        }
    },
    computed:{
        invalid_name(){
            return this.employee.name===''
        },
        invalid_email(){
            return this.employee.email==='';
        }
    }
  };

</script>

<style scoped>

    .employee-form {
    width: 100%;
    margin: 25px 0;
    padding: 25px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    }

    form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    }

    label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin-top: 8px;
    }

    input {
    width: 100%;
    padding: 12px 14px;
    font-size: 14px;
    color: #111827;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    input:focus {
    border-color: #10b981;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
    }

    button {
    margin-top: 14px;
    padding: 12px 18px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    background-color: #10b981;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    }

    button:hover {
    background-color: #059669;
    }

    button:active {
    transform: scale(0.98);
    }

    button:focus-visible {
    outline: 3px solid rgba(16, 185, 129, 0.35);
    outline-offset: 3px;
    }

    [class*='-message']{
        font-weight:500 ;
    }

    .error-message{
        color: red;
    }

    .success-message{
        color: #10b981;
    }

    input.has-error {
    border-color: #ef4444;
    background-color: #fef2f2;
    }

</style>
