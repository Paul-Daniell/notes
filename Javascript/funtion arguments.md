# Function Arguments

## Mentalmode

Zie het als een machine die je iets geeft.

## Waarom arguments

Zorgt ervoor datdat defunctiemet verschillendeinputs werkt

## Verschillende soorten arguments

Nummers, strings, arrays, objects, booleans.

## Number of arguments

Geef meerdere dingen aan de machine

## Argument names

De `"Interne wereld"` van de functie.

# Wat is dan een argument en wat is een parameter,

```
//          parameter
const sayHiTo = function(name) {
    console.log("Hi" + name);
};

// argument
sayHiTo("Paul");
```

# Wat is een function en wat is een object met een function?

```
//    function
const sayHiTo = function(name) {
    console.log("Hi" + name);
};

// object
const person = {
    name: "Paul",
    age: "47",
    //      method
    sayHi: function() {
        console.log("Hi");
    };
};

Dus een method is een function toegewezen aan een object!
```
