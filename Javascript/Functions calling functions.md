# Wat kunnen we doen binnen een functie

- Bijna elke soort code
- zoveel als je wilt of nodig hebt (Het meest overzichtelijk is tot 30 regels)

# Functions oproepen.

## Een funtion oproepen vanuit een andere function

Werkt exact zo als buiten een function

```
const scream = function() {
    console.log("let me hear you say Yeahhh");
};

scream();
```

### Nu roepen we deze function op vanuit een andere function

```
const makeNoise = function() {
    scream();
};

makenoise();
```

# Waarden retourneren

Werkt exact hetzelfde.

# Debugging.

Door de console.log te specificeren, kun je zien waar je in de code bent.

### Voorbeeld

```
const makePositive = function(number); {
    console.log("Entering makePositive");
    console.log("Input: ", number);
const result = Math.abs(number);
    console.log("Output: ", result);
    return result;
};
```

### Dit geeft dan als return:

```
Entering makePositive..
Input: -1
Output: 1
```
