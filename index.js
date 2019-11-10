/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function createEmployeeRecord(empArray) {
  return {
    firstName: empArray[0],
    familyName: empArray[1],
    title: empArray[2],
    payPerHour: empArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(array) {
  return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
  const time = dateStamp.split(' ');
  const newEvent = {
    type: "TimeIn",
    date: time[0],
    hour: parseInt(time[1])
  };
  this.timeInEvents.push(newEvent);
  return this;
}

function createTimeOutEvent(dateStamp) {
  const time = dateStamp.split(' ');
  const newEvent = {
    type: "TimeOut",
    date: time[0],
    hour: parseInt(time[1])
  };
  this.timeOutEvents.push(newEvent);
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  const clockIn = this.timeInEvents.find(record => record.date === dateStamp)
  const clockOut = this.timeOutEvents.find(record => record.date === dateStamp)
  return parseInt(clockOut.hour * .01) - parseInt(clockIn.hour * .01)
}

function wagesEarnedOnDate(dateStamp) {
  // console.log(this)
  const hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
  const pay = this.payPerHour
  return hoursWorked * pay
}

function findEmployeeByFirstName(srcArray, firstName) {
  const record = srcArray.find(employee => employee.firstName === firstName)
  return record
}

function calculatePayroll(array) {
  const employees = array.map(employee => allWagesFor.call(employee))

  const allWages = employees.reduce(((memo, employee) =>
    memo += employee
  ), 0)

return allWages;
}