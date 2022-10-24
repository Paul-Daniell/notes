# Wat is Fetch?

De Fetch API geeft een JavaScript interface om toegang te krijgen tot en het manipuleren van delen van het protocol zoals requests en responses.

De Promise die wordt geretourneerd door fetch() zal de HTTP-foutstatus niet weigeren, zelfs niet als het antwoord een HTTP 404 of 500 is. In plaats daarvan, zodra de server reageert met headers, wordt de Promise normaal opgelost (met de eigenschap ok van het antwoord ingesteld op false als het antwoord niet in het bereik van 200–299) ligt, en het wordt alleen afgewezen bij netwerkstoring of als iets verhinderde dat het verzoek werd voltooid.

Een basis Fetch is erg simpel op te zetten. Zie voorbeeld.

```
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```
