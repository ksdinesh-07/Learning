import { employee_data} from "../Data/data.js";
const employee_list=document.getElementById('employee_list');
const employees = employee_data.employees

async function load_employees() {
    //loading data from json
    // const response=await fetch("./Data/employee.json");
    // const data=await response.json();
    // console.log('Data :',data);
    // const employees=data.employees;
    console.log('employees ',employees);

    // total employee
    const total_employee=document.getElementById('total_employees');
    const total_emp=employees.length;
    total_employee.textContent=total_emp;

    //total departments
    const total_departments_element=document.getElementById('total_departments')
    const departments_list=employees.map((emp)=>{
        return emp.department.name;
    })
    const unique_departments=[...new Set(departments_list)]
    total_departments_element.textContent=unique_departments.length;

    //total location
    const total_location_element=document.getElementById('total_locations')
    const locations=employees.map((emp)=>{
        return emp.contact.address.city;
    });
    const unique_locations=[...new Set(locations)]
    total_location_element.textContent=unique_locations.length;

    //total salary
    const total_salary_element=document.getElementById('total_salary');
    const total_salary=employees.reduce((total,emp)=>{
        return total + emp.salary.basic;
    },0);
    total_salary_element.textContent=`${total_salary}`;

    //total_compensation
    const total_compensation=employees.reduce((total,emp)=>{
        return total + emp.salary.bonus;
    },0);
    console.log("Total compensation:",total_compensation);

    //avg componsation
    const avg_componsation_element=document.getElementById('average_salary')
    const avg_compensation=total_compensation/employees.length;
    avg_componsation_element.textContent=avg_compensation;
    console.log('Average Componsation :',avg_compensation);

    //Project insights
    const total_projects_element=document.getElementById('total_projects')
    const total_projects=employees.reduce((total,emp)=>{
        return total + emp.projects.length;
    },0);
    console.log("Total projects:",total_projects);
    total_projects_element.textContent=total_projects;

    //active projects
    const active_projects_element=document.getElementById('active_projects');
    const all_projects=employees.flatMap((emp)=>{
        return emp.projects;
    })
    console.log('All Projects:',all_projects);
    const active_projects=all_projects.filter((project)=>{
        return project.status==='Active';
    })
    console.log("Active Projects:",active_projects);
    const active_projects_count=active_projects.length;
    active_projects_element.textContent=active_projects_count;

    //skill insight
    const total_skills_element=document.getElementById('total_skills');
    const all_skills=employees.flatMap((emp)=>{
        return emp.skills;
    })
    console.log('All skills:',all_skills);
    const total_skills=all_skills.length;
    total_skills_element.textContent=total_skills;
    const skill_count=all_skills.reduce((count,skill)=>{
        if (count[skill]){
            count[skill]++;
        }else{
            count[skill]=1;
        }
        return count;
    },{});
    console.log('skill count:',skill_count)

    const skill_entries=Object.entries(skill_count);
    console.log(skill_count);
    const most_used_skill=skill_entries.reduce((most_used,current)=>{
        if (current[1] > most_used[1]){
            return current;
        }
        return most_used;
    })
    console.log('Most used Skill:',most_used_skill);
    const most_used_skill_element=document.getElementById('most_used_skill');
    most_used_skill_element.textContent=most_used_skill[0]

    //active employee 
    const active_employees_element=document.getElementById('active_employees');
    const active_employees=employees.filter((emp)=>{
        return emp.employment.status==='Active';
    })
    const active_employee_count=active_employees.length;
    console.log('Active employees: ',active_employees)
    active_employees_element.textContent=active_employee_count;


    //employee leave status
    const employees_on_leave_element=document.getElementById('employees_on_leave');
    const employees_on_leave=employees.filter((emp)=>{
        return emp.employment.status==='On Leave';
    });
    const employe_on_leave_count=employees_on_leave.length;
    employees_on_leave_element.textContent=employe_on_leave_count;

    //show all employee
    function display_employees(emp_data){
        //removes old emp card
        employee_list.innerHTML='';

        //create card for new emp
        emp_data.map((emp)=>{

            const card=document.createElement('div');       
            card.classList.add("employee-card");
            card.innerHTML = `
                <h3>${emp.name}</h3>
                <p>${emp.employment.role}</p>
                <p>${emp.department.name}</p>
                <p>${emp.contact.address.city}</p> `;

            // adding emp id to card
            card.dataset.employee_id=emp.id;
            const delete_button = document.createElement("button");
            delete_button.innerText = "Delete";
            delete_button.dataset.employee_id = emp.id;

            card.appendChild(delete_button);
            employee_list.appendChild(card);

            delete_button.addEventListener("click", (event) => {
                event.stopPropagation();
                const employee_id = Number(delete_button.dataset.employee_id);
                const employee_index = employees.findIndex(
                    emp => emp.id === employee_id
                );
                if (employee_index !== -1) {
                    employees.splice(employee_index, 1);
                }
                display_employees(employees);
            });

            //detect the card which was clicked
            card.addEventListener("click", () => {
                const employee_id =Number(card.dataset.employee_id);
                const selected_employee=employees.find((emp)=>{
                    return emp.id === employee_id;
                })
                console.log("Selected employee id:", employee_id);
                console.log('selected employee:',selected_employee);
                
                employee_details.innerHTML=`
                    <h2>${selected_employee.name}</h2>
                    <p>Email: ${selected_employee.email}</p>
                    <p>Phone: ${selected_employee.phone}</p>
                    <p>
                        Role: ${selected_employee.employment.role}
                    </p>
                    <p>
                        Department: ${selected_employee.department.name}
                    </p>
                    <p>
                        Manager: ${selected_employee.department.manager}
                    </p>
                    <p>
                        City: ${selected_employee.contact.address.city}
                    </p>`
            });

        })

        const employee_count = document.getElementById('employee_count');
        employee_count.textContent=`${emp_data.length} Employess`;
    }

    // display all employees initially
    display_employees(employees);

    //department filter
    //collect all department may contains duplicates
    const department_filter=document.getElementById('department_filter');
    unique_departments.forEach((department)=>{
        const option=document.createElement('option');
        option.value=department;
        option.textContent=department;
        department_filter.appendChild(option);
    });

    //event listener
    department_filter.addEventListener("change",()=>{
        const selected_department=department_filter.value;
        console.log('selected dept',selected_department);
        //filter based on the selected  department
        if(selected_department===''){
            display_employees(employees);
            return;
        }
        const filter_employees=employees.filter((emp)=>{
            return emp.department.name === selected_department;
        })
        console.log('Matched emp based on dept',filter_employees);
        display_employees(filter_employees);
    })

    //emp search feature 
    const search_employee=document.getElementById('search_employee');
    //adding the event listener 
    search_employee.addEventListener('input',()=>{
        const search_text=search_employee.value.toLowerCase().trim();
        console.log("Search:",search_text);
        // filter the emp
        const filter_employees=employees.filter((emp)=>{
            return (
                emp.name.toLowerCase().includes(search_text) || emp.email.toLowerCase().includes(search_text)
            )
        });
        console.log(filter_employees);
        display_employees(filter_employees);
    })

    //delete button
    const employee_card = document.createElement("div");
    employee_card.classList.add("employee-card");



}

const employee_details=document.getElementById('employee_details');

//triggering the employee button
const add_employee_button=document.getElementById('add_employee');
const employee_form_section=document.getElementById('employee_form_section');
add_employee_button.addEventListener('click',()=>{
    employee_form_section.style.display='block';
})

//getting the form
const employee_form=document.getElementById('employee_form');

employee_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const employee_name =document.getElementById("employee_name").value;
    const employee_email =document.getElementById("employee_email").value;
    const employee_phone =document.getElementById("employee_phone").value;
    const employee_department =document.getElementById("employee_department").value;
    const employee_role =document.getElementById("employee_role").value;
    const employee_city =document.getElementById("employee_city").value;
    const employee_salary =Number(document.getElementById("employee_salary").value);
    const employee_bonus =Number(document.getElementById("employee_bonus").value);

    const new_employee={
        id: Math.max(...employees.map(emp=>emp.id))+1,
        name: employee_name,
        email: employee_email,
        phone: employee_phone,
        department: {
            name: employee_department,
            manager: "Not Assigned"
        },
        contact: {
            address: {
                street: "Not Provided",
                city: employee_city,
                state: "Tamil Nadu",
                country: "India",
                pincode: "Not Provided"
            }
        },
        skills: [],
        languages: [],
        employment: {
            role: employee_role,
            type: "Full Time",
            experience: 0,
            joiningDate: new Date()
                .toISOString()
                .split("T")[0],
            status: "Active"
        },
        salary: {
            basic: employee_salary,
            bonus: employee_bonus,
            currency: "INR"
        },
        projects: [],
        attendance: [],
        performance: []
    };
    employees.push(new_employee)
    console.log("New employee:", new_employee);
    
});

load_employees();

