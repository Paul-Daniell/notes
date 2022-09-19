# What is Git?

Git is een plek om gegevens op te slaan, te delen en aan te passen.
Zelfs wanneer de gebruikersinterface van Git redelijk gelijk is aan die van andere CVSen, slaat GIT de gegevens anders op en kijkt heel anders naar informatie.

## Momentopnames, geen verschillen.

Conceptueel bewaren de meeste andere systemen informatie als een lijst van veranderingen per bestand. Deze systemen zien de informatie die ze bewaren als een groep bestanden.

![](img/git1.PNG)

Het bewaren van data als veranderingen aan een basisversie van elk bestand.
Git ziet en bewaard data heel anders. De kijk van Git op data kan beter worden uitgelegd als een reeks momentopnames van een miniatuur bestandssysteem.

Elke keer dat je commit word er als het ware een foto van de toestand van al je bestanden op dat moment genomen en word een verwijzing naar die foto opgeslagen. Git beschouwd gegevens meer als een reeks van snapshots.

![](img/git2.PNG)

Dit maakt Git meer een soort van mini bestandssysteem met een paar ongelooflijk krachtige gereedschappen.

## Bijna alle handelingen zijn lokaal.
