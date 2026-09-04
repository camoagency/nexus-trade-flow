# Bildnachweise

Alle Fotos stammen von **Unsplash** und werden lokal gehostet. Es gibt keine Hotlinks auf fremde
Domains. Lizenz jeweils: **Unsplash License, kommerzielle Nutzung erlaubt, keine Namensnennung
erforderlich** (<https://unsplash.com/license>).

Fotografennamen sind eingetragen, wo sie automatisch ermittelbar waren. Leere Felder koennen
manuell nachgetragen werden; die Foto-ID fuehrt ueber
`https://unsplash.com/photos/FOTO-ID` zur Quelle.

Jedes Bild liegt als AVIF, WebP und JPEG in 640, 1280 und 1920 px vor, Seitenverhaeltnis 16:9.
Die Originale liegen unter `assets/img/src/` und werden nicht mit ausgeliefert.

## Verwendete Bilder

| Datei | Einsatzort | Foto-ID | Fotograf |
|---|---|---|---|
| `pages/trading-1-*` | Startseite Hero, Reiter Trading, zugleich Trading-Seite Bild 1 (LCP) | `BD-sOzGXx38` | |
| `pages/trading-2-*` | Trading-Seite, Bild 2 | `HNsytirZYQg` | |
| `pages/trading-3-*` | Trading-Seite, Bild 3 | `sNfyJAYZXE4` | |
| `pages/export-1-*` | Startseite Hero, Reiter Export, zugleich Export-Seite Bild 1 | `OZ-ShyxzZwI` | |
| `pages/export-2-*` | Export-Seite, Bild 2 | `pXIlqK9fas8` | |
| `pages/export-3-*` | Export-Seite, Bild 3 | `STvf_khOqxk` | |
| `pages/import-1-*` | Startseite Hero, Reiter Import, zugleich Import-Seite Bild 1 | `QE8AaETiswU` | Virginia Marinova |
| `pages/import-2-*` | Import-Seite, Bild 2 | `fN603qcEA7g` | CHUTTERSNAP |
| `pages/import-3-*` | Import-Seite, Bild 3 | `kyCNGGKCvyw` | CHUTTERSNAP |
| `pages/logistics-1-*` | Startseite Hero, Reiter Logistics, zugleich Logistics-Seite Bild 1 | `ZhNYKwjRMh4` | |
| `pages/logistics-2-*` | Logistics-Seite, Bild 2 | `EmEQ6kK_5P0` | |
| `pages/logistics-3-*` | Logistics-Seite, Bild 3 | `3jG-UM8IZ40` | |

## Reserve

Geladen, aber nicht eingebunden. Liegen unter `assets/img/src/`.

| Datei | Foto-ID | Fotograf |
|---|---|---|
| `hero-1_9cCeS9Sg6nU.jpg` | `9cCeS9Sg6nU` | CHUTTERSNAP |
| `hero-3_0A7YwYhZhWw.jpg` | `0A7YwYhZhWw` | Bent Van Aeken |

## Marken im Bild

Geprueft nach Abschnitt 6.5 des Briefings. Beilaeufige Markenerscheinungen sind zulaessig,
dominante nicht. Der groesste Schriftzug im gesamten Bestand ist MAERSK in `import-3`
mit rund 5,5 Prozent der Bildbreite, gefolgt von K LINE mit rund 4 Prozent und HMM mit
rund 3 Prozent. In `import-2` stehen PSA und COSCO, in `logistics-3` SCANIA auf dem
Kuehlergrill, in `export-1` MASSEY FERGUSON auf der Ballenpresse. Keiner dieser Namen praegt
den Bildeindruck.

## Regeln fuer den Austausch von Bildern

1. Nur Bilder mit gueltiger kommerzieller Lizenz verwenden.
2. Kein erkennbares Gesicht. Keine KI-Bilder mit typischen Artefakten.
3. Kein Firmenname, der den Bildeindruck praegt oder eine Partnerschaft nahelegt.
4. Bild herunterladen und unter `assets/img/src/` ablegen, niemals von fremder Domain einbinden.
5. Den Dateinamen in `tools/build-images.mjs` eintragen und `node tools/build-images.mjs` ausfuehren.
6. Diese Tabelle mitpflegen.
