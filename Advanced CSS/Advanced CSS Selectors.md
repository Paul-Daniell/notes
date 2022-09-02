# Advanced CSS Selectors

Buiten de standaard selectors zoals:

- `#id`
- `.class`
- `element`

zijn er ook de meer geavanceerde selectors, waarmee je specifieker kunt stylen.
Dit zijn:

- `*` Universal. Deze selecteerd alles (behalve ::before & ::after)
- `>` Direct children. Deze selecteerd alles binnen een class,
  behalve als er een nieuwe div in staat.
- `+` Adjacent sibling. Deze selecteerd alles wat er voor deze is gecodeerd. Bij blokjes neemt het alles over van het blokje ervoor. Tenzij er een blanke ruimte tussen zit, dan blijft de authetieke css van toepassing.
- `~` General sibling. Deze neemt alles van het blokje ervoor over ongeacht of er blanco ruimtes tussen staan.
- `[]` Attribute. Hiermee kun je heel specifiekin detail treden om bepaalde elementen te stylen. Bijvoorbleed bij een a href="#">index.html /a kun je stylen met als attribute [index.html]
