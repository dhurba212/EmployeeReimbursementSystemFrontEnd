
async function getAllExpenses(){
   
  
    const httpResponse = await fetch("http://localhost:7000/expenses");
    console.log(httpResponse)
    const expenses = await httpResponse.json();
    console.log(expenses)
   
     
}
getAllExpenses();