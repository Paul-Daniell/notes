# Starten met Javascript

## leer doelen!

- `<script>` tags kunnen het beste onderaan in de `<body>` tags worden gebruikt. Zo hoeft de browser/Javasript engine niet eerst alle Javascript te lezen en zal de website eeder laden en voorkomt een slechte gebruikerservaring.
- Door de `<script>` tags te laten verwijzen naar een losse `index.js` file, hoef je niet alle javascript in de html pagina te schrijven en blijft het overzichtelijk. `<script src="index.js"><script>`
- separation of concerns houd in dat je verschillende items uit elkaar houd. HTML is de inhoud van de website en JavaScript gaat over het gedrag van de website. Daarom houd je dit uit elkaar om het overzichtelijk te houden.

## Variabelen en data types.

### variabelen.

Het tijdelijk plaatsen van data in het geheugen.

`let` is een keyword i.p.v. `var` omdat `var` problemen kan geven.

`let name;`

`console.log(name);` geeft voor nu in de console undefined. Dit is de standaard voor een variabel.

`let name ='Paul';`

`console.log(name);` geeft nu in de console Paul weer.

### Regels voor het benoemen van variabelen.

Om een variabele aan te maken gebruik je een keyword (let), een identifier (name) en een waarde (Paul)

- Het mag geen gereserveerd keyword zijn
- Ze moeten duidelijk zijn en betekenisvol zijn
- Ze mogen niet starten met een nummer
- Ze mogen geen spatie of hyphen (-) bevatten
- Gebruik camalNotation
- Ze zijn hoofdlettergevoelig

### Constanten.

De waarde van een variabele kan veranderen. Als dit niet wenselijk is, dan gebruik je constanten. Op deze manier zal de waarde niet veranderen. De console geeft een foutmelding als dit wel word ingegeven.

### Primitive Types.

Primitives / Value Types zijn:

- String
- Number
- Boolean
- undefined
- null

`let name = 'Paul';` is een String Literal.

`let age = 47;` is een Number Literal

`let isApproved = true;` is een Boolean Literal Kan 'true' of 'false' zijn!

`let firstName = undefined;` Is niet gebruikelijk

`let selectedColor = null;` is standaard bij een colorpicker.

### Dynamic Typing.

Bij een static language kan een waarde in de toekomst niet worden aangepast en dit kan bij een Dynamic language wel.

Bijvoorbeeld:

`let name = 'Paul';` Als je in de console het keyword `typeof` gevolgd door door de identifier `name` in geeft, zal het antwoord zijn `"string"`. Op het moment dat je ingeeft `name = 1;` zal het antwoord op `typof` zijn: `"number"`

Meer informatie over Primitive Dat Types vind je hier https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
