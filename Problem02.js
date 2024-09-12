
//Problem-02: Notification Generator 

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


console.log(sendNotification('imtiaz@@gmail.com'));
console.log(sendNotification('imtiazgmail.com'));