//  For of loop and for in loop are used to print the value inside an array
//  These two loops are used with array

let ofLoop = []         //  Declared an empty array
ofLoop[0] = 1;          //  Added a value with index [0]
ofLoop[30] = 100;       //  Added a value with index [100]
console.log(ofLoop);    //  prints[ 1, <98 empty items>, 100 ]
for (let storage of ofLoop)
{
    console.log(storage);
}
    //  It prints
    // 1
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // 100
    

let inLoop = []                                             //  Declared an empty array
inLoop[0] = 200;                                            //  Assigned a value of 200 with index [0]
inLoop[20] = 220;                                           //  Assigned a value of 220 with index [20]
for (let storage2 in inLoop)                                //  we created a variable inside the for in inLoop
{
    //  Only prints the assigned value to the array
    console.log(inLoop[storage2]);
    // console.log(storage2);   //  It only prints the starts and ending indexes     
}                                       //  0  
                                        //  20    
//  Prints                              
// 200
// 220




