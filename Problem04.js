

//Problem 04 : Calculate Admission Final Score

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
    
    
    if( FinalScore => 80)
    {
        return true;
    }
    else return false;
	
}


console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));  
console.log(calculateFinalScore("hello"));                       	 
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 15, isFFamily: true }));
