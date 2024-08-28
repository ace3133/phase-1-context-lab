/* Your Code Here */
function createEmployeeRecord(array){
return {
    firstName: array[0],
    familyName: array[1],
    title:array[2] ,
    payPerHour: array[3],
    timeInEvents:[],
    timeOutEvents: []
}
}
function createEmployeeRecords(array){
    return array.map(ar => createEmployeeRecord(ar))
}
function createTimeInEvent(dateStamp){
const [date, hour]= dateStamp.split(' ');
   const timeIn = {
    type : "TimeIn",
    hour: parseInt(hour), 
    date: date
}
this.timeInEvents.push(timeIn)
return this 

}
function createTimeOutEvent(dateStamp){
    const [date,hour] = dateStamp.split(' ');
    const timeOut={
        type:"TimeOut",
        hour: parseInt(hour),
        date:date
    }
    this.timeOutEvents.push(timeOut);
    return this 
}
function hoursWorkedOnDate(date){
const timeInEvent = this.timeInEvents.find(event => event.date === date)
const timeOutEvent = this.timeOutEvents.find(event => event.date === date)
const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
return hoursWorked                                                                  
}                                                                  
function wagesEarnedOnDate(date){                                     
    return hoursWorkedOnDate.call(this, date)* this.payPerHour        
}                               
function findEmployeeByFirstName(array ,firstN){
return array.find(e => e.firstName === firstN)
}                                  
function calculatePayroll(records){
 return records.reduce((total,records)=> total + allWagesFor.call(records), 0)
}
/*hoursWorkedOnDate.call(this, date): Calls hoursWorkedOnDate in the context of the current employee record (this), passing the date as an argument. This returns the number of hours worked.
this.payPerHour: Retrieves the pay rate per hour from the employee record.
Multiplication: Multiplies the hours worked by the pay rate to get the total wages for that date.
*/
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
