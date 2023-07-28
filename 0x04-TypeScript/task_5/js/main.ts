interface MajorCredits {
	major: string;
	credits: number;
}

interface MinorCredits {
	minor: string;
	credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
	return {
		major: subject1.major,
		credits: subject1.credits + subject2.credits
	};
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
	return {
		minor: subject1.minor,
		credits: subject1.credits + subject2.credits
	};
}
