interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Dawit',
	lastName: 'Chelmu',
	age: 20,
	location: 'Addis Ababa'
}

const student2: Student = {
	firstName: 'Lili',
	lastName: 'Kassa',
	age: 20,
	location: 'Addis Ababa'
}

const studentsList: Array<Student> = [student1, student2];


// Create a table element and append it to the document body
const table = document.createElement("table");
document.body.appendChild(table);

// Create a tbody element and append it to the table
const tbody = document.createElement("tbody");
table.appendChild(tbody);

// Loop through the studentsList array
studentsList.forEach(function (student) {
  // Create a tr element and append it to the tbody
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  // Create two td elements, one for the firstName and one for the location
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  // Set their text content to the corresponding values
  td1.textContent = student.firstName;
  td2.textContent = student.location;

  // Append them to the tr element
  tr.appendChild(td1);
  tr.appendChild(td2);
});
