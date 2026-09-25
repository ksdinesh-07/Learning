//o(n) linear
// const small_list=Array.from({length:1000},(_,index)=>index);
// const big_list=Array.from({length:10000},(_,index)=>index);
// // console.log(small_list);
// // console.log(big_list);

// function process_list(data){
//     let total=0
//     for (const number of data){
//         total+=number;
//     }
//     return total;
// }

//small result
// starts the timer ---> small list is a label
// console.time('small list');
// const small_result=process_list(small_list);
// console.timeEnd('small list');
// console.log('small list result:',small_result);

// //big result
// console.time('small list')
// const big_result=process_list(big_list);
// console.timeEnd('small list');
// console.log('Big result:',big_result);


// const small_start_time=performance.now();
// const small_result=process_list(small_list)
// const small_end_time=performance.now();
// const small_execution_time=small_end_time-small_start_time;
// console.log('Small list result',small_result);
// console.log('Execution time:',small_execution_time.toFixed(2),'ms')


// const big_start_time=performance.now();
// const big_result=process_list(big_list)
// const big_end_time=performance.now();
// const big_execution_time=big_end_time-big_start_time;
// console.log('Big list result',big_result);
// console.log('Execution time:',big_execution_time.toFixed(2),'ms')

// sum of all number form 1 to n

function sum_of_number(num){
    // let sum=0;
    // for (let i=1;i<=num;i++){
    //     sum=sum+i;
    // }
    return num * (num+1)/2;
}

console.log(sum_of_number(5)); // 15
console.log(sum_of_number(10)) //55


