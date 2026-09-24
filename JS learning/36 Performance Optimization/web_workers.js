self.onmessage=(event)=>{
    const students_count=event.data;
    console.log("Worker received:", students_count);
    
    let processed_student=0;
    for (let i=1;i<=students_count;i++){
        processed_student++;
    }
    
    self.postMessage(processed_student);
}