window.DEPOR_DATA = {

  /* ==========================================================================
     MULTIIDIOMA
     --------------------------------------------------------------------------
     - "languages": idiomas dispoñibles. A clave (gl, en, es, pt…) é o código
       que se usa en toda a web e no selector; o valor é o nome que se amosa.
     - "defaultLang": idioma por defecto (o que se usa se falta unha tradución
       ou se o navegador non coincide con ningún dispoñible).
     - Cada texto traducible é un obxecto { gl: "…", en: "…" }. Se un campo é
       un texto normal (sen chaves de idioma), amósase igual en todos os
       idiomas (útil para nomes propios, cánticos, etc.).
     - Para ENGADIR UN IDIOMA: engade a súa clave en "languages", engade a súa
       columna en "strings" e a súa chave en cada campo traducido. O que
       falte cae automaticamente ao "defaultLang".
     ========================================================================== */

  languages: {
    gl: "Galego",
    en: "English",
  },
  defaultLang: "gl",

  /* Textos da INTERFACE (botóns, navegación, avisos). */
  strings: {
    gl: {
      shareOn:       "Compartir en",
      copyLink:      "Copiar ligazón",
      copy:          "Copiar",
      share:         "Compartir",
      shareEllipsis: "Compartir…",
      shareCta:      "Comparte",
      side_infamia:  "Infamia",
      side_dignidade:"Dignidade",
      side_info:     "Info",
      navStart:      "Inicio",
      navEnd:        "Final",
      navStep:       "Paso",
      goTo:          "Ir a",
      swipe:         "Desliza",
      startAria:     "Comezar a cronoloxía",
      backTop:       "↑ Volver ao inicio",
      legal:         "Aviso legal",
      copied:        "Ligazón copiada ✓",
      copyManual:    "Copia manual:",
      usGhost:       "NÓS",
      railNav:       "Navegación do timeline",
      socialAria:    "Compartir en redes",
      langAria:      "Idioma",
    },
    en: {
      shareOn:       "Share on",
      copyLink:      "Copy link",
      copy:          "Copy",
      share:         "Share",
      shareEllipsis: "Share…",
      shareCta:      "Share",
      side_infamia:  "Infamy",
      side_dignidade:"Dignity",
      side_info:     "Info",
      navStart:      "Start",
      navEnd:        "End",
      navStep:       "Step",
      goTo:          "Go to",
      swipe:         "Swipe",
      startAria:     "Start the timeline",
      backTop:       "↑ Back to start",
      legal:         "Legal notice",
      copied:        "Link copied ✓",
      copyManual:    "Copy manually:",
      usGhost:       "US",
      railNav:       "Timeline navigation",
      socialAria:    "Share on social media",
      langAria:      "Language",
    },
  },

  config: {
    name: {
      gl: "Respecto para o Deportivismo",
      en: "Respect for Deportivismo",
    },
    // Cántico: mantense igual en todos os idiomas.
    tagline: "Maratón Solución!",
    intro: {
      gl: "O Deportivo regresou a Primeira acompañado por unha afección que nunca o abandonou. Esta é a cronoloxía de como, en poucas semanas, unha sucesión de decisións rompeu esa comuñón.",
      en: "Deportivo returned to the top flight backed by supporters who never abandoned it. This is the timeline of how, in just a few weeks, a string of decisions broke that bond.",
    },

    // Compartir en redes:
    shareUrl: "#",
    shareText: {
      gl: "Respecto para o Deportivismo.",
      en: "Respect for Deportivismo.",
    },

    // Pantalla final:
    outro_title: {
      gl: "Respecto para o Deportivismo",
      en: "Respect for Deportivismo",
    },
    outro_body: {
      gl: "Os seareiros non pedimos privilexios. Pedimos respecto, diálogo e unha solución ao conflito. O Deportivo chegou ata aquí coa súa xente. Sigamos xuntos!!",
      en: "Supporters are not asking for privileges. We ask for respect, dialogue and a solution to the conflict. Deportivo got here with its people. Let's stay together!!",
    },
    outro_cta: {
      gl: "Comparte",
      en: "Share",
    },
  },

  steps: [
    {
      date: { gl: "Marzo de 2026", en: "March 2026" },
      year: "2026",
      side: "info",
      kicker: {
        gl: "Antecedentes: a transformación do estadio",
        en: "Background: the transformation of the stadium",
      },
      title: {
        gl: "O club acelera os cambios cara ao modelo hospitality",
        en: "The club accelerates the shift to the hospitality model",
      },
      body: {
        gl: "Inaugúranse novas zonas exclusivas dentro de Riazor, como Club Riazor ou Bar Bruma, e refórzase a oferta VIP xa existente. Nos meses seguintes o club continúa ampliando este modelo, con máis espazos premium e novas reformas previstas no estadio.",
        en: "New exclusive areas open inside Riazor, such as Club Riazor and Bar Bruma, and the existing VIP offer is expanded. In the following months the club keeps growing this model, with more premium spaces and further refurbishments planned for the stadium.",
      },
      image: "img/hospitality.webp",
      source: {
        label: { gl: "Comunicado do RC Deportivo", en: "RC Deportivo statement" },
        url: "https://www.rcdeportivo.es/gl/noticias/o-rc-deportivo-aumenta-a-sua-oferta-hospitality-en-abanca-riazor-con-novos-espazos-exclusivos"
      },
    },

    {
      date: { gl: "24 de maio de 2026", en: "24 May 2026" },
      year: "2026",
      side: "dignidade",
      kicker: {
        gl: "O punto de partida",
        en: "The starting point",
      },
      title: {
        gl: "O Dépor volve a Primeira a carón da súa xente",
        en: "Dépor returns to the top flight alongside its people",
      },
      body: {
        gl: "O Dépor certifica o ascenso oito anos despois de abandonar a máxima categoría. Faino acompañado por milleiros de deportivistas e cunha masa social que sostivo o club mesmo nos anos de Primeira Federación.",
        en: "Dépor seals promotion eight years after dropping out of the top division. It does so backed by thousands of deportivistas and a membership that sustained the club even through its years in Primera Federación.",
      },
      image: "img/ascenso.webp",
      source: {
        label: { gl: "Comunicado do RC Deportivo", en: "RC Deportivo statement" },
        url: "https://www.rcdeportivo.es/es/noticias/doblete-de-bil-en-el-estadio-jose-zorrilla-para-dar-los-3-puntos-decisivos-al-depor"
      },
    },

    {
      date: { gl: "Xuño de 2026", en: "June 2026" },
      year: "2026",
      side: "infamia",
      kicker: {
        gl: "O RC Deportivo rompe coa súa masa social",
        en: "RC Deportivo breaks with its own supporters",
      },
      title: {
        gl: "O club criminaliza a celebración do ascenso",
        en: "The club criminalises the promotion celebration",
      },
      body: {
        gl: "Miles de deportivistas saltan ao campo na festa final polo ascenso en Riazor. O club responde cun duro comunicado sobre os «actos vandálicos» e ameaza con medidas disciplinarias, económicas e administrativas. Para moitos seareiros é o primeiro sinal dun cambio de relación coa bancada.",
        en: "Thousands of deportivistas spill onto the pitch during the promotion celebration at Riazor. The club responds with a harsh statement about “acts of vandalism” and threatens disciplinary, financial and administrative measures. For many fans it is the first sign of a changing relationship with the stands.",
      },
      image: "img/invasion.webp",
      source: {
        label: { gl: "Comunicado do RC Deportivo", en: "RC Deportivo statement" },
        url: "https://www.rcdeportivo.es/gl/noticias/el-rc-deportivo-condena-los-actos-vandalicos-ocurridos-en-abanca-riazor"
      },
    },

    {
      date: { gl: "Xullo de 2026", en: "July 2026" },
      year: "2026",
      side: "infamia",
      kicker: {
        gl: "Persecución arbitraria a Maratón",
        en: "Arbitrary crackdown on Maratón",
      },
      title: {
        gl: "O RC Deportivo impón condicións de excepción en Maratón",
        en: "RC Deportivo imposes exceptional conditions on Maratón",
      },
      body: {
        gl: "Un día antes da campaña de abonos, os socios de Maratón Inferior reciben once condicións excepcionais para renovar: identificación nominativa, restricións á cesión do carné, límites sobre mensaxes e simboloxía e a posibilidade de perder a condición de abonado da grada. Case 4.000 persoas quedan sometidas a un réxime diferente ao resto de Riazor.",
        en: "One day before the season-ticket campaign, members of Maratón Inferior are handed eleven exceptional conditions to renew: named identification, restrictions on transferring the pass, limits on messages and symbols, and the possibility of losing their season-ticket status in the stand. Nearly 4,000 people are placed under a different regime from the rest of Riazor.",
      },
      image: "img/preso.webp",
      source: {
        label: { gl: "Riazor.org", en: "Riazor.org" },
        url: "https://www.riazor.org/marathon-inferior-explica-deportivo-nuevas-condiciones-abono/"
      },
    },

    {
      date: { gl: "Xullo de 2026", en: "July 2026" },
      year: "2026",
      side: "infamia",
      kicker: {
        gl: "O enfado esténdese",
        en: "The anger spreads",
      },
      title: {
        gl: "Masiva subida no prezo dos abonos",
        en: "Sweeping rise in season-ticket prices",
      },
      body: {
        gl: "A campaña do regreso a Primeira chega cun incremento medio do 41,4 %, con zonas nas que a subida supera o 60 %. Engádese ademais o «compromiso de asistencia». O malestar esténdese ao entenderse que non se ten en conta a fidelidade demostrada durante os anos máis difíciles.",
        en: "The top-flight-return campaign arrives with an average increase of 41.4%, with areas where the rise tops 60%. An “attendance commitment” is added on top. Discontent spreads as fans feel the loyalty shown through the hardest years is being ignored.",
      },
      image: "img/ticket.webp",
      source: {
        label: { gl: "Comunicado do RC Deportivo", en: "RC Deportivo statement" },
        url: "https://www.rcdeportivo.es/gl/noticias/o-teu-lugar-en-primeira-los-nuevos-abonos-del-depor-para-vivir-el-regreso-a-laliga-ea-sports-en"
      },
    },

    {
      date: { gl: "Xullo de 2026", en: "July 2026" },
      year: "2026",
      side: "dignidade",
      kicker: {
        gl: "O comezo da mobilización",
        en: "The mobilisation begins",
      },
      title: {
        gl: "Centos de persoas reúnense en asemblea",
        en: "Hundreds gather in an assembly",
      },
      body: {
        gl: "O club revela que chegou a propoñer prezos reducidos a unha parte de Maratón a cambio de aceptar o novo réxime de condicións. Riazor Blues rexéitao. O 9 de xullo centos de seareiros reúnense xunto á Torre de Maratón e denuncian unha «presunción de culpabilidade».",
        en: "The club reveals it had offered reduced prices to part of Maratón in exchange for accepting the new set of conditions. Riazor Blues rejects it. On 9 July hundreds of supporters gather by the Torre de Maratón and denounce a “presumption of guilt.”",
      },
      image: "img/torre-de-maraton.webp",
      source: {
        label: { gl: "DXT Campeón", en: "DXT Campeón" },
        url: "https://dxtcampeon.elidealgallego.com/deportivo/2026-07-09/convocan-una-manifestacion-contra-las-nuevas-normas-para-ser-socio-del-deportivo-en-marathon-inferior-867025.html"
      },
    },

    {
      date: { gl: "Xullo de 2026", en: "July 2026" },
      year: "2026",
      side: "infamia",
      kicker: {
        gl: "O RC Deportivo rompe coa Federación de Peñas",
        en: "RC Deportivo breaks with the Supporters' Federation",
      },
      title: {
        gl: "O club non renova o convenio coa Federación de Peñas",
        en: "The club does not renew its agreement with the Supporters' Federation",
      },
      body: {
        gl: "En pleno conflito, o club anuncia que non prorrogará o acordo vixente desde 2017 e que quere negociar un novo marco. A revisión pode ter sentido, pero facelo no medio do pulso é percibido como unha nova escalada contra a afección organizada.",
        en: "In the middle of the conflict, the club announces it will not extend the agreement in force since 2017 and wants to negotiate a new framework. A review may make sense, but doing it in the heat of the standoff is seen as a fresh escalation against organised supporters.",
      },
      image: "img/romper.webp",
      source: {
        label: { gl: "Diario AS", en: "Diario AS" },
        url: "https://as.com/futbol/primera/sigue-el-pulso-el-depor-no-renovara-el-convenio-con-las-penas-f202607-n/"
      },
    },

    {
      date: { gl: "Xullo de 2026", en: "July 2026" },
      year: "2026",
      side: "dignidade",
      kicker: {
        gl: "Primeira mobilización",
        en: "First march",
      },
      title: {
        gl: "O conflito chega á sede de ABANCA",
        en: "The conflict reaches ABANCA's headquarters",
      },
      body: {
        gl: "Unha manifestación percorre A Coruña desde a Praza de Pontevedra ata a sede de ABANCA. A protesta xa non se dirixe só contra as condicións de Maratón: comeza a cuestionarse abertamente a política da propiedade e da dirección do club.",
        en: "A demonstration crosses A Coruña from Praza de Pontevedra to ABANCA's headquarters. The protest is no longer aimed only at the Maratón conditions: the policy of the club's ownership and board begins to be openly questioned.",
      },
      image: "img/mobilizacion.avif",
      source: {
        label: { gl: "Diario AS", en: "Diario AS" },
        url: "https://as.com/futbol/primera/protesta-masiva-de-las-penas-contra-el-deportivo-ante-la-sede-de-abanca-f202607-n/"
      },
    },

    {
      date: { gl: "Agosto de 2026", en: "August 2026" },
      year: "2026",
      side: "infamia",
      kicker: {
        gl: "Genoa - Deportivo",
        en: "Genoa – Deportivo",
      },
      title: {
        gl: "Un comunicado polémico en pleno conflito",
        en: "A controversial statement in the middle of the conflict",
      },
      body: {
        gl: "Na véspera do amigable contra o Genoa, ultras locais emboscan afeccionados deportivistas no centro da cidade, segundo a prensa italiana e a investigación policial. Poucas horas despois, o club marca distancias cos seus propios seguidores e abre a porta a sancións, reforzando a sensación de criminalización.",
        en: "On the eve of the friendly against Genoa, local ultras ambush Deportivo fans in the city centre, according to the Italian press and the police investigation. A few hours later, the club distances itself from its own supporters and opens the door to sanctions, reinforcing the sense of criminalisation.",
      },
      image: "",
      source: {
        label: { gl: "Comunicado do RC Deportivo", en: "RC Deportivo statement" },
        url: "https://www.rcdeportivo.es/gl/noticias/comunicado-oficial-del-rc-deportivo-8"
      },
    },

    {
      date: { gl: "Agosto de 2026", en: "August 2026" },
      year: "2026",
      side: "dignidade",
      kicker: {
        gl: "Teresa Herrera, de volta en Riazor",
        en: "Teresa Herrera, back at Riazor",
      },
      title: {
        gl: "Maratón queda baleira e a crise xa non se pode ocultar",
        en: "Maratón empties and the crisis can no longer be hidden",
      },
      body: {
        gl: "Federación de Peñas, Old Faces e Riazor Blues piden aos socios de Maratón Inferior que non entren contra o Real Madrid nin liberen a súa localidade. A bancada aparece practicamente baleira e desaparece a animación habitual. O club anuncia unha asistencia de 28.789 persoas.",
        en: "Federación de Peñas, Old Faces and Riazor Blues ask Maratón Inferior members not to attend against Real Madrid nor release their seats. The stand appears almost empty and the usual atmosphere disappears. The club announces an attendance of 28,789.",
      },
      image: "img/teresa-herrera.avif",
      source: {
        label: { gl: "Diario AS", en: "Diario AS" },
        url: "https://as.com/futbol/primera/la-protesta-de-las-penas-del-deportivo-vacia-maraton-inferior-f202608-n/"
      },
    },

    {
      date: { gl: "Agosto de 2026", en: "August 2026" },
      year: "2026",
      side: "dignidade",
      kicker: {
        gl: "Dépor - Elxe. Cárcere Maratón",
        en: "Dépor – Elche. Maratón prison",
      },
      title: {
        gl: "Masiva protesta no regreso da Liga",
        en: "Mass protest as the league returns",
      },
      body: {
        gl: "Federación de Peñas, Old Faces e Riazor Blues chaman a vestir de laranxa, empregando a imaxe dos presos de Guantánamo. A protesta esténdese por Riazor e o estadio queda practicamente sen animación, agás entre os minutos 40 e 45 con cánticos como «Maratón solución» ou «Dépor si, ABANCA non».",
        en: "Federación de Peñas, Old Faces and Riazor Blues call on fans to wear orange, echoing the image of the Guantánamo prisoners. The protest spreads across Riazor and the stadium is left almost without atmosphere, except between minutes 40 and 45 with chants such as “Maratón solución” or “Dépor sí, ABANCA no.”",
      },
      image: "img/laranxa.webp",
      source: {
        label: { gl: "La Opinión A Coruña", en: "La Opinión A Coruña" },
        url: "https://www.laopinioncoruna.es/deportivo/2026/08/18/marea-naranja-invade-riazor-deportivo-133442417.html"
      },
    },

    {
      date: { gl: "Agosto de 2026", en: "August 2026" },
      year: "2026",
      side: "infamia",
      kicker: {
        gl: "Censura a xogadores e ataques á afección",
        en: "Censorship of players and attacks on fans",
      },
      title: {
        gl: "O club impide preguntar aos xogadores",
        en: "The club blocks a question to its players",
      },
      body: {
        gl: "Tras o Dépor-Elxe, o xefe de prensa impide que Ximo Navarro responda a unha pregunta sobre a falta de animación, feito criticado polas asociacións de xornalistas. Horas despois, o club denuncia «insultos e presións» aos xogadores e anuncia medidas xurídicas sen achegar publicamente probas nese momento.",
        en: "After Dépor–Elche, the press officer stops Ximo Navarro from answering a question about the lack of atmosphere, a move criticised by journalists' associations. Hours later, the club reports “insults and pressure” against its players and announces legal measures without publicly providing evidence at the time.",
      },
      image: "img/ximo-navarro.webp",
      source: {
        label: { gl: "Comunicado do RC Deportivo", en: "RC Deportivo statement" },
        url: "https://www.rcdeportivo.es/gl/noticias/el-rc-deportivo-condena-insultos-y-presiones-dirigidos-a-sus-jugadores-y-adopta-medidas-para"
      },
    },

    {
      date: { gl: "Agosto de 2026", en: "August 2026" },
      year: "2026",
      side: "dignidade",
      kicker: {
        gl: "A pausada e digna resposta",
        en: "The calm and dignified response",
      },
      title: {
        gl: "As peñas negan intimidacións e esixen falar con Benassi",
        en: "The supporters' groups deny intimidation and demand to speak with Benassi",
      },
      body: {
        gl: "Federación de Peñas, Old Faces e Riazor Blues negan ter insultado ou intimidado os futbolistas e lembran que sempre separaron os xogadores dos responsables institucionais do conflito. Reclaman unha mesa de diálogo inmediata e ao máximo nivel con Massimo Benassi.",
        en: "Federación de Peñas, Old Faces and Riazor Blues deny having insulted or intimidated the players and recall that they always separated the footballers from those institutionally responsible for the conflict. They demand an immediate, top-level dialogue with Massimo Benassi.",
      },
      image: "img/acordo.webp",
      source: {
        label: { gl: "Comunicado de Riazor Blues", en: "Riazor Blues statement" },
        url: "https://x.com/RB1987Oficial/status/2089812426560532690"
      },
    }
  ],

};
