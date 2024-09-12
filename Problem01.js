


function calculateTax(income, expenses) {
   
	if (income < expenses || income < 0 || expenses < 0 ) {
    	return "Invalid input";
	}
	let remaining = income - expenses;
	let tax = remaining * 0.20;
	return tax;
}

