# Conventions and Pre-compilers.

Om te voorkomen dat CSS files groot en onoverzichtelijk worden, maken we gebruik van conventions en pre-compilers.

## Conventions.

Dit zijn een aantal regels en overeenkomsten die we gebruiken bij het schrijven van CSS. Je kunt bijvoorbeeld conventies gebruiken bij het schrijven van CSS classes zodat je makkelijk kunt zien of het element een child van een ander element is door het lezen van de CSS.

## Pre-compilers.

Pre-compilers zijn stukjes software waarmee we CSS eenvoudiger en beknopter kunnen schrijven. De pre-compiler zet wat je schrijft om in gewone CSS, zodat de browser het kan begrijpen.

# Conventions.

Een convention is een afspraak die door een bepaalde groep geaccepteerd word. Bij coderen word gebruik gemaakt van `naming convention`, dit is een regel waarbij iedereen ermee instemt om bepaalde dingen op een bepaalde manier te benoemen.

CSS maakt bijvoorbeeld geen gebruik van camelCase (interCaps). Naast dat dit voor problemen kan zorgen binnen CSS, zou het de CSS ook minder leesbaar maken.

Dus doe dit niet!

```
.redBox{
    border: 1px solid red;
}
```

Maar doe het alsvolgt!

```
.red-box{
    border: 1px solid red;
}
```

Er zijn vele manieren om een duidelijke structuur te geven aan CSS. Een veel gebruikte convention is BEM (Block, Element, Modifier) method.

# SASS and SCSS pre-compilers.

### Wat is een pre-compiler? (Ook wel een pre-processor)

`Dit is een programma dat zijn invoergegevens verwerkt om uitvoer te produceren die wordt gebruikt als invoer voor een ander programma.`

Bij gebruik van een pre-compiler, schrijf je CSS in een speciale file. I.p.v. `.css` files, gebruik je `.scss`. Deze `.scss` file wordt vooraf gecompileerd tot een normaal `.css` file.

Dus uiteindelijk word het omgezet in een `.css` file. Dit betekent dat je alles wat je al weet over CSS kunt toepassen met Sass (of SCSS). Sass is daarom een extensie voor CSS en geeft het extra features.
De browser zier geen verschil tussen Sass of CSS, maar als programeur word je werkwijze een stuk efficienter.

## Voordelen van Sass

- Nesting Selectors
- Modules (importing and exporting different files)
- Variables ($element)
- & element

## Geavanceerde Sass-voordelen

- Mixins
- Extend
- Calculations
