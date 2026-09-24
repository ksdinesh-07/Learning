const user_name=document.getElementById('user_name');
const display_button=document.getElementById('display_button');
const welcome_message=document.getElementById('welcome_message');

display_button.addEventListener('click',()=>{
    const name=user_name.value;
    // welcome_message.innerHTML=`welcome ${name}`;
    welcome_message.textContent =`Welcome ${name}`;
})


// <img src=x onerror="alert('hello guys')">