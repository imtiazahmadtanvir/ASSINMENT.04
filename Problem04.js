

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
