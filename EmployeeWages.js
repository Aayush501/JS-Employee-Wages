// UC1
// function to check if employee is present or not
function checkPresentOrAbsent(){
    let attendanceCheck = Math.floor(Math.random()*100) % 2 == 0 ? true : false;
    if(attendanceCheck) {
        console.log("Employee Is Present");
    } else {
        console.log("Employee Is Absent");
    }
}

// UC2
// function to calculate daily employee wage
function calculateDailyEmployeeWage(){
    let workingTime = Math.floor(Math.random()*1000) % 3 == 0 ? "No Time" :Math.floor(Math.random()*1000) % 3 == 0 ? "Part Time" : "Full Time";
    let wagePerHour = 20;
    let totalWorkingHours = getWorkingHours(workingTime);
    return wagePerHour * totalWorkingHours;
}

// UC3
// function to calculate working hours
function getWorkingHours(workingTime) {
    let totalWorkingHours;
    switch(workingTime) {
        case "No Time" :
            totalWorkingHours = 0;
            break;
        case "Part Time" :
            totalWorkingHours = 4;
            break;
        case "Full Time" :
            totalWorkingHours = 8;
            break;       
    }
    return totalWorkingHours;
}

// UC4
// function to calculate total wages for a month
function wageForAMonth(workingDays) {
    let totalWorkingHours = 0;
    for(let i=1; i<=workingDays; i++) {
        let workingTime = Math.floor(Math.random()*1000) % 3 == 0 ? "No Time" :Math.floor(Math.random()*1000) % 3 == 0 ? "Part Time" : "Full Time";
        totalWorkingHours += getWorkingHours(workingTime);
    }

    let totalWage = totalWorkingHours * 20; // assuming wage per hour is $20
    console.log(`Total Hours: ${totalWorkingHours}, Total Wage: $${totalWage}`);
} 

// UC1
checkPresentOrAbsent();

// UC2 And UC3
console.log("$" + calculateDailyEmployeeWage());

// UC4
wageForAMonth(20); // assuming 20 working days in the month