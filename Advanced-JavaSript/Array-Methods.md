# JS: Array Methods

## 8 Must know JavaScript Array Methods

- the .filter method
- the .map method
- the .find method
- the .foreach method
- the .some method
- the .every method
- the .reduce method
- the .includes method

Example Array

```
const items = [
    {name: 'Bike',          price: 100},
    {name: 'TV',            price: 200},
    {name: 'Album',         price: 50},
    {name: 'Book',          price: 5},
    {name: 'Phone',         price: 1000},
    {name: 'Computer',      price: 1200},
    {name: 'Keyboard',      price: 500},
]
```

the .filter method = Een manier om de gewenste gegevens eruit te filteren, bijv: als je alle bedragen onder of gelijk aan (<=) de 100 eruit wilt filteren.

### Oproepen Array functie:

```
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
```

the .map method = Een manier om de gewenste gegevens naar voren te laten komen, bijv: als je alle product namen of alle prijzen naar voren wilt hebben uit de Array.

### Oproepen Array functie:

```
const itemNames = items.map((item) => {
    return item.name
})

const itemNames = items.map((item) => {
    return item.price
})
```

the .find method = Een manier om het gewenste product naar voren te laten komen, bijv: als je alle product met dezelfde naam en prijs naar voren wilt hebben uit de Array.

### Oproepen Array functie:

```
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
```

the .forEach method = Een manier om het gewenste element uit de Array naar voren te laten komen, bijv: alle product namen of prijzen.

### Oproepen Array functie:

```
items.forEach((item) => {
    console.log(item.name)
})

items.forEach((item) => {
    console.log(item.price)
})
```

the .some method = Deze methode geeft alleen een true of false melding op de gewenste vraag. Bijv: Zijn er prijzen minder dan 100, ja = true, nee = false.

### Oproepen Array functie:

```
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
```

the .every method = Deze methode geeft alleen een true of false melding op de gewenste vraag. Bijv: Zijn alle prijzen minder dan 100, ja = true, nee = false.

### Oproepen Array functie:

```
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})
```

the .reduce method = Deze methode geeft een totaal van alle ingegeven items. Bijv: de gehele Array beginnende bij de Bike (0) tot aan het Keyboard (6) en telt dan van alle producten de currentTotal op. Er word een soort van loop gebruikt.

### Oproepen Array functie:

```
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
```

the .includes method = Deze methode kijkt puur naar de vraag en geeft hier een true or false op. Bijv: Zit er een 2 in de Array? ja = true, nee = false.

### Oproepen Array functie:

```
const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)

```
