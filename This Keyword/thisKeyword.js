/*  
1. The "Keyword" this represents the current object which we refere to
2. In a function, "this" keyword is refered to a global object
3. in a strict mode function, this keyword returns undefined
4. In an event, "this" refer to the element that receives the event
*/
//Example



var coding = {
    programmingLanguage: "JavaScript",
    Framework: "React",

    profession: function ()
    {
        console.log("I love " + this.programmingLanguage + ", and its framework " + this.Framework + ".");
    }
}
coding.profession();


//  Another example of keyword "this"
let car = {
    Make: "Toyota",
    Model: "Corolla",
    Year: 2012,
    carFunction: function ()
    {
        console.log(car.Make, car.Model, car.Year);         
        }
}
car.carFunction();


