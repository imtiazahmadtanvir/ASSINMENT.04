


function calculateTax(income, expenses) {
   
	if (income < expenses || income < 0 || expenses < 0 ) {
    	return "Invalid input";
	}
	let remaining = income - expenses;
	let tax = remaining * 0.20;
	return tax;
}



function sendNotification(email) {

	if (email.indexOf('@') === -1) {
    	return "Invalid Email";
	}
	let divide  = email.split('@');
    
	if (divide.length === 2) {
    	let username = divide[0];
    	let domain = divide[1];
    	return `${username} sent you an email from ${domain}`;
	}
    else  return "Invalid Email";
}



function checkDigitsInName(name) {

	if (typeof name !== 'string') {
    	return "Invalid Input";
	}
	else
	{
   	 
	for (let i = 0; i < name.length; i++) {
   	 
    	if (!isNaN(name[i]) && name[i] !== ' ') {
        	return true;
    	}
	}
	return false;
	}

}



function calculateFinalScore(obj) {

	if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    	return "Invalid Input";
	}

	const { name, testScore, schoolGrade, isFFamily } = obj;

	if (typeof name !== 'string' || typeof testScore !== 'number' || testScore > 50 ||typeof schoolGrade !== 'number' || schoolGrade > 30 ||typeof isFFamily !== 'boolean')
     
        {
            return "Invalid Input";
        }

	let FinalScore = testScore + schoolGrade;

	if (isFFamily) {
    	FinalScore += 20;
	}
    
    
    if( FinalScore > 80)
    {
        return true;
    }
    else return false;
	
}




function waitingTime(waitingTimes, serialNumber) {

	if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    	return "Invalid Input";
	}
	let totalTime = 0;
	for (let i = 0; i < waitingTimes.length; i++) {
    	totalTime += waitingTimes[i];
	}
	let avgTime = Math.round(totalTime / waitingTimes.length);

	let remaining = serialNumber - waitingTimes.length - 1;

	let totalWaitingTime = remaining * avgTime;

	return totalWaitingTime;
}

