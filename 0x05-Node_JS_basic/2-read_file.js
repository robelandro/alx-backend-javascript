const fs = require('fs');

function countStudents(path) {
  try {
    const allData = fs.readFileSync(path, 'utf8');
    const lines = allData.split('\n').filter((student) => student.length > 0);
    const totalCount = lines.length - 1;

    const fieldOfStudyCount = new Map();
    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');
      const fieldOfStudy = student[3];
      if (!fieldOfStudyCount.has(fieldOfStudy)) {
        fieldOfStudyCount.set(fieldOfStudy, []);
      }
      fieldOfStudyCount.get(fieldOfStudy).push(student[0]);
    }

    console.log(`Number of students: ${totalCount}`);
    fieldOfStudyCount.forEach((students, field) => {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    });
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
