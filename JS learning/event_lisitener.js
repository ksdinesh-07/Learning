let btn=document.getElementById('sj');

btn.addEventListener('click',(event)=>{
    btn.textContent="Thanks for clicking";
    console.log('clicked');
})

btn.addEventListener('mouseover',(event)=>{
    btn.textContent='Thanks for hovering';
    console.log('hover');
})

btn.addEventListener('mouseout',(event)=>{
    btn.textContent='Thanks for hovering out';
    console.log('hover out');

})

document.addEventListener('keydown',(event)=>{
    if(event.key==='ArrowUp'){
        btn.textContent=Number(btn.textContent)+1;
    }
    else if(event.key==='ArrowDown'){
        btn.textContent=Number(btn.textContent)-1;
    }
    
    console.log(event.key);
})