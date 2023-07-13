
//  Every object has two things, data/property and method
//  Know something
//  Does seomthing
//  Whenever the function is used within object, that is called method



//  Method inside the object
let home = {                //  This is an object with 4 key value pairs - Properties
    location: "Vancouver",
    type: "Townhouse",
    rooms: 3,
    price: "$2 million",

    FirstMethod: function ()        //  This is the method inside the object 
    {
        console.log("I love the " + home.type + " located in " + home.location + ", with " + home.price + " value, which is very hight.");
        //  console.log(home.location, home.type, home.rooms, home.price);  Prints all the properties inside the home object
        }
}
home.FirstMethod();     //  Runs the method

