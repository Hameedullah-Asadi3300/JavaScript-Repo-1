/*
JavaScript date object lets developer work with date object.
Date objects are static, and not running, this is the computer
clock that ticking.
By default, the date object will use the browser's timezone and 
displays date as full text string.
Note: JavaScript counts months from 0-11.
*/
/*--------------------*/
//  Syntax  -   Date object is created with the new date() constructor.
//  And there are 9 wways to create a date object:

//  new Date()  -   Create a date object with the current date and time:
const container1 = new Date();   //  prints 
console.log(container1);         //  2023-07-17T05:42:22.108Z

/*--------------------*/
//  new Date(date string)
const container2 = new Date("July 16, 2023 11:04:00");
console.log(container2);
//  or
const container3 = new Date("2023-07-16");
console.log(container3);

/*--------------------*/
//  Using 6, 4, 3 and 2 in date object
//6 numbers specifies year, month, day, hour, minute, and second
const conteiner4 = new Date(2023, 7, 17, 17, 43, 56);   //  year, month, day, hours, minutes and seconds
console.log(conteiner4);    //  Returns Thu Aug 17 2023 17:43:56 GMT-0700 (Pacific Daylight Time)

/*--------------------*/
//  5 Number specifies year, month, day, hours and minutes
const container5 = new Date(2021, 2, 9, 3, 39);
console.log(container5);    //  Returns Tue Mar 09 2021 03:39:00 GMT-0800 (Pacific Standard Time)

/*--------------------*/
// 4 numbers specifies year, month, day and hours
const container6 = new Date(2022, 9, 11, 4);
console.log(container6t);   //  Returns Tue Oct 11 2022 04:00:00 GMT-0700 (Pacific Daylight Time)

/*--------------------*/
//  3 numbers specifies year, day and month
const continer7 = new Date(2019, 11, 12);
console.log(container7);    //  Returns Thu Dec 12 2019 00:00:00 GMT-0800 (Pacific Standard Time)

/*--------------------*/
// 2 numebrs specifies year and month
const container8 = new Date(2014, 9);
console.log(container8);    //  Returns Wed Oct 01 2014 00:00:00 GMT-0700 (Pacific Daylight Time)

/*--------------------*/
//  Previous century - Using two digits number as year will automaticall add 19 and will return previous century
const container9 = new Date(45, 7, 19);
console.log(container9);    //  Returns Sun Aug 19 1945 00:00:00 GMT-0700 (Pacific Daylight Time)

/*--------------------*/

//  Note: JavaScript stores date in milliseconds. One day (24 hours) is 86 400 000 milliseconds.









