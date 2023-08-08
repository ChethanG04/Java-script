function findDaysInMonth(month, year) {
    const daysInMonth = new Date(year, month, 0).getDate();
    console.log("Number of days in " + month + "/" + year + ": " + daysInMonth);
}

const month = 5; 
const year = 2023;
findDaysInMonth(month, year);
