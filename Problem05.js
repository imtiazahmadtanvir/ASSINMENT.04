

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

