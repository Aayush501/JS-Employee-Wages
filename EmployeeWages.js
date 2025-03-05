function checkPresentOrAbsent(){
    let attendanceCheck = Math.floor(Math.random()*100) % 2 == 0 ? true : false;
    if(attendanceCheck) {
        console.log("Employee Is Present");
    } else {
        console.log("Employee Is Absent");
    }
}

checkPresentOrAbsent();