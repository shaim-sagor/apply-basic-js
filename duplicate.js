let students = ["roni", "abdul", 'roni', 'abul', 'goni', 'abdul', 'jobbar', 'goni', 'abdul', 'abul', 'salam'];

function removeDuplicate(students) {
    const uniqueNames = [];
    for (let i = 0; i < students.length; i++) {
        const allStudents = students[i];
        if (uniqueNames.indexOf(allStudents) == -1) {
            uniqueNames.push(allStudents);
        }
    }


    // for (const allStudents of students) {
    //     console.log(allStudents);
    //     if (uniqueNames.indexOf(allStudents) == -1) {
    //         uniqueNames.push(allStudents);
    //     }

    // }

    return uniqueNames;
}

console.log(removeDuplicate(students));