# Respecto para o Deportivismo

Timeline web sobre o conflito entre a dirección do RC Deportivo e unha parte da súa afección tras o regreso do club a Primeira División en 2026.

O proxecto presenta os principais acontecementos nunha cronoloxía a pantalla completa, paso a paso e sen scroll vertical: avánzase coa roda do rato, coas frechas do teclado, cos botóns en pantalla ou deslizando o dedo en móbil. Diferénciase entre decisións do club, respostas dos seareiros e información de contexto.

É unha **web estática**, sen backend, base de datos nin dependencias externas necesarias para funcionar.

## Estrutura

```text
index.html          Páxina principal
legal.html          Aviso legal

css/
  style.css         Deseño e animacións
  fonts.css         Tipografías autoaloxadas

js/
  app.js            Renderizado, navegación e compartir

data/
  steps.js          Contido da cronoloxía
  legal.js          Contido do aviso legal

fonts/              Tipografías
img/                Fotografías, escudo e outros recursos
```

A maior parte do contido pode modificarse sen tocar HTML, CSS ou JavaScript.

## Editar a cronoloxía

Os acontecementos están en:

```text
data/steps.js
```

Cada paso ten esta estrutura:

```js
{
  date: "12 de marzo de 2026",
  year: "2026",
  side: "infamia",
  kicker: "Contexto",
  title: "Título do acontecemento",
  body: "Descrición breve do sucedido.",
  image: "img/foto.jpg",
  source: {
    label: "Fonte",
    url: "https://..."
  },
},
```

Os valores dispoñibles para `side` son:

```text
infamia     Decisións ou actuacións da dirección
dignidade   Respostas e mobilizacións da afección
info        Contexto ou información neutral
```

A orde dos bloques dentro de `steps` determina a orde da cronoloxía.

## Configuración xeral

Na parte superior de `data/steps.js` está o bloque `config`.

Desde aí pódense modificar:

* nome da web;
* lema;
* introdución;
* textos da pantalla final;
* URL para compartir;
* texto para redes sociais;
* outros elementos xerais da timeline.

## Imaxes

O campo `image` acepta rutas locais:

```js
image: "img/riazor.webp"
```

ou imaxes externas:

```js
image: "https://exemplo.gal/foto.jpg"
```

É recomendable gardar as imaxes dentro de `/img` para que a web sexa autocontida.

As fotografías incluídas no proxecto poden ter licenzas e titulares diferentes. Consulta o apartado de licenzas antes de reutilizalas.

## Aviso legal

O texto está en:

```text
data/legal.js
```

`legal.html` simplemente representa ese contido.

O aviso incluído é unha **plantilla**. Cada persoa ou colectivo que publique unha copia debe substituír os placeholders, identificar ao responsable da súa instalación e adaptalo ás súas circunstancias.

A persoa que creou o modelo orixinal non é responsable das copias, modificacións ou publicacións realizadas por terceiros.

## Privacidade e cookies

A instalación orixinal:

* non emprega analítica;
* non incorpora publicidade;
* non instala píxeles de seguimento;
* non require rexistro;
* non instala cookies propias ou de terceiros.

As tipografías están autoaloxadas e non se realizan peticións a Google Fonts.

Se unha copia incorpora posteriormente Analytics, vídeos embebidos, publicidade, CDN, formularios ou outros servizos externos, será responsabilidade de quen a publique adaptar o aviso legal e a política de privacidade ou cookies cando corresponda.

## Compartir

A web incorpora opcións para compartir en diferentes redes e copiar a ligazón.

Antes de publicar, configura a URL definitiva en `data/steps.js`:

```js
shareUrl: "https://exemplo.gal/"
```

## Publicación

Non necesita compilación nin instalación.

Pódese publicar directamente en:

* GitHub Pages
* Cloudflare Pages
* Netlify
* Vercel
* calquera hosting convencional
* calquera servidor web

Só hai que subir o proxecto completo.

Tamén pode abrirse `index.html` directamente desde o navegador para facer probas locais.

## Licenza do código

O código orixinal deste proxecto distribúese baixo licenza **Zero-Clause BSD (0BSD)**.

Podes:

* usalo;
* copialo;
* modificalo;
* redistribuílo;
* empregalo en proxectos persoais ou comerciais.

Non é necesario solicitar autorización.

O software distribúese **tal e como está, sen garantías**, nos termos establecidos pola licenza 0BSD.

SPDX:

```text
0BSD
```

Esta licenza aplícase **ao código do proxecto**, non ás fotografías, marcas, escudos ou materiais de terceiros.

## Fotografías e materiais de terceiros

O modelo pode incluír fotografías procedentes de Unsplash. Estas imaxes están sometidas á **Unsplash License** e non á licenza 0BSD do código.

Tamén se empregaron imaxes ou materiais procedentes de:

* **RC Deportivo**
* **Carlos Pardellas / La Opinión A Coruña**
* **Germán Barreiros / DXT Campeón**
* **Jesús Sancho / Diario AS**
* **Patricia G. Fraga / DXT Campeón**

Os seus dereitos pertencen aos respectivos autores, medios ou titulares.

O proxecto tamén pode incluír o escudo e outros signos distintivos do **RC Deportivo**, que pertencen aos seus respectivos titulares.

A inclusión ou acreditación destes materiais **non significa que sexan libres nin que a licenza 0BSD permita redistribuílos**.

Se reutilizas este repositorio, debes comprobar que podes utilizar legalmente esas imaxes ou substituílas por materiais propios ou cunha licenza adecuada.

Os créditos e fontes concretas están detallados no aviso legal incluído no proxecto.

## Independencia

Este é un proxecto cidadán e afeccionado.

Non é unha web oficial do RC Deportivo nin está patrocinada, encargada, supervisada ou avalada polo club, ABANCA, os medios citados ou calquera outra entidade mencionada.

As copias e adaptacións realizadas a partir deste repositorio son responsabilidade exclusiva de quen as publique.

