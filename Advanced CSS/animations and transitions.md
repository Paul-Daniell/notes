# CSS Animations and transitions

Om elementen in je webpagina te laten bewegen, kun je `CSS animations of transitions` gebruiken. Maar let wel op! Meestal gebruik je deze op een subtiele manier.

## Transitions.

Om de tijdsduur van een transition te bepalen, gebruiken we: `transition-duration:` De tijd geven we dan in sec. of msec. in, dus bijvoorbleed 0.5s of 500ms voor een halve seconde. Hoewel CSS zowel sec alsd msec kent is het aan te raden om in msec te werken gezien JS alleen msec kent.

Met de `transition-property`, geef je aan wat er bewerkt word. Dus bijvoorbeeld de achtergrond die verkleurt of de width die word aangepast.

Beide geef je aan in het element, dus bijvoorbeeld:

```
.box {
    width: 300px;
    background: #fff;
    transition-duration: 500ms;
    transition-property: background;
}
```

Om aan te geven wanneer een transition moet plaats vinden maak je bijvoorbeel een hover aan. Hierin kun je ook aangeven wat de transition nog meer kan doen.

```
.box:hover {
    background: #000;
    transform: rotate(45deg)
}
```

Door de `transition-property` op all te zetten, voert CSS alle in de `.box:hover:` opgegeven transitions uit. Dit is niet de beste manier, gezien transitions nogal wat vragen van de CPU en een oudere of tragere PC hier problemen mee kan hebben en je de bezoeker niet voorziet van een soepele website. je kunt dan beter iets meer tijde nemen en de trasitions per stap defineren om zo de CPU wat te sparen.

Dus niet

```
transition-property: all;
```

maar

```
transition-property: background, transform;
```

### Timing.

Om de timing van een transition te bepalen gebruiken we `transition-timing-function`
Deze is onder te verdelen in 4 standaard stappen.

- linear: blijft de gehele transition op een constante snelheid.
- ease-in: Start langzaam en versnelt tijdens de transition.
- ease-out: start snel en vertraagd tijdens de transition.
- ease-in-out: start snel, vertraagd en versneld daarna weer.

### cubic-bezier.

Op https://cubic-bezier.com/ kun je op een visuele manier zelf de timing voor je transition bepalen. Als de timing naar je zin is kun je en cubic-bezier code kopieren en plakken in je code.

Als je wilt dat een transition niet direct begint als de cursor over de animatie gaat, kun je `transition-delay:` gebruiken. Hiermee kun je exact bepalen op welk moment de transition begint.

Om alles in één regel te kunnen schrijven kun je `transition:` gebruiken en de opdrachten erna in voeren. Let alleen wel op de volgorde van stappen die je invoert!

# Animations.

## Transforms.

Met `transforms` vertel je CSS wat te doen met Bijvoorbeeld een afbeelding. Je maakt hierbij voornamelijk gebruik van de Y en de X as. Zo kun je een afbeelding laten draaien of uitzetten en krimpen.

Voorbeelden hiervan zijn:

```
img{
    transform: translateX(200px)
    transform: translatey(200px)
    transform: translate(200px, 200px)
}
```

Translate laat de afbeelding van rechts naar links (x-as) bewegen, of van boven naar beneden (y-as). Dit kan afzonderlijk worden ingevoerd, of op één regel. ( zie voorbeelden)

```
img{
    transform: scaleX(5)
    transform: scaley(3)
    transform: scale(5, 3)
}
```

Hiermee kun je de afbeelding laten krimpen of groeien over de X en de Y as. (1) staat in dit geval voor een schaal : 1 en veranderd dus niets.

```
img{
    transform: rotateX(60deg)
    transform: rotatey(45deg)
    transform: rotatez(60deg)
}
```

Voor het roteren van een afbeelding is de z-as de beste visuele keuze.

Om alle opdrachten tegelijk te gebruiken schrijf je de code op de volgende manier:

```
transform: rotatez(90deg) translateY(200px) scale(2)
```

## keyframes.

Om keyframes te kunnen gebruiken, voer je de afbeelding in als een `class`, zodat CSS weet waarnaar de keyframe verwijst.
In CSS maak je dan een `element to animate` aan en een `keyframe`

```
HTML:
<div class="mario"></div>

CSS:
/*// Elements to animate //*/

.mario{
    position: absolute;
    top: -40px;
    animation-name: drive;
    animation-duration: 3s;
}

/*// Keyframes //*/

@keyframes drive {
    from{transform: translatex(-100px)}
    to{transform: translatex(1000px)}
}
```

Op deze manier weet CSS wat er geanimeerd moet worden en hoe er geanimeerd moet worden. Zoals in dit voorbeeld er een mariokart van de linkerkant naar de rechterkant rijdt.

## Animation fill mode.

```
HTML:
<div class="mario"></div>

CSS:
/*// Elements to animate //*/

.mario{
    position: absolute;
    top: -40px;
    animation-name: drive;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation delay: 2s;
}

/*// Keyframes //*/

@keyframes drive {
    from{transform: translatex(-100px)}
    to{transform: translatex(1000px)}
}
```

Je kunt voor de animation fill mode 3 modussen gebruiken.

- forwards
- backwards
- both.

De animation fill mode besluit wat er met de animatie gebeurt buiten the animation window.

## repeating animations

```
HTML:
<div class="mario"></div>

CSS:
/*// Elements to animate //*/

.mario{
    position: absolute;
    top: -40px;
    animation-name: drive;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite
}

/*// Keyframes //*/

@keyframes drive {
    from{transform: translatex(-100px)}
    to{transform: translatex(1000px)}
}
```

Met de `animation-iteration-count bepaal je hoevaak de animatie zich herhaalt. Je kunt hier kiezen:

- een aantal seconden
- infinite
-
