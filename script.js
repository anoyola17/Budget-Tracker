// Validation and Regular Expression //
function validation(formInput, messageOutput) {
  const form = document.querySelector(formInput);
  const message = document.querySelector(messageOutput);
  const descriptionPattern = /^[a-zA-Z]{4,20}$/;
  const amountPattern = /^(0|[1-9]\d*)(\.\d+)?$/;

// Display Error Message ---> Income/Expense
  form.addEventListener('submit', e => {
    e.preventDefault();
    const description = form.querySelector('[name="description"]').value;
    const amount = form.querySelector('[name="amount"]').value;

    if (!descriptionPattern.test(description)) {
      message.textContent = 'Required: Description MUST contain letters only & be 4–20 characters';
      return;
    }
    if (!amountPattern.test(amount)) {
      message.textContent = 'Required: Amount MUST contain only digits (optinal: decimals)';
      return;
    }

    summaryDisplay()
    
  });
}

// Output for Both Forms ---> Income/Expense
validation('.income-form', '.validate-income');
validation('.expense-form', '.validate-expense');

// Object-Oriented Programming
class BudgetTracker{
    constructor(querySelectorForm){
        this.incomeInput = document.querySelector(querySelectorForm);
        this.incomeInput.innerHTML = incomeInput.innerHTML()
        this.expenseInput = document.querySelector(querySelectorForm);
        this.expenseInput.innerHTML = expenseInput.innerHTML()

        // When click on Add Income button --> Display //
        this.incomeInput.querySelector(".incomeSubmit").addEventListener("click", () =>{
            this.incomeArrays();
        });

        // When click on Add Expense button --> Display //
        this.incomeInput.querySelector(".expenseSubmit").addEventListener("click", () =>{
            this.expenseArrays();
        });
        }

        // Create an Income arrays --> Description/Account
        incomeArrays(){
            const formIncomeDesc =[];
            const formIncomeAcct =[];
            const dataIncome = document.getElementById("summaryContainer");

            function summaryList(){
                list.innerHTML = `${displayExpenseDesc} -$${displayExpenseAcct}`;
            }
            summaryList();
        }
        

        // Create an Expense arrays --> Description/Account
        expenseArrays(){
            const formExpenseDesc =[];
            const formExpenseAcct =[];
            const dataExpense = document.getElementById("summaryContainer");

            function summaryList(){
                list.innerHTML = `${displayExpenseDesc} -$${displayExpenseAcct}`;
            }
            summaryList();
        }

        // Calculate Income Account --> Display Total Income
        calculateIncome(){
            this.incomeInput.innerHTML +=  displayBalanceMsg.innerHTML;
        }
            displayTotalIncome(){
                return this.incomeInput.innerHTML =  displayBalanceMsg.innerHTML;
            }

        // Calculate Expense Account --> Display Total Expense
        displayTotalExpense(){
            return this.balanceOutput.innerHTML +=  displayBalanceMsg.innerHTML;
        }

        // Calculate the Income Account & Expense Account --> Display the Total Balance
        calculateTotalBalance(){ 
            this.incomeInput.toFixed(2) - this.expenseInput.toFixed(2);
        }

        displayTotalBalance(){
            return this.balanceOutput.innerHTML +=  displayBalanceMsg.innerHTML;
        }

        summaryDisplay(){
            this.incomeInput.innerHTML =+ displayIncomeMsg.innerHTML;
            displayText.textContent = (`${formIncomeDesc} +$${this.incomeInput}`); 
            
            this.expenseInput.innerHTML += displayExpenseMsg.innerHTML;
            displayText.textContent = (`${formExpenseDesc} -$${this.expenseInput}`); 
        }

}

let displayText = document.getElementById("summaryContainer");
const displayIncomeMsg = new Summary (document.getElementById(`myIncome`));
const displayExpenseMsg = new Summary (document.getElementById(`myExpense`));

displayIncomeMsg.summaryDisplay();
displayExpenseMsg.summaryDisplay();

const displayBalanceMsg = new Balance (document.getElementById(`myBalance`));



const formIncomeDesc = document.getElementById("expense-description").value;
const formExpenseDesc = document.getElementById("expense-description").value;