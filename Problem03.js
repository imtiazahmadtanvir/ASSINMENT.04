

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

