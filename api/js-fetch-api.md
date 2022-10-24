# API

Staat voor Apllication programming interface.

Een Api word voornamelijk gebruikt voor de communicatie tussen een webapplicatie en een database.
Dit kan zijn voor het opvragen van informatie, maar ook voor het toevoegen van informatie.

De informatie uit de API staat op een webadres(server), dit noemen we de Endpoint.

# Hoe gebruik je Fetch

```
fetch(url) // Call the fetch function passing the ur of the API as a parameter

.then((result) => {
 // Your code for handling the data you get from the API
})
.catch((error) => {
 // this is where you run code if the server returnd any errors
})
```

```
fetch(url) .then((response) => {
    if (!response.ok) {
        throw new Error ('Network response was not ok');
        }
        return response.json();
        })
        .then((data) => { // do some stuff, show data.
        })
        .catch((error) => { console.log(error);
        })
```

# Request options

```
async postData = (url = '', data ={}) => {
    // Default options are marked with *
    const response = await fetch (url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cahe: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'apllication/json' // 'Content-Type': 'application/x-www-form-urlencoded',
        },
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
Body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parser JSON response into native JavaScript objects
}
```
