//debouncing
const course_search =document.getElementById("course_search");
const search_status =document.getElementById("search_status");
let search_timer;

const list=['car','bike','train','areoplane'];

course_search.addEventListener("input", () => {
    //get user input
    const search_text = course_search.value;
    
    //clearing timeout
    clearTimeout(search_timer);
    
    //content showing typing...
    search_status.textContent = "Typing...";
    
    //running timmer after 500ms
    search_timer = setTimeout(() => {

        //searching from list
        const result=list.filter((vehicle)=>{
            return search_text !='' && vehicle.includes(search_text);
        })
        console.log("Searching for:", search_text);
        console.log('Search result:',result);

        //if result found return it 
        if (result.length>0){
            search_status.textContent=`result found : ${result.join(', ')} `;
        }
        //if theere is no search show empty 
        else if(search_text===''){
            search_status.textContent='';
        }else{
            search_status.textContent=`No result found for "${search_text}"`;
        }
    }, 500);
});


//Throttle

// window.addEventListener('scroll',()=>{
//     console.log('event scroll happen');
// })

// const scroll_status=document.getElementById('scroll_status');
// let scroll_timer=false;

// //when user starts scrolling
// window.addEventListener('scroll',()=>{

//     // check throttle is active or not
//     if(scroll_timer){
//         return
//     }

//     //starting scroll event 
//     scroll_timer=true;
//     console.log('Scroll function executed');

//     //displaying the scroll position of Y
//     scroll_status.textContent=`scroll position: ${window.scrollY}px`;

//     setTimeout(()=>{
//         scroll_timer=false;
//     },300);
// });


// throttle
// const scroll_status=document.getElementById('scroll_status');
// const progress_status=document.getElementById('progress_status');

// let is_throlled=false;

// window.addEventListener('scroll',()=>{
    
//     //entry point
//     if(is_throlled){
//         return
//     }

//     //starting the scroll process
//     //open throttle
//     is_throlled=true;
//     console.log('Scroll process started');

//     const scrolling_pointer=window.scrollY;
//     scroll_status.innerHTML=` Scrolling position: ${scrolling_pointer}`;

//     const page_height=document.documentElement.scrollHeight - window.innerHeight;
//     console.log(page_height);

//     const progress=(scrolling_pointer / page_height) * 100;
//     console.log(progress)

//     progress_status.textContent=`course progress: ${progress.toFixed(0)}%`;

//     setTimeout(()=>{
//         //throttle close
//         is_throlled=false;
//     },300)

// })


//lazy loading

//getting the iv
const boxes=document.querySelectorAll('.box');

//watch the elemets
const observer=new IntersectionObserver((entries)=>{
    // console.log('entries :',entries)
    entries.forEach((entry)=>{
        console.log('entry :',entry);

        // console.log("Element:", entry.target);
        // console.log("Visible:", entry.isIntersecting);
        // console.log("Visible percentage:", entry.intersectionRatio);


        if (entry.isIntersecting){
            console.log(entry.target.textContent,'is visible');
        }
    })
})

// pass all the div that contains the boxes and pass to observer
boxes.forEach((box)=>{
    observer.observe(box);
})

// async loading

//returns a promise
// async function load_course(){
//     const response=await fetch('course.json');
//     const course_data=await response.json();
//     console.log(course_data)
// }

const loading_status=document.getElementById('loading_status');
const course_details=document.getElementById('course_details');

async function load_course() {
    console.log('Course loading started');

    const response=await fetch('course.json');
    // console.log('response : ',response)

    const data=await response.json();
    console.log('Actual JSON data:',data);

    course_details.innerHTML=`
        <h2>${data.course_name}</h2>
        <p>Instructor: ${data.instructor}</p>
        <p>Students: ${data.students}</p>
        <p>Rating: ${data.rating}</p>`
    
    loading_status.textContent='Course loaded successfully';
}

load_course();