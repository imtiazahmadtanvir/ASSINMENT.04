
//Problem:Tax Calculator

function calculateTax(income, expenses) {
   
	if (income < expenses || income < 0 || expenses < 0 ) {
    	return "Invalid input";
	}
	let remaining = income - expenses;
	let tax = remaining * 0.20;
	return tax;
}


console.log(calculateTax(10000, 3000));
console.log(calculateTax(10, 10));
console.log(calculateTax(-10, 10));
console.log(calculateTax(100, 10));  
