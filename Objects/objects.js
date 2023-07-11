
    //  Objects are like arrays in Javascript, but objects are acceesed through properties.
/*  Objects are created by using "var" keyword, object name, =, curly braces, properties,
    values, and each value is seperated using a comma. The properties of objects can be
    any data type.  */

        var myObject = {
            FirstName: "Hameedullah",
            LastName: "Asadi",
            EducationLevel: "University credential",
            Profession: "Software and Web Developer",
            Age: 27,
            Race: "Asian"
        };

    //  Accessing object properties with "Dot Notation"
var fname = myObject.FirstName;                 //  Accessed to the value "Hameedullah"
var lname = myObject.LastName;                  //  Accessed to the value "Asadi"
var education = myObject.EducationLevel;        //  Accessed to the value "University credential"
var work = myObject.Profession;                 //  Accessed to the value "Software and Web Developer"
var age = myObject.Age;                         //  Accessed to the value "27"
var race = myObject.Race;                       //  Accessed to the value "Asian"

/*--------------------*/

    //  Accessing object oproperties with "bracket notation"
/*  We can use [] to access the object property, but while
the object property is campound, and has sapce in it,
It is required as follows:*/
var myProfession = {
    "Developement domain": "Front-end developer",
    "Programming language": "JavaScript",
    "Experience duration": "3 years"
};
//  Accessing the object property using []
var value1 = myProfession["Developement domain"];       //  We got access to the value "Front-end developer"
var value2 = myProfession["Programming language"];      //  We got access to the value "JavaScript"
var value3 = myProfession["Experience duration"];       //  We got access to thhe value "3 years"
console.log(value1);
console.log(value2);
console.log(value3);

/*--------------------*/

//      Updating the object property
//  Function
var myCity = {
    Name: "Tokyo",
    Country: "Japan",
    Population: "1.46 million",
    Location: "Capital"
}
//  Updating the object value
myCity.Name = "Kyodo";      //  We replaced Kyodo instead of Tokyo
console.log(myCity.Name);   //  Prints Kyodo as a replaced value

/*--------------------*/

//  Adding new properties to an object
var europeanCountries = {
    country1: "Germany",
    country2: "Norway",
    country3: "Sweden"
}

/*--------------------*/

//  To add new properties, we can use both .notation and bracket notation
    //  Dot notation
europeanCountries.NewCountry = "Denmark";    //We added a new property named "NewProperty" and the value "Denmark"   
console.log(europeanCountries.NewCountry);   //Prints the newly added value "Denmark"

    //  Bracket notation
europeanCountries['country4'] = "France";    //We added a new property named "country4" and the value "France"
console.log(europeanCountries.country4);     //Prints the newly added value "France"

/*--------------------*/

//Deleting a property from an object
    //To delete the property, use the keyword "delete"
var softwareCompanies = {
    Company1: "Microsoft",
    Company2: "Meta",
}
delete softwareCompanies.Company2;      //  We deleted the second property named "Meta"
console.log(softwareCompanies);         //  It only prints the first property and its value together

/*--------------------*/

//  Testing objects for properties
var carMakes = {
    Make1: "Toyota",
    Make2: "Nissan",
    Make3: "Honda",
    Make4: "Hyundai"
}

//  To check for a s specificf property in an object use "hasOwnProperry" method
function myfindFunction(checkProperty) {
    if (carMakes.hasOwnProperty(checkProperty)) // "carMakes" is the object name and "checkProperty" is the value of the function
    {
        return carMakes[checkProperty];  
    }
    else {
        return "Not found";
        }
}
console.log(myfindFunction("Make2"));       //  Returns "Nissan"

/*--------------------*/

//  Nested objects is an object inside another object
    //  In this example we have 3 nested objects
var contenent = {                          //First Object
    west: "Europe",
    east: "Asia",
    south: "Africa",
    europe: {                                   //  Second Nested Object
        cenralEurope: "Germany",
        westernEurope: "Norway",
        easternEurope: "Bulgharia",
        asia: {                                  //  Third Nested Object
            centralAsia: "Afghanistan",
            eatsernAsia: "China",
            middleEast: "Qatar",
            africa: {
                centralAfrica: "Nigeria",
                westernAfrica: "Libya",
                easternAfrica: "Somalia",         
            }
        }
    }
}
/*
This means that "easternAfrica" is inside the "africa",
the "africa" is inside the "asia", the "asia" is inside
the "europe" and the "europe" is inside the contenent
It prints Somalia!
*/
console.log(contenent.europe.asia.africa.easternAfrica);
/*  NOTE: If we are not sure of the property if it exists,
and do not want to the output to be an error, we can either 
use "if" statement or the shorter alternate is to put "?"
at end of each property before "." notation as follows:
            console.log(contenent?.europe?.asia?.africa?.easternAfrica?);   It will print undefined if the property is not available.
*/
//  How to delete a property of nested object
//  delete contenent.europe.asia.middleEast;    //  Will remove the middleEast property





