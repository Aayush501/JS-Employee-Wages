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

// UC5 and UC6
// function to Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
function wageTillACondition() {
    let numberOfDays=0;
    let totalWorkingHours=0;
    let empWagesArr = new Array(); // array to store daily wages

    while(numberOfDays<20 && totalWorkingHours<=160){
        let workingTime = Math.floor(Math.random()*1000) % 3 == 0 ? "No Time" :Math.floor(Math.random()*1000) % 3 == 0 ? "Part Time" : "Full Time";
        let dayHours = getWorkingHours(workingTime);
        totalWorkingHours += dayHours;
        empWagesArr.push(dayHours * 20); // UC6 // assuming wage per hour is $20
        numberOfDays++;
    }
    let totalWage = totalWageCalculator(empWagesArr); // UC7

    console.log(`UC5 & UC7 - Total Days: ${numberOfDays}, Total Working Hours: ${totalWorkingHours}, Total Wage: $${totalWage}`);
    console.log(`UC6 - Daily wages: ${empWagesArr}`);
}

// UC7
// function to calculator using daily wages array
function totalWageCalculator(empWagesArr) {
    let totalWage=0;
    empWagesArr.forEach(element => {
        totalWage += element;
    });
    return totalWage;
}

// UC1
checkPresentOrAbsent();

// UC2 And UC3
console.log("$" + calculateDailyEmployeeWage());

// UC4
wageForAMonth(20); // assuming 20 working days in the month

// UC5 and UC6
wageTillACondition();