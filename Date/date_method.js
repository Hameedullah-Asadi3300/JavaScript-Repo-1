//  Date Method - There are different methon specific for date object which we can use to operate on date data type
//  These methods allow us to get and set the yea, month, day, hour, minute, seconds, and miliseconds of date objects
//  JavaScript by default outputs the date as as string using the toString() method
const method1 = new Date();
method1.toString();  //  Returns 'Mon Jul 17 2023 19:38:40 GMT-0700 (Pacific Daylight Time)'

/*--------------------*/
//  toDateString()      -   Returns the date in more readable format
const method2 = new Date();
method2.toDateString();     //  Returns 'Mon Jul 17 2023'

/*--------------------*/
//  toUTCString()   -   converts the date to string using the UTC standard
const method3 = new Date();
method3.toUTCString();  //  Returns 'Tue, 18 Jul 2023 02:42:10 GMT'

/*--------------------*/
//  toLocaleString()    -   converts a date object to a string. using local conventions
const method4 = new Date();
method4.toLocaleString();   //  Returns '7/17/2023, 7:44:32 PM'

/*--------------------*/
//  toJSON()  -   Returns the date as a string, formatted as a JSON date
const method5 = new Date();
method5.toJSON();   //  Returns '2023-07-18T02:45:49.383Z'


/*
JavaScript get Methods are follows:
Method	                            Description
getFullYear()	            Get year as a four digit number (yyyy)
getMonth()	                Get month as a number (0-11)
getDate()	                Get day as a number (1-31)
getDay()	                Get weekday as a number (0-6)
getHours()	                Get hour (0-23)
getMinutes()	            Get minute (0-59)
getSeconds()	            Get second (0-59)

*/
/*--------------------*/

//  getFullYear()   -   Returns the full current year
const method6 = new Date();
  //  Returns 2023
console.log(method6.getFullYear());

/*--------------------*/

//  getDay()    -   Returns the current as number from 0-6
const method7 = new Date();
console.log(method7.getDay());                 //  Returns number from 0-6

/*--------------------*/

//  getDate()   -   Returns the date as number 
const method8 = new Date();
console.log(method8.getDate());                 //  Returns number like 17

/*--------------------*/

//  GetHours
const method9 = new Date();
console.log(method9.getHours());                //  Retuns hours from 0-23

/*--------------------*/

//  getMinutes
const method10 = new Date();
console.log(method10.getMinutes());              //  Return 0-59

/*--------------------*/

//  getSeconds
const method11 = new Date();
console.log(method11.getSeconds());              //  Returns 0-59

/*--------------------*/



