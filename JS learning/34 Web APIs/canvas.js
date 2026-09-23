const canvas=document.getElementById("expense_chart");
const context=canvas.getContext("2d");
const expenses=[10000,8000,12000,9000];
const months=['jan','Feb','Mar','Apr'];

const max_expense=Math.max(...expense);

expenses.forEach((expense,index)=>{
    const bar_height=(expense/max_expense) * 200;

    const x_position=50 + (index * 100);
    const y_position=250 -bar_height;

    context.fillRect(x_position,y_position,50,bar_height);
    context/fillText(months[index],x_position+10,270);
    context.fillText(`${expense}`)
})