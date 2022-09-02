# Return keyword.

Het return keyword kan alleen binnen een function worden gebruikt. Buiten een function zal het niet werken of een error geven.

Bijgebruik van het keyword `return`, maken we een `return statement`.

### Wanneer JavaScript langs een returnstatement komt, gebeurt het volgende.

1. De functionstoptmet uitvoeren
2. Als er een value achter het statement staat, word deze weergegeven aan degeen die die function called.
3. Het programma gaat verder waar waar de functionorigineel werd gecalled.

### Het returnstatement kan voor de volgende redenen worden gebruikt!

1. Om een function te stoppen, zonder een waarde terug te geven.
2. Om een function te stoppen en een bepaalde waarde terug te geven.

## Return values.

### Je kunt het `return`keyword voor elke expressie (value) gebruiken.

- strings
- numbers
- booleans
- arrays
- objects
- functions
- en nog veel meer!

## Return zonder waarde.

Als je geen gedefineerde waarde aan een `return` geeft, zal er als return undefined terugkomen.

## Meervoudige `return` statements

Een function kan meerdere `return` statements hebben. Houd er wel rekening mee dat als de eerste word gelezen, de rest niet word uitgevoerd! Tenzij het `if` statement word gebruikt. Dan zal degene met de beste toepassing worden gebruikt.

## Functions met verschillende rollen.

Over het algemeen kunnen functions worden gebruikt voor het volgende:

1. om iets uit te voeren.
2. om iets te produceren of te berekenen
3. om iets te doen en te produceren

Het verschil tussen deze verschillende type functions lijkt klein, maar als je er aan gewend raakt maakt het je leven als developer makkelijker.

## Functies die iets doen.

Een functie die iets doet kan de volgende dingen doen:

- iets printen naar de console
- een alert weergeven
- de achtergrondkleur van een website veranderen
- een `knop` toevoegen aan een website.
- een e-mail versturen
- schrijven naar een datbase.

Functies die iets doen hebben vaak geen `return` statement nodig. Ze doen gewoon iets en zijn dan aan het eind van de functie.

Alleen als je bijvoorbeeld een lijst moet legen en deze is al leeg, dan kun je een `return` statement gebruiken om de functie eerder te verlaten.

## Functions die iets produceren.

Een funtion die iets produceerd retourneerd 1 of meerdere waardes. Deze fuctions doen niet iets. Enige voorbeelden.

- twee nummers optellen
- de inkomsten belasting berekenen
- het aantal dagen tussen twee datums berekenen
- alle zoete fruitsoorten uit een fruitlijst halen

Functions die produceren of calculeren gebruiken altijd een `return` statement.

## Functions die beide doen.

Functons in deze categorie doen iets en produceren iets. Het is het beste om deze niet te veel te gebruiken.
