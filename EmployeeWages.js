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
    let empWagesMap = new Map(); // map to Store the Day and the Daily Wage // UC8
    let dailyHourMap = new Map(); // map to store daily hours
    let dailyHrsAndWagesArr = new Array();

    while(numberOfDays<20 && totalWorkingHours<=160){
        let workingTime = Math.floor(Math.random()*1000) % 3 == 0 ? "No Time" :Math.floor(Math.random()*1000) % 3 == 0 ? "Part Time" : "Full Time";
        let dayHours = getWorkingHours(workingTime);
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

    let mapOfDayAndWage = dailyHrsAndWagesArr.map((wage) => mapDayWithWage(wage)) // UC12

    // UC12(A)
    let totalWage = totalWageCalculator(dailyHrsAndWagesArr);

    // UC12(B)
    console.log("Employee Daily Wages Map:");
    empWagesMap.forEach((val,key) => {
        console.log(key + " : " + val);
    });

    // UC12(C)
    let fullTimeArr = showFullTime(mapOfDayAndWage); 
    console.log("fullTimeArr : ");
    console.log(fullTimeArr);

    // UC12(D)
    console.log("First Occurrence When Full Time Wage Was Earned:"); 
    console.log(showFirstFullTime(mapOfDayAndWage)); 

    totalWorkingHours = totalWorkingHoursCalculator(dailyHrsAndWagesArr);
    
    // UC12(E)
    let fullTimeWorkingDays = new Array();
    console.log("Validating Full Time Working Days: ");
    console.log(fullTimeWorkingDays.every(validateFullTimeWage)); 
    
    // UC12(F)
    console.log("Checking if there are any part time wages:")
    console.log(mapOfDayAndWage.some(checkForPartTimeWage)); 
    
    // UC12(G)
    console.log(numberOfDays); 

    console.log("mapOfDayAndWage :"); // UC12
    console.log(mapOfDayAndWage);
    
    // UC9 -> Show the full workings days, part working days and no working days
    let partTimeWorkingDays = new Array();
    let noTimeWorkingDays = new Array();


    dailyHourMap.forEach((val, key) => {
        if(val == 8) fullTimeWorkingDays.push(key);
        else if(val == 4) partTimeWorkingDays.push(key);
        else noTimeWorkingDays.push(key);
    });

    // UC10
    console.log("dailyHrsAndWagesArr: ");
    console.log(dailyHrsAndWagesArr);

    console.log(`Total Wage: $${totalWage}`); // UC12
    console.log(`UC11 Working Hours: ${totalWorkingHours}`);

    // showing full working days using foreach
    console.log("fullTimeWorkingDays:")
    fullTimeWorkingDays.forEach((val) => {
        console.log(`Day: ${val}`);
    });

    // Showing Part working days using Map by reducing to String Array
    console.log("partTimeWorkingDays:")
    let stringArr = partTimeWorkingDays.map((val) => {
        return `Day: ${val}`;
    });
    console.log(stringArr);

    // showing no working days only using Map function
    console.log("noTimeWorkingDays: ")
    noTimeWorkingDays.map((val) => {
        console.log(`Day: ${val}`);
    });
}

// function to map days with wages
function mapDayWithWage(wage) {
    return "Day: " + wage.day + ", Wage: " + wage.wage;
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

// UC11 & UC12 -> function to calculate total wage 
function totalWageCalculator(dailyHrsAndWagesArr) {
    let totalWage = 0;
    dailyHrsAndWagesArr.forEach((val) => {
        totalWage += val.wage;
    });
    return totalWage;
}

// UC11 & UC12 -> function to calculate total working hours
function totalWorkingHoursCalculator(dailyHrsAndWagesArr) {
    let totalHours = 0;
    dailyHrsAndWagesArr.forEach((val) => {
       totalHours += val.hours;
    });
    return totalHours;
}

// UC1
checkPresentOrAbsent();

// UC2 And UC3
console.log("$" + calculateDailyEmployeeWage());

// UC4
wageForAMonth(20); // assuming 20 working days in the month

// UC5 and UC6
wageTillACondition();