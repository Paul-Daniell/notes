# drie manieren om een functie te schrijven.

### 1. // Function declaration

```
function sayhello1() {
    console.log("Hello 1");
}

sayHello1();

```

### 2. // Function expression.

```
const sayHello2 = function() { console.log("Hello 2");
};

sayHello2();

```

### 3. // Arrow function (also a function expression)

```
const sayHello3 = () => {
console.log("Hello 3");
};

sayHello3();


```

Als een Arrow function één argument heeft, kun je () weglaten.
