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

// UC5, UC6, UC7, and UC8 
// function to Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
function wageTillACondition() {
    let numberOfDays=0;
    let totalWorkingHours=0;
    let empWagesArr = new Array(); // array to store daily wages
    let empWorkingHourArr = new Array(); // array to store daily working hours
    let empWagesMap = new Map(); // map to Store the Day and the Daily Wage // UC8
    let dailyHourMap = new Map(); // map to store daily hours
    let dailyHrsAndWagesArr = new Array();

    while(numberOfDays<20 && totalWorkingHours<=160){
        let workingTime = Math.floor(Math.random()*1000) % 3 == 0 ? "No Time" :Math.floor(Math.random()*1000) % 3 == 0 ? "Part Time" : "Full Time";
        let dayHours = getWorkingHours(workingTime);
        empWagesArr.push(dayHours * 20); // UC6 // assuming wage per hour is $20
        empWorkingHourArr.push(dayHours); // UC9
        numberOfDays++;
        empWagesMap.set(numberOfDays, dayHours * 20); // UC8
        dailyHourMap.set(numberOfDays, dayHours); // UC9
        // UC10
        dailyHrsAndWagesArr.push(
            {
                day : numberOfDays,
                hours : dayHours,
                wage : dayHours*20,
            }
        )
    }
    let totalWage = totalWageCalculator(empWagesArr); // UC7(A) // UC9 -> totalWageCalculator(empWagesArr) demonstrates arrow function
    let mapOfDayAndWage = empWagesArr.map((wage) => mapDayWithWage(wage)) // UC7(B)
    let fullTimeArr = showFullTime(mapOfDayAndWage); // UC7(C)
    totalWorkingHours = empWorkingHourArr.reduce((daily, total) => total+daily, 0); // UC9

    console.log(`UC5 & UC7(A) - Total Days: ${numberOfDays}, Total Working Hours: ${totalWorkingHours}, Total Wage: $${totalWage}`);
    console.log(`UC6 - Daily wages: ${empWagesArr}`);
    console.log(`UC7(B) - Map Of Days And Wages: ${mapOfDayAndWage}`);
    console.log(`UC7(C) - All Full Time Wages: ${fullTimeArr}`);
    console.log(`UC7(D) - First Time Full Time Wage: ${showFirstFullTime(mapOfDayAndWage)}`);
    console.log(`UC7(E) - Validating full time wages array: ${fullTimeArr.every(validateFullTimeWage)}`);
    console.log(`UC7(F) - Checking if there are some part time wages: ${mapOfDayAndWage.some(checkForPartTimeWage)}`);
    console.log(`UC7(G) - Finding the number of days employee worked: ${numberOfDays}`); 
    console.log(empWagesMap); // UC8

    // UC9 -> Show the full workings days, part working days and no working days
    let fullTimeWorkingDays = new Array();
    let partTimeWorkingDays = new Array();
    let noTimeWorkingDays = new Array();

    dailyHourMap.forEach((val, key) => {
        if(val == 8) fullTimeWorkingDays.push(key);
        else if(val == 4) partTimeWorkingDays.push(key);
        else noTimeWorkingDays.push(key);
    });

    console.log(`Full Time Working Days: ${fullTimeWorkingDays}`);
    console.log(`Part Time Working Days: ${partTimeWorkingDays}`);
    console.log(`No Time Working Days: ${noTimeWorkingDays}`);

    // UC10
    console.log(dailyHrsAndWagesArr);
}

// UC7(A)
// function to calculator using daily wages array
function totalWageCalculator(empWagesArr) {
    let totalWage=0;
    empWagesArr.forEach(element => {
        totalWage += element;
    });
    return totalWage;
}

// UC7(B)
let day=0;
// function to map days with wages
function mapDayWithWage(wage) {
    day++;
    return day + " = " + wage;
}

// UC7(C)
// function to filter days where the wages were of full time
function showFullTime(empWagesArr) {
    let filtered = empWagesArr.filter((val) => {
        return (val.includes("160"));
    });
    return filtered;
}

// UC7(D)
// function to find first day with full time
function showFirstFullTime(empWagesArr) {
    let first =  empWagesArr.find((val) => {
        return (val.includes("160"));
    });
    return first;
}

// UC7(E)
// function to check if every element of full time wage array is truely holding full time wage
function validateFullTimeWage(wage) {
    return wage.includes("160");
}

// UC7(F)
// function to check if there is any part time wage
function checkForPartTimeWage(wage) {
    return wage.includes("80");
}


// UC1
checkPresentOrAbsent();

// UC2 And UC3
console.log("$" + calculateDailyEmployeeWage());

// UC4
wageForAMonth(20); // assuming 20 working days in the month

// UC5 and UC6
wageTillACondition();