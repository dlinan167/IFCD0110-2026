# Exemples d'ús de `preventDefault()`

`preventDefault()` és un mètode de l'objecte Event que serveix per evitar el comportament per defecte d'un element HTML.

Molts elements tenen una acció automàtica associada:

- Un enllaç `<a>` navega a una altra pàgina.
- Un formulari `<form>` envia les dades i recarrega la pàgina.
- Un botó dins d'un formulari pot enviar el formulari.
- El menú contextual apareix amb el botó dret.

Amb `preventDefault()` podem aturar aquest comportament i executar el nostre propi codi.

## Exemple 1: Evitar que un enllaç obri una pàgina

HTML

```html
<a href="https://www.google.com" id="enllac"> Anar a Google </a>
```

JavaScript

```JavaScript
const enllac = document.getElementById("enllac");

enllac.addEventListener("click", function(e) {

    e.preventDefault();

    alert("La navegació ha estat bloquejada");

});
```

Què passa?

Sense `preventDefault()`:

```mermaid
flowchart TD
    A[Usuari fa clic sobre un enllaç] --> B[Es dispara l'esdeveniment click]
    B --> C[Executar addEventListener]
    C --> D{"Es crida preventDefault()?"}
    D -->|Si| E[Es cancel·la la navegació]
    E --> F[Executar codi personalitzat]
    F --> G[Mostrar missatge o fer una altra acció]
    D -->|No| H[El navegador segueix l'enllaç]
    H --> I[Es carrega la nova pàgina]
```

## Exemple 2: Evitar l'enviament d'un formulari

Aquest és un dels usos més habituals.

HTML

```html
<form id="formulari">
  <label>
    Nom:
    <input type="text" id="nom" />
  </label>

  <button type="submit">Enviar</button>
</form>
```

JavaScript

```JavaScript
const formulari = document.getElementById("formulari");

formulari.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("No s'ha enviat el formulari");

});
```

```mermaid
flowchart TD
    A[Usuari prem el botó Enviar] --> B[Es dispara l'esdeveniment submit]
    B --> C[Executar funció associada]
    C --> D{"Hi ha preventDefault()?"}

    D -->|Sí| E[Es cancel·la l'enviament]
    E --> F[El formulari no es recarrega]
    F --> G[Es poden validar dades o fer tractament propi]

    D -->|No| H[El navegador envia el formulari]
    H --> I[Es carreguen les dades al servidor]
    I --> J[La pàgina es pot recarregar]
```

## Exemple 3: Validar un formulari abans d'enviar-lo

HTML

```html
<form id="registre">
  <input type="text" id="usuari" />

  <button>Registrar-se</button>
</form>
```

JavaScript

```JavaScript
const registre = document.getElementById("registre");

registre.addEventListener("submit", function(e) {

    const usuari = document.getElementById("usuari").value;

    if (usuari === "") {

        e.preventDefault();

        alert("Has d'introduir un usuari");

    }

});
```

Aquí només bloquegem l'enviament si hi ha un error.

```mermaid
flowchart TD
    A[Usuari omple el formulari] --> B[Prem Enviar]
    B --> C[Esdeveniment submit]
    C --> D[Obtenir valors dels camps]
    D --> E{Les dades són correctes?}
    E -->|Sí| F[Permetre enviament]
    F --> G[Enviar formulari al servidor]
    E -->|No| H["Executar preventDefault()?"]
    H --> I[Aturar enviament]
    I --> J[Mostrar missatge d'error]
```

## Exemple 4: Evitar el menú contextual del botó dret

JavaScript

```JavaScript
document.addEventListener("contextmenu", function(e) {

    e.preventDefault();

    alert("Botó dret desactivat");

});
```

```mermaid
flowchart TD
    A[Usuari prem botó dret] --> B[Es dispara contextmenu]
    B --> C[Executar event listener]
    C --> D{"Es crida preventDefault()?"}
    D -->|Sí| E[Es cancel·la el menú contextual]
    E --> F[Executar acció pròpia]

    D -->|No| G[El navegador mostra el menú]
```

## Exemple 5: Evitar que una tecla faci una acció

Per exemple, impedir que s'escrigui una lletra concreta:

HTML

```html
<input type="text" id="camp" />
```

JavaScript

```javascript
const camp = document.getElementById("camp");

camp.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    e.preventDefault();
  }
});
```

Ara la lletra a no s'escriurà al camp.

```mermaid
flowchart TD
    A[Usuari prem una tecla] --> B[Es dispara keydown]
    B --> C[Capturar tecla amb e.key]
    C --> D{És una tecla bloquejada?}
    D -->|Sí| E["Executar preventDefault()"]
    E --> F[La tecla no modifica el camp]
    D -->|No| G[Permetre comportament normal]
    G --> H[El caràcter apareix en el camp]
```

## Exemple 6: Evitar que un botó enviï un formulari

HTML:

```html
<form>
  <input type="text" />
  <button id="boto">Botó de prova</button>
</form>
```

Per defecte, un botó dins d'un formulari és de tipus `submit`.

JavaScript:

```JavaScript
document.getElementById("boto")
.addEventListener("click", function(e){

    e.preventDefault();

    alert("El botó no envia el formulari");

});
```

```mermaid
flowchart TD
    A[Usuari modifica un formulari] --> B[Event input]
    B --> C[formulariModificat = true]
    C --> D[Usuari intenta abandonar la pàgina]
    D --> E[Es dispara beforeunload]
    E --> F{formulariModificat?}
    F -->|No| G[Sortir de la pàgina]
    F -->|Sí| H["Executar preventDefault()"]
    H --> I[Assignar e.returnValue]
    I --> J[Navegador mostra avís]
    J --> K{Usuari confirma?}
    K -->|Sí| L[Abandonar pàgina]
    K -->|No| M[Continuar a la pàgina]
```

## Exemple 7: Evitar que es tanqui finestra per accident (beforeunload)

En aquest codi:

Javascript

```Javascript
window.addEventListener("beforeunload", function(e) {
    e.preventDefault();
    e.returnValue = "";
});
```

`preventDefault()` diu:

> "No continuïs amb l'acció automàtica d'abandonar la pàgina."

I:

```javascript
e.returnValue = "";
```

diu al navegador:

> "Demana confirmació a l'usuari abans de sortir."

## Resum ràpid

| Element             | Comportament per defecte Ús de `preventDefault()` |                      |
| ------------------- | ------------------------------------------------- | -------------------- |
| `<a>`               | Canvia de pàgina                                  | Evitar la navegació  |
| `<form>`            | Envia dades i recarrega                           | Fer validació pròpia |
| Botó dins formulari | Fa submit                                         | Evitar enviament     |
| Tecles              | Escriuen caràcters                                | Bloquejar tecles     |
| Botó dret           | Mostra menú                                       | Bloquejar menú       |
| `beforeunload`      | Abandona pàgina                                   | Demanar confirmació  |
