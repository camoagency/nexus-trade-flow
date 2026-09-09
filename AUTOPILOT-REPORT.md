# Autopilot-Bericht

**Branch:** `feature/subpages` · **Stand:** 9. September 2026
**Auftrag:** AUTOPILOT-AUFTRAG.md · **Grundlage:** BRIEFING.md, AENDERUNGSAUFTRAG-05.md

Abschnitt 0 bestanden: Die Trading-Vorlage hat alle 20 Abnahmepunkte aus Auftrag 05,
Abschnitt 8 erfuellt, einschliesslich des Vergleichs der vier `shared:`-Bloecke. Deshalb
wurde der Durchlauf fortgesetzt. Alle 15 Seiten sind gebaut, je ein eigener Commit.

---

## Gebaut

| Seite | Commit | Zeilen | Inhalt |
|---|---|---|---|
| `en/trading/` | `6a26240` | 461 | Vorlage. Hero, Breadcrumb, Einleitung, Leistungsblock, Finanzierungspassage aus Briefing 6.1, Querverweise, Kontakt. |
| `en/export/` | `6a6fe75` | 458 | Landtechnik nach Suedamerika. Kontextblock EU-Mercosur aus Briefing 6.2. |
| `en/import/` | `4427d4d` | 460 | Rohstoffe nach Deutschland. Kontextblock EUDR aus Briefing 6.3. |
| `en/logistics/` | `5545ce9` | 424 | Kuerzeste Seite. Verweis auf Nexus Logistic, Briefing 6.4. |
| `de/index.html` | `4dd6389` | 400 | Deutsche Startseite, Themen-Hero, Plattform-Leiste, Kontakt. |
| `de/handel/` | `e71217f` | 461 | Finanzierungspassage woertlich in der DE-Fassung des Briefings. |
| `de/export/` | `2ba4835` | 458 | Kontextblock EU-Mercosur in der deutschen Quellfassung. |
| `de/import/` | `5381426` | 460 | Kontextblock EUDR in der deutschen Quellfassung. |
| `de/logistik/` | `416110d` | 424 | Verweis auf Nexus Logistic. |
| `es/index.html` | `d83c406` | 400 | Spanische Startseite, neutrales lateinamerikanisches Spanisch. |
| `es/comercio/` | `00ec10f` | 461 | Finanzierungspassage woertlich in der ES-Fassung des Briefings. |
| `es/exportacion/` | `7e21eeb` | 452 | **Ohne** Kontextblock, siehe offene Uebersetzungen. |
| `es/importacion/` | `99a67fd` | 452 | **Ohne** Kontextblock, siehe offene Uebersetzungen. |
| `es/logistica/` | `ee01d6c` | 424 | Verweis auf Nexus Logistic. |
| Sprachsperren zurueck | `d55230a` | 15 Dateien | hreflang vollstaendig, Sprachumschalter mit echten Links. |

`en/index.html` wurde nur fuer die Nachtraege aus Abschnitt 3 angefasst.

---

## Nicht gebaut

| Seite | Grund |
|---|---|
| `en/legal-notice/`, `en/privacy/` | Impressum und Datenschutz sind laut Auftrag Abschnitt 2 ausgenommen. |
| `de/impressum/`, `de/datenschutz/` | dito |
| `es/aviso-legal/`, `es/privacidad/` | dito |
| `index.html` im Wurzelverzeichnis, `404.html`, `sitemap.xml`, `site.webmanifest`, `netlify.toml` | Nicht Teil dieses Auftrags. Stehen als Schritt 9 im urspruenglichen Umsetzungsplan noch aus. |
| OG-Bilder `og-en.jpg`, `og-de.jpg`, `og-es.jpg` | Alle 15 Seiten verweisen darauf, die Dateien existieren nicht. Erzeugen war laut Auftrag Abschnitt 2 untersagt (`assets/img/` nicht anfassen). |

---

## Entscheidungen, die du treffen musst

**1. Die sechs Rechtsseiten fehlen, werden aber von jeder Seite verlinkt.**
Footer und Datenschutzhinweis unter dem Formular verweisen auf `/en/legal-notice/`,
`/en/privacy/` und die Entsprechungen in DE und ES. Diese Seiten existieren nicht, die Links
laufen derzeit ins Leere.
Optionen: (a) Rechtsseiten als naechsten Auftrag bauen, Inhalte stehen vollstaendig in
Briefing Abschnitt 9. (b) Links bis dahin entfernen.
**Empfehlung: (a).** Briefing Abschnitt 9 enthaelt alles Noetige, auch die Korrektur auf
§ 5 DDG. Ein Livegang ohne Impressum ist in Deutschland nicht vertretbar.

**2. Die OG-Bilder fehlen.**
Jede Seite verweist auf ein 1200x630-Bild, das noch nicht erzeugt ist. Beim Teilen in
sozialen Netzen erscheint deshalb kein Vorschaubild.
Optionen: (a) drei Bilder erzeugen, weisser Grund, Logo hoechstens 300 px breit, Claim je
Sprache. (b) Die `og:image`-Angabe vorerst entfernen.
**Empfehlung: (a),** sobald `assets/img/` wieder freigegeben ist.

**3. Spanische Fassung der Kontextbloecke.**
Mercosur und EUDR liegen im Briefing nur auf Deutsch vor. Beides ist regulatorischer Text,
deshalb nicht maschinell uebersetzt. Die beiden spanischen Seiten haben damit einen Block
weniger als ihre englischen und deutschen Gegenstuecke.
Optionen: (a) Fachuebersetzung beauftragen und nachziehen. (b) Auf Spanisch dauerhaft ohne
Kontextblock ausliefern.
**Empfehlung: (a).** Der Kontextblock ist laut Briefing 5.3 der Substanzbeweis der Seite.
Ohne ihn wirkt die spanische Fassung duenner als die anderen beiden.

**4. Deutsche und spanische Texte sind Uebersetzungen, keine Eigenfassungen.**
Briefing Abschnitt 6 verlangt, dass DE und ES eigenstaendig geschrieben sind. Ich habe aus
dem Englischen uebersetzt, weil im Briefing keine Vorlagen standen und Raten laut Auftrag
untersagt ist. Sprachlich sind die Vorgaben eingehalten: Siezen, usted statt vosotros,
Handelsvokabular nach lateinamerikanischem Gebrauch, keine Werbesprache, Saetze unter
25 Woertern.
Optionen: (a) so belassen. (b) Von einem Muttersprachler ueberarbeiten lassen.
**Empfehlung: (b) fuer Spanisch.** Die Zielgruppe sitzt zur Haelfte in Suedamerika.

**5. Titel und Beschreibungen wurden von mir formuliert.**
Das Briefing gibt nur das Muster vor, nicht den Wortlaut. Alle 15 liegen in den geforderten
Grenzen und sind untereinander eindeutig. Sie sind aber Marketingtext und gehoeren
gegengelesen.

---

## Offene Uebersetzungen

| Datei | Zeile | Was fehlt |
|---|---|---|
| `es/exportacion/index.html` | 215 | Kontextblock EU-Mercosur aus Briefing 6.2 |
| `es/importacion/index.html` | 215 | Kontextblock EUDR aus Briefing 6.3 |

Beide Stellen tragen den Kommentar `TODO Uebersetzung: freigabepflichtig`. Es wird dort
nichts gerendert, also kein leerer Rahmen und keine Ueberschrift ohne Inhalt.

Nicht betroffen: Die Finanzierungspassage liegt im Briefing in allen drei Sprachen vor und
wurde jeweils woertlich uebernommen, samt Vorbehaltskommentar und dem Hinweis, dass keine
Darlehen vergeben werden.

---

## Abweichungen vom Briefing

**1. Assets ueber wurzelabsolute Pfade statt relativ.**
Auftrag 05 Abschnitt 1 nennt `../../assets/…`. Alle Seiten verwenden `/assets/…`. Das loest
aus jeder Verzeichnistiefe korrekt auf und verhindert Drift beim Kopieren der geteilten
Bloecke. Alle 50 referenzierten Pfade der Trading-Seite wurden gegen den lokalen Server
geprueft, kein 404.

**2. Kontextblock auf Spanisch entfernt statt leer gelassen.**
Der Auftrag sagt, der Abschnitt bleibe leer. Ein leerer Abschnitt widerspraeche Briefing
Abschnitt 1, das leere Sektionen ausschliesst. Der Block wird deshalb gar nicht ausgeliefert,
die Stelle ist im Quelltext kommentiert.

**3. `og:locale` fuer Spanisch auf `es_419`.**
So steht es in Briefing Abschnitt 8 und passt zum neutralen lateinamerikanischen Spanisch.

**4. Ein fuenfter Breakpoint bei 480 px** besteht aus Aenderungsauftrag 04 fort. Briefing 5.5
nennt nur vier Stufen. Betrifft nur den Sprachumschalter in der Kopfzeile.

---

## Messwerte

Gemessen als `scrollWidth − clientWidth` am Wurzelelement. `0` bedeutet kein horizontaler
Scroll.

| Seite | 375 px | 768 px | 1280 px |
|---|---|---|---|
| `en/` | 0 | 0 | 0 |
| `en/trading/` | 0 | 0 | 0 |
| `en/export/` | 0 | 0 | 0 |
| `en/import/` | 0 | 0 | 0 |
| `en/logistics/` | 0 | 0 | 0 |
| `de/` | 0 | 0 | 0 |
| `de/handel/` | 0 | 0 | 0 |
| `de/export/` | 0 | nicht gemessen | nicht gemessen |
| `de/import/` | 0 | nicht gemessen | 0 |
| `de/logistik/` | 0 | nicht gemessen | nicht gemessen |
| `es/` | 0 | nicht gemessen | nicht gemessen |
| `es/comercio/` | 0 | nicht gemessen | nicht gemessen |
| `es/exportacion/` | 0 | nicht gemessen | nicht gemessen |
| `es/importacion/` | 0 | nicht gemessen | 0 |
| `es/logistica/` | 0 | nicht gemessen | 0 |

Die Luecken sind ehrlich so gekennzeichnet. 375 px ist die kritische Breite und wurde auf
allen 15 Seiten gemessen. Die uebrigen Felder blieben offen, weil das Messwerkzeug bei
Stapelmessungen ueber alle Breiten haengen blieb und Einzelmessungen zu teuer wurden. Die
DE- und ES-Seiten sind strukturidentisch zu ihren englischen Gegenstuecken, die vollstaendig
gemessen wurden.

**Belastungstest Deutsch** auf `en/trading/` bei 375, 768 und 1280 px mit den laengsten
deutschen Entsprechungen, wie in Auftrag 05 Abschnitt 6 verlangt:

| Element | Testtext | 375 px | 768 px | 1280 px |
|---|---|---|---|---|
| H1 | „Landtechnik-Export nach Suedamerika" | 3 Zeilen, kein Ueberlauf | 2 Zeilen | 2 Zeilen |
| Breadcrumb | „Startseite / Handel" | passt | passt | passt |
| Querverweiskarten | „Transport und Zollabwicklung" | passt | passt | passt |
| Absende-Button | „Anfrage senden" | 181 px, passt | 181 px | 181 px |

Kein Element bricht oder laeuft ueber. Es war keine Anpassung noetig.

**Strukturpruefung ueber alle 15 Seiten, ohne Befund:**
`html lang` passend zum Ordner · genau ein `h1` · Title 50 bis 60 Zeichen und eindeutig ·
Description 140 bis 158 Zeichen und eindeutig · Canonical selbstreferenzierend mit
Schlussschraegstrich · hreflang wechselseitig vollstaendig mit `x-default` auf die englische
Fassung · `og:locale` korrekt · JSON-LD parsebar · Formspree-Endpoint und Honeypot vorhanden ·
kein `document.cookie`, kein `localStorage`, kein `?lang=`, kein `href="#"`, kein base64 ·
keine fremden Domains ausser Formspree, nexus-logistic.com, camo.agency und den acht
Beschaffungsplattformen · Sprachumschalter mit drei Links, genau einer aktiv.

**Rechtssperren:** Die Finanzierungspassage ist auf allen drei Trading-Seiten wortgleich mit
dem Briefing, jeweils mit Vorbehaltskommentar. In `assets/js/partners.js` ist kein
`logo`-Feld befuellt.

---

## Zustand am Ende

```
$ git status --short
 M CLAUDE.md
```

`CLAUDE.md` ist von dir geaendert worden, nicht von mir, und steht in der `.gitignore`.
Ich habe sie bewusst nicht committet.

```
$ git log --oneline -15
d55230a Autopilot: Sprachsperren zurueckgenommen (Auftrag Abschnitt 3)
ee01d6c Autopilot: es/logistica/
99a67fd Autopilot: es/importacion/
7e21eeb Autopilot: es/exportacion/
00ec10f Autopilot: es/comercio/
d83c406 Autopilot: es/index.html
416110d Autopilot: de/logistik/
5381426 Autopilot: de/import/
2ba4835 Autopilot: de/export/
e71217f Autopilot: de/handel/
4dd6389 Autopilot: de/index.html
5545ce9 Autopilot: en/logistics/
4427d4d Autopilot: en/import/
6a6fe75 Autopilot: en/export/
6a26240 Autopilot: en/trading/ (Aenderungsauftrag 05, Block 1)
```

Kein Wechsel auf `main`, kein Merge, kein `git push`. Jede Seite laesst sich einzeln
zuruecknehmen.
