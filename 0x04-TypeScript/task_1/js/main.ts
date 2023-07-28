interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  
console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };

console.log(director1);

/**
 * 
 * @param firstName 
 * @param lastName 
 * @returns 
 */
function printTeacher(firstName: string, lastName: string) : string {
	return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher(director1.firstName, director1.lastName));

interface printTeacherFunction {
	(firstName: string, lastName: string) : string;
}

const printTeacher2: printTeacherFunction = printTeacher;

console.log(printTeacher2(director1.firstName, director1.lastName));

interface StudentConstructor {
	new (firstName: string, lastName: string) : StudentClassInterface;
}


interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

/**
 * Class StudentClass
 * 
 * how to use:
 * ```typescript
 * let student = new StudentClass("John", "Doe");
 * console.log(student.workOnHomework()); // Currently working
 * console.log(student.displayName()); // John
 * ```
 */
class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	constructor (firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';	
	}

	displayName(): string {
		return this.firstName;
	}
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // John
